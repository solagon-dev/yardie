import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Service Areas — Exterior Design & Landscaping Near You | Yardie Design',
  description:
    'Yardie Design serves Greenville, Winterville, Ayden, Farmville, Washington, Kinston, New Bern, and surrounding Eastern NC communities with premium exterior design and landscaping.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/service-areas',
  },
  openGraph: {
    title: 'Yardie Design Service Areas — Eastern North Carolina',
    description: 'Premium exterior design, landscape, hardscape, masonry, lighting, and irrigation serving Eastern NC from our Greenville base.',
    images: [{ url: '/DSC03551.jpg', alt: 'Yardie Design — landscape design in Eastern North Carolina' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LandscapeService', 'LocalBusiness'],
  name: 'Yardie Design',
  url: 'https://www.yardiedesign.com/service-areas',
  telephone: '+12527567788',
  email: 'hello@yardiedesign.com',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5036 Winterville Parkway',
    addressLocality: 'Winterville',
    addressRegion: 'NC',
    postalCode: '28590',
    addressCountry: 'US',
  },
  areaServed: [
    'Greenville, NC', 'Winterville, NC', 'Ayden, NC', 'Farmville, NC',
    'Washington, NC', 'Kinston, NC', 'New Bern, NC', 'Eastern North Carolina',
  ].map((name) => ({ '@type': 'City', name })),
  description:
    'Yardie Design serves Greenville, Winterville, Ayden, Farmville, Washington, Kinston, New Bern, and surrounding Eastern NC communities with premium exterior design and landscaping.',
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="bg-cream" aria-label="Service areas hero">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] pt-[152px] pb-14 lg:pt-[184px]">
          <div className="border-b border-border-light pb-14 lg:pb-20">
            <SectionLabel className="mb-8 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              Service Areas
            </SectionLabel>
            <h1
              className="font-display text-bark animate-fade-up opacity-0 text-balance"
              style={{
                fontSize: 'clamp(3rem,8vw,8rem)',
                lineHeight: '0.95',
                fontWeight: 300,
                maxWidth: '900px',
                animationDelay: '0.08s',
                animationFillMode: 'forwards',
              }}
            >
              Designing outdoor environments across Eastern NC.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-6">
              <p
                className="text-clay text-[15px] leading-[1.75] max-w-[520px] animate-fade-up opacity-0"
                style={{ animationDelay: '0.18s', animationFillMode: 'forwards' }}
              >
                Based in Greenville, Yardie Design serves communities across Pitt County and Eastern North Carolina — bringing the same design process, the same crew, and the same standards to every project wherever it is.
              </p>
              <a
                href="tel:+12527567788"
                className="animate-fade-up opacity-0 flex-shrink-0 text-bark font-[500] text-[15px] hover:text-moss transition-colors tracking-[0.03em]"
                style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
              >
                (252) 756-7788
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICE AREA STATEMENT ── */}
      <section className="bg-cream py-16 lg:py-24 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-12 lg:py-16"
              style={{ borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}
            >
              <div className="lg:col-span-6">
                <SectionLabel className="mb-4">Our Base</SectionLabel>
                <p className="font-display text-bark" style={{ fontSize: 'clamp(1.3rem,2.2vw,1.9rem)', fontWeight: 300, lineHeight: '1.45' }}>
                  Headquartered at 5036 Winterville Parkway, Winterville — serving Greenville, Pitt County, and communities throughout Eastern North Carolina.
                </p>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 space-y-4">
                <p className="text-clay text-[14px] leading-[1.8]">
                  Our core service area covers Greenville, Winterville, Ayden, Farmville, and the greater Pitt County region. We regularly take projects in Washington, Kinston, New Bern, and other Eastern NC communities for the right engagements.
                </p>
                <p className="text-clay text-[14px] leading-[1.8]">
                  If you&apos;re outside the areas listed here, reach out — we&apos;re always happy to discuss your project and whether it&apos;s within our scope.
                </p>
                <div className="pt-2">
                  <a href="tel:+12527567788" className="text-bark font-[500] text-[15px] hover:text-moss transition-colors tracking-[0.03em]">
                    (252) 756-7788
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── LOCATION GRID ── */}
      <section className="bg-cream-alt py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="locations-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="mb-14">
            <SectionLabel className="mb-4">Where We Work</SectionLabel>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2
                id="locations-heading"
                className="font-display text-bark max-w-[560px]"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: '1.1', fontWeight: 400 }}
              >
                Six communities. One team. The same standard, everywhere.
              </h2>
              <p className="text-clay text-[14px] leading-[1.75] max-w-[320px] lg:text-right">
                Each location page is written specifically for that community — with local context, relevant services, and answers to questions specific to working in that area.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(26,24,20,0.07)]">
            {locations.map((loc, i) => (
              <RevealOnScroll key={loc.slug} delay={i * 0.07}>
                <Link
                  href={`/service-areas/${loc.slug}`}
                  className="group relative block overflow-hidden bg-cream-alt"
                  style={{ aspectRatio: '4/3' }}
                  aria-label={`Exterior design in ${loc.fullName}`}
                >
                  <Image
                    src={loc.heroImage}
                    alt={`Exterior design in ${loc.fullName}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    unoptimized
                  />
                  {/* Gradient scrim */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.88) 0%, rgba(26,24,20,0.25) 55%, rgba(26,24,20,0.06) 80%)' }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[rgba(26,24,20,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
                    <p className="label-light text-[rgba(248,244,238,0.45)] mb-2 transition-all duration-300 group-hover:text-[rgba(248,244,238,0.75)]">
                      {loc.county}
                    </p>
                    <h3
                      className="font-display text-cream transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
                      style={{ fontSize: 'clamp(1.3rem,1.8vw,1.65rem)', fontWeight: 300, lineHeight: '1.1' }}
                    >
                      {loc.fullName}
                    </h3>
                    <p className="text-[rgba(248,244,238,0.55)] text-[12px] leading-snug mt-2 max-w-[280px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {loc.tagline}
                    </p>
                    <p className="mt-3 text-[rgba(248,244,238,0.5)] text-[9px] tracking-[0.2em] uppercase font-[500] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      Explore →
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OFFERED ── */}
      <section className="bg-bark py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <RevealOnScroll>
            <SectionLabel light className="mb-5">What We Offer</SectionLabel>
            <h2
              className="font-display text-cream mb-8"
              style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: '1.1', fontWeight: 300 }}
            >
              Five design disciplines. One cohesive outdoor environment.
            </h2>
            <p className="text-[rgba(248,244,238,0.62)] text-[15px] leading-[1.8] mb-10 max-w-[460px]">
              Wherever you are in Eastern NC, Yardie brings the same complete offering — designed as a system, not assembled from separate contractors.
            </p>
            <Button href="/services" variant="ghost" size="md">Explore All Services</Button>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="divide-y divide-[rgba(248,244,238,0.07)]">
              {([
                ['Landscapes', '/services/landscapes', 'Planting design, lawn care, and seasonal maintenance.'],
                ['Hardscapes', '/services/hardscapes', 'Patios, walkways, retaining walls, and outdoor living structures.'],
                ['Masonry', '/services/masonry', 'Stone walls, brick features, and permanent built elements.'],
                ['Lighting', '/services/lighting', 'Architectural outdoor lighting systems designed for ambiance and function.'],
                ['Irrigation', '/services/irrigation', 'Smart irrigation designed for your specific property and plant material.'],
              ] as [string, string, string][]).map(([name, href, desc]) => (
                <Link key={name} href={href} className="group flex items-center justify-between py-5 hover:pl-2 transition-all duration-200">
                  <div>
                    <p className="font-display text-cream font-[300]" style={{ fontSize: '1.15rem' }}>{name}</p>
                    <p className="text-[rgba(248,244,238,0.38)] text-[12px] mt-0.5 leading-snug group-hover:text-[rgba(248,244,238,0.55)] transition-colors duration-200">{desc}</p>
                  </div>
                  <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="flex-shrink-0 text-[rgba(248,244,238,0.25)] group-hover:text-moss transition-colors duration-200 ml-6">
                    <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream py-24 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[1320px] mx-auto text-center">
          <SectionLabel className="mb-6">Start the Conversation</SectionLabel>
          <h2
            className="font-display text-bark text-balance mx-auto mb-8"
            style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.1', fontWeight: 300, maxWidth: '660px' }}
          >
            Ready to begin your project, wherever you are?
          </h2>
          <p className="text-clay text-[15px] leading-[1.7] max-w-[400px] mx-auto mb-10">
            Initial consultations are complimentary. Tell us your location and your project — we&apos;ll take it from there.
          </p>
          <Button href="/consultation" variant="primary" size="lg">Schedule a Consultation</Button>
        </RevealOnScroll>
      </section>
    </>
  );
}
