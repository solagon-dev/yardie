import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { type Service, type FAQCategory, projects } from '@/lib/data';

interface ServicePageProps {
  service: Service;
  faqs: FAQCategory;
}

export default function ServicePage({ service, faqs }: ServicePageProps) {
  const relatedProjects = service.relatedProjects
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: '85vh', minHeight: '560px' }} aria-label={`${service.name} hero`}>
        <Image
          src={service.heroImage}
          alt={`${service.name} design by Yardie Design`}
          fill
          priority
          className="object-cover object-[50%_40%] md:object-center"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 scrim-full" />
        <div className="absolute inset-0 bg-[rgba(26,24,20,0.30)]" />
        <div
          className="absolute inset-0 flex flex-col justify-end"
          style={{ padding: '0 clamp(24px,5vw,80px) clamp(4rem,8vw,8rem)' }}
        >
          <div className="max-w-[1320px] mx-auto w-full">
            <SectionLabel light className="mb-6 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              Design Services
            </SectionLabel>
            <h1
              className="font-display text-cream text-balance animate-fade-up opacity-0"
              style={{
                fontSize: 'clamp(1.9rem,6.5vw,6rem)',
                lineHeight: '1.02',
                fontWeight: 300,
                maxWidth: '760px',
                animationDelay: '0.1s',
                animationFillMode: 'forwards',
                whiteSpace: 'pre-line',
              }}
            >
              {service.heroHeadline}
            </h1>
            <p
              className="text-[rgba(248,244,238,0.75)] mt-6 mb-10 animate-fade-up opacity-0 max-w-[480px]"
              style={{
                fontSize: 'clamp(0.9rem,1.3vw,1.0625rem)',
                lineHeight: '1.7',
                animationDelay: '0.2s',
                animationFillMode: 'forwards',
              }}
            >
              {service.heroSubline}
            </p>
            <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Button href="/consultation" variant="primary" size="md">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-cream py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <RevealOnScroll>
            <SectionLabel className="mb-6">{service.name}</SectionLabel>
            <h2
              className="font-display text-bark mb-8"
              style={{ fontSize: 'clamp(1.6rem,2.8vw,2.5rem)', lineHeight: '1.12', fontWeight: 400 }}
            >
              {service.tagline}
            </h2>
            <p className="text-clay text-[15px] leading-[1.75] max-w-[520px]">
              {service.intro}
            </p>
            <div className="mt-10">
              <Button href="/consultation" variant="outline" size="md">Begin Your Project</Button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src={service.featureImage}
                alt={`${service.name} by Yardie Design, Greenville NC`}
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
                unoptimized
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="bg-cream-alt py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="specialties-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="mb-16">
            <SectionLabel className="mb-4">Our Specialties</SectionLabel>
            <h2
              id="specialties-heading"
              className="font-display text-bark max-w-[520px]"
              style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: '1.1', fontWeight: 400 }}
            >
              What we deliver
            </h2>
          </RevealOnScroll>

          <div className="divide-y divide-border-light">
            {service.specialties.map((spec, i) => (
              <RevealOnScroll key={spec.title} delay={i * 0.07}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 lg:py-10 items-baseline">
                  <div className="lg:col-span-1 hidden lg:block">
                    <span className="font-display text-warm-stone select-none" style={{ fontSize: '2.5rem', fontWeight: 300, lineHeight: '1' }} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <span className="label lg:hidden mb-2 block">{String(i + 1).padStart(2, '0')}</span>
                    <h3
                      className="font-display text-bark"
                      style={{ fontSize: 'clamp(1.2rem,1.8vw,1.6rem)', fontWeight: 400, lineHeight: '1.2' }}
                    >
                      {spec.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-clay text-[14px] leading-[1.75] max-w-[560px]">
                      {spec.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      {relatedProjects.length > 0 && (
        <section className="bg-cream py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="projects-heading">
          <div className="max-w-[1320px] mx-auto">
            <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <SectionLabel className="mb-4">Portfolio</SectionLabel>
                <h2
                  id="projects-heading"
                  className="font-display text-bark"
                  style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: '1.1', fontWeight: 400 }}
                >
                  {service.name} projects
                </h2>
              </div>
              <Button href="/work" variant="outline" size="sm">View All Work</Button>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedProjects.map((proj, i) => proj && (
                <RevealOnScroll key={proj.slug} delay={i * 0.08}>
                  <Link
                    href={`/work/${proj.slug}`}
                    className="group block relative overflow-hidden bg-warm-stone"
                    style={{ aspectRatio: '3/2' }}
                    aria-label={`View project: ${proj.name}`}
                  >
                    <Image
                      src={proj.heroImage}
                      alt={proj.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      sizes="(max-width:768px)100vw,33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 scrim-bottom" />
                    <div className="absolute bottom-0 left-0 p-5 lg:p-6">
                      <p className="label-light mb-1.5">{proj.location}</p>
                      <h3 className="font-display text-cream font-[300] text-xl">{proj.name}</h3>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PHOTO BREAK ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(200px,30vw,440px)' }} aria-hidden="true">
        <Image
          src={service.heroImage}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(26,24,20,0.35)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="font-display text-cream text-center italic text-balance px-8"
            style={{ fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 300, maxWidth: '680px' }}
          >
            &ldquo;{service.tagline}&rdquo;
          </p>
        </div>
      </div>

      {/* ── WHY YARDIE ── */}
      <section className="py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)] bg-cream-alt" aria-labelledby="why-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="mb-14">
            <SectionLabel className="mb-4">Why Yardie</SectionLabel>
            <h2
              id="why-heading"
              className="font-display text-bark"
              style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: '1.1', fontWeight: 400 }}
            >
              What sets our work apart
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(26,24,20,0.1)]">
            {service.whyYardie.map((item, i) => (
              <RevealOnScroll key={item.heading} delay={i * 0.1}>
                <div className={`relative overflow-hidden p-10 lg:p-12 h-full ${i === 1 ? 'bg-bark' : 'bg-cream-alt'}`}>
                  {/* Oversized number as background art */}
                  <span
                    className="absolute -top-6 right-3 font-display select-none pointer-events-none leading-none"
                    aria-hidden="true"
                    style={{
                      fontSize: '14rem',
                      fontWeight: 700,
                      lineHeight: 1,
                      color: i === 1 ? 'rgba(248,244,238,0.04)' : 'rgba(26,24,20,0.05)',
                    }}
                  >
                    {String(i + 1)}
                  </span>
                  {/* Moss accent line */}
                  <div className="w-7 h-[2px] bg-moss mb-8 relative z-10" />
                  <h3
                    className={`font-display mb-5 relative z-10 ${i === 1 ? 'text-cream' : 'text-bark'}`}
                    style={{ fontSize: 'clamp(1.2rem,1.8vw,1.5rem)', fontWeight: 400 }}
                  >
                    {item.heading}
                  </h3>
                  <p className={`text-[14px] leading-[1.75] relative z-10 ${i === 1 ? 'text-[rgba(248,244,238,0.65)]' : 'text-clay'}`}>
                    {item.body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="faq-heading">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <RevealOnScroll className="lg:col-span-4">
            <SectionLabel className="mb-4">FAQ</SectionLabel>
            <h2
              id="faq-heading"
              className="font-display text-bark mb-6"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: '1.12', fontWeight: 400 }}
            >
              Common questions
            </h2>
            <p className="text-clay text-[14px] leading-[1.75] mb-8">
              Can&apos;t find your answer? Email us at{' '}
              <a href="mailto:hello@yardiedesign.com" className="text-bark hover:text-moss transition-colors underline underline-offset-2">
                hello@yardiedesign.com
              </a>
            </p>
            <Button href="/faq" variant="outline" size="sm">View All FAQs</Button>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="lg:col-span-8">
            <FAQAccordion items={faqs.items} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-24 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[1320px] mx-auto text-center">
          <SectionLabel light className="mb-6">Get Started</SectionLabel>
          <h2
            className="font-display text-cream text-balance mx-auto mb-8"
            style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.1', fontWeight: 300, maxWidth: '640px' }}
          >
            Ready to start your {service.name.toLowerCase()} project?
          </h2>
          <p className="text-dark-muted text-[15px] leading-[1.7] max-w-[440px] mx-auto mb-10">
            Initial consultations are complimentary. Let&apos;s talk about your space, your goals, and what&apos;s possible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/consultation" variant="primary" size="lg">Schedule a Consultation</Button>
            <Button href="/work" variant="ghost" size="lg">View Our Portfolio</Button>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
