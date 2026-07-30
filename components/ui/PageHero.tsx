import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  headline: ReactNode;
  italicTail?: ReactNode;
  intro?: ReactNode;
  image: { src: string; alt: string };
};

/**
 * Editorial page hero — one responsive structure serving both breakpoints.
 *
 * This used to be two complete heroes (`lg:hidden` + `hidden lg:flex`), which
 * meant every interior page shipped the label, headline, intro and photograph
 * twice, marked TWO `priority` images preloading the same asset, and — because
 * a page may only have one <h1> — rendered the desktop headline as a
 * `<p role="heading" aria-level={1}>`. So the breakpoint most visitors are on
 * got a simulated heading while the real one sat in a hidden block.
 *
 * Collapsing to a single block is the same fix the homepage hero already had:
 * one photograph, one preload, one real <h1>, half the markup. Mobile stacks
 * the photo above a dark copy panel; from `lg` the photo goes full-bleed and
 * the copy overlays it bottom-left.
 */
export default function PageHero({ headline, italicTail, intro, image }: Props) {
  return (
    <section className="relative -mt-14 lg:-mt-[68px] overflow-hidden bg-bark text-cream">
      {/* Media — in flow above the copy on mobile, full-bleed behind it from lg up. */}
      <div className="relative h-[52svh] sm:h-[58svh] lg:absolute lg:inset-0 lg:h-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          // Full-bleed photograph under a heavy gradient — see next.config.js.
          quality={65}
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div
          aria-hidden
          className="lg:hidden absolute inset-0 bg-gradient-to-t from-bark/45 via-transparent to-bark/35 pointer-events-none"
        />
        <div
          aria-hidden
          className="hidden lg:block absolute inset-0 bg-gradient-to-t from-bark via-bark/55 to-bark/15 pointer-events-none"
        />
        <div
          aria-hidden
          className="hidden lg:block absolute inset-0 bg-gradient-to-r from-bark/50 via-transparent to-transparent pointer-events-none"
        />
      </div>

      {/* Copy — stacked below the photo on mobile, overlaid from lg up. */}
      <div className="relative lg:flex lg:min-h-[72svh] lg:items-end">
        <div className="w-full mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-12 sm:pb-16 lg:pt-32 lg:pb-24">
          <h1 className="font-display text-[40px] sm:text-[56px] lg:text-[80px] xl:text-[96px] text-cream leading-[1] lg:leading-[0.98] tracking-tight max-w-[22ch] font-light">
            {headline}
            {italicTail && (
              <>
                {" "}
                <span className="italic text-stone">{italicTail}</span>
              </>
            )}
          </h1>
          {intro && (
            <p className="mt-6 sm:mt-8 lg:mt-7 text-[15px] sm:text-[16px] lg:text-[17px] text-cream/80 lg:text-cream/75 leading-relaxed max-w-md lg:max-w-2xl">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
