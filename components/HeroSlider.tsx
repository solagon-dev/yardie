"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

const SLIDE_MS = 6500;

/**
 * Hero slider — crossfades between slides with a single continuous
 * slow-zoom that doesn't restart when the active slide changes, so
 * transitions are buttery and there's no visible "jump" between slides.
 */
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-bark">
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
              priority
              sizes="100vw"
              className="object-cover animate-hero-zoom transform-gpu"
            />
          </div>
        );
      })}
    </div>
  );
}
