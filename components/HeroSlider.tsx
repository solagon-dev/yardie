"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

const SLIDE_MS = 6500;

/**
 * Hero slider — crossfades between slides with a single continuous
 * slow-zoom that doesn't restart when the active slide changes.
 *
 * Performance (brief §5.1 / §13.1): only the first slide is `priority`
 * (the above-the-fold LCP candidate). The remaining slides load lazily
 * so they are not preloaded — previously every slide was `priority`,
 * which preloaded all six as high-priority images.
 *
 * Accessibility (brief §10.3 / §14 / WCAG 2.2.2): the crossfade auto-
 * advances longer than 5s, so it honours prefers-reduced-motion (no
 * autoplay — holds the first slide; the CSS zoom is already disabled for
 * reduced motion in globals.css) and provides a keyboard-operable
 * pause/play control for everyone else.
 */
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const autoPlaying = slides.length > 1 && !reducedMotion && !paused;

  useEffect(() => {
    if (!autoPlaying) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, [autoPlaying, slides.length]);

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-bark"
      role="group"
      aria-roledescription="carousel"
      aria-label="Featured Yardie projects"
    >
      {slides.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 will-change-[opacity] transition-opacity duration-[2000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] ${
              active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              // The first slide is the LCP element on the homepage. It renders
              // full-bleed under a dark gradient, so q=65 is visually
              // indistinguishable from the default 75 and meaningfully cheaper.
              quality={65}
              sizes="100vw"
              className="object-cover animate-hero-zoom transform-gpu"
            />
          </div>
        );
      })}

      {slides.length > 1 && !reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play background slideshow" : "Pause background slideshow"}
          className="absolute bottom-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-bark/50 text-cream ring-1 ring-cream/30 backdrop-blur-sm transition hover:bg-bark/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-bark/40"
        >
          {paused ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M3 2l9 5-9 5z" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <rect x="3" y="2" width="3" height="10" rx="1" />
              <rect x="8" y="2" width="3" height="10" rx="1" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
