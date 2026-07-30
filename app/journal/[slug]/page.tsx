import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import JournalCard from "@/components/JournalCard";
import JsonLd from "@/components/JsonLd";
import { journal } from "@/lib/content";
import { articleSchema, breadcrumbSchema, buildMetadata, toIsoDate } from "@/lib/seo";

export function generateStaticParams() {
  return journal.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) {
    return buildMetadata({ title: "Article not found", description: "", path: `/journal/${slug}`, noIndex: true });
  }
  // Titles used to end in a bare "— Journal" with no brand token at all, so
  // articles were the only pages on the site whose SERP entry didn't say who
  // wrote them. Kept short enough that the brand survives Google's truncation.
  return buildMetadata({
    title: `${post.title} | Yardie Journal`,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
    ogImage: post.coverImage,
    article: { publishedTime: toIsoDate(post.date), section: post.category },
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
    journal[(idx + 3) % journal.length],
  ];

  return (
    <>
      <JsonLd
        id={`article-${post.slug}`}
        data={articleSchema({
          title: post.title,
          date: post.date,
          slug: post.slug,
          excerpt: post.excerpt,
          image: post.coverImage,
          category: post.category,
          readTime: post.readTime,
        })}
      />
      <JsonLd
        id={`article-breadcrumb-${post.slug}`}
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: post.title, href: `/journal/${post.slug}` },
        ])}
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
          <div className="mt-10 flex flex-wrap items-center gap-2 text-[12.5px] text-cream/60">
            <span className="text-stone">{post.category}</span>
            <span aria-hidden>&middot;</span>
            <span>{post.readTime} min read</span>
            <span aria-hidden>&middot;</span>
            <span>{post.date}</span>
          </div>
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
          <h2 className="font-display text-[28px] sm:text-[34px] text-bark leading-tight tracking-tight font-light mb-10 lg:mb-14">
            More from the journal
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-14">
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
          <div className="mt-10 flex justify-center">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-cream text-bark text-[14px] font-medium hover:bg-stone transition-colors"
            >
              Request a consultation
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
