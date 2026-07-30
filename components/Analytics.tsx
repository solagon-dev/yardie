"use client";

import Script from "next/script";
import { GA_ID, useConsent } from "@/lib/consent";

const AHREFS_KEY = "58FdYKXK/cR1Vn7ZzkBBmQ";

/**
 * Analytics loader, gated on the cookie banner.
 *
 * Previously GA4 and the Ahrefs tag were hard-coded into the root layout's
 * <head>, so they loaded on every visit no matter what the banner said —
 * "Decline" only hid the banner. The banner promised a choice the site
 * never honoured.
 *
 * Model is opt-out, which is what a US local business needs: tags load for
 * visitors who accept AND for visitors who haven't answered yet, and are
 * withheld entirely from anyone who declines. Declining also writes GA
 * Consent Mode v2 denials before gtag boots, so no analytics/ads cookie is
 * ever set — belt and braces for the case where a tag arrives another way.
 *
 * `useConsent` is a `useSyncExternalStore` binding, so the value is null on
 * the server and through hydration and nothing renders until the real stored
 * decision is known — no hydration mismatch, and no window where a declining
 * visitor briefly gets the tags. Accepting or declining takes effect
 * immediately, without a reload.
 */
export default function Analytics() {
  const consent = useConsent();

  if (consent === null || consent === "declined") return null;

  return (
    <>
      {/* Consent defaults are queued into dataLayer before gtag.js is
          requested, so no advertising identifier is ever written. Analytics
          storage is granted because this branch only renders for visitors who
          have not declined. */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
gtag('js',new Date());
gtag('config','${GA_ID}');`}
      </Script>
      <Script
        id="gtag-js"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script
        id="ahrefs-analytics"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key={AHREFS_KEY}
        strategy="afterInteractive"
      />
    </>
  );
}
