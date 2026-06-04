import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { TextLink } from "@/components/ui/Button";
import { serviceAreas, services, workGallery, company } from "@/lib/content";
import { photos, cityPhotos } from "@/lib/media";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return buildMetadata({ title: "Area not found", description: "", path: `/service-areas/${slug}` });
  // Description kept under 155 chars (Ahrefs / Google preview limit).
  // Uses brand + city + 3 disciplines + county for keyword density without
  // overstuffing.
  return buildMetadata({
    title: `Exterior Design in ${area.name}, NC — Yardie`,
    description: `Yardie designs landscapes, hardscapes, masonry, lighting, and irrigation for homes in ${area.name}, NC and the surrounding ${area.county} County area.`,
    path: `/service-areas/${area.slug}`,
    keywords: [
      `landscape design ${area.name} NC`,
      `hardscape ${area.name} NC`,
      `outdoor lighting ${area.name} NC`,
      `masonry ${area.name} NC`,
    ],
  });
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  // Per-area gallery: pick three photos from DIFFERENT projects so
  // each card feels like a different job. Striding by ~1/3 the list
  // length guarantees we span the gallery instead of grabbing three
  // consecutive shots of the same property. The starting offset is
  // unique per area so no two pages show the same trio.
  const areaIndex = serviceAreas.findIndex((a) => a.slug === area.slug);
  const stride = Math.max(1, Math.floor(workGallery.length / 3));
  const offset = (areaIndex * 5) % workGallery.length;
  const featuredMedia = [
    workGallery[offset % workGallery.length],
    workGallery[(offset + stride) % workGallery.length],
    workGallery[(offset + stride * 2) % workGallery.length],
  ];

  // Wikipedia city photo for the area's hero — falls back to the
  // generic editorial hero only if a city image somehow isn't on disk.
  const heroImage = cityPhotos[area.slug] ?? photos.heroBelhaven;

  return (
    <>
      <PageHero
        label={`${area.county} County, NC`}
        headline={area.name}
        italicTail="— exterior design that suits the place."
        intro={area.description}
        image={heroImage}
      />

      {/* Local context */}
      <section className="bg-cream text-bark">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-section">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="font-display text-[30px] sm:text-4xl lg:text-[52px] leading-[1.06] tracking-tight font-light max-w-[16ch]">
                What it&rsquo;s like to{" "}
                <span className="italic text-moss">work in {area.name}.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[15.5px] sm:text-[16.5px] leading-relaxed text-earth">
              <p>
                {area.description}
              </p>
              {area.notes && <p>{area.notes}</p>}
              <p>
                Whether the project is a planting refresh, a complete rear-garden redesign, a masonry-led front facade, or a multi-phase outdoor build, we draw plans specific to {area.name} — its soil, its trees, its character.
              </p>
              <p>
                The conversation starts with a property visit. The first one is always at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="bg-cream-alt text-bark">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-section">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 sm:mb-14 lg:mb-20">
            <h2 className="font-display text-[30px] sm:text-4xl lg:text-[56px] leading-[1.06] tracking-tight font-light max-w-[18ch]">
              What we design
              <span className="italic text-moss"> in {area.name}.</span>
            </h2>
            <div>
              <TextLink href="/services">All Services</TextLink>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block bg-cream border border-border hover:border-bark transition-colors p-6 sm:p-7 lg:p-8 h-full"
                >
                  <p className="font-display text-stone tabular-nums leading-none" style={{ fontSize: "28px", fontWeight: 300 }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 sm:mt-4 font-display text-[22px] sm:text-2xl lg:text-[28px] leading-tight tracking-tight font-light text-bark group-hover:text-moss transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-2.5 text-[14px] sm:text-[14.5px] text-clay leading-relaxed">
                    {s.tagline}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recent work — gallery teaser */}
      <section className="bg-cream text-bark">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-section">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 sm:mb-12 lg:mb-14">
            <h2 className="font-display text-[30px] sm:text-4xl lg:text-[56px] leading-[1.06] tracking-tight font-light max-w-[18ch]">
              A few moments
              <span className="italic text-moss"> from the field.</span>
            </h2>
            <div>
              <TextLink href="/gallery">View Full Gallery</TextLink>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {featuredMedia.map((m, i) => (
              <RevealOnScroll key={m.src} delay={i * 0.08} className="relative aspect-[4/5] overflow-hidden bg-stone">
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bark text-cream">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-section text-center">
          <h2 className="font-display text-[32px] sm:text-4xl lg:text-[64px] leading-[1.06] tracking-tight font-light max-w-[20ch] mx-auto">
            Have a project in
            <span className="italic text-stone"> {area.name}?</span>
          </h2>
          <p className="mt-6 sm:mt-7 max-w-xl mx-auto text-[15px] sm:text-[16px] text-cream/75 leading-relaxed">
            Schedule a property visit. {company.phone}.
          </p>
          <div className="mt-8 sm:mt-10">
            <Link href="/quote" className="inline-flex w-full sm:w-auto items-center justify-center px-9 py-4 bg-cream text-bark text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-stone transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
