import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { db } from '@/lib/db';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await db.post.findUnique({
    where: { slug, publishStatus: 'published' },
    select: { title: true, slug: true, excerpt: true, featuredImage: true },
  });
  if (!post) return {};
  return {
    title: `${post.title} | Yardie Design Insights`,
    description: post.excerpt ?? undefined,
    alternates: { canonical: `https://www.yardiedesign.com/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: 'article',
      images: post.featuredImage ? [{ url: post.featuredImage, alt: post.title }] : [],
    },
  };
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await db.post.findUnique({ where: { slug, publishStatus: 'published' } });
  if (!post) notFound();

  const allPosts = await db.post.findMany({
    where: { publishStatus: 'published' },
    orderBy: { publishDate: 'desc' },
    select: { slug: true, title: true, category: true, featuredImage: true, publishDate: true, excerpt: true },
  });
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const renderContent = (text: string) => {
    return text.split('\n\n').map((para, i) => {
      if (para.startsWith('## ')) {
        return (
          <h3 key={i} className="font-display text-bark mt-10 mb-4" style={{ fontSize: 'clamp(1.2rem,1.8vw,1.5rem)', fontWeight: 400 }}>
            {para.slice(3)}
          </h3>
        );
      }
      if (para.startsWith('**') && para.endsWith('**')) {
        return (
          <h3 key={i} className="font-display text-bark mt-10 mb-4" style={{ fontSize: 'clamp(1.2rem,1.8vw,1.5rem)', fontWeight: 400 }}>
            {para.slice(2, -2)}
          </h3>
        );
      }
      const parts = para.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-[15px] lg:text-base leading-[1.8] text-clay mb-0">
          {parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={j} className="text-bark font-[500]">{part.slice(2, -2)}</strong>
              : part
          )}
        </p>
      );
    });
  };

  const publishedDate = post.publishDate
    ? new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: '60vh', minHeight: '400px' }} aria-label="Article hero">
        {post.featuredImage && (
          <Image src={post.featuredImage} alt={post.title} fill priority className="object-cover object-center" sizes="100vw" unoptimized />
        )}
        <div className="absolute inset-0 bg-[rgba(26,24,20,0.45)]" />
        <div className="absolute inset-0 flex flex-col justify-end" style={{ padding: '0 clamp(24px,5vw,80px) 3rem' }}>
          <div className="max-w-[1320px] mx-auto w-full">
            <Link href="/insights" className="label-light hover:opacity-70 transition-opacity mb-6 block">← Insights</Link>
            {post.category && <p className="label text-moss mb-4">{post.category}</p>}
            <h1 className="font-display text-cream font-[300] text-balance" style={{ fontSize: 'clamp(1.8rem,4vw,3.5rem)', lineHeight: '1.1', maxWidth: '720px' }}>
              {post.title}
            </h1>
            {(publishedDate || post.readTime) && (
              <p className="text-[rgba(248,244,238,0.55)] text-[13px] mt-4">
                {publishedDate}{post.readTime ? ` · ${post.readTime}` : ''}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="bg-cream py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-label="Article content">
        <div className="max-w-[720px] mx-auto">
          <RevealOnScroll>
            {post.excerpt && (
              <p className="font-display text-bark mb-12 text-balance" style={{ fontSize: 'clamp(1.2rem,1.8vw,1.5rem)', fontWeight: 400, lineHeight: '1.5' }}>
                {post.excerpt}
              </p>
            )}
            {post.excerpt && <div className="divider mb-12" />}
            <div className="space-y-5">{post.content ? renderContent(post.content) : null}</div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="mt-16 pt-12 border-t border-border-light">
            <SectionLabel className="mb-4">Yardie Design</SectionLabel>
            <p className="text-clay text-[14px] leading-[1.75] mb-8 max-w-[480px]">
              Ready to bring ideas like these to life on your own property? Initial consultations are complimentary.
            </p>
            <Button href="/consultation" variant="primary" size="md">Schedule a Consultation</Button>
          </RevealOnScroll>
        </div>
      </article>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="bg-cream-alt py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-label="Related articles">
          <div className="max-w-[1320px] mx-auto">
            <RevealOnScroll className="mb-12">
              <SectionLabel className="mb-4">Continue Reading</SectionLabel>
              <h2 className="font-display text-bark" style={{ fontSize: 'clamp(1.5rem,2.5vw,2.25rem)', fontWeight: 400 }}>More from Insights</h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((p, i) => (
                <RevealOnScroll key={p.slug} delay={i * 0.1}>
                  <Link href={`/insights/${p.slug}`} className="group block" aria-label={`Read: ${p.title}`}>
                    <div className="relative overflow-hidden bg-warm-stone mb-5" style={{ aspectRatio: '16/9' }}>
                      {p.featuredImage && (
                        <Image src={p.featuredImage} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width:768px)100vw,50vw" unoptimized />
                      )}
                    </div>
                    <p className="label mb-3 text-moss">{p.category}</p>
                    <h3 className="font-display text-bark group-hover:text-moss transition-colors duration-200 mb-2" style={{ fontSize: 'clamp(1.1rem,1.5vw,1.3rem)', fontWeight: 400, lineHeight: '1.25' }}>
                      {p.title}
                    </h3>
                    {p.publishDate && (
                      <p className="text-clay text-[12px]">
                        {new Date(p.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    )}
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
