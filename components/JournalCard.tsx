import Image from "next/image";
import Link from "next/link";
import type { JournalPost } from "@/lib/content";

export default function JournalCard({ post, featured = false }: { post: JournalPost; featured?: boolean }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className={`group block ${featured ? "lg:col-span-8" : ""}`}
    >
      <div className={`relative overflow-hidden bg-stone ${featured ? "aspect-[16/9]" : "aspect-[3/2]"}`}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 lg:mt-6">
        <h3 className={`mt-3 font-display tracking-tight leading-tight font-light text-bark group-hover:text-moss transition-colors ${
          featured ? "text-3xl sm:text-4xl lg:text-[40px]" : "text-[22px] sm:text-[24px]"
        }`}>
          {post.title}
        </h3>
        <p className={`mt-3 text-clay leading-relaxed ${featured ? "text-[15.5px] max-w-[60ch]" : "text-[14.5px]"}`}>
          {post.excerpt}
        </p>
        <p className="mt-4 text-[12.5px] text-clay/70">{post.date}</p>
      </div>
    </Link>
  );
}
