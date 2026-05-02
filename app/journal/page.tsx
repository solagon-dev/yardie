import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { journal, type JournalPost } from "@/lib/content";
import { photos } from "@/lib/media";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Journal — Yardie",
  description:
    "Field notes from the Yardie studio — design ideas, project stories, and outdoor-living reference for homeowners across Eastern North Carolina.",
  path: "/journal",
});

// Sort newest first by parsing the human-readable date string.
function parseDate(s: string) {
  const t = Date.parse(s);
  return Number.isNaN(t) ? 0 : t;
}

export default function JournalPage() {
  const sorted = [...journal].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  const cover = sorted[0];
  const latest = sorted.slice(1, 4);
  const archive = sorted.slice(4);

  // Group everything by category for the topic index.
  const categories = Array.from(new Set(sorted.map((p) => p.category)));
  const byCategory: Record<string, JournalPost[]> = Object.fromEntries(
    categories.map((c) => [c, sorted.filter((p) => p.category === c)])
  );

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1 · COVER — featured post as a magazine front-of-book
          ═══════════════════════════════════════════════════════ */}
      <section className="relative -mt-14 lg:-mt-[68px] min-h-[88svh] flex items-end bg-bark overflow-hidden">
        <Image
          src={cover.coverImage}
          alt={cover.title}
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/55 to-bark/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/55 via-transparent to-transparent" />

        <div className="relative w-full mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-32 pb-14 lg:pb-20">
          <p className="font-mono text-[11px] tabular-nums text-stone/85 tracking-[0.22em] mb-7">
            Journal &middot; The Yardie Studio
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <p className="font-display italic text-stone text-[18px] tracking-tight font-light mb-6">
                Cover story &middot; {cover.category}
              </p>
              <Link href={`/journal/${cover.slug}`} className="group inline-block">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-[88px] xl:text-[100px] text-cream leading-[0.98] tracking-tight max-w-[18ch] font-light group-hover:text-stone transition-colors">
                  {cover.title}
                </h1>
              </Link>
              <p className="mt-7 text-[16px] sm:text-[17px] text-cream/80 leading-relaxed max-w-2xl">
                {cover.excerpt}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-[12.5px] text-cream/65 tracking-wide mb-4">
                {cover.date} &middot; {cover.readTime} min read
              </p>
              <Link
                href={`/journal/${cover.slug}`}
                className="group inline-flex items-center justify-center gap-3 text-[11.5px] tracking-[0.22em] uppercase font-medium text-cream hover:text-stone transition-colors"
              >
                <span aria-hidden className="block h-px w-6 bg-cream group-hover:w-12 group-hover:bg-stone transition-all duration-500 ease-out" />
                Read the cover story
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2 · CATEGORY NAV — sticky strip with anchors
          ═══════════════════════════════════════════════════════ */}
      <nav
        aria-label="Journal categories"
        className="bg-cream border-b border-border sticky top-14 lg:top-[68px] z-30"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0">
            <li className="flex-shrink-0">
              <a
                href="#latest"
                className="inline-flex items-center justify-center px-3 py-1.5 text-[10.5px] tracking-[0.22em] uppercase text-bark hover:text-moss transition-colors whitespace-nowrap"
              >
                Latest
              </a>
            </li>
            {categories.map((c) => (
              <li key={c} className="flex-shrink-0">
                <a
                  href={`#${c.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center justify-center gap-2 px-3 py-1.5 text-[10.5px] tracking-[0.22em] uppercase text-clay hover:text-moss transition-colors whitespace-nowrap"
                >
                  <span className="text-stone tabular-nums">{String(byCategory[c].length).padStart(2, "0")}</span>
                  {c}
                </a>
              </li>
            ))}
            <li className="flex-shrink-0">
              <a
                href="#archive"
                className="inline-flex items-center justify-center px-3 py-1.5 text-[10.5px] tracking-[0.22em] uppercase text-clay hover:text-moss transition-colors whitespace-nowrap"
              >
                Archive
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════
          3 · LATEST — alternating editorial spreads
          ═══════════════════════════════════════════════════════ */}
      <section id="latest" className="bg-cream py-16 sm:py-24 lg:py-32 border-b border-border scroll-mt-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
            <div>
              <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5 inline-flex items-baseline gap-3">
                <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
                Latest
              </p>
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] text-bark leading-[1.06] tracking-tight font-light max-w-[18ch]">
                New from{" "}
                <span className="italic text-moss">the studio.</span>
              </h2>
            </div>
            <p className="text-[14.5px] text-clay max-w-md leading-relaxed">
              Three recent dispatches from the desk and the field &mdash; design ideas, material notes, and project stories.
            </p>
          </div>

          <ol className="space-y-16 sm:space-y-24 lg:space-y-32">
            {latest.map((post, i) => {
              const reverse = i % 2 === 1;
              return (
                <li key={post.slug}>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="group grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                  >
                    <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-[5/4] overflow-hidden bg-stone">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(min-width:1024px) 58vw, 100vw"
                          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                    <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                      <p className="font-mono text-[10.5px] tabular-nums text-clay/70 tracking-[0.22em] uppercase mb-4">
                        {String(i + 2).padStart(2, "0")} &middot; {post.category}
                      </p>
                      <h3 className="font-display text-[28px] sm:text-[36px] lg:text-[48px] text-bark leading-[1.08] tracking-tight font-light group-hover:text-moss transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-5 text-[15.5px] sm:text-[16px] text-earth leading-relaxed max-w-prose">
                        {post.excerpt}
                      </p>
                      <p className="mt-6 text-[12.5px] text-clay/70 tracking-wide">
                        {post.date} &middot; {post.readTime} min read
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4 · BY TOPIC — grouped sections per category
          ═══════════════════════════════════════════════════════ */}
      {categories.map((cat) => {
        const posts = byCategory[cat];
        if (posts.length === 0) return null;
        const anchor = cat.toLowerCase().replace(/\s+/g, "-");
        return (
          <section
            key={cat}
            id={anchor}
            className="bg-cream-alt py-16 sm:py-24 lg:py-28 border-b border-border scroll-mt-32 [&:nth-of-type(even)]:bg-cream"
          >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-10 sm:mb-14 items-end">
                <div className="lg:col-span-7">
                  <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-4 inline-flex items-baseline gap-3">
                    <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
                    Topic
                  </p>
                  <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[52px] text-bark leading-[1.06] tracking-tight font-light max-w-[18ch]">
                    On {cat.toLowerCase()}.
                  </h2>
                </div>
                <p className="lg:col-span-5 text-[13px] text-clay tracking-[0.18em] uppercase lg:text-right">
                  {String(posts.length).padStart(2, "0")} {posts.length === 1 ? "Article" : "Articles"}
                </p>
              </div>

              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
                {posts.map((post, i) => (
                  <li key={post.slug}>
                    <Link href={`/journal/${post.slug}`} className="group block">
                      <div className="relative aspect-[5/4] overflow-hidden bg-stone">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(min-width:1024px) 30vw, 50vw"
                          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                      <p className="mt-5 font-mono text-[10.5px] tabular-nums text-clay/70 tracking-[0.22em] uppercase">
                        {String(i + 1).padStart(2, "0")} &middot; {post.readTime} min read
                      </p>
                      <h3 className="mt-2 font-display text-[22px] sm:text-[24px] text-bark leading-[1.18] tracking-tight font-light group-hover:text-moss transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] text-clay leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <p className="mt-3 text-[12px] text-clay/65 tracking-wide">
                        {post.date}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════════════════════════════════════════
          5 · ARCHIVE — flat index of everything
          ═══════════════════════════════════════════════════════ */}
      {archive.length > 0 && (
        <section id="archive" className="bg-cream py-16 sm:py-24 lg:py-32 scroll-mt-32 border-b border-border">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">
            <div className="mb-10 sm:mb-12">
              <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-4 inline-flex items-baseline gap-3">
                <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
                Archive
              </p>
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] text-bark leading-[1.04] tracking-tight font-light max-w-[18ch]">
                Everything we&rsquo;ve{" "}
                <span className="italic text-moss">published.</span>
              </h2>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {sorted.map((post, i) => (
                <li key={post.slug}>
                  <Link href={`/journal/${post.slug}`} className="group grid grid-cols-12 gap-4 py-6 items-baseline">
                    <span className="col-span-1 font-mono text-[11px] tabular-nums text-clay/65">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-7 sm:col-span-6 font-display text-[20px] sm:text-[22px] text-bark leading-tight tracking-tight font-light group-hover:text-moss transition-colors">
                      {post.title}
                    </span>
                    <span className="hidden sm:inline col-span-3 text-[11.5px] text-clay tracking-[0.18em] uppercase">
                      {post.category}
                    </span>
                    <span className="col-span-4 sm:col-span-2 text-[11.5px] text-clay/70 tracking-wide text-right">
                      {post.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          6 · CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-bark">
        <Image
          src={photos.heroFlagstone.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/85 to-bark/65" />
        <div className="relative mx-auto max-w-3xl text-center px-5 sm:px-8">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[60px] text-cream leading-[1.05] tracking-tight font-light">
            Have a project{" "}
            <span className="italic text-stone">on your mind?</span>
          </h2>
          <p className="mt-7 text-[16.5px] text-cream/75 leading-relaxed max-w-xl mx-auto">
            Reading is one thing. Walking the property together is another. The first conversation is at no cost.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-3 px-9 py-4 bg-cream text-bark text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-stone transition-colors"
            >
              Request a Quote
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
