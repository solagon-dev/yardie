import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Portfolio — Exterior Design Projects | Yardie Design',
  description:
    "View Yardie Design's portfolio of completed exterior design projects across Greenville, Winterville, Farmville, and Eastern NC — landscapes, hardscapes, masonry, lighting, and irrigation.",
  alternates: {
    canonical: 'https://www.yardiedesign.com/work',
  },
  openGraph: {
    title: 'Our Work — Yardie Design Portfolio, Greenville NC',
    description: 'Exterior design projects completed across Eastern North Carolina. Each one a unique collaboration.',
    images: [{ url: '/DSC00754.jpg', alt: 'Yardie Design exterior design portfolio — Greenville NC' }],
  },
};

export default async function WorkPage() {
  const projects = await db.project.findMany({
    where: { publishStatus: 'published' },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    select: { slug: true, title: true, featuredImage: true, projectLocation: true, serviceCategories: true, completionDate: true },
  });

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-bark" aria-label="Portfolio hero">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] pt-[152px] pb-20 lg:pt-[200px] lg:pb-24">
          <SectionLabel light className="mb-10 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            Our Work
          </SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-end gap-10">
            <h1
              className="lg:col-span-8 font-display text-cream text-balance animate-fade-up opacity-0"
              style={{
                fontSize: 'clamp(3rem,7vw,6.5rem)',
                lineHeight: '0.96',
                fontWeight: 300,
                animationDelay: '0.1s',
                animationFillMode: 'forwards',
                letterSpacing: '-0.01em',
              }}
            >
              Every project begins<br /><em>with a story.</em>
            </h1>
            <p
              className="lg:col-span-4 text-dark-muted text-[15px] leading-[1.8] animate-fade-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Five completed exterior environments across Greenville and Eastern NC — each one a unique collaboration between our team and the people who live there.
            </p>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="bg-cream py-2.5 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto">
          {/* Editorial mosaic grid — responsive at every breakpoint */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2.5">
            {projects.map((proj, i) => {
              // Desktop: Row 1 large(8)+small(4), Row 2 small(4)+large(8), Row 3+ full-width
              // Tablet:  even 2-col pairs, items 4+ span both columns
              // Mobile:  single column, standard landscape ratios
              let colSpan = 'lg:col-span-6';
              let aspectClasses = 'aspect-[4/3]';

              if (i === 0) { colSpan = 'lg:col-span-8';          aspectClasses = 'aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/5]'; }
              if (i === 1) { colSpan = 'lg:col-span-4';          aspectClasses = 'aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/5]'; }
              if (i === 2) { colSpan = 'lg:col-span-4';          aspectClasses = 'aspect-[4/3] md:aspect-[3/2] lg:aspect-[3/2]'; }
              if (i === 3) { colSpan = 'lg:col-span-8';          aspectClasses = 'aspect-[4/3] md:aspect-[3/2] lg:aspect-[3/2]'; }
              if (i >= 4)  { colSpan = 'md:col-span-2 lg:col-span-12'; aspectClasses = 'aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]'; }

              return (
                <RevealOnScroll
                  key={proj.slug}
                  delay={i * 0.07}
                  className={`col-span-1 ${colSpan}`}
                >
                  <Link
                    href={`/work/${proj.slug}`}
                    className={`group block relative overflow-hidden bg-warm-stone ${aspectClasses}`}
                    aria-label={`View project: ${proj.title}, ${proj.projectLocation}`}
                  >
                    {proj.featuredImage && (
                      <Image
                        src={proj.featuredImage}
                        alt={proj.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        sizes={
                          i >= 4 ? '100vw' :
                          (i === 0 || i === 3) ? '(max-width:768px)100vw,(max-width:1200px)66vw,67vw' :
                          '(max-width:768px)100vw,(max-width:1200px)50vw,33vw'
                        }
                        unoptimized
                      />
                    )}
                    <div className="absolute inset-0 scrim-bottom" />

                    {/* Project info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      {(proj.projectLocation || proj.completionDate) && (
                        <p className="label-light mb-2">
                          {proj.projectLocation}{proj.completionDate ? ` · ${proj.completionDate}` : ''}
                        </p>
                      )}
                      <h2
                        className="font-display text-cream font-[300]"
                        style={{ fontSize: i === 0 || i >= 4 ? 'clamp(1.6rem,2.8vw,2.4rem)' : 'clamp(1.2rem,1.8vw,1.7rem)', lineHeight: '1.1' }}
                      >
                        {proj.title}
                      </h2>
                      <div className="flex flex-wrap gap-1.5 mt-3 project-card-reveal">
                        {proj.serviceCategories.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] tracking-[0.16em] uppercase text-[rgba(248,244,238,0.65)] border border-[rgba(248,244,238,0.2)] px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View arrow — top right */}
                    <div className="absolute top-5 right-5 project-card-reveal">
                      <span className="text-[9px] tracking-[0.18em] uppercase text-cream border border-[rgba(248,244,238,0.35)] px-3 py-1.5">
                        View →
                      </span>
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream py-24 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[1320px] mx-auto">
          <div
            className="flex flex-col md:flex-row md:items-center justify-between gap-10 py-14 lg:py-16 px-10 lg:px-14"
            style={{ borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}
          >
            <div>
              <SectionLabel className="mb-4">Start Your Project</SectionLabel>
              <h2
                className="font-display text-bark text-balance"
                style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', lineHeight: '1.1', fontWeight: 300, maxWidth: '480px' }}
              >
                Every project on this page began with a single conversation.
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/consultation"
                className="inline-block bg-bark text-cream text-[10px] tracking-[0.18em] uppercase font-[500] px-10 py-4 hover:bg-earth transition-colors duration-300"
                style={{ borderRadius: '2px' }}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
