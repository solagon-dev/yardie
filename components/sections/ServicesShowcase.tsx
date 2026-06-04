"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/content";

/**
 * SIGNATURE ELEMENT — Editorial vertical numbered list of services.
 * Left column: numbered service names in large Cormorant. Right column:
 * the hero image of the currently hovered/active service. The image
 * crossfades on hover. Mobile collapses to a clean stacked list.
 *
 * This is a unique element compared to Bluefin's services index — it
 * gives the homepage an architectural-journal feel.
 */
export default function ServicesShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream-alt text-bark">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-section">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — labels + numbered list */}
          <div className="lg:col-span-7">
            <p className="label inline-flex items-center justify-center gap-3 text-clay mb-7">
              <span aria-hidden className="block h-px w-7 bg-clay/50" />
              What We Design
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] text-bark leading-[1.04] tracking-tight max-w-[16ch] font-light">
              Five disciplines.
              <span className="italic text-moss"> One studio.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[16px] text-clay leading-relaxed">
              Most projects we draw involve some mix of all five. We keep the disciplines under one roof so the lighting plan and the masonry plan and the planting plan answer to each other.
            </p>

            <ul className="mt-12 lg:mt-14 divide-y divide-border">
              {services.map((s, i) => (
                <li
                  key={s.slug}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block py-7 lg:py-9 transition-colors"
                  >
                    <div className="flex items-start gap-6 lg:gap-10">
                      <span className="font-display text-[18px] text-clay/60 mt-3 lg:mt-4 tabular-nums w-10 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p
                          className={`font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight transition-colors duration-300 ${
                            i === active ? "text-bark" : "text-bark/65 group-hover:text-bark"
                          }`}
                        >
                          {s.name}
                          <span className="italic text-moss/80"> {s.tagline}</span>
                        </p>
                        <p className="mt-2.5 text-[14.5px] text-clay leading-relaxed max-w-xl">
                          {s.intro.split(".")[0]}.
                        </p>
                      </div>
                      <svg
                        className={`shrink-0 mt-3 lg:mt-4 h-4 w-4 text-clay transition-all duration-300 ${
                          i === active ? "translate-x-1 text-moss" : ""
                        }`}
                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — sticky photo, crossfades on hover */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
              {services.map((s, i) => (
                <div
                  key={s.slug}
                  className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={i !== active}
                >
                  <Image
                    src={s.heroImage}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-bark/80 to-transparent">
                <p className="label text-stone/85 mb-2">Now Showing</p>
                <p className="font-display text-3xl text-cream tracking-tight">
                  {services[active]?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
