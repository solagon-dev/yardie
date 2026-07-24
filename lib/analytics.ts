// ===========================================================================
// Privacy-conscious analytics event layer (implementation brief §15)
// ===========================================================================
//
// Yardie has no analytics vendor installed yet (the cookie banner exists, but
// nothing is wired to it). Rather than pick a vendor on the business's behalf,
// this module defines the §15 event taxonomy and the call sites, and forwards
// events to whatever vendor is present at runtime. Connect Plausible, GA4,
// Vercel Analytics, or a dataLayer and events start flowing with no code change.
//
// GUARANTEES
//   • Never sends personal information. §15: "Do not send names, email
//     addresses, phone numbers, addresses, message text, or other personal
//     information to analytics." Event payloads are a closed, typed set of
//     non-identifying values, and `scrub()` strips anything that looks like
//     PII as defence-in-depth if a call site is ever written carelessly.
//   • Honours the cookie banner: nothing is sent unless the visitor chose
//     "Accept" (components/CookieConsent.tsx writes `yardie-cookie-consent`).
//   • Safe on the server and in private mode — every path is guarded.
//   • Silent no-op when no vendor is connected, so it can ship today.

const CONSENT_KEY = "yardie-cookie-consent";

export type FormKind = "consultation" | "contact";

/** Closed event taxonomy — §15. Add cases here rather than passing free-form data. */
export type AnalyticsEvent =
  | { name: "cta_click"; props: { location: string } }
  | { name: "phone_click"; props: { location: string } }
  | { name: "email_click"; props: { location: string } }
  | { name: "form_start"; props: { form: FormKind } }
  | { name: "form_step_complete"; props: { form: FormKind; step: number } }
  /** Field NAMES only — never the values the visitor typed. */
  | { name: "form_validation_failed"; props: { form: FormKind; fields: string[] } }
  | { name: "form_submit_success"; props: { form: FormKind } }
  | { name: "form_submit_failed"; props: { form: FormKind; reason: string } }
  | { name: "case_study_view"; props: { slug: string } }
  | { name: "service_cta"; props: { service: string } }
  | { name: "gallery_engagement"; props: { action: "open_lightbox" | "load_more" } }
  | { name: "outbound_social"; props: { network: string } };

/** Keys that must never reach analytics, even by accident. */
const PII_KEYS = /^(name|firstname|lastname|email|phone|tel|address|street|city|zip|postal|message|vision|comment|notes)$/i;
/** Values that look like an email or a phone number. */
const PII_VALUE = /(@[\w.-]+\.\w{2,})|(\+?\d[\d\s().-]{6,}\d)/;

function scrub(props: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(props)) {
    if (PII_KEYS.test(k)) continue;
    if (typeof v === "string" && PII_VALUE.test(v)) continue;
    out[k] = v;
  }
  return out;
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false; // private mode — fail closed
  }
}

type Win = Window & {
  plausible?: (name: string, opts?: { props?: Record<string, unknown> }) => void;
  gtag?: (cmd: string, name: string, props?: Record<string, unknown>) => void;
  dataLayer?: Record<string, unknown>[];
  va?: (cmd: string, name: string, props?: Record<string, unknown>) => void;
};

/**
 * Record an event. No-ops on the server, without consent, or when no vendor
 * is connected. Never throws — analytics must not break a conversion flow.
 */
export function track(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;

  const props = scrub((event.props ?? {}) as Record<string, unknown>);
  const w = window as Win;

  try {
    if (typeof w.plausible === "function") w.plausible(event.name, { props });
    else if (typeof w.va === "function") w.va("event", event.name, props);
    else if (typeof w.gtag === "function") w.gtag("event", event.name, props);
    else if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event: event.name, ...props });
    // else: no vendor connected — intentionally silent.
  } catch {
    /* analytics must never surface an error to the visitor */
  }
}

/** Convenience wrappers for the most common call sites. */
export const analytics = {
  ctaClick: (location: string) => track({ name: "cta_click", props: { location } }),
  phoneClick: (location: string) => track({ name: "phone_click", props: { location } }),
  emailClick: (location: string) => track({ name: "email_click", props: { location } }),
  formStart: (form: FormKind) => track({ name: "form_start", props: { form } }),
  formStep: (form: FormKind, step: number) =>
    track({ name: "form_step_complete", props: { form, step } }),
  formInvalid: (form: FormKind, fields: string[]) =>
    track({ name: "form_validation_failed", props: { form, fields } }),
  formSuccess: (form: FormKind) => track({ name: "form_submit_success", props: { form } }),
  formFailed: (form: FormKind, reason: string) =>
    track({ name: "form_submit_failed", props: { form, reason } }),
  caseStudyView: (slug: string) => track({ name: "case_study_view", props: { slug } }),
  serviceCta: (service: string) => track({ name: "service_cta", props: { service } }),
  gallery: (action: "open_lightbox" | "load_more") =>
    track({ name: "gallery_engagement", props: { action } }),
  outboundSocial: (network: string) => track({ name: "outbound_social", props: { network } }),
};
