'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

type Post = {
  slug: string;
  title: string;
  excerpt: string | null;
  featuredImage: string | null;
  category: string | null;
  readTime: string | null;
  publishDate: string | null;
};

const CATEGORIES = ['All', 'Landscapes', 'Hardscapes', 'Masonry', 'Lighting', 'Irrigation'];

export default function InsightsClient({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active);
  const featured = filtered[0];
  const remaining = filtered.slice(1);

  return (
    <>
      {/* ── Category Filter ── */}
      <div className="bg-cream px-6 lg:px-[clamp(24px,5vw,80px)] pb-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex gap-2 flex-wrap border-t border-border-light pt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[11px] tracking-[0.12em] uppercase font-[500] px-5 py-2.5 transition-all duration-200 ${
                  active === cat
                    ? 'bg-bark text-cream'
                    : 'border border-border-light text-clay hover:border-bark hover:text-bark'
                }`}
                style={{ borderRadius: '2px' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured Post ── */}
      {featured ? (
        <section className="bg-cream py-14 lg:py-20 px-6 lg:px-[clamp(24px,5vw,80px)]">
          <div className="max-w-[1320px] mx-auto">
            <RevealOnScroll>
              <Link
                href={`/insights/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border-light overflow-hidden hover:border-moss transition-colors duration-300"
                aria-label={`Read: ${featured.title}`}
              >
                <div className="relative overflow-hidden" style={{ minHeight: '320px', aspectRatio: '16/10' }}>
                  {featured.featuredImage && (
                    <Image
                      src={featured.featuredImage}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width:1024px)100vw,50vw"
                      unoptimized
                    />
                  )}
                </div>
                <div className="bg-cream-alt p-10 lg:p-14 flex flex-col justify-center">
                  {featured.category && <p className="label mb-4 text-moss">{featured.category}</p>}
                  <h2
                    className="font-display text-bark group-hover:text-moss transition-colors duration-200 mb-6"
                    style={{ fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 400, lineHeight: '1.2' }}
                  >
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="text-clay text-[14px] leading-[1.75] mb-8 max-w-[400px]">
                      {featured.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <p className="text-clay text-[12px]">
                      {featured.publishDate ? new Date(featured.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                      {featured.readTime ? ` · ${featured.readTime}` : ''}
                    </p>
                    <span className="text-bark group-hover:text-moss transition-colors text-sm">Read →</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      ) : (
        <section className="bg-cream py-14 px-6 lg:px-[clamp(24px,5vw,80px)]">
          <div className="max-w-[1320px] mx-auto">
            <p className="text-clay text-[15px]">No articles in this category yet.</p>
          </div>
        </section>
      )}

      {/* ── Article Grid ── */}
      {remaining.length > 0 && (
        <section className="bg-cream-alt py-16 lg:py-24 px-6 lg:px-[clamp(24px,5vw,80px)]">
          <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {remaining.map((post, i) => (
                <RevealOnScroll key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group block"
                    aria-label={`Read: ${post.title}`}
                  >
                    <div className="relative overflow-hidden bg-warm-stone mb-6" style={{ aspectRatio: '16/9' }}>
                      {post.featuredImage && (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                          unoptimized
                        />
                      )}
                    </div>
                    {post.category && <p className="label mb-3 text-moss">{post.category}</p>}
                    <h2
                      className="font-display text-bark group-hover:text-moss transition-colors duration-200 leading-snug mb-3"
                      style={{ fontSize: 'clamp(1.1rem,1.6vw,1.35rem)', fontWeight: 400 }}
                    >
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-clay text-[13px] leading-relaxed mb-4 max-w-[360px]">
                        {post.excerpt}
                      </p>
                    )}
                    <p className="text-clay text-[12px]">
                      {post.publishDate ? new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                      {post.readTime ? ` · ${post.readTime}` : ''}
                    </p>
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
