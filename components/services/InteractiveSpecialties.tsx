"use client";

import Image from "next/image";
import { useState } from "react";

type Photo = { src: string; alt: string };

type Feature = { name: string; description: string };

/**
 * Editorial numbered list of features paired with a sticky preview image
 * that swaps as the visitor hovers / focuses each row. Mirrors the dropdown
 * pattern so the brand feels consistent across hover-driven moments.
 */
export default function InteractiveSpecialties({
  features,
  photos,
}: {
  features: Feature[];
  photos: Photo[];
}) {
  const [active, setActive] = useState(0);
  const safePhoto = (i: number) => photos[i] ?? photos[0];

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* List */}
      <ol className="lg:col-span-7 divide-y divide-border">
        {features.map((f, i) => {
          const isActive = active === i;
          return (
            <li
              key={f.name}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="cursor-default"
            >
              <div
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                className="group flex items-start gap-5 lg:gap-7 py-6 lg:py-7 outline-none focus-visible:bg-cream-alt/60 transition-colors"
              >
                <span
                  className={`font-mono text-[11px] tabular-nums shrink-0 mt-2 transition-colors ${isActive ? "text-moss" : "text-clay/55"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-display text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.15] tracking-tight font-light transition-colors ${isActive ? "text-moss" : "text-bark group-hover:text-moss"}`}
                  >
                    {f.name}
                  </h3>
                  <p className="mt-2 text-[14.5px] sm:text-[15px] text-earth leading-relaxed max-w-[60ch]">
                    {f.description}
                  </p>
                </div>
                <span
                  aria-hidden
                  className={`hidden lg:block h-px transition-all duration-500 ease-out shrink-0 mt-5 ${isActive ? "w-12 bg-moss" : "w-5 bg-clay/30"}`}
                />
              </div>
            </li>
          );
        })}
      </ol>

      {/* Sticky image preview */}
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone">
          {features.map((f, i) => {
            const photo = safePhoto(i);
            return (
              <Image
                key={`${f.name}-${i}`}
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className={`object-cover transition-opacity duration-500 ease-out ${active === i ? "opacity-100" : "opacity-0"}`}
              />
            );
          })}
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-bark/80 via-bark/20 to-transparent">
            <p className="font-mono text-[10.5px] tabular-nums text-cream/80 tracking-[0.22em] uppercase">
              {String(active + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
            </p>
            <p className="mt-1 font-display text-cream text-[22px] sm:text-[24px] leading-tight tracking-tight">
              {features[active]?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
