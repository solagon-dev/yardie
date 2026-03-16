'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const STORAGE_KEY = 'yardie_popup_dismissed';
const COOLDOWN_DAYS = 14;
const SCROLL_TRIGGER_PCT = 35; // % of page scrolled before popup shows
const DELAY_AFTER_TRIGGER_MS = 600; // brief pause after scroll threshold

export default function ConversionPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const dismiss = useCallback(() => {
    setAnimateIn(false);
    // Delay actual removal so exit animation plays
    setTimeout(() => setVisible(false), 400);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  }, []);

  useEffect(() => {
    setMounted(true);

    // Check if user dismissed recently
    try {
      const ts = localStorage.getItem(STORAGE_KEY);
      if (ts) {
        const elapsed = Date.now() - Number(ts);
        if (elapsed < COOLDOWN_DAYS * 24 * 60 * 60 * 1000) return;
      }
    } catch {}

    let triggered = false;
    let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (triggered) return;
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrolled >= SCROLL_TRIGGER_PCT) {
        triggered = true;
        window.removeEventListener('scroll', handleScroll);
        timer = setTimeout(() => {
          setVisible(true);
          // Tiny rAF delay to allow mount before triggering CSS transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setAnimateIn(true));
          });
        }, DELAY_AFTER_TRIGGER_MS);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Keyboard dismiss
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [visible, dismiss]);

  // Body scroll lock
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  if (!mounted || !visible) return null;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        className="fixed inset-0 z-[80]"
        style={{
          background: 'rgba(26,24,20,0.62)',
          backdropFilter: 'blur(3px)',
          opacity: animateIn ? 1 : 0,
          transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* ── Modal ── */}
      <div
        className="fixed inset-0 z-[81] flex items-end sm:items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Transform your outdoor space — schedule a consultation"
      >
        <div
          className="relative w-full max-w-[820px] bg-bark overflow-hidden"
          style={{
            borderRadius: '2px',
            opacity: animateIn ? 1 : 0,
            transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
            transition: 'opacity 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.45s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {/* ── Close button ── */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center text-[rgba(248,244,238,0.45)] hover:text-cream transition-colors"
            aria-label="Close"
            style={{ borderRadius: '2px' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* ── Image panel ── */}
            <div className="relative hidden sm:block" style={{ aspectRatio: '4/5' }}>
              <Image
                src="/IMG_8148.jpg"
                alt="Yardie Design — beautifully transformed outdoor living space"
                fill
                className="object-cover object-center"
                sizes="410px"
                unoptimized
              />
              {/* Subtle scrim */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(26,24,20,0.3) 100%)' }} />
            </div>

            {/* ── Content panel ── */}
            <div className="flex flex-col justify-center p-10 lg:p-12">
              <p
                className="label-light mb-8"
                style={{ color: 'rgba(248,244,238,0.45)' }}
              >
                Complimentary Consultation
              </p>

              <h2
                className="font-display text-cream text-balance mb-6"
                style={{
                  fontSize: 'clamp(1.6rem,2.2vw,2.1rem)',
                  lineHeight: '1.12',
                  fontWeight: 500,
                }}
              >
                Every extraordinary yard begins with one conversation.
              </h2>

              <p
                className="mb-8 leading-[1.75]"
                style={{
                  fontSize: '14px',
                  color: 'rgba(248,244,238,0.6)',
                }}
              >
                We&apos;ll walk your property, understand how you live outside, and show you what thoughtful design can genuinely do for your home. No sales pitch — just a clear picture of your outdoor potential.
              </p>

              <Link
                href="/consultation"
                onClick={dismiss}
                className="inline-block bg-cream text-bark text-[10px] tracking-[0.18em] uppercase font-[500] px-8 py-[14px] text-center transition-all duration-300 hover:bg-warm-stone mb-4"
                style={{ borderRadius: '2px' }}
              >
                Schedule a Consultation
              </Link>

              <button
                onClick={dismiss}
                className="text-[rgba(248,244,238,0.3)] text-[10px] tracking-[0.14em] uppercase hover:text-[rgba(248,244,238,0.55)] transition-colors text-center"
              >
                Not Right Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
