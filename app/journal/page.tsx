import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { journal } from "@/lib/content";
import { photos } from "@/lib/media";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import JournalGrid from "@/components/journal/JournalGrid";

export const metadata: Metadata = buildMetadata({
  title: "Landscape Design Journal & Ideas | Yardie, Greenville NC",
  description:
    "Field notes from the Yardie studio: landscape and hardscape ideas, cost guides, project stories, and outdoor-living reference for homeowners across Eastern North Carolina.",
  path: "/journal",
  keywords: [
    "landscape design ideas Eastern NC",
    "hardscape ideas",
    "outdoor kitchen ideas",
    "landscaping cost Greenville NC",
    "paver patio cost",
    "Eastern NC landscape blog",
  ],
});

// Sort newest first by parsing the human-readable date string.
function parseDate(s: string) {
  const t = Date.parse(s);
  return Number.isNaN(t) ? 0 : t;
}

export default function JournalPage() {
  const sorted = [...journal].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
        ])}
      />

      {/* ── Header (dark, keeps the transparent nav legible) ── */}
      <section className="relative -mt-14 lg:-mt-[68px] bg-bark text-cream overflow-hidden">
        <Image
          src={photos.heroFlagstone.src}
          alt=""
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bark via-bark/85 to-bark/70" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-32 lg:pt-44 pb-14 lg:pb-20">
          <h1 className="font-display text-[46px] sm:text-6xl lg:text-[84px] text-cream leading-[1] tracking-tight font-light max-w-[16ch]">
            The Yardie <span className="italic text-stone">Journal.</span>
          </h1>
          <p className="mt-6 text-[15px] sm:text-[16px] text-cream/75 leading-relaxed max-w-xl">
            Field notes from the studio: design ideas, material and cost guides, and project
            stories for outdoor living across Eastern North Carolina.
          </p>
        </div>
      </section>

      {/* ── Featured (newest) post ── */}
      <section className="bg-cream py-14 sm:py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Link
            href={`/journal/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
          >
            <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden bg-stone">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[12.5px] text-clay">
                <span className="text-moss font-medium">Latest</span>
                <span aria-hidden>&middot;</span>
                <span>{featured.category}</span>
                <span aria-hidden>&middot;</span>
                <span>{featured.readTime} min read</span>
              </div>
              <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[52px] text-bark leading-[1.06] tracking-tight font-light group-hover:text-moss transition-colors">
                {featured.title}
              </h2>
              <p className="mt-5 text-[15.5px] sm:text-[16px] text-earth leading-relaxed max-w-prose">
                {featured.excerpt}
              </p>
              <p className="mt-6 text-[12.5px] text-clay">{featured.date}</p>
              <span className="mt-6 inline-block text-[13.5px] font-medium text-bark transition-colors group-hover:text-moss">
                <span className="relative pb-1">
                  Read the article
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-current opacity-20" />
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-moss origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                </span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── All articles — filterable grid ── */}
      <section className="bg-cream py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <h2 className="font-display text-[28px] sm:text-[34px] lg:text-[40px] text-bark leading-[1.1] tracking-tight font-light mb-8 sm:mb-10">
            All articles
          </h2>
          <JournalGrid posts={rest} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-bark">
        <Image
          src={photos.heroFlagstone.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bark via-bark/85 to-bark/65" />
        <div className="relative mx-auto max-w-3xl text-center px-5 sm:px-8">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[60px] text-cream leading-[1.05] tracking-tight font-light">
            Have a project{" "}
            <span className="italic text-stone">on your mind?</span>
          </h2>
          <p className="mt-7 text-[16.5px] text-cream/75 leading-relaxed max-w-xl mx-auto">
            Reading is one thing. Walking the property together is another. The first conversation is at no cost.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-cream text-bark text-[14px] font-medium hover:bg-stone transition-colors"
            >
              Request a consultation
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
