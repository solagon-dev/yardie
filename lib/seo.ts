// ============================================================
// SEO helpers — reusable metadata patterns for Yardie Design
// ============================================================

import type { Metadata } from "next";
import { company } from "./content";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.yardiedesign.com";
const SITE_NAME = "Yardie";
const DEFAULT_OG_IMAGE = `${SITE_URL}/yardieopengraph.png`;

export { SITE_URL, SITE_NAME };

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
}): Metadata {
  const url = `${SITE_URL}${page.path}`;
  const ogImage = page.ogImage || DEFAULT_OG_IMAGE;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
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
    telephone: "+12527567788",
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
    sameAs: [company.facebook, company.instagram],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Design Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscape Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardscape Design & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Masonry" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outdoor Lighting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Irrigation Systems" } },
      ],
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

export function articleSchema(post: { title: string; date: string; slug: string; excerpt: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    description: post.excerpt,
    author: { "@type": "Organization", name: company.legalName },
    publisher: { "@type": "Organization", name: company.legalName, logo: { "@type": "ImageObject", url: `${SITE_URL}/yardielogofullblack.svg` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/journal/${post.slug}` },
  };
}
