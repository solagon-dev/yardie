// ============================================================
// Partner band — marquee of partner brand logos.
// Each partner has a small SVG wordmark in /public/brand/partners/
// rendered with `currentColor` so we can re-tint the rail with
// Tailwind text color classes (kept at bark/65 for the resting
// state, deepening to bark on hover).
// ============================================================

import { partners } from "@/lib/content";

export default function PartnerLogos() {
  // Duplicate for seamless marquee loop.
  const list = [...partners, ...partners];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream-alt border-y border-border">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
        <h2 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] text-bark leading-[1.15] tracking-tight font-light max-w-xl mx-auto">
          Products and brands{" "}
          <span className="italic text-moss">we trust.</span>
        </h2>
      </div>

      <div className="mt-10 sm:mt-12 lg:mt-14 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-10 sm:w-16 lg:w-24 bg-gradient-to-r from-cream-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 sm:w-16 lg:w-24 bg-gradient-to-l from-cream-alt to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-scroll-x w-max items-center"
          style={{ animationDuration: "70s" }}
        >
          {list.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center min-w-[180px] sm:min-w-[220px] lg:min-w-[260px] h-14 sm:h-16 lg:h-20 px-6 sm:px-8 lg:px-12 border-r border-clay/15 last:border-r-0 group text-bark/55 hover:text-bark transition-colors duration-700"
              title={p.blurb}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo}
                alt={p.name}
                className="block h-7 sm:h-8 lg:h-9 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Screen-reader fallback */}
        <ul className="sr-only">
          {partners.map((p) => (
            <li key={p.name}>{p.name} — {p.blurb}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
