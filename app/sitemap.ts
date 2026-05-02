import type { MetadataRoute } from "next";
import { services, journal, serviceAreas } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}`,              lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/about`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/work`,         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/journal`,      lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/contact`,      lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${SITE_URL}/quote`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`,          lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/legal/privacy-policy`,   lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/legal/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const areaUrls: MetadataRoute.Sitemap = serviceAreas.map((a) => ({
    url: `${SITE_URL}/service-areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const postUrls: MetadataRoute.Sitemap = journal.map((j) => ({
    url: `${SITE_URL}/journal/${j.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.55,
  }));

  return [...core, ...serviceUrls, ...areaUrls, ...postUrls];
}
