// Shared cookie-consent state. The banner writes it, the analytics loader
// reads it, and both agree on the storage key and the custom event that
// signals a change within the current tab (the native `storage` event only
// fires in OTHER tabs, so an in-tab click needs its own notification).

import { useSyncExternalStore } from "react";

export const CONSENT_KEY = "yardie-cookie-consent";
export const CONSENT_EVENT = "yardie:consent-change";

export type Consent = "accepted" | "declined" | "unset";

/** Reads the stored decision. Returns "unset" when the visitor hasn't chosen
 *  — or when storage is unavailable (private mode, blocked cookies). */
export function readConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "declined" ? v : "unset";
  } catch {
    return "unset";
  }
}

/** GA4 measurement ID. Kept here because both the loader and the revoke path
 *  need it, and they must never disagree. */
export const GA_ID = "G-YDYJW9TM6K";

/**
 * Stops Google Analytics collecting and clears the cookies it already set.
 *
 * Unmounting the <Script> tag isn't enough on its own: gtag.js is already
 * executing and has already written `_ga`. Declining has to actually undo
 * that, or the banner is still making a promise the site doesn't keep.
 *
 *   • `ga-disable-<ID>` is GA4's own documented kill switch — it halts every
 *     subsequent hit from the copy that's already running.
 *   • A Consent Mode v2 denial covers any tag that arrives later.
 *   • Expiring the cookies removes the identifier that was already stored.
 *     They're set on the registrable domain, so clearing needs the dotted
 *     form as well as the bare host.
 */
function revokeAnalytics() {
  try {
    (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;

    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push([
      "consent",
      "update",
      {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      },
    ]);

    const host = location.hostname;
    const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
    for (const cookie of document.cookie.split(";")) {
      const name = cookie.split("=")[0]?.trim();
      if (!name || !/^_ga|^_gid|^_gat/.test(name)) continue;
      for (const domain of domains) {
        document.cookie =
          `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` +
          (domain ? `; domain=${domain}` : "");
      }
    }
  } catch {
    /* nothing here is load-bearing for the page */
  }
}

/** Stores the decision and tells listeners in this tab about it. */
export function writeConsent(value: Exclude<Consent, "unset">) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage blocked — the event still fires so the current page reacts */
  }
  if (value === "declined") revokeAnalytics();
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

// ── React binding ───────────────────────────────────────────────────────────

function subscribe(onChange: () => void) {
  // Same-tab changes come through the custom event; other tabs through the
  // native `storage` event, which never fires in the tab that wrote the value.
  const onStorage = (e: StorageEvent) => {
    if (e.key === CONSENT_KEY) onChange();
  };
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/**
 * The decision, as a subscribed value.
 *
 * `null` on the server and through hydration — the choice lives in
 * localStorage, so there is no honest answer until the client takes over.
 * Callers render nothing for `null` rather than guessing and then correcting,
 * which would both mismatch hydration and briefly load tags for someone who
 * had declined.
 */
export function useConsent(): Consent | null {
  return useSyncExternalStore(
    subscribe,
    readConsent,
    () => null,
  );
}
