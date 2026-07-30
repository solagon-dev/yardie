"use client";

import { useMemo, useState } from "react";
import type { JournalPost } from "@/lib/content";
import JournalCard from "@/components/JournalCard";

/**
 * Journal index grid with a category filter.
 *
 * Every post is rendered into the initial HTML (this is a client component, so
 * it still server-renders) — the filter only shows/hides cards on the client,
 * so nothing is hidden from crawlers and there's no layout redundancy. This
 * replaces the old page, where each post appeared up to four times (cover,
 * "latest", a per-category section, and a flat archive).
 */
export default function JournalGrid({ posts }: { posts: JournalPost[] }) {
  const categories = useMemo(() => {
    const order = ["Landscapes", "Hardscapes", "Masonry", "Lighting", "Irrigation", "Studio"];
    const present = new Set(posts.map((p) => p.category));
    return order.filter((c) => present.has(c as JournalPost["category"]));
  }, [posts]);

  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);
  const countFor = (c: string) => (c === "All" ? posts.length : posts.filter((p) => p.category === c).length);

  const filters = ["All", ...categories];

  return (
    <div>
      {/* Filter row */}
      <div className="flex flex-wrap gap-2.5 mb-10 sm:mb-14">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`inline-flex items-baseline gap-2 px-4 py-2 text-[13.5px] border transition-colors duration-300 ${
                isActive
                  ? "bg-bark text-cream border-bark"
                  : "bg-transparent text-clay border-border hover:border-bark hover:text-bark"
              }`}
            >
              {f}
              <span className={`text-[11px] tabular-nums ${isActive ? "text-cream/55" : "text-clay/55"}`}>
                {countFor(f)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
        {filtered.map((post) => (
          <li key={post.slug}>
            <JournalCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
