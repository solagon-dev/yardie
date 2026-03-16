import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Exterior Design Services in Greenville, NC — Landscapes, Hardscapes & More',
  description:
    'Yardie Design offers landscape design, hardscaping, masonry, outdoor lighting, and irrigation in Greenville, NC. Five disciplines — one unified exterior vision.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/services',
  },
  openGraph: {
    title: 'Exterior Design Services — Yardie Design, Greenville NC',
    description: 'Landscape design, hardscaping, masonry, lighting, and irrigation from a single team. Serving Greenville, NC and Eastern North Carolina.',
    images: [{ url: '/DSC03551.jpg', alt: 'Yardie Design landscape services in Greenville NC' }],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-bark pt-[72px]" aria-label="Services hero">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] pt-20 pb-24 lg:pt-28 lg:pb-32">
          <SectionLabel light className="mb-8 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            What We Offer
          </SectionLabel>
          <h1
            className="font-display text-cream text-balance animate-fade-up opacity-0"
            style={{
              fontSize: 'clamp(2.8rem,6vw,5.5rem)',
              lineHeight: '1.02',
              fontWeight: 500,
              maxWidth: '700px',
              animationDelay: '0.1s',
              animationFillMode: 'forwards',
            }}
          >
            Five disciplines.<br /><em>One unified vision.</em>
          </h1>
          <p
            className="text-dark-muted mt-8 max-w-[520px] text-[15px] leading-[1.75] animate-fade-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            From the first planting bed to the final lighting fixture, Yardie manages every aspect of your exterior environment as a single, integrated design — not a collection of unrelated services.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto space-y-3">
          {services.map((service, i) => (
            <RevealOnScroll key={service.slug} delay={i * 0.07}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center border border-border-light hover:border-moss p-8 lg:p-10 bg-cream hover:bg-cream-alt transition-all duration-300"
                style={{ borderRadius: '2px' }}
                aria-label={`${service.name} — ${service.tagline}`}
              >
                {/* Number */}
                <div className="lg:col-span-1 hidden lg:block">
                  <span className="font-display text-warm-stone group-hover:text-moss transition-colors duration-300" style={{ fontSize: '2.5rem', fontWeight: 500, lineHeight: '1' }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Photo */}
                <div className="lg:col-span-3 relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width:1024px)100vw,25vw"
                    unoptimized
                  />
                </div>
                {/* Content */}
                <div className="lg:col-span-6">
                  <span className="label mb-3 block">{service.name}</span>
                  <h2
                    className="font-display text-bark group-hover:text-moss transition-colors duration-200"
                    style={{ fontSize: 'clamp(1.4rem,2vw,1.85rem)', fontWeight: 400, lineHeight: '1.2' }}
                  >
                    {service.tagline}
                  </h2>
                  <p className="text-clay text-[14px] leading-[1.7] mt-4 max-w-[480px]">
                    {service.intro.slice(0, 160)}…
                  </p>
                </div>
                {/* Arrow */}
                <div className="lg:col-span-2 hidden lg:flex justify-end">
                  <span className="text-border-warm group-hover:text-moss transition-colors duration-200 text-2xl font-thin">
                    →
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── PROCESS SUMMARY ── */}
      <section className="bg-cream-alt py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <RevealOnScroll>
            <SectionLabel className="mb-6">How It Works</SectionLabel>
            <h2
              className="font-display text-bark mb-8"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', lineHeight: '1.12', fontWeight: 400 }}
            >
              Every service follows the same standard of care
            </h2>
            <p className="text-clay text-[15px] leading-[1.75] mb-6 max-w-[500px]">
              Whether you&apos;re engaging Yardie for a single service or a full exterior redesign, the process is the same: a thorough consultation, a custom design, and an installation executed precisely to that design.
            </p>
            <p className="text-clay text-[15px] leading-[1.75] mb-10 max-w-[500px]">
              Every project is managed in-house. You work directly with Yardie from the first meeting to the final walkthrough.
            </p>
            <Button href="/consultation" variant="primary" size="md">Schedule a Free Consultation</Button>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/DSC03727.jpg"
                alt="Completed exterior design project by Yardie Design in Greenville NC"
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
                unoptimized
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
