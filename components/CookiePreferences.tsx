"use client";

import { type Consent, useConsent, writeConsent } from "@/lib/consent";

const LABELS: Record<Consent, string> = {
  accepted: "Analytics are on for this browser.",
  declined: "Analytics are off for this browser.",
  unset: "You haven't made a choice yet — analytics are on by default.",
};

/**
 * Standing control for the analytics decision, embedded in the privacy policy.
 *
 * The banner appears once and never returns, so before this there was no way
 * to change your mind after clicking either button. A policy that describes a
 * choice should also be the place you can exercise it.
 */
export default function CookiePreferences() {
  const consent = useConsent();

  // null until the client takes over — the decision lives in localStorage.
  if (consent === null) return null;

  return (
    <div className="not-prose my-8 border border-border bg-cream-alt p-6">
      <p className="text-[13.5px] text-earth leading-relaxed" role="status" aria-live="polite">
        {LABELS[consent]}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => writeConsent("accepted")}
          disabled={consent === "accepted"}
          className="inline-flex items-center justify-center px-5 py-2.5 text-[11px] font-medium bg-bark text-cream transition-colors hover:bg-earth disabled:cursor-default disabled:opacity-40 disabled:hover:bg-bark"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => writeConsent("declined")}
          disabled={consent === "declined"}
          className="inline-flex items-center justify-center px-5 py-2.5 text-[11px] font-medium border border-bark/30 text-bark transition-colors hover:bg-stone disabled:cursor-default disabled:opacity-40 disabled:hover:bg-transparent"
        >
          Turn analytics off
        </button>
      </div>
    </div>
  );
}
