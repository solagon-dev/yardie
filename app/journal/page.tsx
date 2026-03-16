import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import { posts, type ServiceTag } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Journal — Exterior Design Insights | Yardie Design',
  description:
    'Design insights, project stories, and outdoor living ideas from the Yardie Design team in Greenville, NC.',
};

const categories: ServiceTag[] = ['Masonry', 'Landscapes', 'Hardscapes', 'Lighting', 'Irrigation'];

export default function JournalPage() {
  const featured = posts[0];
  const remaining = posts.slice(1);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-cream pt-[72px]" aria-label="Journal hero">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] pt-20 pb-8 lg:pt-28">
          <div className="border-b border-border-light pb-14 lg:pb-20">
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
              Journal
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

      {/* ── FEATURED POST ── */}
      <section className="bg-cream py-14 lg:py-20 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll>
            <Link
              href={`/journal/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border-light overflow-hidden hover:border-moss transition-colors duration-300"
              aria-label={`Read: ${featured.title}`}
            >
              <div className="relative overflow-hidden" style={{ minHeight: '320px', aspectRatio: '16/10' }}>
                <Image
                  src={featured.heroImage}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:1024px)100vw,50vw"
                  unoptimized
                />
              </div>
              <div className="bg-cream-alt p-10 lg:p-14 flex flex-col justify-center">
                <p className="label mb-4 text-moss">{featured.category}</p>
                <h2
                  className="font-display text-bark group-hover:text-moss transition-colors duration-200 mb-6"
                  style={{ fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 400, lineHeight: '1.2' }}
                >
                  {featured.title}
                </h2>
                <p className="text-clay text-[14px] leading-[1.75] mb-8 max-w-[400px]">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-clay text-[12px]">{featured.date} · {featured.readTime}</p>
                  <span className="text-bark group-hover:text-moss transition-colors text-sm">Read →</span>
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section className="bg-cream-alt py-16 lg:py-24 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {remaining.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/journal/${post.slug}`}
                  className="group block"
                  aria-label={`Read: ${post.title}`}
                >
                  <div className="relative overflow-hidden bg-warm-stone mb-6" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                      unoptimized
                    />
                  </div>
                  <p className="label mb-3 text-moss">{post.category}</p>
                  <h2
                    className="font-display text-bark group-hover:text-moss transition-colors duration-200 leading-snug mb-3"
                    style={{ fontSize: 'clamp(1.1rem,1.6vw,1.35rem)', fontWeight: 400 }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-clay text-[13px] leading-relaxed mb-4 max-w-[360px]">
                    {post.excerpt}
                  </p>
                  <p className="text-clay text-[12px]">{post.date} · {post.readTime}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
