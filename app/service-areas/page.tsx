import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { serviceAreas, company } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { photos, projectPhotos } from "@/lib/media";
import PageHero from "@/components/ui/PageHero";

// City lead images (Wikipedia / Wikimedia Commons, CC-BY-SA).
// One image per service area — civic / townscape view of the city
// itself, so the cards read as "this is where we work" rather than
// "here's a Yardie project that happens to be here."
const areaPhoto: Record<string, { src: string; alt: string }> = {
  greenville:    { src: "/cities/greenville.jpg",    alt: "Greenville, NC City Hall." },
  winterville:   { src: "/cities/winterville.jpg",   alt: "Winterville, NC — town view." },
  ayden:         { src: "/cities/ayden.jpg",         alt: "Ayden, NC — historic main street." },
  farmville:     { src: "/cities/farmville.jpg",     alt: "Farmville, NC — town view." },
  washington:    { src: "/cities/washington.jpg",    alt: "Washington, NC — Pamlico riverfront." },
  kinston:       { src: "/cities/kinston.jpg",       alt: "Kinston, NC — Queen Street United Methodist Church." },
  "new-bern":    { src: "/cities/new-bern.jpg",      alt: "New Bern, NC — Municipal Building." },
  goldsboro:     { src: "/cities/goldsboro.jpg",     alt: "Goldsboro, NC — fountain in the park." },
  wilson:        { src: "/cities/wilson.jpg",        alt: "Wilson, NC — City Hall." },
  "rocky-mount": { src: "/cities/rocky-mount.jpg",   alt: "Rocky Mount, NC — City Lake fountain." },
};

export const metadata: Metadata = buildMetadata({
  title: "Service Areas — Greenville, NC & Eastern North Carolina",
  description:
    "Yardie serves homeowners across Greenville, Winterville, Ayden, Farmville, Washington, Kinston, New Bern, Goldsboro, Wilson, and Rocky Mount — the broader Eastern North Carolina region.",
  path: "/service-areas",
  keywords: [
    "exterior design service areas Eastern NC",
    "landscape contractor Pitt County",
    "hardscape installation Eastern NC",
    "landscape design Greenville NC",
    "landscape design Washington NC",
  ],
});

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        label="Service Areas"
        headline="Exterior design and installation"
        italicTail="across Eastern North Carolina."
        intro="From Pitt County to the coast — Yardie builds for homeowners across the broader Eastern NC region."
        image={projectPhotos.mayBlvd.canopyTrees}
      />

      {/* ── Feature image + intro ── */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Feature image with caption card */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden bg-stone">
                <Image
                  src={projectPhotos.holton.stoneDetail.src}
                  alt={projectPhotos.holton.stoneDetail.alt}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-6 bottom-6 bg-cream/95 backdrop-blur-sm p-5 border border-border">
                  <p className="footer-label text-moss">Eastern NC</p>
                  <p className="font-display text-xl text-bark mt-1 font-light tracking-tight">
                    From Greenville to the coast
                  </p>
                  <p className="text-[12px] text-clay mt-1">
                    {serviceAreas.length} towns · {new Set(serviceAreas.map((a) => a.county)).size} counties · One local studio
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="footer-label text-moss mb-3 inline-flex items-center justify-center gap-3">
                <span className="block h-px w-7 bg-moss/60" aria-hidden />
                Where We Work
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] text-bark leading-[1.06] tracking-tight font-light max-w-[18ch]">
                Local expertise across{" "}
                <span className="italic text-moss">the region.</span>
              </h2>
              <p className="mt-5 text-[16px] text-earth leading-relaxed max-w-prose">
                Yardie is based in {company.city}, {company.region} — but our work spans the broader Eastern North Carolina region. From Pitt County&rsquo;s mature neighborhoods to Beaufort County&rsquo;s waterfront properties and Craven County&rsquo;s historic districts, we bring the same drawn-first design process and in-house craftsmanship to every project.
              </p>
              <p className="mt-4 text-[16px] text-earth leading-relaxed max-w-prose">
                We&rsquo;re not a franchise covering a territory on a map. We&rsquo;re a small local studio that knows these communities, their soils and architectures, and has built our reputation by walking the same streets year after year.
              </p>
              <p className="mt-4 text-[16px] text-earth leading-relaxed max-w-prose">
                Don&rsquo;t see your town below?{" "}
                <Link href="/contact" className="underline underline-offset-4 text-moss hover:text-bark transition-colors">
                  Send us a message.
                </Link>{" "}
                We routinely take projects further afield when the architecture and the brief warrant the travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas grid — photo cards ── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream-alt border-y border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 sm:mb-14 lg:mb-16 text-center lg:text-left">
            <p className="footer-label text-moss mb-4 lg:inline-flex lg:items-center lg:gap-3">
              <span className="hidden lg:block h-px w-7 bg-moss/60" aria-hidden />
              Towns We Serve
            </p>
            <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[52px] text-bark leading-[1.06] tracking-tight font-light max-w-[20ch] mx-auto lg:mx-0">
              Postcards from the towns{" "}
              <span className="italic text-moss">where we work.</span>
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {serviceAreas.map((area) => {
              const photo = areaPhoto[area.slug] ?? photos.heroAman;
              return (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="group flex flex-col h-full bg-cream border border-border hover:border-moss/40 transition-all duration-500 ease-out hover:-translate-y-1"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden bg-stone">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="p-7 lg:p-8 border-t border-border flex flex-col flex-1">
                      <p className="footer-label text-clay mb-3">{area.county} County</p>
                      <h3 className="font-display text-[28px] lg:text-[34px] text-bark leading-[1.0] tracking-tight font-light group-hover:text-moss transition-colors">
                        {area.name}
                      </h3>
                      <p className="mt-4 text-[14px] text-earth leading-relaxed flex-1 line-clamp-3">
                        {area.description}
                      </p>
                      <span className="mt-6 inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.22em] uppercase font-medium text-bark group-hover:text-moss transition-colors">
                        <span aria-hidden className="block h-px w-6 bg-bark group-hover:w-10 group-hover:bg-moss transition-all duration-500 ease-out" />
                        Visit {area.name}
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Wikimedia attribution — small, unobtrusive, keeps us
              compliant with the CC-BY-SA license on the city photos. */}
          <p className="mt-10 sm:mt-14 text-[11px] text-clay/70 leading-relaxed text-center lg:text-left">
            City photos courtesy of{" "}
            <a
              href="https://commons.wikimedia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bark transition-colors"
            >
              Wikimedia Commons
            </a>
            , used under{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bark transition-colors"
            >
              CC BY-SA 4.0
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Closing photo + CTA ── */}
      <section className="relative bg-cream">
        <div className="relative aspect-[16/9] sm:aspect-[16/7] lg:aspect-[21/9] overflow-hidden bg-stone">
          <Image
            src={projectPhotos.williamsburg109.rearGarden.src}
            alt={projectPhotos.williamsburg109.rearGarden.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/65 via-bark/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
              <p className="font-display italic text-[28px] sm:text-[36px] lg:text-[44px] text-cream leading-[1.15] tracking-tight max-w-[28ch]">
                Outside these towns? Get in touch.
              </p>
              <p className="mt-3 text-[14px] text-cream/75 max-w-md">
                Call <a href={company.phoneTel} className="text-cream font-medium hover:text-stone transition-colors">{company.phone}</a> or{" "}
                <Link href="/contact" className="text-cream font-medium underline underline-offset-4 hover:text-stone transition-colors">send a message</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
