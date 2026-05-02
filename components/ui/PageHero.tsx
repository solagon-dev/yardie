import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  headline: ReactNode;
  italicTail?: ReactNode;
  intro?: ReactNode;
  image: { src: string; alt: string };
  /** Optional small label rendered above the headline. */
  label?: string;
};

/**
 * Editorial page hero. On desktop the photograph is full-bleed with
 * the headline overlaid bottom-left. On mobile the photo and the text
 * are stacked into separate blocks so the photo crops correctly at
 * portrait aspect and the text sits cleanly on a dark panel — same
 * pattern the homepage and service-page heroes use.
 */
export default function PageHero({ headline, italicTail, intro, image, label }: Props) {
  return (
    <>
      {/* MOBILE — stacked photo + dark text */}
      <section className="lg:hidden -mt-14">
        <div className="relative h-[52svh] sm:h-[58svh] bg-bark overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover animate-hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/45 via-transparent to-bark/35 pointer-events-none" />
        </div>
      </section>

      <section className="lg:hidden bg-bark text-cream">
        <div className="px-5 sm:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16">
          {label && (
            <p className="font-mono text-[11px] tabular-nums text-stone/85 tracking-[0.22em] mb-6 uppercase">
              {label}
            </p>
          )}
          <h1 className="font-display text-[40px] sm:text-[56px] text-cream leading-[1] tracking-tight max-w-[22ch] font-light">
            {headline}
            {italicTail && (
              <>
                {" "}
                <span className="italic text-stone">{italicTail}</span>
              </>
            )}
          </h1>
          {intro && (
            <p className="mt-6 sm:mt-8 text-[15px] sm:text-[16px] text-cream/80 leading-relaxed max-w-md">
              {intro}
            </p>
          )}
        </div>
      </section>

      {/* DESKTOP — overlay */}
      <section className="hidden lg:flex relative -mt-[68px] min-h-[72svh] items-end overflow-hidden bg-bark">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/55 to-bark/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/50 via-transparent to-transparent" />

        <div className="relative w-full mx-auto max-w-[1400px] px-12 pt-32 pb-24">
          {label && (
            <p className="font-mono text-[11px] tabular-nums text-stone/85 tracking-[0.22em] mb-7 uppercase">
              {label}
            </p>
          )}
          <h1 className="font-display text-[80px] xl:text-[96px] text-cream leading-[0.98] tracking-tight max-w-[22ch] font-light">
            {headline}
            {italicTail && (
              <>
                {" "}
                <span className="italic text-stone">{italicTail}</span>
              </>
            )}
          </h1>
          {intro && (
            <p className="mt-7 text-[17px] text-cream/75 leading-relaxed max-w-2xl">
              {intro}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
