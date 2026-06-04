import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import JournalCard from "@/components/JournalCard";
import { journal } from "@/lib/content";
import { articleSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return journal.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) return buildMetadata({ title: "Article not found", description: "", path: `/journal/${slug}` });
  return buildMetadata({
    title: `${post.title} — Journal`,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
    ogImage: post.coverImage,
  });
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) notFound();

  const idx = journal.findIndex((p) => p.slug === post.slug);
  const related = [
    journal[(idx + 1) % journal.length],
    journal[(idx + 2) % journal.length],
  ];

  return (
    <>
      <Script
        id={`article-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema({
            title: post.title,
            date: post.date,
            slug: post.slug,
            excerpt: post.excerpt,
            image: post.coverImage,
          })),
        }}
      />

      {/* Article hero — bold serif headline on dark, photo below */}
      <section className="relative -mt-14 lg:-mt-[68px] bg-bark text-cream pt-32 lg:pt-44 pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] xl:text-[80px] leading-[1.04] tracking-tight font-light text-cream max-w-[20ch]">
            {post.title}
          </h1>
          <p className="mt-7 text-[16.5px] text-cream/75 leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
          <p className="mt-10 text-[12.5px] text-cream/55 tracking-wide">
            Published {post.date}
          </p>
        </div>
      </section>

      {/* Cover image */}
      <section className="relative w-full overflow-hidden bg-stone" style={{ height: "clamp(380px, 60vh, 720px)" }}>
        <Image src={post.coverImage} alt={post.title} fill priority sizes="100vw" className="object-cover" />
      </section>

      {/* Article body */}
      <article className="bg-cream text-bark">
        <div className="mx-auto max-w-[720px] px-5 sm:px-8 lg:px-0 py-section">
          <div className="prose-editorial">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-[13px] text-clay">
            <p>Written by the Yardie studio · {post.date}</p>
            <Link href="/journal" className="inline-flex items-center justify-center gap-2 hover:text-bark transition-colors">
              ← Back to Journal
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-cream-alt text-bark">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-section">
          <div className="grid sm:grid-cols-2 gap-12 lg:gap-16">
            {related.map((p) => (
              <JournalCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="bg-bark text-cream">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-section text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.04] tracking-tight font-light max-w-[20ch] mx-auto text-cream">
            Ready to start
            <span className="italic text-stone"> your own project?</span>
          </h2>
          <div className="mt-10">
            <Link href="/quote" className="inline-flex items-center justify-center px-9 py-4 bg-cream text-bark text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-stone transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
