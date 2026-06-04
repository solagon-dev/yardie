import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { photos, projectPhotos, photosByService } from "@/lib/media";
import PageHero from "@/components/ui/PageHero";
import { TextLink } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Exterior Design Services in Greenville, NC — Yardie",
  description:
    "Yardie's exterior design disciplines — landscapes, hardscapes, masonry, lighting, and irrigation — under one studio in Greenville, NC.",
  path: "/services",
  keywords: [
    "exterior design services Greenville NC",
    "landscape design Eastern NC",
    "hardscape Greenville NC",
    "masonry contractor Greenville NC",
    "outdoor lighting Pitt County",
  ],
});

const blurbs: Record<string, string> = {
  landscapes:
    "Master plans, planting design, and seasonal upkeep tuned to Pitt County soil and the way you live.",
  hardscapes:
    "Stone terraces, walkways, retaining walls, and outdoor kitchens — engineered before they're built.",
  masonry:
    "Hand-laid stone, brick, and veneer — set by Yardie masons, never subcontracted out.",
  lighting:
    "Layered low-voltage path, accent, and architectural lighting — fewer fixtures, better aim, warmer light.",
  irrigation:
    "Smart-controller systems sized to plant type and soil — designed to use less water and keep gardens healthier.",
};

// Featured = the marquee disciplines that lead the page.
const featuredSlugs = ["landscapes", "patios-pavers", "fire-features"];

export default function ServicesPage() {
  const featured = featuredSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const supporting = services.filter((s) => !featuredSlugs.includes(s.slug));

  const photoFor = (slug: string) =>
    photosByService[slug]?.[0] ?? photos.heroAman;

  return (
    <>
      <PageHero
        label="Services"
        headline="Exterior design for"
        italicTail="Eastern North Carolina homes."
        intro="Most projects we draw involve some mix of these disciplines. We keep them under one roof so the lighting plan and the masonry plan and the planting plan answer to each other."
        image={photos.heroFlagstone}
      />

      {/* ── Quick index rail ── */}
      <section className="bg-cream border-b border-border sticky top-14 lg:top-[68px] z-30">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <ul className="flex gap-1.5 overflow-x-auto py-3.5 scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0">
            {services.map((s, i) => (
              <li key={s.slug} className="flex-shrink-0">
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-3 py-1.5 text-[10.5px] tracking-[0.2em] uppercase text-clay hover:text-moss transition-colors whitespace-nowrap"
                >
                  <span className="text-stone">{String(i + 1).padStart(2, "0")}</span>
                  {s.shortName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Featured: alternating editorial rows ── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 sm:mb-16 lg:mb-20 text-center lg:text-left">
            <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[64px] text-bark leading-[1.04] tracking-tight font-light max-w-[20ch] mx-auto lg:mx-0">
              The three disciplines{" "}
              <span className="italic text-moss">we lead with.</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-[14.5px] sm:text-[15px] text-clay leading-relaxed">
              Landscape, hardscape, masonry — the structural moves that decide how a property reads.
              Lighting and irrigation thread through underneath.
            </p>
          </div>

          <div className="space-y-14 sm:space-y-24 lg:space-y-40">
            {featured.map((service, i) => {
              const photo = photoFor(service.slug);
              const reversed = i % 2 === 1;
              const num = String(services.findIndex((s) => s.slug === service.slug) + 1).padStart(2, "0");
              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center scroll-mt-28"
                >
                  <div className={`lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden bg-stone ${reversed ? "lg:col-start-6" : ""}`}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={`lg:col-span-5 ${reversed ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <h3 className="font-display text-[28px] sm:text-[36px] lg:text-[56px] text-bark leading-[1.04] tracking-tight font-light">
                      {service.name}
                    </h3>
                    <p className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] lg:text-[17px] text-earth leading-relaxed max-w-md">
                      {blurbs[service.slug] ?? service.tagline}
                    </p>
                    <div className="mt-6 sm:mt-9">
                      <TextLink href={`/services/${service.slug}`}>
                        Explore {service.shortName}
                      </TextLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Supporting services: editorial directory ── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream-alt border-y border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 mb-10 sm:mb-14 lg:mb-16 text-center lg:text-left">
            <div className="lg:col-span-6">
              <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[56px] text-bark leading-[1.06] tracking-tight font-light max-w-[18ch] mx-auto lg:mx-0">
                Threading underneath:{" "}
                <span className="italic text-moss">light and water.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-[14.5px] sm:text-[16px] text-earth leading-relaxed self-end max-w-md mx-auto lg:mx-0">
              Outdoor lighting and irrigation are the disciplines you don&rsquo;t see at first — but they&rsquo;re what makes the rest of the design hold up after dark and through a hot July.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-14 border-t border-border">
            {supporting.map((service) => {
              const photo = photoFor(service.slug);
              const num = String(services.findIndex((s) => s.slug === service.slug) + 1).padStart(2, "0");
              return (
                <li
                  key={service.slug}
                  id={service.slug}
                  className="border-b border-border scroll-mt-28"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-4 sm:gap-6 py-6 lg:py-7"
                  >
                    <div className="relative shrink-0 h-16 w-16 sm:h-20 sm:w-20 overflow-hidden bg-stone">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-[22px] sm:text-[24px] lg:text-[28px] text-bark leading-[1.18] tracking-tight font-light group-hover:text-moss transition-colors">
                        {service.name}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] sm:text-[14.5px] text-clay leading-relaxed line-clamp-2 max-w-prose">
                        {blurbs[service.slug] ?? service.tagline}
                      </p>
                    </div>

                    <svg
                      className="shrink-0 h-3 w-3 ml-2 text-clay group-hover:text-moss group-hover:translate-x-1 transition-all"
                      fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Closing photo + pull quote ── */}
      <section className="relative bg-cream">
        <div className="relative aspect-[4/3] sm:aspect-[16/7] lg:aspect-[21/9] overflow-hidden bg-stone">
          <Image
            src={projectPhotos.holton.elevation.src}
            alt={projectPhotos.holton.elevation.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/55 via-bark/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
              <p className="font-display italic text-[28px] sm:text-[36px] lg:text-[44px] text-cream leading-[1.15] tracking-tight max-w-[28ch]">
                Drawn before it&rsquo;s built. Built once. Looked after through every season after.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
