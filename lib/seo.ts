// ============================================================
// SEO helpers — reusable metadata patterns for Yardie Design
// ============================================================

import type { Metadata } from "next";
import { company, services } from "./content";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.yardiedesign.com";
const SITE_NAME = "Yardie";
const DEFAULT_OG_IMAGE = `${SITE_URL}/yardieopengraph.png`;

export { SITE_URL, SITE_NAME };

const GOOGLE_PROFILE_URL = process.env.GOOGLE_PLACE_ID
  ? `https://www.google.com/maps/place/?q=place_id:${process.env.GOOGLE_PLACE_ID}`
  : undefined;

/**
 * Build full page metadata with OG, Twitter, and canonical.
 */
export function buildMetadata(page: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
  /** Present on journal entries — switches og:type to `article` and adds the
   *  publication metadata social platforms surface as a dateline. */
  article?: { publishedTime?: string; section?: string };
}): Metadata {
  const url = `${SITE_URL}${page.path}`;
  // Relative cover images have to be absolutised: Open Graph consumers other
  // than Google frequently refuse a relative og:image outright.
  const ogImage = page.ogImage
    ? page.ogImage.startsWith("http")
      ? page.ogImage
      : `${SITE_URL}${page.ogImage.startsWith("/") ? "" : "/"}${page.ogImage}`
    : DEFAULT_OG_IMAGE;

  // Use { absolute } so root layout's `template: "%s | Yardie"` doesn't
  // double-append "| Yardie" — each page title already includes the brand.
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      ...(page.article
        ? {
            type: "article" as const,
            publishedTime: page.article.publishedTime,
            section: page.article.section,
            authors: [company.legalName],
          }
        : { type: "website" as const }),
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${page.title} — ${SITE_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    ...(page.noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/**
 * Aggregate review rating, when Yardie's Google Business Profile reports one.
 *
 * Google requires `aggregateRating` to reflect ratings the site genuinely
 * displays, so this is only ever populated from the live Places API response
 * (lib/google-reviews.ts) — never from the hardcoded testimonial fallback.
 * Passing 0/absent values yields no rating block at all, which is correct:
 * inventing one is a manual-action risk.
 */
export function aggregateRatingSchema(rating?: number, totalReviews?: number) {
  if (typeof rating !== "number" || rating <= 0) return null;
  if (typeof totalReviews !== "number" || totalReviews <= 0) return null;

  // Emitted as a fragment carrying only the shared @id. JSON-LD consumers
  // merge nodes by @id, so this attaches the rating to the LocalBusiness node
  // the root layout already publishes, without restating the whole entity.
  // Kept off pages that don't display reviews — Google requires the rating to
  // be visible on the page that marks it up.
  return {
    "@context": "https://schema.org",
    "@id": `${SITE_URL}/#business`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(rating.toFixed(1)),
      reviewCount: totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

/**
 * JSON-LD for the studio as a HomeAndConstructionBusiness.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: company.legalName,
    alternateName: company.name,
    description: company.description,
    url: SITE_URL,
    telephone: "+12523207660",
    email: company.email,
    foundingDate: String(company.founded),
    priceRange: "$$-$$$$",
    image: `${SITE_URL}/yardieopengraph.png`,
    logo: `${SITE_URL}/yardielogofullblack.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      addressLocality: company.city,
      addressRegion: company.region,
      postalCode: company.postal,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 35.5290, longitude: -77.4001 },
    areaServed: [
      { "@type": "City", name: "Greenville",  addressRegion: "NC" },
      { "@type": "City", name: "Winterville", addressRegion: "NC" },
      { "@type": "City", name: "Ayden",       addressRegion: "NC" },
      { "@type": "City", name: "Farmville",   addressRegion: "NC" },
      { "@type": "City", name: "Washington",  addressRegion: "NC" },
      { "@type": "City", name: "Kinston",     addressRegion: "NC" },
      { "@type": "City", name: "New Bern",    addressRegion: "NC" },
      { "@type": "City", name: "Goldsboro",   addressRegion: "NC" },
      { "@type": "City", name: "Wilson",      addressRegion: "NC" },
      { "@type": "City", name: "Rocky Mount", addressRegion: "NC" },
    ],
    // The Google Business Profile is the strongest `sameAs` signal a local
    // business has, and it was missing. Derived from the Place ID already in
    // env rather than hardcoded, so it can't drift from the profile the
    // reviews are pulled from. Omitted entirely when the ID isn't configured.
    sameAs: [company.facebook, company.instagram, GOOGLE_PROFILE_URL].filter(
      (u): u is string => Boolean(u)
    ),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    // Derived from lib/content.ts rather than hand-listed: the catalog used to
    // name five services while the site published twelve, so seven never
    // appeared in the business's own machine-readable offering.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Design Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function serviceSchema(service: { name: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@type": "HomeAndConstructionBusiness", "@id": `${SITE_URL}/#business`, name: company.legalName },
    areaServed: { "@type": "City", name: "Greenville", addressRegion: "NC" },
    serviceType: service.name,
  };
}

/**
 * JSON-LD for a city landing page.
 *
 * These ten pages are the site's main local-search surface and carried no
 * structured data at all. A `Service` with an explicit `areaServed` is the
 * shape Google reads for "landscaper in <city>" style queries; pointing
 * `provider` at the shared `#business` @id ties every one of them back to the
 * single LocalBusiness node instead of implying ten separate companies.
 */
export function areaServedSchema(area: { name: string; county: string; slug: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Exterior Design in ${area.name}, NC`,
    description: area.description,
    url: `${SITE_URL}/service-areas/${area.slug}`,
    serviceType: "Landscape and hardscape design and installation",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#business`,
      name: company.legalName,
      telephone: "+12523207660",
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "City", name: area.name, addressRegion: "NC" },
      { "@type": "AdministrativeArea", name: `${area.county} County`, addressRegion: "NC" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services in ${area.name}, NC`,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

/** Journal dates are authored as "December 4, 2024". Schema.org wants ISO-8601;
 *  a human-readable string is silently ignored by validators, so every article
 *  on the site was publishing without a usable date. */
export function toIsoDate(value: string): string | undefined {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

export function articleSchema(post: {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  image: string;
  category?: string;
  readTime?: number;
}) {
  const published = toIsoDate(post.date);
  return {
    "@context": "https://schema.org",
    // BlogPosting is the more specific type for journal entries and is what
    // Google's article guidance expects for a dated editorial feed.
    "@type": "BlogPosting",
    headline: post.title,
    image: `${SITE_URL}${post.image}`,
    ...(published ? { datePublished: published, dateModified: published } : {}),
    description: post.excerpt,
    ...(post.category ? { articleSection: post.category } : {}),
    ...(post.readTime ? { timeRequired: `PT${post.readTime}M` } : {}),
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: company.legalName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: company.legalName,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/yardielogofullblack.svg` },
    },
    isPartOf: { "@type": "Blog", name: `${SITE_NAME} Journal`, "@id": `${SITE_URL}/journal` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/journal/${post.slug}` },
  };
}
