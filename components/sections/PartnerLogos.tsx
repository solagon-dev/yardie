// ============================================================
// Partner band — static strip of partner brand logos.
//
// Previously an infinite auto-scrolling marquee. The implementation brief
// rules that out (§5.2 "Avoid an automatically scrolling trust marquee",
// §10.3 "Do not animate merely to make a quiet section feel less empty",
// §14 pause/stop controls for persistent autoplay). Rendering the logos
// statically also halves the images in the document — the marquee had to
// duplicate the whole list for a seamless loop — and removes the need for
// a separate sr-only fallback, since each logo carries real alt text.
//
// Each partner has a small SVG wordmark in /public/brand/partners/.
// ============================================================

import { partners } from "@/lib/content";

export default function PartnerLogos() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream-alt border-y border-border">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
        <h2 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] text-bark leading-[1.15] tracking-tight font-light max-w-xl mx-auto">
          Products and brands{" "}
          <span className="italic text-moss">we trust.</span>
        </h2>
      </div>

      <ul className="mt-10 sm:mt-12 lg:mt-14 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8">
        {partners.map((p) => (
          <li
            key={p.name}
            className="flex items-center justify-center h-12 sm:h-14 lg:h-16 text-bark/55 hover:text-bark transition-colors duration-700"
            title={p.blurb}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.logo}
              alt={p.name}
              className="block h-7 sm:h-8 lg:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity duration-700"
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
