import type { MetadataRoute } from "next";
import { services, journal, serviceAreas } from "@/lib/content";
import { caseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/seo";

// ---------------------------------------------------------------------------
// Sitemap policy (implementation brief §12.5 / SEO acceptance criteria):
//
//   • Canonical, 200-status URLs only. No URL that relies on a redirect —
//     e.g. /work → /gallery, /insights → /journal, /consultation → /quote
//     (see next.config.js). Previously this file published /work, which
//     308-redirects to /gallery; that inconsistency is removed here.
//   • Real `lastmod` only where a genuine modification signal exists. Journal
//     posts carry an authored publication date; everything else omits lastmod
//     rather than emitting a build-time `new Date()` that falsely tells crawlers
//     every URL changed on every deploy.
//   • `priority` / `changefreq` omitted: Google ignores them and stale values
//     are misleading. Re-introduce only for a documented non-Google consumer.
// ---------------------------------------------------------------------------

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}` },
    { url: `${SITE_URL}/about` },
    { url: `${SITE_URL}/services` },
    { url: `${SITE_URL}/gallery` }, // canonical portfolio hub (was /work — a redirect)
    { url: `${SITE_URL}/journal` },
    { url: `${SITE_URL}/contact` },
    { url: `${SITE_URL}/quote` },
    { url: `${SITE_URL}/service-areas` },
    { url: `${SITE_URL}/faq` },
    { url: `${SITE_URL}/legal/privacy-policy` },
    { url: `${SITE_URL}/legal/terms-of-service` },
  ];

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
  }));

  const areaUrls: MetadataRoute.Sitemap = serviceAreas.map((a) => ({
    url: `${SITE_URL}/service-areas/${a.slug}`,
  }));

  const postUrls: MetadataRoute.Sitemap = journal.map((j) => {
    const published = new Date(j.date);
    return Number.isNaN(published.getTime())
      ? { url: `${SITE_URL}/journal/${j.slug}` }
      : { url: `${SITE_URL}/journal/${j.slug}`, lastModified: published };
  });

  // Approved case studies (lib/case-studies.ts). Empty until Yardie supplies
  // verified project facts — this list grows automatically as entries are added.
  const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((c) => {
    const modified = new Date(c.dateModified);
    return Number.isNaN(modified.getTime())
      ? { url: `${SITE_URL}/gallery/${c.slug}` }
      : { url: `${SITE_URL}/gallery/${c.slug}`, lastModified: modified };
  });

  return [...core, ...serviceUrls, ...areaUrls, ...postUrls, ...caseStudyUrls];
}
