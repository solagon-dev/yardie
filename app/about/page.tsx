import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `About ${company.name} — Exterior Design Studio in Greenville, NC`,
  description:
    `${company.legalName} is an exterior design studio in ${company.city}, ${company.region}, founded in ${company.founded}. We design and build landscapes, hardscapes, masonry, lighting, and irrigation as one composition.`,
  path: "/about",
  keywords: [
    `${company.name} about`,
    "exterior design studio Greenville NC",
    "landscape designer Eastern NC",
    "Yardie Design",
    "Scott Baldwin Yardie",
  ],
});

const stats = [
  { figure: "100+", label: "Clients served" },
  { figure: "20+",  label: "Years of experience" },
  { figure: "30+",  label: "Designers & craftsmen" },
];

const whatWeDo = [
  {
    num: "01",
    title: "Plan",
    body:
      "Every project starts on the property — site walks, drainage, sun, sightlines, the way the architecture meets the ground. From there we draft a design brief: budget, timeline, scope, and the look and feel we're working toward. Nothing gets built without a drawing it answers to.",
  },
  {
    num: "02",
    title: "Design",
    body:
      "Hand sketches first, then dimensioned plans, then material samples laid against the home. We compose plant palette, masonry, lighting, and irrigation as one piece — so the lit columns answer the planted bed and the patio meets the lawn cleanly.",
  },
  {
    num: "03",
    title: "Steward",
    body:
      "An installed landscape is a starting line, not a finish. First-year care visits establish plantings and tune the irrigation through one full growing season; most clients keep us on year-round. Your investment should look better in year five than it did in year one.",
  },
];

type TeamMember = {
  name: string;
  title: string;
  initials: string;
  craft: string;
};

const team: TeamMember[] = [
  { name: "Scott Baldwin", title: "Founder & Principal", initials: "SB", craft: "Walks every property. Draws every plan." },
  { name: "Linda Taylor",  title: "Lead Designer",       initials: "LT", craft: "Sketches first, dimensions second." },
  { name: "Bill Davis",    title: "Operations Manager",  initials: "BD", craft: "Keeps the schedule, the crew, the budget." },
  { name: "Mario Taxho",   title: "Project Manager",     initials: "MT", craft: "Runs the build from groundbreak to walk-through." },
  { name: "Sky Baldwin",   title: "Creative Director",   initials: "SB", craft: "Shapes the studio voice and visual standard." },
];

const story = [
  "Scott Baldwin started Yardie in Greenville, North Carolina with a stubborn idea: that an Eastern NC yard could be a piece of considered design — not just a graded surface and whatever the nursery had on sale.",
  "From the first job, the work has been about how a family will actually use a place. Where they cook, where the children play, where they sit at the end of the day. The drawing flows from that — never the other way around.",
  "Twenty years on, we've completed hundreds of projects across Pitt County and the broader Eastern NC region. The team has grown to include designers, masons, gardeners, and irrigation crews — but the operating model is the same: drawn first, built once, looked after for years.",
  "We work with homeowners who care about their properties — who want exterior spaces that feel as considered as the interiors they've spent years perfecting.",
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1 · HERO — image-led, restrained
          ═══════════════════════════════════════════════════════ */}
      <section className="relative -mt-14 lg:-mt-[68px] min-h-[78svh] lg:min-h-[82svh] flex items-end bg-bark overflow-hidden">
        <Image
          src="/staff/scott-and-wife-portrait.jpg"
          alt="Scott Baldwin in the Yardie design studio — Greenville, NC"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/55 to-bark/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/55 via-transparent to-transparent" />

        <div className="relative w-full mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-32 pb-14 lg:pb-20">
          <p className="font-mono text-[11px] tabular-nums text-stone/85 tracking-[0.22em] mb-6">
            About &middot; The Yardie Studio
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[80px] xl:text-[96px] text-cream leading-[0.98] tracking-tight max-w-[16ch] font-light">
            Rooted in Greenville.{" "}
            <span className="italic text-stone">Designed for life outside.</span>
          </h1>
          <p className="mt-7 text-[16px] sm:text-[18px] text-cream/80 leading-relaxed max-w-2xl">
            Yardie is an exterior design company that transforms outdoor living spaces into
            vibrant, enduring extensions of your home. We believe every yard has extraordinary
            potential.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2 · STATS BAND — three figures, restrained
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt text-bark border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <ul className="grid grid-cols-3 gap-y-8 gap-x-6 lg:gap-x-12">
            {stats.map((s, i) => (
              <li key={s.label} className={i > 0 ? "lg:border-l lg:border-border lg:pl-10" : ""}>
                <p className="font-display text-[44px] sm:text-[64px] lg:text-[88px] text-bark leading-none tracking-tight font-light">
                  {s.figure}
                </p>
                <p className="mt-3 sm:mt-4 text-[11px] sm:text-[12px] text-clay tracking-[0.22em] uppercase">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3 · OUR STORY — image + body copy, two-column editorial
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            {/* Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                <Image
                  src="/staff/scott-baldwin.jpg"
                  alt="Scott Baldwin, founder of Yardie Design"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-bark/80 via-bark/15 to-transparent">
                  <p className="font-mono text-[10.5px] tabular-nums text-cream/85 tracking-[0.22em] uppercase">
                    Scott Baldwin &middot; Founder
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="lg:col-span-6 order-1 lg:order-2 lg:sticky lg:top-28">
              <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5 inline-flex items-baseline gap-3">
                <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
                Our story
              </p>
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] text-bark leading-[1.04] tracking-tight font-light max-w-[18ch]">
                Building something{" "}
                <span className="italic text-moss">that lasts.</span>
              </h2>
              <div className="mt-7 space-y-5 text-[16px] sm:text-[16.5px] text-earth leading-[1.7] max-w-prose">
                {story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-8 text-[13px] text-clay tracking-wide italic">
                — Founded {company.founded} &middot; {company.market}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4 · WHAT WE DO — 3-column process snapshot
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 sm:mb-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5 inline-flex items-baseline gap-3">
                <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
                What we do
              </p>
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] text-bark leading-[1.04] tracking-tight font-light max-w-[20ch]">
                From concept to{" "}
                <span className="italic text-moss">ongoing care.</span>
              </h2>
            </div>
          </div>

          <ol className="grid md:grid-cols-3 gap-x-10 lg:gap-x-16 border-t border-border">
            {whatWeDo.map((item, i) => (
              <li
                key={item.num}
                className={`pt-7 sm:pt-9 pb-9 sm:pb-12 ${i > 0 ? "border-t md:border-t-0 md:border-l border-border md:pl-10 lg:pl-16" : ""}`}
              >
                <p className="font-display text-[44px] sm:text-[52px] lg:text-[64px] text-moss leading-none tracking-tight font-light">
                  {item.num}
                </p>
                <h3 className="mt-5 font-display text-[24px] sm:text-[26px] lg:text-[30px] text-bark leading-tight tracking-tight font-light">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14.5px] sm:text-[15px] text-earth leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5 · OUR PEOPLE — editorial roster (no photos required)
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-12 sm:mb-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5 inline-flex items-baseline gap-3">
                <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
                Our people
              </p>
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] text-bark leading-[1.04] tracking-tight font-light max-w-[20ch]">
                The people{" "}
                <span className="italic text-moss">behind the work.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-[14.5px] text-clay leading-relaxed max-w-md">
              A small studio of designers, masons, and gardeners working out of one office in Greenville &mdash; same names from first sketch to last walk-through.
            </p>
          </div>

          {/* ── Editorial roster ── */}
          <ol className="border-t border-border">
            {team.map((person, i) => (
              <li
                key={person.name}
                className="group relative grid grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-center border-b border-border py-7 sm:py-9 lg:py-11 transition-colors duration-500 hover:bg-cream-alt/60"
              >
                {/* Index number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-mono text-[11px] tabular-nums text-clay/65 tracking-[0.22em]">
                    0{i + 1}
                  </span>
                </div>

                {/* Initials monogram */}
                <div className="col-span-3 sm:col-span-2 lg:col-span-2 flex items-center">
                  <span
                    aria-hidden
                    className="relative inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 border border-border bg-cream-alt"
                  >
                    <span className="font-display italic text-[26px] sm:text-[28px] lg:text-[34px] text-moss leading-none tracking-tight">
                      {person.initials}
                    </span>
                  </span>
                </div>

                {/* Name + title */}
                <div className="col-span-7 sm:col-span-5 lg:col-span-4">
                  <p className="font-display text-[24px] sm:text-[28px] lg:text-[36px] text-bark leading-[1.05] tracking-tight">
                    {person.name}
                  </p>
                  <p className="mt-2 font-mono text-[10.5px] tabular-nums text-clay/70 tracking-[0.22em] uppercase">
                    {person.title}
                  </p>
                </div>

                {/* Craft / what they do — italic display, hidden on the
                    smallest breakpoint to keep the row tight there */}
                <div className="hidden sm:block sm:col-span-4 lg:col-span-5">
                  <p className="font-display italic text-[16px] sm:text-[18px] lg:text-[22px] text-earth leading-[1.35] tracking-tight">
                    &ldquo;{person.craft}&rdquo;
                  </p>
                </div>

                {/* Hover-revealed left accent */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-px bg-moss origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6 · PHILOSOPHY — Scott pull-quote, dark band
          ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-bark text-cream overflow-hidden">
        <Image
          src="/projects/landscapes/may-blvd-canopy-trees-08.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/85 to-bark/65" />
        <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36">
          <p aria-hidden className="font-display italic text-stone/55 text-[80px] lg:text-[120px] leading-none mb-2 text-center">
            &ldquo;
          </p>
          <blockquote className="font-display text-[24px] sm:text-[32px] lg:text-[44px] text-cream leading-[1.18] tracking-tight font-light max-w-[36ch] mx-auto text-center">
            Design should be an experience, not just a product. Each project is a collaboration &mdash; one that reflects the homeowner&rsquo;s personality while integrating with the natural environment.
          </blockquote>
          <p className="mt-9 text-center font-display text-stone text-[18px] tracking-tight">
            Scott Baldwin &middot; Founder, Yardie Design
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7 · CTA — work with us
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 text-center">
          <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5">
            Work with us
          </p>
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[60px] text-bark leading-[1.04] tracking-tight font-light max-w-[18ch] mx-auto">
            Let&rsquo;s build{" "}
            <span className="italic text-moss">something together.</span>
          </h2>
          <p className="mt-7 text-[15px] sm:text-[16px] text-earth leading-relaxed max-w-xl mx-auto">
            {company.market}. The first conversation is at no cost &mdash; we walk the property,
            listen, and let you know whether we&rsquo;re the right studio for the project.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-bark text-cream text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-earth transition-colors"
            >
              Request a Quote
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-9 py-4 border border-bark/30 text-bark text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bark hover:text-cream hover:border-bark transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
