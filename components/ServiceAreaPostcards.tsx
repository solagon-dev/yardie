"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { cityPhotos as cityPhoto } from "@/lib/media";

const info: Record<string, { county: string; signature: string; notable: string; yearsServing: string }> = {
  greenville: {
    county: "Pitt County",
    signature: "The studio's home market — Williamsburg-era brick, mature oak canopy, and properties that reward a careful drawing.",
    notable: "Forest Hills · Belhaven · Williamsburg",
    yearsServing: "Since 2004",
  },
  winterville: {
    county: "Pitt County",
    signature: "A short walk from the studio. New construction beside legacy homes — both ask for a plan drawn against the architecture.",
    notable: "Winterville Parkway corridor",
    yearsServing: "Since 2004",
  },
  ayden: {
    county: "Pitt County",
    signature: "Older neighborhoods with porched fronts and pecan canopy — masonry that should look like it has always been there.",
    notable: "Historic neighborhoods",
    yearsServing: "Since 2008",
  },
  farmville: {
    county: "Pitt County",
    signature: "Mid-century homes on broad lots. Multi-level patios, fire features, and back yards drawn for a working family.",
    notable: "May Boulevard · Wilson Street",
    yearsServing: "Since 2010",
  },
  washington: {
    county: "Beaufort County",
    signature: "Pamlico waterfront. Salt-tolerant planting, storm-resilient stone, and rear yards composed to face the river.",
    notable: "Pamlico River corridor",
    yearsServing: "Since 2012",
  },
  kinston: {
    county: "Lenoir County",
    signature: "Larger lots and traditional architecture — properties that warrant a multi-discipline design from the first site walk.",
    notable: "Eastern NC heritage homes",
    yearsServing: "Since 2015",
  },
  "new-bern": {
    county: "Craven County",
    signature: "Historic district facades and Trent River frontage. Restraint, dialogue with the architecture, and stone chosen to age well.",
    notable: "Trent River · downtown",
    yearsServing: "Since 2017",
  },
  goldsboro: {
    county: "Wayne County",
    signature: "Wayne County properties at the edge of our radius — full landscape redesigns and considered hardscape additions.",
    notable: "Berkeley · Stoney Creek",
    yearsServing: "Since 2018",
  },
  wilson: {
    county: "Wilson County",
    signature: "Long-established neighborhoods with mature canopy — multi-week schedules that respect how a property has grown.",
    notable: "Heritage corridor",
    yearsServing: "Since 2019",
  },
  "rocky-mount": {
    county: "Edgecombe County",
    signature: "Properties along the Tar River and through Belmont Lake — designed at the scale the architecture asks for.",
    notable: "Tar River · Belmont Lake",
    yearsServing: "Since 2020",
  },
};

export type Area = { name: string; slug: string };

/**
 * Editorial typography-driven postcard rail. No images — each card
 * leans on a giant city name set in display-italic, with the county,
 * signature line, notable neighborhoods, and a "since" timestamp
 * arranged like an index entry. Manual infinite horizontal scroll
 * (three copies of the list, scrollLeft snapped near the middle).
 */
export default function ServiceAreaPostcards({ areas }: { areas: Area[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  const list = [...areas, ...areas, ...areas];
  const set = areas.length;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const init = () => {
      if (initializedRef.current) return;
      const segment = el.scrollWidth / 3;
      if (segment > 0) {
        el.scrollLeft = segment;
        initializedRef.current = true;
      }
    };

    init();
    const raf = requestAnimationFrame(init);

    const onScroll = () => {
      if (!el) return;
      const segment = el.scrollWidth / 3;
      if (segment <= 0) return;
      if (el.scrollLeft >= segment * 2) {
        el.scrollLeft -= segment;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += segment;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="overflow-x-auto scrollbar-hide overscroll-x-contain"
        aria-label="Service area postcards — scroll horizontally"
      >
        <ul className="flex items-stretch gap-4 lg:gap-5 px-5 sm:px-8 lg:px-12 pb-4 w-max">
          {list.map((area, i) => {
            const meta = info[area.slug];
            const photo = cityPhoto[area.slug];
            const copyIdx = Math.floor(i / set);
            const idxLabel = String((i % set) + 1).padStart(2, "0");
            return (
              <li
                key={`${area.slug}-${i}`}
                className="flex-shrink-0 w-[78vw] sm:w-[44vw] lg:w-[380px] flex"
                aria-hidden={copyIdx !== 1}
              >
                <Link
                  href={`/service-areas/${area.slug}`}
                  tabIndex={copyIdx === 1 ? 0 : -1}
                  className="group relative flex flex-col w-full bg-cream border border-border min-h-[480px] lg:min-h-[520px] hover:border-moss/40 transition-colors duration-500 ease-out overflow-hidden"
                >
                  {/* City photo — Wikipedia lead image, top of the card */}
                  {photo && (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width:1024px) 380px, (min-width:640px) 44vw, 78vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      />
                      {/* Bottom shade so the index/county chip reads on light photos */}
                      <div aria-hidden className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

                      {/* Top row — index number + county, sits on top of the photo */}
                      <div className="absolute inset-x-5 lg:inset-x-7 top-4 flex items-baseline justify-between">
                        <span className="font-mono text-[10.5px] tabular-nums text-cream/95 tracking-[0.22em] uppercase">
                          {idxLabel} &middot; {meta?.county ?? "Eastern NC"}
                        </span>
                        <span aria-hidden className="block h-px w-8 bg-cream/55 group-hover:w-14 group-hover:bg-moss transition-all duration-500 ease-out" />
                      </div>
                    </div>
                  )}

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-7 lg:p-9 group-hover:bg-cream-alt transition-colors duration-500">
                    {/* City name — oversized display, italic accent */}
                    <h3 className="font-display text-[34px] sm:text-[40px] lg:text-[48px] text-bark leading-[0.96] tracking-tight font-light">
                      <span className="block group-hover:text-moss transition-colors">
                        {area.name.split(" ")[0]}
                      </span>
                      {area.name.split(" ").length > 1 && (
                        <span className="block italic text-moss/85 mt-1">
                          {area.name.split(" ").slice(1).join(" ")}
                        </span>
                      )}
                    </h3>

                    {/* Signature line — short editorial sentence */}
                    <p className="mt-5 lg:mt-6 text-[14px] sm:text-[14.5px] text-earth leading-[1.7] flex-1">
                      {meta?.signature ?? "Exterior design and installation across Eastern North Carolina."}
                    </p>

                    {/* Bottom row — neighborhoods + since */}
                    <div className="mt-6 pt-5 border-t border-border flex items-baseline justify-between gap-4">
                      <p className="text-[11.5px] text-clay leading-snug italic line-clamp-1">
                        {meta?.notable ?? "Eastern North Carolina"}
                      </p>
                      <p className="font-mono text-[10.5px] tabular-nums text-clay/65 tracking-[0.18em] uppercase shrink-0">
                        {meta?.yearsServing ?? "Since 2004"}
                      </p>
                    </div>
                  </div>

                  {/* Subtle bottom CTA hairline */}
                  <span
                    aria-hidden
                    className="absolute inset-x-7 lg:inset-x-9 bottom-3 h-[2px] bg-moss origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
