import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { company, services, journal, serviceAreas } from "@/lib/content";
import { photos, projectPhotos, photosByService, staffPhotos } from "@/lib/media";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { getGoogleReviews } from "@/lib/google-reviews";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQAccordion from "@/components/ui/FAQAccordion";
import GalleryMosaic from "@/components/GalleryMosaic";
import HeroSlider from "@/components/HeroSlider";
import InstagramFeed from "@/components/InstagramFeed";
import JournalCard from "@/components/JournalCard";
import PartnerLogos from "@/components/sections/PartnerLogos";
import QuotePromptModal from "@/components/QuotePromptModal";
import Reviews from "@/components/Reviews";
import ServiceAreaPostcards from "@/components/ServiceAreaPostcards";
import StoryVideo from "@/components/StoryVideo";
import { Button, TextLink } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: `${company.name} — Exterior Design Studio in Greenville, NC`,
  description: company.description,
  path: "/",
  keywords: [
    "exterior design Greenville NC",
    "landscape design Greenville NC",
    "hardscape Eastern NC",
    "masonry contractor Greenville NC",
    "outdoor lighting Pitt County",
    "irrigation systems Eastern NC",
    "landscape architect Eastern NC",
  ],
});

/* ───── Page-level data ───── */
const heroSlides = [
  photos.heroAman,
  photos.heroBelhaven,
  photos.heroFlagstone,
  photos.heroPool,
  photos.heroPatioFire,
  photos.heroLawn,
].map((p) => ({ src: p.src, alt: p.alt }));

const trustBadges = [
  "Designed Outdoor Living",
  "Eastern NC Craftsmanship",
  `Founded in ${company.founded}`,
  "Drawn Site Plans · 2D & Hand-Sketch",
  "In-House Designers, Masons & Gardeners",
];

// Six-service grid on the homepage — one feature per Yardie service group.
// Picked to span living spaces, foundations, and gardens-and-systems so
// the rail reads as the full breadth of the studio.
const featuredServiceSlugs = [
  "landscapes",
  "patios-pavers",
  "outdoor-kitchens",
  "fire-features",
  "pool-decks",
  "lighting",
];

const serviceBlurbs: Record<string, string> = {
  landscapes:
    "Master plans, planting design, and seasonal upkeep tuned to Pitt County soil and the way you live.",
  "patios-pavers":
    "Brick, paver, and natural-stone patios composed as outdoor rooms — engineered to last twenty years.",
  "outdoor-kitchens":
    "Built-in grills, pizza ovens, masonry cabinetry, and counters — the room that pulls you outside.",
  "fire-features":
    "Masonry fireplaces, fire pits, and hearths designed into the patio — the reason to stay outside.",
  "pool-decks":
    "Paver, travertine, and bluestone decks, coping, and pool-surround landscape, drained and detailed for the long run.",
  lighting:
    "Layered low-voltage path, accent, and architectural lighting — fewer fixtures, better aim, warmer light.",
  // Remaining services keep their blurbs available for the dropdown / footer.
  masonry:
    "Hand-laid stone, brick, and veneer — set by Yardie masons, never subcontracted out.",
  "walkways-driveways":
    "Brick walks, stepping stones, and paver drives — the architecture of the approach.",
  "retaining-walls":
    "Engineered stone and segmental walls — drainage, batter, and reinforcement designed in.",
  "pergolas-pavilions":
    "Cedar, ipe, and stone-column pergolas plus full pavilions and screened porches.",
  "water-features":
    "Spillways, fountains, pondless waterfalls — sound, movement, and reflection in the garden.",
  irrigation:
    "Smart-controller systems sized to plant type and soil — designed to use less water and keep gardens healthier.",
};

// Process — six steps, each photographed at the corresponding moment
// of an actual job. Each photo was vetted to actually show what the
// step says it shows (no drafting photo on a build step, no winter
// dormant garden on a "looking after it" step, etc.).
const processSteps = [
  { num: "01", title: "The conversation",  body: "It starts on the property. We walk it together, look at the architecture, and listen to how you want the space to live. No drawings yet — just the brief.",      photo: projectPhotos.allenDonald.progress1 /* designer + client on the lot */ },
  { num: "02", title: "Reading the site",  body: "Drainage, sun, sightlines, soil, the way the wind moves through. Before we put a line on paper, we understand what the property is asking for.",                  photo: { src: "/projects/process/crew-staking-out-shrubs-01.jpg", alt: "Crew staking out shrub locations during site analysis." } },
  { num: "03", title: "Drawing",           body: "Hand sketches first, then dimensioned plans, then material samples laid against the existing facade. Revision is built into the schedule.",                       photo: staffPhotos.scottDrafting /* Scott actually drafting */ },
  { num: "04", title: "Specifying",        body: "Stone supplier, brick coursework, plant palette, fixture aim, controller schedule. Every detail is specified to the property — never pulled from a stock list.",  photo: projectPhotos.holton.stoneDetail /* finished material detail */ },
  { num: "05", title: "Building",          body: "Yardie masons, gardeners, and irrigation crews execute the drawing. Same designer on site at every milestone — no handoff to a sub you've never met.",            photo: { src: "/projects/process/crew-laying-pavers-patio-01.jpg", alt: "Yardie crew laying pavers on a patio." } },
  { num: "06", title: "Looking after it",  body: "First-year care visits establish plantings, catch any settling, and tune the irrigation through one full growing season. Most clients keep us on year-round.",    photo: projectPhotos.holton.extra13 /* mature established garden corner */ },
];

// Justified-gallery tiles — nine distinct photos, sized to fill two
// mosaic rows on desktop without leaving a sparse trailing row. No
// overlap with hero, pillars, or process-step photos.
const homeGalleryTiles = [
  { src: "/projects/outdoor-kitchens/outdoor-kitchen-grill-stone-base-01.jpg", alt: "Built-in outdoor kitchen with stainless grill and stone-clad cabinetry.", ratio: 16 / 10 },
  { src: "/projects/landscapes/foundation-bed-japanese-maple-01.jpg",          alt: "Foundation bed featuring a specimen Japanese maple.",                     ratio: 3 / 4 },
  { src: "/projects/hardscapes/herringbone-paver-walkway-pillars-01.jpg",      alt: "Herringbone paver walkway threaded between brick pillars.",               ratio: 3 / 2 },
  { src: "/projects/pools/freeform-pool-stone-fireplace-paver-deck-01.jpg",    alt: "Freeform pool with stone fireplace and paver deck.",                      ratio: 4 / 5 },
  { src: "/projects/masonry/may-blvd-fireplace-03.jpg",                        alt: "Patio fireplace integrated into a hand-laid stone surround.",             ratio: 16 / 9 },
  { src: "/projects/hardscapes/colonial-paver-driveway-front-01.jpg",          alt: "Colonial home with a brick paver driveway.",                              ratio: 5 / 4 },
  { src: "/projects/landscapes/autumn-lakes-shaded-corner-07.jpg",             alt: "Shaded garden corner with established planting.",                         ratio: 2 / 3 },
  { src: "/projects/landscapes/williamsburg-109-rear-garden-02.jpg",           alt: "Rear-garden landscape with composed planting beds.",                      ratio: 7 / 5 },
  { src: "/projects/masonry/stone-retaining-wall-bluestone-steps-01.jpg",      alt: "Stone retaining wall with bluestone steps.",                              ratio: 4 / 3 },
];

const featuredAreaSlugs = [
  "greenville", "winterville", "ayden", "farmville",
  "washington", "kinston", "new-bern", "goldsboro", "wilson",
];

// Five high-impact questions that handle objections right before the
// final CTA. Tone matches the Yardie voice: concrete, plainspoken.
const homeFAQ = [
  {
    q: "How does a project usually begin?",
    a: "With a property visit. We walk the site together, listen to how you want to live in the space, and read the architecture of the house. The first conversation is at no cost and there's no pressure to commit afterward.",
  },
  {
    q: "What does a Yardie project cost?",
    a: "Every project is scoped individually after the first property visit. Cost depends on scope, materials, site conditions, and how many disciplines are involved. Once we've walked the property and agreed on the brief, you'll receive a written design fee and an itemized build estimate in writing — with nothing to commit to until you decide to move forward.",
  },
  {
    q: "Do you design and build, or just one or the other?",
    a: "Both, under one studio. Our designers draw the plan, our masons and gardeners install it, and the same designer is on site at every milestone. We don't subcontract the work that bears our name.",
  },
  {
    q: "How long do projects take?",
    a: "Design takes two to six weeks depending on scope. Construction varies — a focused install might take ten days, a full property redesign with hardscape and masonry runs eight to twelve weeks. We share an honest schedule before we start.",
  },
  {
    q: "Where do you work?",
    a: "Our home market is Greenville and the surrounding Pitt County towns — Winterville, Ayden, Farmville. We routinely take projects in Washington, Kinston, New Bern, Goldsboro, Wilson, and Rocky Mount when the property and the brief warrant the travel.",
  },
];

export default async function Home() {
  const featuredServices = featuredServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const articles = journal.slice(0, 3);

  const featuredAreas = featuredAreaSlugs
    .map((slug) => serviceAreas.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map((a) => ({ name: a.name, slug: a.slug }));

  const { reviews: googleReviews, rating: googleRating, totalReviews: googleTotal } =
    await getGoogleReviews();

  const serviceImageFor = (slug: string) =>
    photosByService[slug]?.[0] ?? photos.heroAman;

  return (
    <>
      {/* ────────────────────────────────────────────────────
          HERO — MOBILE: slider fades into bark text section
         ──────────────────────────────────────────────────── */}
      <section className="lg:hidden relative -mt-14 overflow-hidden bg-bark">
        <div className="relative aspect-[4/3] sm:aspect-[5/3]">
          <HeroSlider slides={heroSlides} />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent via-bark/65 to-bark pointer-events-none"
          />
        </div>
      </section>

      <section className="lg:hidden bg-bark text-cream">
        <div className="px-5 sm:px-8 pt-10 sm:pt-12 pb-16 sm:pb-20 text-center">
          <h1 className="font-display text-[36px] sm:text-[44px] text-cream leading-[1.08] tracking-tight font-light max-w-xl mx-auto">
            Designed outdoor living for{" "}
            <span className="italic text-stone">Eastern North Carolina homes.</span>
          </h1>
          <p className="mt-5 text-[15px] sm:text-[16px] text-cream/75 leading-relaxed max-w-md mx-auto">
            Landscapes, hardscapes, masonry, lighting, and irrigation —
            drawn first, built once, looked after for years.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:flex sm:flex-row sm:justify-center gap-3 max-w-sm sm:max-w-none mx-auto">
            <Button href="/quote" variant="ghost-light" arrow className="w-full sm:w-auto">
              Schedule a Consultation
            </Button>
            <Button href="/gallery" variant="ghost-dark" className="w-full sm:w-auto">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          HERO — DESKTOP: overlay
         ──────────────────────────────────────────────────── */}
      <section className="hidden lg:flex relative -mt-[68px] min-h-[100svh] items-end overflow-hidden bg-bark">
        <HeroSlider slides={heroSlides} />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/55 to-bark/15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/55 via-bark/15 to-transparent pointer-events-none" />

        <div className="relative w-full mx-auto max-w-[1400px] px-12 pt-28 pb-20">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-display text-[56px] xl:text-[80px] text-cream leading-[1.0] tracking-tight font-light">
              Designed outdoor living for{" "}
              <span className="italic text-stone">Eastern North Carolina homes.</span>
            </h1>
            <p className="mt-7 text-base text-cream/75 leading-relaxed max-w-md">
              Landscapes, hardscapes, masonry, lighting, and irrigation —
              drawn first, built once, looked after for years.
            </p>

            <div className="mt-10 flex flex-row gap-3">
              <Button href="/quote" variant="ghost-light" arrow>
                Schedule a Consultation
              </Button>
              <Button href="/gallery" variant="ghost-dark">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          TRUST BAR — infinite marquee
         ──────────────────────────────────────────────────── */}
      <section
        aria-label="What we offer"
        className="bg-cream border-y border-border py-5 lg:py-6 relative overflow-hidden"
      >
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <ul className="flex animate-scroll-x w-max footer-label text-clay" aria-hidden>
          {[...trustBadges, ...trustBadges].map((badge, i) => (
            <li key={`${badge}-${i}`} className="flex items-center gap-8 lg:gap-12 px-4 lg:px-6 whitespace-nowrap">
              <span className="block h-1 w-1 rounded-full bg-clay/60" aria-hidden />
              {badge}
            </li>
          ))}
        </ul>

        <ul className="sr-only">
          {trustBadges.map((badge) => (<li key={badge}>{badge}</li>))}
        </ul>
      </section>

      {/* ────────────────────────────────────────────────────
          SERVICES — cards (horizontal swipe on mobile, grid on md+)
         ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream-alt border-y border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12 lg:mb-14 text-center lg:text-left">
              <h2 className="font-display text-[34px] sm:text-[40px] lg:text-[56px] text-bark leading-[1.04] tracking-tight font-light max-w-[16ch] mx-auto lg:mx-0">
                Designed and built{" "}
                <span className="italic text-moss">in-house.</span>
              </h2>
              <p className="max-w-sm mx-auto lg:mx-0 text-[14.5px] sm:text-[15px] text-clay leading-relaxed">
                Six disciplines under one roof. Most projects we draw involve
                some mix of them.
              </p>
            </div>
          </div>

          <ul
            className="
              flex md:grid md:grid-cols-2 lg:grid-cols-3
              gap-4 sm:gap-5 lg:gap-6
              overflow-x-auto md:overflow-visible
              snap-x snap-mandatory md:snap-none
              scrollbar-hide
              px-5 sm:px-8 lg:px-12
              pb-2 md:pb-0
            "
          >
            {featuredServices.map((service) => {
              const photo = serviceImageFor(service.slug);
              return (
                <li
                  key={service.slug}
                  className="snap-start shrink-0 w-[78vw] sm:w-[60vw] md:w-auto"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col h-full bg-stone/60 border border-border hover:border-moss/40 transition-colors duration-500"
                  >
                    <div className="relative aspect-[5/6] sm:aspect-[4/5] overflow-hidden bg-stone">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width:640px) 78vw, (max-width:768px) 60vw, (max-width:1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-1 bg-cream">
                      <h3 className="font-display text-[22px] sm:text-[24px] lg:text-[30px] text-bark leading-[1.1] tracking-tight font-light">
                        {service.name}
                      </h3>
                      <p className="mt-3 sm:mt-4 text-[14px] sm:text-[14.5px] text-clay leading-relaxed flex-1">
                        {serviceBlurbs[service.slug] ?? service.tagline}
                      </p>
                      <span className="mt-6 sm:mt-7 inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.22em] uppercase font-medium text-bark group-hover:text-moss transition-colors duration-300">
                        <span aria-hidden className="block h-px w-6 bg-bark group-hover:w-10 group-hover:bg-moss transition-all duration-500 ease-out" />
                        Explore
                        <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="md:hidden mt-5 flex items-center justify-center gap-2 footer-label text-clay">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Swipe
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          <div className="px-5 sm:px-8 lg:px-12">
            <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-8 sm:pt-10">
              <p className="text-[13.5px] sm:text-[14px] text-clay max-w-md">
                Every yard we draw involves some mix of these five — composed against the architecture and the way you want to live.
              </p>
              <TextLink href="/services">Explore All Services</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          PORTFOLIO MOSAIC — 2-col masonry mobile,
          justified gallery on tablet+
         ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12 lg:mb-14 text-center lg:text-left">
            <h2 className="font-display text-[34px] sm:text-[40px] lg:text-[56px] text-bark leading-[1.04] tracking-tight font-light max-w-[20ch] mx-auto lg:mx-0">
              A look at what we&rsquo;ve{" "}
              <span className="italic text-moss">been building lately.</span>
            </h2>
            <div className="flex justify-center lg:justify-end">
              <TextLink href="/gallery">View Full Gallery</TextLink>
            </div>
          </div>

          {/* Mobile — 2-col masonry. Whole grid links to /gallery so any
              tap navigates; cursor-pointer makes that affordance obvious. */}
          <Link
            href="/gallery"
            aria-label="Open the full gallery"
            className="md:hidden block columns-2 gap-3 [column-fill:balance] cursor-pointer"
          >
            {homeGalleryTiles.slice(0, 6).map((tile, i) => (
              <figure
                key={`${tile.src}-${i}`}
                className="relative mb-3 break-inside-avoid overflow-hidden bg-stone"
                style={{ aspectRatio: tile.ratio }}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </Link>

          {/* Tablet+ — justified gallery, also linked through to /gallery. */}
          <Link
            href="/gallery"
            aria-label="Open the full gallery"
            className="hidden md:block cursor-pointer group"
          >
            <GalleryMosaic tiles={homeGalleryTiles} />
          </Link>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          PROCESS — six steps on dark bark.
          Mobile: horizontal swipe rail with snap, mirroring the
          Services section pattern. Saves a massive amount of vertical
          scroll vs. the previous stacked-card column. Tablet+ keeps
          the editorial multi-column grid.
         ──────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-24 lg:py-32 bg-bark text-cream relative overflow-hidden">
        <Image
          src={photos.aboutCraft.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bark via-bark/90 to-bark/70" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 mb-10 sm:mb-14 lg:mb-16 items-end">
              <div className="lg:col-span-7">
                <h2 className="font-display text-[32px] sm:text-5xl lg:text-[64px] text-cream leading-[1.04] tracking-tight font-light max-w-[18ch]">
                  From first walk
                  <span className="italic text-stone"> to finished outdoor space.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[14.5px] sm:text-[16px] text-cream/65 leading-relaxed">
                Six clear steps, one team, no handoffs to subs you&rsquo;ve never met. The point is simple: you should know exactly what&rsquo;s happening, from the first conversation to the last walkthrough.
              </p>
            </div>
          </div>

          <ul
            className="
              flex sm:grid sm:grid-cols-2 lg:grid-cols-3
              gap-4 sm:gap-x-10 sm:gap-y-12 lg:gap-y-16
              overflow-x-auto sm:overflow-visible
              snap-x snap-mandatory sm:snap-none
              scrollbar-hide
              px-5 sm:px-8 lg:px-12
              pb-2 sm:pb-0
            "
          >
            {processSteps.map((step) => (
              <li
                key={step.num}
                className="
                  snap-start shrink-0 w-[78vw] sm:w-auto
                  bg-dark-surface/70 sm:bg-transparent
                  border border-cream/10 sm:border-0
                  sm:border-t sm:border-cream/15
                  p-6 sm:p-0 sm:pt-7
                "
              >
                <p className="font-display text-[44px] sm:text-5xl text-stone/85 leading-none tracking-tight">
                  {step.num}
                </p>
                <h3 className="mt-4 sm:mt-6 text-[12.5px] sm:text-[14px] font-medium uppercase tracking-[0.18em] text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] sm:text-[14.5px] text-cream/65 leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ul>

          {/* Swipe hint — mobile only */}
          <div className="sm:hidden mt-5 px-5 flex items-center justify-center gap-2 text-[10.5px] tracking-[0.22em] uppercase text-cream/50">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Swipe through the steps
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          DRAWN VS BUILT — drag-to-reveal before/after
         ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream text-bark border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-10 sm:mb-14 lg:mb-16">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[64px] text-bark leading-[1.04] tracking-tight font-light max-w-[18ch]">
                Drawn first.{" "}
                <span className="italic text-moss">Built once.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] sm:text-[16px] text-clay leading-relaxed max-w-md">
                Every Yardie project starts as a drawing. Drag the slider to see the
                3D plan beside the finished build &mdash; the design intent is the
                installed result.
              </p>
            </div>
          </div>

          <div className="relative">
            <BeforeAfterSlider
              before={{ src: "/renderings/minshew-rendering-02.png", alt: "3D rendering of the Minshew outdoor kitchen and pavilion" }}
              after={{ src: "/renderings/minshew-front-yard-02.png", alt: "The Minshew pavilion as built" }}
              beforeLabel="3D Plan"
              afterLabel="Built"
              className="aspect-[16/10] sm:aspect-[16/9]"
            />
            <p className="mt-4 sm:mt-5 text-[11.5px] tracking-[0.22em] uppercase text-clay/70">
              Minshew Residence &mdash; Greenville, NC &middot; Drag to compare
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          INSIDE THE STUDIO — story video + brand intro
         ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 w-[68vw] max-w-[300px] sm:w-full sm:max-w-[360px] lg:max-w-none mx-auto">
              <StoryVideo
                poster={staffPhotos.scottDrafting.src}
                alt="Yardie founder Scott Baldwin drafting a site plan."
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="font-display text-[26px] sm:text-[30px] lg:text-[36px] text-bark leading-[1.22] tracking-tight max-w-[28ch] mx-auto lg:mx-0 text-center lg:text-left">
                I started Yardie because most yards are an{" "}
                <span className="italic text-moss">afterthought</span> &mdash;
                handed off, subbed out, finished but not quite right.
              </p>

              <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] text-earth leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                We do it differently. We draw the property ourselves, our crew
                builds it, and we come back season after season to make sure it
                still feels like the place you wanted. That&rsquo;s the only
                way we know how to work.
              </p>

              <div className="mt-9 sm:mt-11 flex flex-col items-center lg:items-start">
                <span className="font-signature text-[20px] sm:text-[24px] text-bark leading-[1.2] -rotate-[3deg] origin-left">
                  Scott Baldwin
                </span>
                <span className="font-mono text-[10.5px] tabular-nums text-clay/70 tracking-[0.22em] uppercase mt-3">
                  Founder &middot; Yardie
                </span>
              </div>

              <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start">
                <TextLink href="/about">Read about the studio</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          REVIEWS · PARTNERS
         ──────────────────────────────────────────────────── */}
      <Reviews
        googleReviews={googleReviews}
        rating={googleRating}
        totalReviews={googleTotal}
      />
      <PartnerLogos />

      {/* ────────────────────────────────────────────────────
          SERVICE AREAS — postcard rail
         ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-14 text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[56px] text-bark leading-[1.06] tracking-tight font-light">
                Designed across Greenville{" "}
                <span className="italic text-moss">and Eastern North Carolina.</span>
              </h2>
              <p className="mt-5 text-[14.5px] sm:text-[15px] text-clay leading-relaxed max-w-md mx-auto lg:mx-0">
                Postcards from the towns and counties where we work — from Pitt County to the coast.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <TextLink href="/service-areas">See All Service Areas</TextLink>
            </div>
          </div>
        </div>
        <ServiceAreaPostcards areas={featuredAreas} />

        {/* Wikimedia attribution for the city photos on each postcard. */}
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-6">
          <p className="text-[11px] text-clay/70 leading-relaxed text-center lg:text-left">
            City photos courtesy of{" "}
            <a
              href="https://commons.wikimedia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bark transition-colors"
            >
              Wikimedia Commons
            </a>
            , used under{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bark transition-colors"
            >
              CC BY-SA 4.0
            </a>
            .
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          INSTAGRAM — drift section
         ──────────────────────────────────────────────────── */}
      <InstagramFeed />

      {/* ────────────────────────────────────────────────────
          ARTICLES
         ──────────────────────────────────────────────────── */}
      {articles.length > 0 && (
        <section className="py-16 sm:py-24 lg:py-32 bg-cream-alt border-y border-border">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12 lg:mb-14 text-center lg:text-left">
              <div className="max-w-xl mx-auto lg:mx-0">
                <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[56px] text-bark leading-[1.06] tracking-tight font-light">
                  Planning your{" "}
                  <span className="italic text-moss">outdoor space?</span>
                </h2>
              </div>
              <div className="flex justify-center lg:justify-end">
                <TextLink href="/journal">All Articles</TextLink>
              </div>
            </div>

            {/* Mobile — featured + list */}
            <div className="md:hidden">
              {articles[0] && (
                <Link href={`/journal/${articles[0].slug}`} className="group block mb-8">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                    <Image
                      src={articles[0].coverImage}
                      alt={articles[0].title}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pt-5">
                    <h3 className="mt-2.5 font-display text-[24px] text-bark leading-[1.2] group-hover:text-moss transition-colors font-light tracking-tight">
                      {articles[0].title}
                    </h3>
                    <p className="mt-2.5 text-[14px] text-clay leading-relaxed line-clamp-2">
                      {articles[0].excerpt}
                    </p>
                  </div>
                </Link>
              )}

              {articles.slice(1).length > 0 && (
                <ul className="border-t border-border">
                  {articles.slice(1).map((post) => (
                    <li key={post.slug} className="border-b border-border">
                      <Link
                        href={`/journal/${post.slug}`}
                        className="group flex items-start gap-4 py-5"
                      >
                        <div className="relative shrink-0 h-20 w-20 overflow-hidden bg-stone">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-[18px] text-bark leading-[1.25] group-hover:text-moss transition-colors line-clamp-2 font-light tracking-tight">
                            {post.title}
                          </h3>
                        </div>
                        <svg
                          className="shrink-0 h-3 w-3 mt-2 text-clay group-hover:text-moss group-hover:translate-x-1 transition-all"
                          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Tablet+ — 3-up grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
              {articles.map((post) => (
                <JournalCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────────────────────────────────────────
          FAQ — handle the last objections before the close
         ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream text-bark border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[64px] text-bark leading-[1.04] tracking-tight font-light max-w-[14ch]">
                Common{" "}
                <span className="italic text-moss">questions.</span>
              </h2>
              <p className="mt-6 text-[15px] sm:text-[16px] text-clay leading-relaxed max-w-md">
                The questions we&rsquo;re asked most often before the first site visit. If yours isn&rsquo;t here, send us a note &mdash; we answer every email ourselves.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <TextLink href="/faq">All Questions</TextLink>
                <Link
                  href="/contact"
                  className="text-[13px] text-clay hover:text-bark transition-colors tracking-wide"
                >
                  or send a message &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <FAQAccordion items={homeFAQ} />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          FINAL CTA
         ──────────────────────────────────────────────────── */}
      <section className="relative py-32 sm:py-40 overflow-hidden bg-bark">
        <Image
          src={photos.heroAman.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/85 to-bark/65" />
        <div className="relative mx-auto max-w-3xl text-center px-5 sm:px-8">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[72px] text-cream leading-[1.05] tracking-tight font-light">
            Ready to turn your yard into{" "}
            <span className="italic text-stone">the best part of your home?</span>
          </h2>
          <p className="mt-7 text-[17px] text-cream/75 leading-relaxed max-w-xl mx-auto">
            Tell us about your property. The first conversation is at no cost — we walk the site, listen, and let you know whether we&rsquo;re the right studio for the project.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/quote" variant="ghost-light" arrow>
              Schedule a Consultation
            </Button>
            <Button href="/gallery" variant="ghost-dark">
              View Our Work
            </Button>
          </div>
          <p className="mt-10 text-[12px] text-cream/55 tracking-wide">
            Or call <a href={company.phoneTel} className="text-cream font-medium hover:text-stone transition-colors">{company.phone}</a>
          </p>
        </div>
      </section>

      <Script
        id="ld-home-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }])),
        }}
      />

      <QuotePromptModal />
    </>
  );
}
