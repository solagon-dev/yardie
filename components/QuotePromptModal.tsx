"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { photos } from "@/lib/media";
import { company } from "@/lib/content";

const SESSION_KEY = "yardie-quote-prompt-shown";
const SCROLL_TRIGGER = 0.55;
const SHOW_DELAY_MS = 350;
const FADE_MS = 700;

/**
 * Editorial conversation prompt — appears as a quiet card anchored to
 * the bottom-right corner once the visitor is over halfway through the
 * page. Doesn't block reading; doesn't darken the screen. The visitor
 * can dismiss with the close button or Escape, and we remember per
 * session so they aren't asked twice.
 */
export default function QuotePromptModal() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && scrolled / max >= SCROLL_TRIGGER) {
        setMounted(true);
        window.sessionStorage.setItem(SESSION_KEY, "1");
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Run the entrance animation a tick after mount.
  useEffect(() => {
    if (!mounted) return;
    const t = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [mounted]);

  // Esc to dismiss.
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mounted]);

  function dismiss() {
    setVisible(false);
    window.setTimeout(() => setMounted(false), FADE_MS);
  }

  if (!mounted) return null;

  return (
    <aside
      role="complementary"
      aria-label="Begin a conversation with Yardie"
      className={`
        fixed z-[80] pointer-events-none
        bottom-4 left-4 right-4
        sm:left-auto sm:right-6 sm:bottom-6
        sm:max-w-[560px] lg:max-w-[600px]
        transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="pointer-events-auto bg-cream text-bark border border-border shadow-[0_28px_60px_-24px_rgba(26,24,20,0.45)] grid grid-cols-12 overflow-hidden">
        {/* Image — narrow editorial column */}
        <div className="hidden sm:block sm:col-span-4 relative bg-stone">
          <Image
            src={photos.heroFlagstone.src}
            alt={photos.heroFlagstone.alt}
            fill
            sizes="240px"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bark/35 via-transparent to-transparent" />
        </div>

        {/* Copy column */}
        <div className="col-span-12 sm:col-span-8 p-7 sm:p-8 lg:p-9 relative">
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 text-clay/70 hover:text-bark transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <span aria-hidden className="block h-px w-8 bg-moss/60 mb-5" />

          <h2 className="font-display text-[26px] sm:text-[28px] lg:text-[32px] text-bark leading-[1.08] tracking-tight pr-8">
            Like what you&rsquo;re seeing?{" "}
            <span className="italic text-moss">Let&rsquo;s talk.</span>
          </h2>

          <p className="mt-4 text-[14px] sm:text-[14.5px] text-clay leading-relaxed">
            The first conversation is at no cost. We walk the property, listen, and let you know whether we&rsquo;re the right studio.
          </p>

          <Link
            href="/quote"
            onClick={dismiss}
            className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-3 px-7 py-3.5 bg-bark text-cream text-[11.5px] tracking-[0.22em] uppercase font-medium hover:bg-earth transition-colors whitespace-nowrap"
          >
            Schedule a Consultation
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <a
            href={company.phoneTel}
            className="mt-4 block text-[13px] text-clay hover:text-bark transition-colors"
          >
            or call <span className="text-bark font-medium">{company.phone}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
