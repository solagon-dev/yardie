import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Fragment } from "react";
import { Service, services, company } from "@/lib/content";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { photos, photosByService } from "@/lib/media";
import FAQAccordion from "@/components/ui/FAQAccordion";
import InteractiveSpecialties from "./InteractiveSpecialties";

function Arrow({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function HairlineHeader({ kicker, headline, italicTail }: { kicker: string; headline: string; italicTail?: string }) {
  return (
    <div>
      <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5 inline-flex items-baseline gap-3">
        <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
        {kicker}
      </p>
      <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[60px] text-bark leading-[1.04] tracking-tight font-light max-w-[20ch]">
        {headline}{italicTail && <> <span className="italic text-moss">{italicTail}</span></>}
      </h2>
    </div>
  );
}

export default function ServicePage({ service }: { service: Service }) {
  const idx = services.findIndex((s) => s.slug === service.slug);
  const complementaryServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const gallery = photosByService[service.slug] ?? [photos.heroAman];
  const heroPhoto    = gallery[0]                     ?? photos.heroAman;
  const featurePhoto = gallery[1]                     ?? heroPhoto;
  const breakPhoto   = gallery[2]                     ?? heroPhoto;
  const galleryPhotos = (gallery.length >= 4 ? gallery.slice(0, 4) : [...gallery, ...gallery].slice(0, 4));

  // First sentence of longCopy doubles as a pull-quote.
  const pullQuote = service.longCopy.split(". ")[0].trim().replace(/[.,;]+$/, "") + ".";

  return (
    <>
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({
            name: service.name,
            description: service.intro,
            slug: service.slug,
          })),
        }}
      />
      <Script
        id={`service-breadcrumb-${service.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.name, href: `/services/${service.slug}` },
          ])),
        }}
      />
      <Script
        id={`service-faq-${service.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }}
      />

      {/* ═══════════════════════════════════════════════════════
          1 · HERO — MOBILE: stacked photo over dark text panel.
              Editing the photo to its own block lets it crop properly
              on portrait viewports instead of getting squashed/blown
              out by the headline-overlay treatment.
          ═══════════════════════════════════════════════════════ */}
      <section className="lg:hidden -mt-14">
        <div className="relative h-[58svh] sm:h-[64svh] bg-bark overflow-hidden">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover animate-hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/45 via-transparent to-bark/35 pointer-events-none" />
        </div>
      </section>

      <section className="lg:hidden bg-bark text-cream">
        <div className="px-5 sm:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16">
          <p className="font-mono text-[11px] tabular-nums text-stone/85 tracking-[0.22em] mb-6 uppercase">
            Discipline &middot; {String(idx + 1).padStart(2, "0")} of {String(services.length).padStart(2, "0")}
          </p>
          <h1 className="font-display text-[44px] sm:text-[60px] text-cream leading-[0.98] tracking-tight font-light max-w-[14ch]">
            {service.name}
          </h1>
          <p className="mt-5 sm:mt-7 font-display italic text-stone text-[19px] sm:text-[22px] leading-snug tracking-tight max-w-[34ch]">
            {service.tagline}{service.italicTail && ` ${service.italicTail}`}
          </p>
          <p className="mt-6 sm:mt-8 text-[15px] sm:text-[16px] text-cream/80 leading-relaxed max-w-md">
            {service.intro}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <Link
              href="/quote"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 py-3.5 bg-cream text-bark text-[11.5px] tracking-[0.22em] uppercase font-medium hover:bg-stone transition-colors"
            >
              Request a Quote
              <Arrow />
            </Link>
            <a
              href="#offer"
              className="text-[12px] text-cream/70 hover:text-cream tracking-[0.18em] uppercase transition-colors text-center sm:text-left"
            >
              Read the work →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          1 · HERO — DESKTOP: classic full-bleed overlay
          ═══════════════════════════════════════════════════════ */}
      <section className="hidden lg:flex relative -mt-[68px] min-h-[88svh] items-end bg-bark overflow-hidden">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/55 to-bark/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/55 via-transparent to-transparent" />

        <div className="relative w-full mx-auto max-w-[1400px] px-12 pt-32 pb-20">
          <div className="grid grid-cols-12 gap-16 items-end">
            <div className="col-span-8">
              <p className="font-mono text-[11px] tabular-nums text-stone/85 tracking-[0.22em] mb-7">
                Discipline · {String(idx + 1).padStart(2, "0")} of {String(services.length).padStart(2, "0")}
              </p>
              {/* Visually a heading; rendered as <p role="heading" aria-level={1}>
                  so the page has exactly one <h1> (the mobile hero above). */}
              <p
                role="heading"
                aria-level={1}
                className="font-display text-[88px] xl:text-[104px] text-cream leading-[0.96] tracking-tight max-w-[14ch] font-light"
              >
                {service.name}
              </p>
              <p className="mt-9 font-display italic text-stone text-[28px] leading-snug tracking-tight max-w-[34ch]">
                {service.tagline}{service.italicTail && ` ${service.italicTail}`}
              </p>
            </div>
            <div className="col-span-4">
              <p className="text-[16px] text-cream/80 leading-relaxed max-w-md">
                {service.intro}
              </p>
              <div className="mt-7 flex items-center gap-5 flex-wrap">
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-cream text-bark text-[11.5px] tracking-[0.22em] uppercase font-medium hover:bg-stone transition-colors"
                >
                  Request a Quote
                  <Arrow />
                </Link>
                <a
                  href="#offer"
                  className="text-[12px] text-cream/70 hover:text-cream tracking-[0.18em] uppercase transition-colors"
                >
                  Read the work →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2 · STAT BAND — credibility, dark band beneath hero
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-bark text-cream/85 border-t border-cream/10">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-7 lg:py-10">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-10">
            {[
              { figure: "20+",       label: "Years drawing & building exterior" },
              { figure: "In-house",  label: "Designers, masons, gardeners on staff" },
              { figure: "Eastern NC", label: "Soil, weather, palette tuned to here" },
              { figure: "No-cost",   label: "First conversation at the property" },
            ].map((s) => (
              <li key={s.label} className="lg:border-l lg:border-cream/15 lg:pl-6 first:lg:border-l-0 first:lg:pl-0">
                <p className="font-display text-[22px] lg:text-[28px] text-cream font-light tracking-tight leading-none">
                  {s.figure}
                </p>
                <p className="mt-2 text-[11.5px] text-cream/55 tracking-[0.12em] uppercase leading-snug">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3 · APPROACH — sticky title, body copy with pull-quote
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <HairlineHeader
                kicker="Approach"
                headline="How we draw"
                italicTail={`and build ${service.shortName.toLowerCase()}.`}
              />
              <Link
                href="/quote"
                className="mt-9 group inline-flex items-center justify-center gap-3 text-[11.5px] tracking-[0.22em] uppercase font-medium text-bark hover:text-moss transition-colors"
              >
                <span aria-hidden className="block h-px w-6 bg-bark group-hover:w-12 group-hover:bg-moss transition-all duration-500 ease-out" />
                Begin a Project
                <Arrow />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-7 text-[16px] sm:text-[17px] text-earth leading-[1.75]">
                {service.longCopy.split(". ").reduce<string[]>((acc, sentence, i, arr) => {
                  const para = Math.floor(i / 3);
                  if (!acc[para]) acc[para] = "";
                  acc[para] += sentence + (i < arr.length - 1 ? ". " : "");
                  return acc;
                }, []).map((p, i, arr) => (
                  <Fragment key={i}>
                    <p>{p.trim()}</p>
                    {i === 0 && arr.length > 1 && (
                      <blockquote
                        className="my-2 pl-6 sm:pl-8 border-l-2 border-moss font-display italic text-bark text-[22px] sm:text-[28px] lg:text-[34px] leading-[1.18] tracking-tight font-light max-w-[24ch]"
                      >
                        &ldquo;{pullQuote}&rdquo;
                      </blockquote>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4 · WIDE PHOTO BREAK
          ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-cream">
        <div className="relative aspect-[4/3] sm:aspect-[16/7] lg:aspect-[21/9] overflow-hidden bg-stone">
          <Image
            src={featurePhoto.src}
            alt={featurePhoto.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">
            <p className="font-mono text-[10.5px] tabular-nums text-cream/80 tracking-[0.22em] uppercase">
              Field photograph &middot; {service.shortName}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5 · WHAT WE OFFER — interactive numbered list w/ image
          ═══════════════════════════════════════════════════════ */}
      <section id="offer" className="bg-cream py-16 sm:py-24 lg:py-32 border-b border-border scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
            <HairlineHeader
              kicker="What we offer"
              headline="The work, in"
              italicTail={`its parts.`}
            />
          </div>
          <InteractiveSpecialties
            features={service.features}
            photos={gallery.slice(0, Math.max(gallery.length, service.features.length)).concat(
              // fall back to gallery cycling if fewer photos than features
              new Array(Math.max(0, service.features.length - gallery.length)).fill(0).map((_, i) => gallery[i % gallery.length])
            )}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6 · PHOTO GALLERY — 4-image editorial mosaic
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14 lg:mb-16">
            <HairlineHeader
              kicker="In the field"
              headline="Photographs from"
              italicTail="recent work."
            />
            <Link
              href="/gallery"
              className="group inline-flex items-center justify-center gap-3 text-[11.5px] tracking-[0.22em] uppercase font-medium text-bark hover:text-moss transition-colors"
            >
              <span aria-hidden className="block h-px w-6 bg-bark group-hover:w-10 group-hover:bg-moss transition-all duration-500 ease-out" />
              Full Gallery
              <Arrow />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 lg:gap-4">
            {galleryPhotos.map((p, i) => {
              // 4-tile pattern: 8/4 over 4/8
              const pat = i % 4;
              const span = pat === 0 ? "sm:col-span-8" : pat === 1 ? "sm:col-span-4" : pat === 2 ? "sm:col-span-4" : "sm:col-span-8";
              const aspect = pat === 0 || pat === 3 ? "aspect-[3/2]" : "aspect-[4/5]";
              const big = pat === 0 || pat === 3;
              return (
                <div key={`${p.src}-${i}`} className={`relative overflow-hidden bg-stone ${span} ${aspect}`}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes={`(min-width:640px) ${big ? "60vw" : "30vw"}, 100vw`}
                    className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7 · WHY YARDIE — three cards with photo backgrounds
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-12 sm:mb-16 items-end">
            <div className="lg:col-span-7">
              <HairlineHeader
                kicker="Why Yardie"
                headline="Three reasons"
                italicTail={`for ${service.name.toLowerCase()}.`}
              />
            </div>
          </div>
          <ul className="grid md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {service.whyYardie.map((w, i) => {
              const photo = gallery[(i + 1) % gallery.length] ?? heroPhoto;
              return (
                <li key={w.heading} className="relative overflow-hidden bg-bark text-cream group">
                  <div className="relative aspect-[4/5] lg:aspect-[3/4]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width:1024px) 30vw, 100vw"
                      className="object-cover opacity-55 group-hover:opacity-65 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/65 to-bark/10" />
                    <div className="absolute inset-0 p-7 lg:p-9 flex flex-col justify-end">
                      <p className="font-display italic text-stone text-[18px] tracking-tight font-light mb-3">
                        {String(i + 1).padStart(2, "0")} &middot; {service.shortName}
                      </p>
                      <h3 className="font-display text-[24px] sm:text-[26px] lg:text-[30px] text-cream leading-[1.12] tracking-tight font-light">
                        {w.heading}
                      </h3>
                      <p className="mt-3 text-[14px] sm:text-[14.5px] text-cream/85 leading-relaxed max-w-md">
                        {w.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8 · FAQ
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <HairlineHeader
                kicker="FAQ"
                headline="Common"
                italicTail="questions."
              />
              <p className="mt-6 text-[14.5px] sm:text-[15px] text-earth leading-relaxed max-w-md">
                The questions we&rsquo;re asked most often about {service.shortName.toLowerCase()}. Don&rsquo;t see yours?{" "}
                <Link href="/contact" className="underline underline-offset-4 hover:text-moss">Send us a note.</Link>
              </p>
            </div>
            <div className="lg:col-span-7">
              <FAQAccordion items={service.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9 · COMPLEMENTARY DISCIPLINES
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14 lg:mb-16">
            <HairlineHeader
              kicker="Goes well with"
              headline="Disciplines we often"
              italicTail="draw together."
            />
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-3 text-[11.5px] tracking-[0.22em] uppercase font-medium text-bark hover:text-moss transition-colors"
            >
              <span aria-hidden className="block h-px w-6 bg-bark group-hover:w-10 group-hover:bg-moss transition-all duration-500 ease-out" />
              All Disciplines
              <Arrow />
            </Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {complementaryServices.map((s) => {
              const photo = photosByService[s.slug]?.[0] ?? photos.heroAman;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block bg-cream-alt border border-border hover:border-moss/40 transition-colors duration-500"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width:1024px) 30vw, 50vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-6 lg:p-7">
                      <p className="font-display italic text-clay text-[14px] tracking-tight mb-2">{s.tagline}</p>
                      <h3 className="font-display text-[24px] sm:text-[26px] text-bark leading-tight tracking-tight font-light group-hover:text-moss transition-colors">
                        {s.name}
                      </h3>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          10 · FINAL CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-bark">
        <Image
          src={breakPhoto.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/85 to-bark/65" />
        <div className="relative mx-auto max-w-3xl text-center px-5 sm:px-8">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] text-cream leading-[1.05] tracking-tight font-light">
            Ready to start your{" "}
            <span className="italic text-stone">{service.name.toLowerCase()} project?</span>
          </h2>
          <p className="mt-7 text-[17px] text-cream/75 leading-relaxed max-w-xl mx-auto">
            Tell us about the property. The first conversation is at no cost.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-3 px-9 py-4 bg-cream text-bark text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-stone transition-colors"
            >
              Request a Quote
              <Arrow />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-9 py-4 border border-cream/35 text-cream text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-cream/10 hover:border-cream/60 transition-colors"
            >
              View Our Work
            </Link>
          </div>
          <p className="mt-10 text-[12px] text-cream/55 tracking-wide">
            Or call <a href={company.phoneTel} className="text-cream font-medium hover:text-stone transition-colors">{company.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}

