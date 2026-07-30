import Image from "next/image";
import Link from "next/link";
import type { JournalPost } from "@/lib/content";

/**
 * Canonical journal card — used on the /journal grid, the homepage Articles
 * section, and the related-articles row on each post. `tone` switches the text
 * treatment for light vs. dark (bark) backgrounds; `featured` renders the
 * larger variant.
 */
export default function JournalCard({
  post,
  featured = false,
  tone = "light",
}: {
  post: JournalPost;
  featured?: boolean;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Link href={`/journal/${post.slug}`} className={`group block ${featured ? "lg:col-span-8" : ""}`}>
      <div className={`relative overflow-hidden bg-stone ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className={`mt-4 flex items-center gap-2 text-[12.5px] ${dark ? "text-cream/55" : "text-clay"}`}>
        <span className={dark ? "text-stone" : "text-moss"}>{post.category}</span>
        <span aria-hidden>&middot;</span>
        <span>{post.readTime} min read</span>
      </div>
      <h3 className={`mt-2 font-display tracking-tight leading-[1.2] font-light transition-colors ${
        dark ? "text-cream group-hover:text-moss-light" : "text-bark group-hover:text-moss"
      } ${featured ? "text-3xl sm:text-4xl lg:text-[40px]" : "text-[22px] lg:text-[25px]"}`}>
        {post.title}
      </h3>
      <p className={`mt-2.5 leading-relaxed ${dark ? "text-cream/65" : "text-clay"} ${
        featured ? "text-[15.5px] max-w-[60ch]" : "text-[14px] line-clamp-2"
      }`}>
        {post.excerpt}
      </p>
      <p className={`mt-3 text-[12px] ${dark ? "text-cream/45" : "text-clay"}`}>{post.date}</p>
    </Link>
  );
}
