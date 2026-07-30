import Link from "next/link";
import Image from "next/image";
import { cityPhotos as cityPhoto } from "@/lib/media";

const info: Record<string, { county: string; signature: string; notable: string; yearsServing: string }> = {
  greenville: {
    county: "Pitt County",
    signature: "Our home market. Williamsburg-era brick, mature oak canopy, and properties that reward a careful drawing.",
    notable: "Forest Hills · Belhaven · Williamsburg",
    yearsServing: "Since 2004",
  },
  winterville: {
    county: "Pitt County",
    signature: "A short walk from the studio. New construction sits beside legacy homes, and both ask for a plan drawn against the architecture.",
    notable: "Winterville Parkway corridor",
    yearsServing: "Since 2004",
  },
  ayden: {
    county: "Pitt County",
    signature: "Older neighborhoods with porched fronts and pecan canopy, where new masonry should look like it has always been there.",
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
    signature: "Larger lots and traditional architecture. Properties that warrant a multi-discipline design from the first site walk.",
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
    signature: "Wayne County properties at the edge of our radius. Full landscape redesigns and considered hardscape additions.",
    notable: "Berkeley · Stoney Creek",
    yearsServing: "Since 2018",
  },
  wilson: {
    county: "Wilson County",
    signature: "Long-established neighborhoods with mature canopy, on multi-week schedules that respect how a property has grown.",
    notable: "Heritage corridor",
    yearsServing: "Since 2019",
  },
  "rocky-mount": {
    county: "Edgecombe County",
    signature: "Properties along the Tar River and through Belmont Lake, designed at the scale the architecture asks for.",
    notable: "Tar River · Belmont Lake",
    yearsServing: "Since 2020",
  },
};

export type Area = { name: string; slug: string };

/**
 * Service-area postcard rail. Auto-scrolls horizontally in a seamless loop:
 * the track holds two identical copies of the list, and a CSS animation
 * translates it by exactly half its width, so the moment it "resets" is
 * invisible. Each card carries its own right margin (rather than a flex gap)
 * so the two halves are byte-identical and the loop never jumps.
 *
 * The rail pauses on hover so a card can be read or clicked, and the animation
 * is disabled under prefers-reduced-motion (where the rail falls back to
 * ordinary manual horizontal scroll).
 */
export default function ServiceAreaPostcards({ areas }: { areas: Area[] }) {
  const loop = [...areas, ...areas];

  return (
    <div className="relative overflow-hidden scrollbar-hide motion-reduce:overflow-x-auto motion-reduce:overscroll-x-contain">
      <ul
        className="flex w-max items-stretch pb-4 animate-marquee [animation-play-state:running] hover:[animation-play-state:paused] motion-reduce:animate-none"
        aria-label="Service areas"
      >
        {loop.map((area, i) => {
          const meta = info[area.slug];
          const photo = cityPhoto[area.slug];
          const isDuplicate = i >= areas.length;
          return (
            <li
              key={`${area.slug}-${i}`}
              className="flex-shrink-0 w-[78vw] sm:w-[44vw] lg:w-[380px] mr-4 lg:mr-5 flex"
              aria-hidden={isDuplicate}
            >
              <Link
                href={`/service-areas/${area.slug}`}
                tabIndex={isDuplicate ? -1 : 0}
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
                      <p className="font-mono text-[10.5px] tabular-nums text-clay shrink-0">
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
  );
}
