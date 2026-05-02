"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "yardie-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Delay so it doesn't compete with the hero on first paint
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch { /* private mode / SSR safety */ }
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    setVisible(false);
  };
  const decline = () => {
    try { localStorage.setItem(STORAGE_KEY, "declined"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-[55] max-w-md bg-cream border border-stone shadow-2xl"
    >
      <div className="p-5 sm:p-6">
        <p className="text-[13.5px] leading-relaxed text-earth">
          We use a small number of cookies to understand how visitors find this site and to improve it over time. You can decline without affecting site function.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={accept}
            className="inline-flex items-center justify-center px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium bg-bark text-cream hover:bg-earth transition-colors"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={decline}
            className="inline-flex items-center justify-center px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium border border-bark/30 text-bark hover:bg-stone transition-colors"
          >
            Decline
          </button>
          <Link
            href="/legal/privacy-policy"
            className="text-[12px] text-clay hover:text-bark transition-colors underline underline-offset-4"
          >
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
