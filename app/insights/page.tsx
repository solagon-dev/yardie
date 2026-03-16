import type { Metadata } from 'next';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import { db } from '@/lib/db';
import InsightsClient from './InsightsClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Insights — Exterior Design Ideas & Project Stories | Yardie Design',
  description:
    'Design insights, project stories, and outdoor living ideas from the Yardie Design team. Expert perspective on landscapes, hardscapes, masonry, and more from Greenville, NC.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/insights',
  },
  openGraph: {
    title: 'Yardie Design Insights — Exterior Design Ideas & Stories',
    description: 'Design thinking, project stories, and outdoor living ideas from the Yardie team in Greenville, NC.',
    images: [{ url: '/blog5.png', alt: 'Yardie Design Insights — exterior design insights' }],
  },
};

export default async function InsightsPage() {
  const raw = await db.post.findMany({
    where: { publishStatus: 'published' },
    orderBy: [{ publishDate: 'desc' }, { createdAt: 'desc' }],
    select: { slug: true, title: true, excerpt: true, featuredImage: true, category: true, readTime: true, publishDate: true },
  });

  // Serialize dates for client component
  const posts = raw.map((p) => ({
    ...p,
    publishDate: p.publishDate ? p.publishDate.toISOString() : null,
  }));

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-cream" aria-label="Insights hero">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] pt-[152px] pb-8 lg:pt-[184px]">
          <div className="pb-14 lg:pb-20">
            <SectionLabel className="mb-8 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              Design Insights
            </SectionLabel>
            <h1
              className="font-display text-bark animate-fade-up opacity-0"
              style={{
                fontSize: 'clamp(3rem,8vw,8rem)',
                lineHeight: '0.95',
                fontWeight: 500,
                animationDelay: '0.08s',
                animationFillMode: 'forwards',
              }}
            >
              Insights
            </h1>
            <p
              className="text-clay text-[15px] leading-[1.75] mt-6 max-w-[480px] animate-fade-up opacity-0"
              style={{ animationDelay: '0.18s', animationFillMode: 'forwards' }}
            >
              Project stories, design thinking, and outdoor living insights from the Yardie team.
            </p>
          </div>
        </div>
      </section>

      <InsightsClient posts={posts} />
    </>
  );
}
