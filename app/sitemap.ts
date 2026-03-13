import { MetadataRoute } from 'next';
import { db } from '@/lib/db';

const BASE_URL = 'https://www.yardiedesign.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [dbProjects, dbPosts] = await Promise.all([
    db.project.findMany({ where: { publishStatus: 'published' }, select: { slug: true, updatedAt: true } }),
    db.post.findMany({ where: { publishStatus: 'published' }, select: { slug: true, updatedAt: true } }),
  ]);

  const projectUrls: MetadataRoute.Sitemap = dbProjects.map((p) => ({
    url: `${BASE_URL}/work/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const postUrls: MetadataRoute.Sitemap = dbPosts.map((p) => ({
    url: `${BASE_URL}/insights/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [
    // Core
    { url: `${BASE_URL}`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/about`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/consultation`, lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.9 },
    { url: `${BASE_URL}/contact`,      lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/faq`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // Services
    { url: `${BASE_URL}/services`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/landscapes`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/hardscapes`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/masonry`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/lighting`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/irrigation`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Portfolio
    { url: `${BASE_URL}/work`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...projectUrls,

    // Service Areas
    { url: `${BASE_URL}/service-areas`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/service-areas/winterville-nc`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/ayden-nc`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/farmville-nc`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/washington-nc`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/kinston-nc`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/new-bern-nc`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Journal
    { url: `${BASE_URL}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...postUrls,
  ];
}
