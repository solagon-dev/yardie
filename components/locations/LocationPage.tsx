import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import FAQAccordion from '@/components/ui/FAQAccordion';
import type { Location } from '@/lib/locations';

const serviceLinks = [
  { num: '01', name: 'Landscapes',  href: '/services/landscapes',  desc: 'Planting design, lawn care & seasonal stewardship.' },
  { num: '02', name: 'Hardscapes',  href: '/services/hardscapes',  desc: 'Patios, walkways, walls & outdoor living structures.' },
  { num: '03', name: 'Masonry',     href: '/services/masonry',     desc: 'Stone, brick & hand-built permanent features.' },
  { num: '04', name: 'Lighting',    href: '/services/lighting',    desc: 'Architectural outdoor lighting design & installation.' },
  { num: '05', name: 'Irrigation',  href: '/services/irrigation',  desc: 'Smart, efficient irrigation for every landscape.' },
];

interface Props {
  location: Location;
}

export default function LocationPage({ location }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LandscapeService', 'LocalBusiness'],
    name: 'Yardie Design',
    image: `https://www.yardiedesign.com${location.heroImage}`,
    url: `https://www.yardiedesign.com/service-areas/${location.slug}`,
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
      {
        '@type': 'City',
        name: location.name,
        addressRegion: 'NC',
        addressCountry: 'US',
      },
      {
        '@type': 'AdministrativeArea',
        name: location.county,
        addressRegion: 'NC',
        addressCountry: 'US',
      },
    ],
    description: location.metaDescription,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Exterior Design Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscape Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hardscaping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Masonry' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor Lighting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Irrigation' } },
      ],
    },
  };

  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: '85vh', minHeight: '580px' }}
        aria-label={`${location.fullName} exterior design hero`}
      >
        <Image
          src={location.heroImage}
          alt={`Exterior design and landscaping in ${location.fullName}`}
          fill
          priority
          className="object-cover object-[50%_40%] md:object-center"
          sizes="100vw"
          unoptimized
        />
        {/* Layered scrims for strong text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,24,20,0.48) 0%, rgba(26,24,20,0.12) 40%, rgba(26,24,20,0.12) 55%, rgba(26,24,20,0.72) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-[rgba(26,24,20,0.28)]" />

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col justify-end"
          style={{ padding: '0 clamp(24px,5vw,80px) clamp(4rem,8vw,8rem)' }}
        >
          <div className="max-w-[1320px] mx-auto w-full">
            <SectionLabel
              light
              className="mb-4 animate-fade-up opacity-0"
              style={{ animationFillMode: 'forwards' }}
            >
              {location.county} · Service Area
            </SectionLabel>
            <h1
              className="font-display text-cream animate-fade-up opacity-0 text-balance"
              style={{
                fontSize: 'clamp(1.9rem,6.5vw,6rem)',
                lineHeight: '1.02',
                fontWeight: 500,
                maxWidth: '820px',
                animationDelay: '0.1s',
                animationFillMode: 'forwards',
                whiteSpace: 'pre-line',
              }}
            >
              {location.heroHeadline}
            </h1>
            <p
              className="text-[rgba(248,244,238,0.78)] mt-6 mb-10 animate-fade-up opacity-0 max-w-[520px]"
              style={{
                fontSize: 'clamp(0.9rem,1.3vw,1.0625rem)',
                lineHeight: '1.7',
                animationDelay: '0.2s',
                animationFillMode: 'forwards',
              }}
            >
              {location.heroSubline}
            </p>
            <div className="animate-fade-up opacity-0 flex flex-wrap gap-3" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Button href="/consultation" variant="primary" size="md">Schedule Consultation</Button>
              <Button href="/work" variant="ghost" size="md">View Our Work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="bg-cream border-b border-border-light">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[11px] tracking-[0.08em] text-warm-stone">
              <li>
                <Link href="/" className="hover:text-bark transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-[rgba(26,24,20,0.25)]">/</li>
              <li>
                <Link href="/service-areas" className="hover:text-bark transition-colors">Service Areas</Link>
              </li>
              <li aria-hidden="true" className="text-[rgba(26,24,20,0.25)]">/</li>
              <li className="text-bark font-[500]" aria-current="page">{location.fullName}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="bg-cream py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <RevealOnScroll>
            <SectionLabel className="mb-5">{location.fullName}</SectionLabel>
            <h2
              className="font-display text-bark mb-8"
              style={{ fontSize: 'clamp(1.6rem,2.8vw,2.5rem)', lineHeight: '1.12', fontWeight: 400 }}
            >
              {location.introHeading}
            </h2>
            {location.introBody.map((para, i) => (
              <p key={i} className={`text-clay text-[15px] leading-[1.75] max-w-[520px] ${i > 0 ? 'mt-5' : ''}`}>
                {para}
              </p>
            ))}
            <div className="mt-10">
              <Button href="/consultation" variant="outline" size="md">Begin Your Project</Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src={location.featureImage}
                alt={`Yardie Design — exterior design work near ${location.fullName}`}
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
                unoptimized
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="bg-cream-alt border-y border-border-light">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {([
              ['20+', 'Years in Eastern NC'],
              ['5', 'Design disciplines'],
              ['1', 'Team, start to finish'],
              ['0', 'Subcontractors'],
            ] as [string, string][]).map(([val, label]) => (
              <div key={label}>
                <p
                  className="font-display text-bark leading-none"
                  style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500 }}
                >
                  {val}
                </p>
                <p className="text-clay text-[12px] mt-2 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="bg-cream py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="services-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="mb-6">
            <SectionLabel className="mb-4">Design Services</SectionLabel>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2
                id="services-heading"
                className="font-display text-bark max-w-[560px]"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: '1.1', fontWeight: 400 }}
              >
                Full exterior design services, {location.name}.
              </h2>
              <p className="text-clay text-[14px] leading-[1.75] max-w-[340px] lg:text-right">
                {location.servicesIntro}
              </p>
            </div>
          </RevealOnScroll>

          <div className="divide-y divide-border-light mt-12">
            {serviceLinks.map((s, i) => (
              <RevealOnScroll key={s.name} delay={i * 0.06}>
                <Link
                  href={s.href}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-7 lg:py-8 items-center hover:bg-cream-alt transition-colors duration-200 -mx-4 px-4"
                >
                  <div className="lg:col-span-1 hidden lg:flex items-center">
                    <span
                      className="font-display text-warm-stone select-none"
                      style={{ fontSize: '2.2rem', fontWeight: 500, lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      {s.num}
                    </span>
                  </div>
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <span className="label lg:hidden">{s.num}</span>
                    <h3
                      className="font-display text-bark group-hover:text-moss transition-colors duration-200"
                      style={{ fontSize: 'clamp(1.15rem,1.6vw,1.4rem)', fontWeight: 400 }}
                    >
                      {s.name}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-clay text-[13px] leading-[1.7]">{s.desc}</p>
                  </div>
                  <div className="hidden lg:flex lg:col-span-1 justify-end">
                    <svg
                      width="8" height="13" viewBox="0 0 8 13" fill="none"
                      className="text-warm-stone group-hover:text-moss transition-colors duration-200"
                    >
                      <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO BREAK / LOCAL STATEMENT ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(220px,32vw,480px)' }} aria-hidden="true">
        <Image
          src={location.featureImage}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(26,24,20,0.58)]" />
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <p
            className="font-display text-cream text-center italic text-balance"
            style={{ fontSize: 'clamp(1.25rem,2.5vw,2rem)', fontWeight: 500, maxWidth: '740px', lineHeight: '1.45' }}
          >
            &ldquo;{location.localStatement}&rdquo;
          </p>
        </div>
      </div>

      {/* ── WHY YARDIE ── */}
      <section className="py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)] bg-cream-alt" aria-labelledby="why-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="mb-14">
            <SectionLabel className="mb-4">Why Yardie in {location.name}</SectionLabel>
            <h2
              id="why-heading"
              className="font-display text-bark"
              style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: '1.1', fontWeight: 400 }}
            >
              What sets our work apart
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(26,24,20,0.1)]">
            {location.whyYardie.map((item, i) => (
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

      {/* ── PROCESS TEASER ── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="process-loc-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 py-12"
              style={{ borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}
            >
              <div className="lg:col-span-5">
                <SectionLabel className="mb-4">The Process</SectionLabel>
                <h2
                  id="process-loc-heading"
                  className="font-display text-bark"
                  style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', lineHeight: '1.1', fontWeight: 400 }}
                >
                  How a {location.name} project begins
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="space-y-6">
                  {([
                    ['Consultation', `We come to your ${location.name} property — in person, at no cost. We listen, assess the site, and develop a clear picture of your goals and the opportunities the property presents.`],
                    ['Design', 'We develop a complete visual plan tailored to your property. You\'ll see the finished outdoor space before we build it — and we refine it together until it\'s exactly right.'],
                    ['Installation', 'Our own crew executes the approved design with precision. You\'re informed throughout and you get the result you approved — no field substitutions, no surprises.'],
                  ] as [string, string][]).map(([title, body], i) => (
                    <div key={title} className="flex gap-5">
                      <span
                        className="font-display text-warm-stone select-none flex-shrink-0"
                        style={{ fontSize: '1.8rem', fontWeight: 500, lineHeight: 1, marginTop: '2px' }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-bark mb-1" style={{ fontSize: '1.1rem', fontWeight: 400 }}>{title}</h3>
                        <p className="text-clay text-[13px] leading-[1.7]">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href="/consultation" variant="outline" size="md">Schedule Your Consultation</Button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── 3D VISUALIZATION CALLOUT ── */}
      <section className="bg-bark py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <RevealOnScroll>
            <SectionLabel light className="mb-5">Design Visualization</SectionLabel>
            <h2
              className="font-display text-cream mb-7 text-balance"
              style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', lineHeight: '1.1', fontWeight: 500 }}
            >
              You&apos;ll see your {location.name} space before we build it.
            </h2>
            <p className="text-[rgba(248,244,238,0.62)] text-[15px] leading-[1.8] mb-10 max-w-[480px]">
              Every Yardie project includes a complete visual presentation of your outdoor space — accurate to the site, detailed enough to make real decisions. You approve the design before a stone is placed or a plant is selected.
            </p>
            <Button href="/consultation" variant="primary" size="md">Begin Your Design</Button>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/minshew-2(3D).png"
                alt="Yardie Design 3D visualization example"
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
                unoptimized
              />
              <div className="absolute bottom-6 left-6">
                <span
                  className="text-cream text-[9px] tracking-[0.2em] uppercase font-[500] bg-bark/90 px-4 py-2"
                  style={{ borderRadius: '2px', backdropFilter: 'blur(4px)' }}
                >
                  3D Design Rendering
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="faq-loc-heading">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <RevealOnScroll className="lg:col-span-4">
            <SectionLabel className="mb-4">FAQ</SectionLabel>
            <h2
              id="faq-loc-heading"
              className="font-display text-bark mb-6"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: '1.12', fontWeight: 400 }}
            >
              Questions about {location.name}
            </h2>
            <p className="text-clay text-[14px] leading-[1.75] mb-8">
              Have a question that&apos;s not here? Email us at{' '}
              <a href="mailto:hello@yardiedesign.com" className="text-bark underline underline-offset-2 hover:text-moss transition-colors">
                hello@yardiedesign.com
              </a>
            </p>
            <Button href="/faq" variant="outline" size="sm">All FAQs</Button>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="lg:col-span-8">
            <FAQAccordion items={location.faqItems} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ── NEARBY AREAS ── */}
      {location.nearbyAreas.length > 0 && (
        <div className="bg-cream-alt border-t border-border-light">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] py-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
              <p className="text-[10px] font-[500] tracking-[0.18em] uppercase text-warm-stone flex-shrink-0">
                Also serving nearby
              </p>
              <div className="flex flex-wrap gap-6">
                {location.nearbyAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="group flex items-center gap-2 text-bark text-[13px] hover:text-moss transition-colors duration-200"
                  >
                    {area.name}, NC
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="text-warm-stone group-hover:text-moss transition-colors duration-200">
                      <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
                <Link
                  href="/service-areas"
                  className="group flex items-center gap-2 text-warm-stone text-[13px] hover:text-moss transition-colors duration-200"
                >
                  All service areas
                  <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="group-hover:text-moss transition-colors duration-200">
                    <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="bg-bark py-24 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[1320px] mx-auto text-center">
          <SectionLabel light className="mb-6">Get Started in {location.name}</SectionLabel>
          <h2
            className="font-display text-cream text-balance mx-auto mb-8"
            style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.1', fontWeight: 500, maxWidth: '680px' }}
          >
            Ready to transform your {location.name} property?
          </h2>
          <p className="text-dark-muted text-[15px] leading-[1.7] max-w-[440px] mx-auto mb-10">
            Initial consultations are complimentary — no cost, no obligation. We&apos;ll visit your {location.name} property, listen to your vision, and develop a plan tailored specifically to your space and goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/consultation" variant="primary" size="lg">Schedule a Consultation</Button>
            <Button href="/work" variant="ghost" size="lg">View Our Portfolio</Button>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a href="tel:+12527567788" className="text-[rgba(248,244,238,0.45)] text-[13px] hover:text-cream transition-colors tracking-[0.04em]">
              (252) 756-7788
            </a>
            <span className="hidden sm:block text-[rgba(248,244,238,0.2)]">·</span>
            <a href="mailto:hello@yardiedesign.com" className="text-[rgba(248,244,238,0.45)] text-[13px] hover:text-cream transition-colors">
              hello@yardiedesign.com
            </a>
            <span className="hidden sm:block text-[rgba(248,244,238,0.2)]">·</span>
            <span className="text-[rgba(248,244,238,0.28)] text-[11px] tracking-[0.1em] uppercase">
              {location.distanceNote}
            </span>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
