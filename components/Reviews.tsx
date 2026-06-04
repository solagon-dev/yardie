// ============================================================
// Reviews — clean editorial grid of client testimonials.
// Server component. The homepage passes in 5-star reviews fetched
// from Google Places (lib/google-reviews.ts). When the Google API
// isn't configured (or returns nothing), we fall back to the
// curated testimonials array and present them as client stories
// instead of pretending to have Google data.
// ============================================================

import { testimonials, company } from "@/lib/content";
import type { GoogleReview } from "@/lib/google-reviews";

interface ReviewItem {
  quote: string;
  name: string;
  attribution?: string; // city or relative time
  rating: number;       // out of 5
}

function toItem(t: { quote: string; name: string; city?: string; service?: string }): ReviewItem {
  return {
    quote: t.quote,
    name: t.name,
    attribution: [t.city, t.service].filter(Boolean).join(" · "),
    rating: 5,
  };
}

function googleToItem(r: GoogleReview): ReviewItem {
  return {
    quote: r.text,
    name: r.author,
    attribution: r.relativeTime ? `Google review · ${r.relativeTime}` : "Google review",
    rating: r.rating,
  };
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`h-3.5 w-3.5 ${i < count ? "text-moss" : "text-stone"}`}
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews({
  googleReviews,
  rating,
  totalReviews,
}: {
  googleReviews?: GoogleReview[];
  rating?: number;
  totalReviews?: number;
} = {}) {
  // Treat 0/missing as "no Google data" — `??` doesn't catch the 0
  // returned by getGoogleReviews when the API key isn't configured.
  const hasGoogleData =
    Array.isArray(googleReviews) &&
    googleReviews.length > 0 &&
    typeof rating === "number" && rating > 0 &&
    typeof totalReviews === "number" && totalReviews > 0;

  const items: ReviewItem[] = hasGoogleData
    ? googleReviews!.filter((r) => r.rating === 5).map(googleToItem)
    : testimonials.map(toItem);

  if (items.length === 0) return null;

  // Pull the first review out as a featured pull-quote, then up to
  // three supporting reviews fill the single row below — capping at
  // three keeps the grid as a clean single row at every breakpoint.
  const [featured, ...supporting] = items.slice(0, 4);

  // Source label changes whether we're using live Google data or
  // curated testimonials. Average defaults to 5.0 for curated set.
  const avg = hasGoogleData ? rating! : 5;
  const count = hasGoogleData ? totalReviews! : items.length;
  const sourceLabel = hasGoogleData
    ? `Across ${count} verified Google review${count === 1 ? "" : "s"}`
    : "Curated stories from recent clients";

  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    `${company.name} ${company.city} ${company.region} reviews`
  )}`;

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-cream-alt text-bark overflow-hidden">
      {/* Decorative oversized quote glyph anchored to the section background */}
      <span
        aria-hidden
        className="absolute -top-10 sm:-top-20 -left-6 sm:-left-12 font-display text-[260px] sm:text-[420px] lg:text-[560px] text-moss/[0.06] leading-none select-none pointer-events-none"
      >
        &ldquo;
      </span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ── Header — headline left, rating block right ── */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5 inline-flex items-baseline gap-3">
              <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
              Client stories
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[64px] text-bark leading-[1.04] tracking-tight font-light max-w-[20ch]">
              What clients say{" "}
              <span className="italic text-moss">about the work.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <div className="flex items-center lg:justify-end gap-3 mb-3">
              <Stars count={5} />
              <p className="font-display text-[28px] lg:text-[34px] text-bark leading-none tracking-tight font-light tabular-nums">
                {avg.toFixed(1)}
                <span className="text-clay/70 text-[20px] lg:text-[24px]"> / 5</span>
              </p>
            </div>
            <p className="text-[12.5px] text-clay tracking-wide">
              {sourceLabel}
            </p>
          </div>
        </div>

        {/* ── Featured pull quote ── */}
        {featured && (
          <figure className="mb-10 sm:mb-12 lg:mb-14 relative bg-bark text-cream p-8 sm:p-12 lg:p-16 overflow-hidden">
            <span
              aria-hidden
              className="absolute -top-4 sm:-top-6 right-6 sm:right-10 lg:right-14 font-display text-[140px] sm:text-[200px] lg:text-[280px] text-moss/30 leading-none select-none pointer-events-none"
            >
              &rdquo;
            </span>
            <div className="relative max-w-[60ch]">
              <Stars count={featured.rating || 5} />
              <blockquote className="mt-6 sm:mt-8 font-display italic text-[24px] sm:text-[30px] lg:text-[40px] text-cream leading-[1.22] tracking-tight">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 sm:mt-10 flex items-center gap-4">
                <span aria-hidden className="block h-px w-10 bg-moss" />
                <p className="font-display text-[20px] sm:text-[22px] text-cream leading-none tracking-tight">
                  {featured.name}
                </p>
                {featured.attribution && (
                  <span className="font-mono text-[10.5px] tabular-nums text-cream/60 tracking-[0.22em] uppercase">
                    {featured.attribution}
                  </span>
                )}
              </figcaption>
            </div>
          </figure>
        )}

        {/* ── Supporting reviews — editorial cards ── */}
        {supporting.length > 0 && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {supporting.map((it, i) => (
              <li
                key={`${it.name}-${i}`}
                className="relative group bg-cream border border-border p-7 lg:p-8 flex flex-col hover:border-moss/40 transition-colors duration-500 overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute top-0 right-3 font-display text-[110px] text-moss/15 leading-none select-none pointer-events-none transition-colors duration-500 group-hover:text-moss/30"
                >
                  &ldquo;
                </span>
                <Stars count={it.rating || 5} />
                <blockquote className="relative mt-5 font-display italic text-[18px] sm:text-[19px] text-bark leading-[1.45] tracking-tight flex-1">
                  &ldquo;{it.quote}&rdquo;
                </blockquote>
                <figcaption className="relative mt-7 pt-5 border-t border-border/70">
                  <p className="font-display text-[19px] sm:text-[20px] text-bark leading-tight tracking-tight">
                    {it.name}
                  </p>
                  {it.attribution && (
                    <p className="mt-1.5 font-mono text-[10.5px] tabular-nums text-clay/75 tracking-[0.18em] uppercase">
                      {it.attribution}
                    </p>
                  )}
                </figcaption>
              </li>
            ))}
          </ul>
        )}

        {/* ── Footer link to Google ── */}
        <div className="mt-12 lg:mt-16 flex items-center justify-center sm:justify-end">
          <a
            href={googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 text-[11.5px] tracking-[0.22em] uppercase font-medium text-bark hover:text-moss transition-colors"
          >
            <span aria-hidden className="block h-px w-6 bg-bark group-hover:w-10 group-hover:bg-moss transition-all duration-500 ease-out" />
            Read more on Google
            <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
