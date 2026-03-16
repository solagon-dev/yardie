'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const KB = ['a', 'b', 'c', 'd'] as const;

interface Slide {
  imageUrl: string;
  altText: string;
}

interface Props {
  slides: Slide[];
}

export default function HeroSlider({ slides }: Props) {
  const [current, setCurrent] = useState(0);
  const [activationKeys, setActivationKeys] = useState<number[]>(() => slides.map((_, i) => i === 0 ? 1 : 0));

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setActivationKeys((k) => {
          const updated = [...k];
          updated[next] = updated[next] + 1;
          return updated;
        });
        return next;
      });
    }, 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '620px' }}
      aria-label="Hero — Yardie Design outdoor environments"
    >
      {/* ── Image Slides ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
            transition: 'opacity 2s cubic-bezier(0.4,0,0.2,1)',
          }}
          aria-hidden={i !== current}
        >
          <div
            key={activationKeys[i]}
            className={`absolute inset-0 ken-burns-${KB[i % 4]}`}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.altText}
              fill
              priority={i === 0}
              className="object-cover object-[50%_40%] md:object-center"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      ))}

      {/* ── Cinematic Scrim ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(26,24,20,0.85) 0%, rgba(26,24,20,0.52) 35%, rgba(26,24,20,0.48) 60%, rgba(26,24,20,0.70) 100%)',
        }}
      />
      {/* ── Top Nav Protection Gradient (mobile) ── */}
      {/* Ensures nav bar always has contrast against bright image areas */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none md:hidden"
        style={{ height: '100px', background: 'linear-gradient(to bottom, rgba(26,24,20,0.55) 0%, transparent 100%)' }}
      />

      {/* ── Content — spread vertically across full hero ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col"
        style={{
          paddingLeft: 'clamp(24px,5vw,80px)',
          paddingRight: 'clamp(24px,5vw,80px)',
          paddingTop: 'clamp(6.5rem,11vw,9rem)',
          paddingBottom: 'clamp(4.5rem,7vw,6rem)',
        }}
      >
        {/* Top spacer — pushes content to bottom */}
        <div className="flex-1" />

        {/* Bottom — headline + CTAs anchored bottom-left, descriptor bottom-right */}
        <div className="max-w-[1320px] mx-auto w-full flex flex-col sm:flex-row sm:items-end justify-between gap-8 sm:gap-12">

          {/* Left column — label → headline → rule → CTAs */}
          <div className="flex flex-col">
            {/* Overline label */}
            <p
              className="label-light animate-fade-up opacity-0"
              style={{ animationFillMode: 'forwards', marginBottom: 'clamp(1rem,2vw,1.5rem)' }}
            >
              Yardie Design — Est. Greenville, NC
            </p>

            {/* Headline */}
            <h1
              className="font-display text-cream animate-fade-up opacity-0"
              style={{
                fontSize: 'clamp(2.75rem,5.5vw,5.75rem)',
                lineHeight: '1.06',
                fontWeight: 500,
                letterSpacing: '-0.025em',
                maxWidth: '680px',
                animationDelay: '0.1s',
                animationFillMode: 'forwards',
              }}
            >
              Transforming Outdoor
              <br />
              <em>Living Spaces</em>
            </h1>

            {/* Thin rule separator */}
            <div
              className="animate-fade-up opacity-0"
              style={{
                width: '40px',
                height: '1px',
                background: 'rgba(248,244,238,0.3)',
                margin: 'clamp(1.25rem,2.5vw,2rem) 0',
                animationDelay: '0.22s',
                animationFillMode: 'forwards',
              }}
            />

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 animate-fade-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <Link
                href="/consultation"
                className="block sm:inline-block text-center w-full sm:w-auto bg-cream text-bark text-[10px] tracking-[0.18em] uppercase font-[500] px-9 py-[15px] transition-all duration-300 hover:bg-warm-stone"
                style={{ borderRadius: '2px' }}
              >
                Schedule Consultation
              </Link>
              <Link
                href="/work"
                className="block sm:inline-block text-center w-full sm:w-auto border border-[rgba(248,244,238,0.38)] text-cream text-[10px] tracking-[0.18em] uppercase font-[500] px-9 py-[15px] transition-all duration-300 hover:border-[rgba(248,244,238,0.8)] hover:bg-[rgba(248,244,238,0.06)]"
                style={{ borderRadius: '2px' }}
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right column — descriptor, desktop only, vertically aligns to bottom of CTA row */}
          <p
            className="hidden lg:block text-right animate-fade-up opacity-0 flex-shrink-0"
            style={{
              fontSize: '12px',
              color: 'rgba(248,244,238,0.35)',
              lineHeight: '1.9',
              maxWidth: '240px',
              letterSpacing: '0.01em',
              animationDelay: '0.42s',
              animationFillMode: 'forwards',
            }}
          >
            Landscapes, hardscapes, masonry,<br />
            lighting &amp; irrigation — conceived<br />
            as one unified environment.
          </p>
        </div>
      </div>

      {/* ── Slide Progress Indicators ── */}
      {slides.length > 1 && (
        <div
          className="absolute z-20 flex items-center gap-2.5 animate-fade-up opacity-0"
          style={{
            bottom: 'clamp(2rem,3.5vw,3rem)',
            right: 'clamp(24px,5vw,80px)',
            animationDelay: '0.5s',
            animationFillMode: 'forwards',
          }}
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                setActivationKeys((k) => {
                  const updated = [...k];
                  updated[i] = updated[i] + 1;
                  return updated;
                });
                setCurrent(i);
              }}
              style={{
                width: i === current ? '32px' : '6px',
                height: '2px',
                background:
                  i === current
                    ? 'rgba(248,244,238,0.92)'
                    : 'rgba(248,244,238,0.3)',
                border: 'none',
                padding: 0,
                borderRadius: '1px',
                cursor: 'pointer',
                transition: 'width 0.5s cubic-bezier(0.22,1,0.36,1), background 0.4s ease',
              }}
            />
          ))}
        </div>
      )}

      {/* ── Slide counter ── */}
      {slides.length > 1 && (
        <div
          className="absolute z-20 animate-fade-up opacity-0"
          style={{
            bottom: 'clamp(1.85rem,3.2vw,2.75rem)',
            left: 'clamp(24px,5vw,80px)',
            animationDelay: '0.55s',
            animationFillMode: 'forwards',
          }}
        >
          <span
            className="font-sans text-[rgba(248,244,238,0.35)]"
            style={{ fontSize: '10px', letterSpacing: '0.15em' }}
            aria-live="polite"
            aria-atomic="true"
          >
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </section>
  );
}
