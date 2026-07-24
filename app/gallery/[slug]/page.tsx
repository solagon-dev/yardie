// Case-study template (implementation brief §6.2).
//
// Renders one approved project. Every section below is conditional: when a
// field is absent the section is omitted entirely rather than rendered as an
// empty decorative block (§6.1). The registry (lib/case-studies.ts) is empty
// until Yardie approves flagship projects, so this route currently generates
// no pages — adding the first entry publishes it automatically.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/ui/Button";
import { getCaseStudy, caseStudySlugs, type CaseStudyImage } from "@/lib/case-studies";
import { services, journal } from "@/lib/content";
import { buildMetadata, breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return buildMetadata({ title: "Project not found", description: "", path: `/gallery/${slug}` });
  }
  return buildMetadata({
    title: study.seoTitle,
    description: study.seoDescription,
    path: `/gallery/${study.slug}`,
    ogImage: study.heroImage.src,
  });
}

/** Small caps label used to open each section. */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] tabular-nums text-clay tracking-[0.22em] uppercase mb-5">
      {children}
    </p>
  );
}

/** A responsive figure group; returns null when there is nothing to show. */
function ImageGroup({ images, sizes }: { images?: CaseStudyImage[]; sizes?: string }) {
  if (!images || images.length === 0) return null;
  return (
    <div className={`grid gap-4 sm:gap-6 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}>
      {images.map((img) => (
        <figure key={img.src} className="m-0">
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes={sizes ?? "(min-width: 640px) 50vw, 100vw"}
              className="object-cover"
            />
          </div>
          {img.caption && (
            <figcaption className="mt-3 text-[13px] text-clay leading-relaxed">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const serviceLinks = (study.relatedServices ?? study.services)
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean);
  const journalLinks = (study.relatedJournalPosts ?? [])
    .map((s) => journal.find((x) => x.slug === s))
    .filter(Boolean);

  // Concise fact list — only facts that exist. Timeline/budget appear solely
  // when verified/approved values were supplied (§6.1).
  const facts: { label: string; value: string }[] = [
    { label: "Location", value: `${study.city}, ${study.region}` },
    { label: "Property", value: study.propertyType },
    { label: "Completed", value: String(study.completionYear) },
    ...(study.timeline ? [{ label: "Timeline", value: study.timeline }] : []),
    ...(study.budgetBand ? [{ label: "Investment", value: study.budgetBand }] : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Gallery", href: "/gallery" },
              { name: study.title, href: `/gallery/${study.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: study.title,
            about: study.summary,
            url: `${SITE_URL}/gallery/${study.slug}`,
            image: `${SITE_URL}${study.heroImage.src}`,
            datePublished: study.datePublished,
            dateModified: study.dateModified,
            locationCreated: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: study.city,
                addressRegion: study.region,
              },
            },
            creator: { "@type": "HomeAndConstructionBusiness", "@id": `${SITE_URL}/#business` },
          }),
        }}
      />

      {/* 1 · HERO + CONCISE FACTS */}
      <section className="relative -mt-14 lg:-mt-[68px] bg-bark text-cream pt-32 lg:pt-44 pb-14 lg:pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-cream/60 mb-6">
            {study.safeClientLabel} &middot; {study.city}, {study.region}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] leading-[1.04] tracking-tight font-light max-w-[20ch]">
            {study.title}
          </h1>
          <p className="mt-7 text-[16.5px] text-cream/75 leading-relaxed max-w-2xl">
            {study.summary}
          </p>

          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t border-cream/15 pt-8 max-w-4xl">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-cream/70">
                  {f.label}
                </dt>
                <dd className="mt-2 text-[15px] text-cream">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-stone" style={{ height: "clamp(340px, 58vh, 680px)" }}>
        <Image
          src={study.heroImage.src}
          alt={study.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <div className="bg-cream text-bark">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8 lg:px-0 py-16 lg:py-24 space-y-16 lg:space-y-24">
          {/* 2 · THE ORIGINAL CHALLENGE */}
          <section>
            <SectionLabel>The challenge</SectionLabel>
            <p className="text-[17px] leading-relaxed text-earth">{study.challenge}</p>
          </section>

          {/* 3 · SITE READING & CONSTRAINTS */}
          <section>
            <SectionLabel>What we saw on site</SectionLabel>
            <p className="text-[17px] leading-relaxed text-earth">{study.siteConditions}</p>
            {study.drainageNotes && (
              <p className="mt-5 text-[17px] leading-relaxed text-earth">{study.drainageNotes}</p>
            )}
            <ImageGroup images={study.beforeImages} />
          </section>

          {/* 4 · THE PLAN / DRAWING */}
          {study.planAssets && study.planAssets.length > 0 && (
            <section>
              <SectionLabel>What we drew</SectionLabel>
              <ImageGroup images={study.planAssets} sizes="(min-width: 860px) 860px, 100vw" />
            </section>
          )}

          {/* 5 · DESIGN DECISIONS */}
          <section>
            <SectionLabel>Design decisions</SectionLabel>
            <p className="text-[17px] leading-relaxed text-earth">{study.designResponse}</p>
            {study.lightingNotes && (
              <p className="mt-5 text-[17px] leading-relaxed text-earth">{study.lightingNotes}</p>
            )}
          </section>

          {/* 6 · MATERIALS & PLANTING */}
          {((study.materials?.length ?? 0) > 0 || (study.plantPalette?.length ?? 0) > 0) && (
            <section>
              <SectionLabel>Materials &amp; planting</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-10">
                {study.materials && study.materials.length > 0 && (
                  <div>
                    <h2 className="font-display text-2xl font-light tracking-tight mb-4">Materials</h2>
                    <ul className="space-y-2 text-[15.5px] text-earth">
                      {study.materials.map((m) => (
                        <li key={m} className="border-b border-border pb-2">{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {study.plantPalette && study.plantPalette.length > 0 && (
                  <div>
                    <h2 className="font-display text-2xl font-light tracking-tight mb-4">Plant palette</h2>
                    <ul className="space-y-2 text-[15.5px] text-earth">
                      {study.plantPalette.map((p) => (
                        <li key={p} className="border-b border-border pb-2">{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 7 · BUILD / PROCESS */}
          {study.processImages && study.processImages.length > 0 && (
            <section>
              <SectionLabel>Building it</SectionLabel>
              <ImageGroup images={study.processImages} />
            </section>
          )}

          {/* 8 · FINISHED RESULT */}
          {study.finishedImages && study.finishedImages.length > 0 && (
            <section>
              <SectionLabel>Finished</SectionLabel>
              <ImageGroup images={study.finishedImages} />
            </section>
          )}

          {/* 9 · LATER MATURITY */}
          {study.maturityImages && study.maturityImages.length > 0 && (
            <section>
              <SectionLabel>Since then</SectionLabel>
              <ImageGroup images={study.maturityImages} />
            </section>
          )}

          {/* 10 · VERBATIM CLIENT REVIEW (only when approved) */}
          {study.testimonial?.approved && (
            <section>
              <SectionLabel>In the client&rsquo;s words</SectionLabel>
              <blockquote className="border-l-2 border-moss pl-6">
                <p className="font-display text-[24px] sm:text-[28px] leading-[1.35] font-light tracking-tight text-bark">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-5 text-[13px] text-clay tracking-wide">
                  — {study.testimonial.attribution}
                </footer>
              </blockquote>
            </section>
          )}

          {/* 11 · RELATED SERVICES & READING */}
          {(serviceLinks.length > 0 || journalLinks.length > 0) && (
            <section>
              <SectionLabel>Related</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-10">
                {serviceLinks.length > 0 && (
                  <div>
                    <h2 className="font-display text-2xl font-light tracking-tight mb-4">Services used</h2>
                    <ul className="space-y-2.5">
                      {serviceLinks.map((s) => (
                        <li key={s!.slug}>
                          <Link
                            href={`/services/${s!.slug}`}
                            className="text-[15.5px] text-earth hover:text-bark underline underline-offset-4 decoration-border hover:decoration-bark transition-colors"
                          >
                            {s!.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {journalLinks.length > 0 && (
                  <div>
                    <h2 className="font-display text-2xl font-light tracking-tight mb-4">Further reading</h2>
                    <ul className="space-y-2.5">
                      {journalLinks.map((p) => (
                        <li key={p!.slug}>
                          <Link
                            href={`/journal/${p!.slug}`}
                            className="text-[15.5px] text-earth hover:text-bark underline underline-offset-4 decoration-border hover:decoration-bark transition-colors"
                          >
                            {p!.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* 12 · CONSULTATION CTA */}
      <section className="bg-bark text-cream">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-20 lg:py-28 text-center">
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight font-light max-w-[20ch] mx-auto">
            Have a property you&rsquo;d like us to read?
          </h2>
          <p className="mt-6 text-[15.5px] text-cream/70 leading-relaxed max-w-xl mx-auto">
            Tell us about the property. We&rsquo;ll respond within one business day to decide
            whether the project is a fit and arrange a site visit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/quote" variant="ghost-light" arrow>
              Request a Property Consultation
            </Button>
            <Button href="/gallery" variant="ghost-dark">
              View the Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
