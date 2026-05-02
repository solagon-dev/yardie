// ============================================================
// Instagram-style drift section — slow drifting photos behind
// centered copy. Reads as if the studio's feed is floating past.
// ============================================================

import Image from "next/image";
import { instagramFeed } from "@/lib/media";
import { company } from "@/lib/content";

const driftConfigs = [
  { top: 4,  size: 150, duration: 130, delay: 0 },
  { top: 18, size: 110, duration: 165, delay: -32 },
  { top: 34, size: 175, duration: 110, delay: -65 },
  { top: 8,  size: 130, duration: 145, delay: -18 },
  { top: 56, size: 145, duration: 138, delay: -88 },
  { top: 72, size: 120, duration: 175, delay: -50 },
  { top: 24, size: 165, duration: 120, delay: -100 },
  { top: 62, size: 105, duration: 160, delay: -24 },
  { top: 84, size: 155, duration: 132, delay: -75 },
  { top: 44, size: 125, duration: 150, delay: -42 },
  { top: 78, size: 140, duration: 125, delay: -115 },
  { top: 12, size: 115, duration: 168, delay: -95 },
];

// Mobile drift — bigger photos spread across a taller viewport-height
// section so they read as a real photo composition, not faint dots
// behind the headline.
const mobileDriftConfigs = [
  { top: 4,  size: 130, duration: 130, delay: 0 },
  { top: 14, size: 105, duration: 165, delay: -40 },
  { top: 26, size: 145, duration: 110, delay: -22 },
  { top: 38, size: 115, duration: 145, delay: -70 },
  { top: 52, size: 135, duration: 125, delay: -55 },
  { top: 64, size: 110, duration: 150, delay: -90 },
  { top: 76, size: 140, duration: 118, delay: -10 },
  { top: 88, size: 120, duration: 158, delay: -65 },
];

export default function InstagramFeed() {
  return (
    <section className="relative bg-cream border-y border-border overflow-hidden py-28 sm:py-28 lg:py-48 min-h-[78svh] sm:min-h-0 flex items-center">
      {/* Mobile drift layer */}
      <div className="pointer-events-none absolute inset-0 md:hidden" aria-hidden>
        {instagramFeed.slice(0, mobileDriftConfigs.length).map((photo, i) => {
          const cfg = mobileDriftConfigs[i];
          return (
            <div
              key={`m-${photo.src}-${i}`}
              className="absolute drift"
              style={{
                top: `${cfg.top}%`,
                width: `${cfg.size}px`,
                height: `${cfg.size}px`,
                animationDuration: `${cfg.duration}s`,
                animationDelay: `${cfg.delay}s`,
              }}
            >
              <Image src={photo.src} alt="" fill sizes={`${cfg.size}px`} className="object-cover" />
            </div>
          );
        })}
      </div>

      {/* Tablet+ drift layer */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {instagramFeed.map((photo, i) => {
          const cfg = driftConfigs[i % driftConfigs.length];
          return (
            <div
              key={`d-${photo.src}-${i}`}
              className="absolute drift"
              style={{
                top: `${cfg.top}%`,
                width: `${cfg.size}px`,
                height: `${cfg.size}px`,
                animationDuration: `${cfg.duration}s`,
                animationDelay: `${cfg.delay}s`,
              }}
            >
              <Image src={photo.src} alt="" fill sizes={`${cfg.size}px`} className="object-cover" />
            </div>
          );
        })}
      </div>

      {/* Cream veil so center copy stays legible. Mobile uses a soft
          radial-style fade so the centered text is the bright spot
          and the photo composition still reads at the edges. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,244,238,0.92)_0%,rgba(248,244,238,0.55)_55%,rgba(248,244,238,0.2)_100%)] md:bg-gradient-to-r md:from-cream/40 md:via-cream/15 md:to-cream/40 pointer-events-none" />

      {/* Center copy */}
      <div className="relative mx-auto max-w-2xl text-center px-5 sm:px-8 lg:px-12">
        <h2 className="font-display text-[34px] sm:text-5xl lg:text-[64px] text-bark leading-[1.06] tracking-tight font-light">
          See what we&rsquo;re{" "}
          <span className="italic text-moss">building lately.</span>
        </h2>
        <p className="mt-5 sm:mt-6 text-[14.5px] sm:text-[16px] text-clay leading-relaxed max-w-md mx-auto">
          In-progress shots, finished walkthroughs, and material details from the studio.
        </p>
        <div className="mt-7 sm:mt-9 flex justify-center">
          <a
            href={company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.22em] uppercase font-medium text-bark hover:text-moss transition-colors px-5 py-3 bg-cream-alt border border-border hover:border-moss/40"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.91.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.25 2.14.55 2.9.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.49 2.9.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.14-.25 2.9-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.49-1.63.55-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.25-2.14-.55-2.9-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.85.62c-.76-.3-1.63-.49-2.9-.55C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
            </svg>
            Follow @yardiedesign
            <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
