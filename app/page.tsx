import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@/components/ui/HeroSlider';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import PartnersCarousel from '@/components/sections/PartnersCarousel';
import ReviewsCarousel from '@/components/sections/ReviewsCarousel';
import ConversionPopup from '@/components/ui/ConversionPopup';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { db } from '@/lib/db';
import { getGoogleReviews } from '@/lib/google-reviews';
import { getInstagramFeed } from '@/lib/instagram';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Yardie Design — Exterior Design & Landscaping, Greenville NC',
  description:
    'Yardie Design transforms outdoor living spaces into stunning, functional environments. Landscape design, hardscaping, masonry, lighting, and irrigation in Greenville, NC.',
};

const services = [
  { num: '01', name: 'Landscapes',  href: '/services/landscapes', desc: 'Planting design, lawn care, and seasonal stewardship.',             image: '/DSC03551.jpg'        },
  { num: '02', name: 'Hardscapes',  href: '/services/hardscapes', desc: 'Patios, walkways, walls, and outdoor living structures.',           image: '/DSC00044.jpg'        },
  { num: '03', name: 'Masonry',     href: '/services/masonry',    desc: 'Stone, brick, and hand-built permanent features.',                  image: '/DSC03765.jpg'        },
  { num: '04', name: 'Lighting',    href: '/services/lighting',   desc: 'Architectural outdoor lighting design and installation.',           image: '/nav-menu-arch-2.png' },
  { num: '05', name: 'Irrigation',  href: '/services/irrigation', desc: 'Smart, efficient irrigation systems for every landscape.',          image: '/File_027.jpg'        },
];

const processSteps = [
  { num: '01', title: 'Consultation', body: "We begin with a complimentary site visit and conversation — learning about your property, your lifestyle, and your vision. No generic packages. Every project starts with listening." },
  { num: '02', title: 'Design',       body: "Our team develops a custom design tailored to your property's architecture, site conditions, and your aesthetic goals. We walk you through the plan in detail, refine it together, and confirm the brief before anything is built." },
  { num: '03', title: 'Installation', body: "Our skilled craftsmen execute the design with precision — from material selection and procurement to final installation. Every phase is managed by Yardie. You're kept informed throughout, and you get the result you were shown." },
];

export default async function HomePage() {
  const [featuredProjects, featuredPosts, { rating, totalReviews, reviews }, { posts: instagramPosts, isLive: instagramLive }, heroSlides] = await Promise.all([
    db.project.findMany({
      where: { publishStatus: 'published' },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      select: { slug: true, title: true, featuredImage: true, projectLocation: true, serviceCategories: true, completionDate: true },
      take: 3,
    }),
    db.post.findMany({
      where: { publishStatus: 'published' },
      orderBy: [{ publishDate: 'desc' }, { createdAt: 'desc' }],
      select: { slug: true, title: true, excerpt: true, featuredImage: true, category: true, readTime: true, publishDate: true },
      take: 3,
    }),
    getGoogleReviews(),
    getInstagramFeed(6),
    db.heroSlide.findMany({
      where: { active: true },
      orderBy: { sortOrder: 'asc' },
      select: { imageUrl: true, altText: true },
    }),
  ]);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <HeroSlider slides={heroSlides} />

      {/* ── BRAND STATEMENT ───────────────────────────────────────────── */}
      <section className="bg-cream py-28 lg:py-44 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-12 lg:gap-0">
            <div className="lg:col-span-1 hidden lg:flex items-start pt-3">
              <div style={{ width: '1px', height: '52px', background: 'var(--color-border-warm)' }} />
            </div>
            <div className="lg:col-span-9">
              <SectionLabel className="mb-10">Yardie Design — Est. Greenville, NC</SectionLabel>
              <p
                className="font-display text-bark text-balance"
                style={{ fontSize: 'clamp(2rem,3.8vw,3.25rem)', lineHeight: '1.18', fontWeight: 500, maxWidth: '840px' }}
              >
                We don&apos;t just design yards. We create the places{' '}
                <em>where your life happens outside.</em>
              </p>
            </div>
            <div className="lg:col-span-2 lg:flex justify-end items-end hidden">
              <Button href="/about" variant="outline" size="sm">Our Story</Button>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="bg-bark py-0" aria-labelledby="services-heading">
        <div className="px-6 lg:px-[clamp(24px,5vw,80px)] py-14 lg:py-18 border-b border-[rgba(248,244,238,0.08)]">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <RevealOnScroll>
              <SectionLabel className="mb-4" light>What We Design</SectionLabel>
              <h2
                id="services-heading"
                className="font-display text-cream text-balance"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: '1.06', fontWeight: 500 }}
              >
                Five disciplines.<br /><em>One unified vision.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <Button href="/services" variant="ghost" size="sm">All Services</Button>
            </RevealOnScroll>
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-px" style={{ scrollbarWidth: 'none' }}>
          {services.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className="group relative flex-none overflow-hidden bg-bark snap-start"
              style={{ width: '78vw', aspectRatio: '3/4' }}
              aria-label={`${s.name} — ${s.desc}`}
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                sizes="78vw"
                unoptimized
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.88) 0%, rgba(26,24,20,0.3) 45%, rgba(26,24,20,0.05) 75%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-[rgba(248,244,238,0.4)] mb-3">{s.num}</p>
                <h3 className="font-display text-cream font-[400] leading-none mb-2.5" style={{ fontSize: '1.45rem' }}>
                  {s.name}
                </h3>
                <p className="text-[rgba(248,244,238,0.6)] text-[12px] leading-snug">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-[rgba(248,244,238,0.06)]">
          {services.map((s, i) => (
            <RevealOnScroll key={s.name} delay={i * 0.06}>
              <Link
                href={s.href}
                className="group block relative overflow-hidden bg-bark"
                style={{ aspectRatio: '3/4' }}
                aria-label={`${s.name} — ${s.desc}`}
              >
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  sizes="(max-width:1200px)33vw,20vw"
                  unoptimized
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.88) 0%, rgba(26,24,20,0.3) 45%, rgba(26,24,20,0.05) 75%)' }} />
                <div className="absolute inset-0 bg-[rgba(26,24,20,0.18)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                  <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-[rgba(248,244,238,0.4)] mb-3 service-card-meta">{s.num}</p>
                  <h3 className="font-display text-cream font-[300] leading-none mb-2.5 service-card-meta" style={{ fontSize: 'clamp(1.3rem,1.7vw,1.55rem)' }}>
                    {s.name}
                  </h3>
                  <p className="text-[rgba(248,244,238,0.6)] text-[12px] leading-snug service-card-desc">{s.desc}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── FEATURED WORK ─────────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-40 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="work-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel className="mb-4">Recent Work</SectionLabel>
              <h2
                id="work-heading"
                className="font-display text-bark"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: '1.06', fontWeight: 500 }}
              >
                Selected Projects
              </h2>
            </div>
            <Button href="/work" variant="outline" size="sm">View All Projects</Button>
          </RevealOnScroll>

          {featuredProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5">
            {/* Large featured card */}
            <RevealOnScroll className="lg:col-span-7">
              <Link
                href={`/work/${featuredProjects[0].slug}`}
                className="group block relative overflow-hidden bg-warm-stone"
                style={{ aspectRatio: '4/5' }}
                aria-label={`View project: ${featuredProjects[0].title}`}
              >
                {featuredProjects[0].featuredImage && (
                  <Image
                    src={featuredProjects[0].featuredImage}
                    alt={featuredProjects[0].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    sizes="(max-width:1024px)100vw,58vw"
                    unoptimized
                  />
                )}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.88) 0%, rgba(26,24,20,0.18) 50%, transparent 75%)' }} />
                <div className="absolute bottom-0 left-0 p-8 lg:p-10 w-full">
                  {/* Location — hidden by default, slides up on hover */}
                  <p className="label-light mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                    {featuredProjects[0].projectLocation}
                  </p>
                  {/* Title — always visible, lifts on hover */}
                  <h3
                    className="font-display text-cream font-[300] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
                    style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', lineHeight: '1.1' }}
                  >
                    {featuredProjects[0].title}
                  </h3>
                  {/* Tags + CTA — fade up on hover with delay */}
                  <div className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-75">
                    <div className="flex flex-wrap gap-2 mt-4">
                      {featuredProjects[0].serviceCategories.map((tag) => (
                        <span key={tag} className="text-[9px] tracking-[0.18em] uppercase text-[rgba(248,244,238,0.65)] border border-[rgba(248,244,238,0.22)] px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-[rgba(248,244,238,0.7)] text-[10px] tracking-[0.2em] uppercase font-[500]">
                      View Project →
                    </p>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>

            <div className="lg:col-span-5 flex flex-col gap-2.5">
              {featuredProjects.slice(1, 3).map((proj, i) => (
                <RevealOnScroll key={proj.slug} delay={0.12 + i * 0.1} className="flex-1">
                  <Link
                    href={`/work/${proj.slug}`}
                    className="group block relative overflow-hidden bg-warm-stone h-full"
                    style={{ minHeight: '240px' }}
                    aria-label={`View project: ${proj.title}`}
                  >
                    {proj.featuredImage && (
                      <Image
                        src={proj.featuredImage}
                        alt={proj.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                        sizes="(max-width:1024px)100vw,40vw"
                        unoptimized
                      />
                    )}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.85) 0%, rgba(26,24,20,0.12) 55%, transparent 80%)' }} />
                    <div className="absolute bottom-0 left-0 p-6 lg:p-7 w-full">
                      {/* Location — hidden by default */}
                      <p className="label-light mb-2 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                        {proj.projectLocation}
                      </p>
                      {/* Title */}
                      <h3
                        className="font-display text-cream font-[300] transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
                        style={{ fontSize: 'clamp(1.2rem,1.8vw,1.6rem)', lineHeight: '1.1' }}
                      >
                        {proj.title}
                      </h3>
                      {/* View link */}
                      <p className="mt-3 text-[rgba(248,244,238,0.65)] text-[9px] tracking-[0.2em] uppercase font-[500] opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[60ms]">
                        View Project →
                      </p>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
          )}
        </div>
      </section>

      {/* ── DESIGN VISUALIZATION ─────────────────────────────────────── */}
      <section className="bg-bark py-24 lg:py-40 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="visualization-heading">
        <div className="max-w-[1320px] mx-auto">

          {/* Header row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-end mb-14">
            <RevealOnScroll className="lg:col-span-7">
              <SectionLabel className="mb-5" light>Design Visualization</SectionLabel>
              <h2
                id="visualization-heading"
                className="font-display text-cream text-balance"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: '1.06', fontWeight: 500 }}
              >
                You&apos;ll see it clearly<br /><em>before we build it.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1} className="lg:col-span-5">
              <p className="text-[rgba(248,244,238,0.6)] text-[15px] leading-[1.8]">
                Most exterior contractors hand you a quote. We hand you a design. Before a stone is placed or a plant is selected, Yardie produces a complete visual presentation of your outdoor space — so you can see exactly what you&apos;re approving, refine it freely, and build with total confidence.
              </p>
            </RevealOnScroll>
          </div>

          {/* Before / After slider */}
          <RevealOnScroll>
            <BeforeAfterSlider
              beforeSrc="/minshew-2(3D).png"
              afterSrc="/minshew-2.PNG"
              beforeLabel="3D Rendering"
              afterLabel="Completed Project"
              beforeAlt="Yardie Design — 3D design rendering of Minshew project"
              afterAlt="Yardie Design — completed Minshew project"
            />
          </RevealOnScroll>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(248,244,238,0.06)] mt-px">
            {([
              [
                'A Design That\'s Yours',
                'We don\'t work from templates. Every sketch, material selection, and spatial decision is specific to your property, your architecture, and the way you live outside.',
              ],
              [
                'Refine Until It\'s Right',
                'The design phase is collaborative by intention. Change the stone, adjust the layout, move the firepit. We iterate until the plan reflects exactly the space you had in mind.',
              ],
              [
                'Build With Full Clarity',
                'When construction begins, both sides know exactly what the outcome looks like. No surprises, no substitutions — just a realized version of what you approved.',
              ],
            ] as const).map(([title, body], i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="bg-bark px-8 py-10">
                  <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-moss mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-cream font-[300] mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.2' }}>
                    {title}
                  </h3>
                  <p className="text-[rgba(248,244,238,0.5)] text-[13px] leading-[1.75]">{body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Section CTA */}
          <RevealOnScroll delay={0.12}>
            <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-10"
              style={{ borderTop: '1px solid rgba(248,244,238,0.08)' }}
            >
              <p className="font-display text-cream font-[300] text-balance" style={{ fontSize: 'clamp(1.1rem,1.6vw,1.35rem)', lineHeight: '1.3', maxWidth: '460px' }}>
                Ready to see your space designed before a single decision is made?
              </p>
              <Link
                href="/consultation"
                className="flex-shrink-0 inline-block border border-[rgba(248,244,238,0.3)] text-cream text-[10px] tracking-[0.18em] uppercase font-[500] px-9 py-[14px] transition-all duration-300 hover:border-[rgba(248,244,238,0.7)] hover:bg-[rgba(248,244,238,0.06)]"
                style={{ borderRadius: '2px' }}
              >
                Schedule a Consultation
              </Link>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── CINEMATIC STATEMENT ─────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(480px,60vw,720px)' }}
        aria-label="Yardie Design — by the numbers"
      >
        <Image
          src="/File_055.jpg"
          alt="Yardie Design project — Eastern North Carolina"
          fill
          className="object-cover object-[center_40%]"
          sizes="100vw"
          unoptimized
        />
        {/* Cinematic overlay — heavier than before, gives depth to the stats */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(26,24,20,0.38) 0%, rgba(26,24,20,0.55) 60%, rgba(26,24,20,0.68) 100%)' }}
        />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 lg:px-[clamp(24px,5vw,80px)]">
          <div className="w-8 h-px bg-[rgba(248,244,238,0.22)] mb-14" />
          <div className="grid grid-cols-3 gap-4 md:gap-20 lg:gap-28 text-center">
            {([
              ['100+', 'Projects Completed', 'Across Eastern NC'],
              ['20+',  'Years Experience',   'In exterior design'],
              ['5',    'Design Disciplines', 'As one vision'],
            ] as const).map(([num, label, sub]) => (
              <div key={label}>
                <p
                  className="font-display text-cream"
                  style={{ fontSize: 'clamp(2rem,5.5vw,5.5rem)', fontWeight: 500, lineHeight: '1', letterSpacing: '-0.03em' }}
                >
                  {num}
                </p>
                <p className="label-light mt-3">{label}</p>
                <p className="hidden md:block mt-1.5 text-[rgba(248,244,238,0.28)] text-[9px] tracking-[0.14em] uppercase">{sub}</p>
              </div>
            ))}
          </div>
          <div className="w-8 h-px bg-[rgba(248,244,238,0.22)] mt-14" />
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="bg-cream-alt py-24 lg:py-40 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="process-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <SectionLabel className="mb-5">The Process</SectionLabel>
                <h2
                  id="process-heading"
                  className="font-display text-bark"
                  style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: '1.06', fontWeight: 500 }}
                >
                  How we work<br /><em>together</em>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="text-clay text-[14px] leading-[1.8]">
                  Every Yardie project follows a proven three-phase process — designed to ensure clarity, craftsmanship, and a result that exceeds your expectations.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="divide-y divide-border-light">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 py-14 lg:py-16 items-start">
                  <div className="lg:col-span-1">
                    <span
                      className="font-display text-border-warm select-none block"
                      style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', lineHeight: '1', fontWeight: 500 }}
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-bark" style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 500, lineHeight: '1.1' }}>
                      {step.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7">
                    <p className="text-clay leading-[1.8] text-[15px]">{step.body}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="mt-14">
            <Button href="/consultation" variant="primary" size="md">Begin the Conversation</Button>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────── */}
      <section className="bg-bark py-24 lg:py-40 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-label="Client reviews">
        <div className="max-w-[1320px] mx-auto">

          {/* Section header */}
          <RevealOnScroll className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <SectionLabel className="mb-5" light>Client Reviews</SectionLabel>
                <h2
                  className="font-display text-cream"
                  style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: '1.06', fontWeight: 500 }}
                >
                  What our clients say
                </h2>
                {/* Rating badge */}
                {rating > 0 && (
                  <div className="flex items-center gap-3 mt-5">
                    <div className="flex gap-[3px]" aria-label={`${rating} out of 5 stars`}>
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} width="13" height="13" viewBox="0 0 16 16" fill="currentColor" className="text-moss" aria-hidden="true">
                          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.12L8 10.5l-3.71 1.95.71-4.12L2 5.5l4.15-.75L8 1z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-cream text-[14px] font-[500]">{rating.toFixed(1)}</span>
                    <span className="text-[rgba(248,244,238,0.35)] text-[13px]">
                      · {totalReviews} reviews on Google
                    </span>
                  </div>
                )}
              </div>
              <Button href="/work" variant="ghost" size="sm">See Our Work</Button>
            </div>
          </RevealOnScroll>

          {/* Carousel or fallback */}
          {reviews.length > 0 ? (
            <RevealOnScroll>
              <ReviewsCarousel reviews={reviews} />
            </RevealOnScroll>
          ) : (
            <RevealOnScroll className="max-w-[820px]">
              <div className="relative overflow-hidden" style={{ borderLeft: '2px solid var(--color-moss)', paddingLeft: '2rem' }}>
                <p className="font-display text-cream font-[300] italic leading-[1.5]" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)' }}>
                  &ldquo;Transforming outdoor spaces into beautiful, functional environments — one project at a time.&rdquo;
                </p>
                <p className="label-light mt-6" style={{ color: 'rgba(248,244,238,0.35)' }}>Yardie Design — Greenville, NC</p>
              </div>
            </RevealOnScroll>
          )}

        </div>
      </section>

      {/* ── PARTNERS CAROUSEL ─────────────────────────────────────────── */}
      <section className="bg-cream py-12 lg:py-16 border-y border-[var(--color-border-light)] overflow-hidden">
        <RevealOnScroll className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] mb-8">
          <SectionLabel>Trusted Brands &amp; Partners</SectionLabel>
        </RevealOnScroll>
        <PartnersCarousel />
      </section>

      {/* ── ABOUT GLIMPSE ─────────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-40 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <RevealOnScroll>
            <SectionLabel className="mb-7">About Yardie</SectionLabel>
            <h2
              className="font-display text-bark mb-9 text-balance"
              style={{ fontSize: 'clamp(2rem,3.4vw,3rem)', lineHeight: '1.1', fontWeight: 500 }}
            >
              Founded in Greenville.<br />
              <em>Rooted in craftsmanship.</em>
            </h2>
            <p className="text-clay text-[15px] leading-[1.8] mb-5 max-w-[500px]">
              Yardie is an exterior design company built on the belief that every property has extraordinary potential. Under the leadership of Scott Baldwin, our team of designers and craftsmen transforms ordinary exteriors into spaces you&apos;ll love spending time in.
            </p>
            <p className="text-clay text-[15px] leading-[1.8] mb-12 max-w-[500px]">
              With 20+ years of experience and hundreds of completed projects across Greenville and Eastern North Carolina, we bring expertise, care, and genuine craft to every engagement.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-12 pt-10" style={{ borderTop: '1px solid var(--color-border-light)' }}>
              {([['100+', 'Clients Served'], ['20+', 'Years Experience'], ['30+', 'Team Members']] as const).map(([num, label]) => (
                <div key={label}>
                  <p className="font-display text-bark" style={{ fontSize: 'clamp(1.8rem,2.8vw,2.75rem)', fontWeight: 500, lineHeight: '1' }}>{num}</p>
                  <p className="label mt-2">{label}</p>
                </div>
              ))}
            </div>
            <Button href="/about" variant="outline" size="md">Our Story</Button>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/IMG_4722.jpg"
                alt="Scott Baldwin, founder of Yardie Design, reviewing plans in Greenville NC"
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
                unoptimized
              />
            </div>
            <div
              className="absolute -bottom-8 -left-8 bg-moss p-8 max-w-[240px] hidden lg:block"
              style={{ borderRadius: '2px' }}
            >
              <p className="font-display text-cream italic leading-snug" style={{ fontSize: '1.1rem' }}>
                &ldquo;Design should be an experience, not just a product.&rdquo;
              </p>
              <p className="label-light mt-4">Scott Baldwin, Founder</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── PERSPECTIVES ──────────────────────────────────────────────────── */}
      <section className="bg-bark py-24 lg:py-40 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="perspectives-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel className="mb-4" light>Perspectives</SectionLabel>
              <h2
                id="perspectives-heading"
                className="font-display text-cream"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: '1.06', fontWeight: 500 }}
              >
                Ideas from the studio
              </h2>
            </div>
            <Button href="/insights" variant="ghost" size="sm">All Perspectives</Button>
          </RevealOnScroll>

          {/* Featured article — editorial split card */}
          {featuredPosts.length > 0 && (
          <RevealOnScroll className="mb-2.5">
            <Link
              href={`/insights/${featuredPosts[0].slug}`}
              className="group grid grid-cols-1 lg:grid-cols-5"
              aria-label={`Read: ${featuredPosts[0].title}`}
            >
              {/* Image panel — 3/5 width */}
              <div className="lg:col-span-3 relative overflow-hidden bg-earth" style={{ aspectRatio: '3/2', minHeight: '300px' }}>
                {featuredPosts[0].featuredImage && (
                  <Image
                    src={featuredPosts[0].featuredImage}
                    alt={featuredPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    sizes="(max-width:1024px)100vw,62vw"
                    unoptimized
                  />
                )}
                {/* Subtle label overlay on image */}
                <div className="absolute top-6 left-6">
                  <span className="label-light text-[rgba(248,244,238,0.55)]">{featuredPosts[0].readTime}</span>
                </div>
              </div>
              {/* Text panel — 2/5 width */}
              <div className="lg:col-span-2 flex flex-col justify-between bg-[#1F1D19] p-10 lg:p-14" style={{ minHeight: '300px' }}>
                <div>
                  <p className="label text-moss mb-7">{featuredPosts[0].category}</p>
                  <h3
                    className="font-display text-cream font-[300] text-balance transition-colors duration-300 group-hover:text-[rgba(248,244,238,0.78)]"
                    style={{ fontSize: 'clamp(1.4rem,2vw,1.9rem)', lineHeight: '1.15' }}
                  >
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-[rgba(248,244,238,0.42)] text-[13px] leading-[1.8] mt-5">
                    {featuredPosts[0].excerpt}
                  </p>
                </div>
                <div>
                  <div className="h-px bg-[rgba(248,244,238,0.07)] mb-6" />
                  <div className="flex items-center justify-between">
                    <span className="text-[rgba(248,244,238,0.28)] text-[11px] tracking-[0.05em]">
                      {featuredPosts[0].publishDate ? new Date(featuredPosts[0].publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                    </span>
                    <span className="label text-moss group-hover:text-moss-light transition-colors duration-300">
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealOnScroll>
          )}

          {/* Two secondary articles — horizontal compact cards */}
          {featuredPosts.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {featuredPosts.slice(1, 3).map((post, i) => (
              <RevealOnScroll key={post.slug} delay={(i + 1) * 0.1}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group grid grid-cols-1 sm:grid-cols-5 bg-[#1F1D19]"
                  aria-label={`Read: ${post.title}`}
                >
                  <div className="col-span-full sm:col-span-2 relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    {post.featuredImage && (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                        sizes="(max-width:768px)40vw,25vw"
                        unoptimized
                      />
                    )}
                  </div>
                  <div className="col-span-full sm:col-span-3 flex flex-col justify-center p-6 lg:p-8">
                    <p className="label text-moss mb-3">{post.category}</p>
                    <h3
                      className="font-display text-cream font-[300] transition-colors duration-300 group-hover:text-[rgba(248,244,238,0.78)]"
                      style={{ fontSize: 'clamp(0.95rem,1.3vw,1.15rem)', lineHeight: '1.25' }}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[rgba(248,244,238,0.28)] text-[11px] tracking-[0.04em]">
                        {post.publishDate ? new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                      </span>
                      <span className="label text-[rgba(248,244,238,0.25)] group-hover:text-moss transition-colors duration-300">→</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* ── INSTAGRAM ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-40 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="instagram-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel className="mb-4">Follow Along</SectionLabel>
              <h2
                id="instagram-heading"
                className="font-display text-bark"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: '1.06', fontWeight: 500 }}
              >
                @yardiedesign
              </h2>
            </div>
            <a
              href="https://www.instagram.com/yardiedesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="label text-moss hover:text-moss-dark transition-colors flex items-center gap-2"
            >
              {instagramLive ? 'View on Instagram →' : 'Follow on Instagram →'}
            </a>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--color-border-light)]">
            {instagramPosts.slice(0, 6).map((post, i) => (
              <RevealOnScroll key={post.id} delay={i * 0.05}>
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden bg-warm-stone"
                  style={{ aspectRatio: '1/1' }}
                  aria-label="View on Instagram"
                >
                  <Image
                    src={post.media_url}
                    alt={post.caption ? post.caption.slice(0, 80) : 'Yardie Design project'}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    sizes="(max-width:768px)50vw,33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[rgba(26,24,20,0)] group-hover:bg-[rgba(26,24,20,0.45)] transition-colors duration-400 flex items-center justify-center">
                    <svg
                      width="28" height="28" viewBox="0 0 24 24" fill="none"
                      stroke="rgba(248,244,238,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4.5"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="rgba(248,244,238,0.9)" stroke="none"/>
                    </svg>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL TRUST ───────────────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[1320px] mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 py-12 lg:py-16"
            style={{ borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}
          >
            <div className="lg:col-span-7">
              <SectionLabel className="mb-4">Service Area</SectionLabel>
              <p className="font-display text-bark" style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 500, lineHeight: '1.45' }}>
                Proudly serving Greenville, Winterville, Farmville,<br className="hidden lg:block" /> Ayden, and the greater Pitt County region.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 space-y-3">
              <a href="tel:+12527567788" className="block font-sans text-bark font-[500] text-[15px] hover:text-moss transition-colors tracking-[0.04em]">
                (252) 756-7788
              </a>
              <a href="mailto:hello@yardiedesign.com" className="block text-clay text-[13px] hover:text-bark transition-colors">
                hello@yardiedesign.com
              </a>
              <Link href="/consultation" className="block label text-moss hover:text-moss-dark transition-colors mt-4">
                Schedule a consultation →
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      {/* ── SERVICE AREAS ─────────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-36 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="areas-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <SectionLabel className="mb-4">Where We Work</SectionLabel>
              <h2
                id="areas-heading"
                className="font-display text-bark"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: '1.06', fontWeight: 500 }}
              >
                Serving Eastern<br /><em>North Carolina</em>
              </h2>
            </div>
            <Button href="/service-areas" variant="outline" size="sm">All Service Areas</Button>
          </RevealOnScroll>
          <RevealOnScroll className="mb-12">
            <p className="text-clay text-[14px] leading-[1.75] max-w-[540px]">
              Based in Winterville, we bring the same design standards, the same crew, and the same level of craft to every project — regardless of where it is in Eastern NC.
            </p>
          </RevealOnScroll>

          {/* Location grid — architectural text layout */}
          <div className="divide-y divide-border-light">
            {locations.map((loc, i) => (
              <RevealOnScroll key={loc.slug} delay={i * 0.05}>
                <Link
                  href={`/service-areas/${loc.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-7 items-center hover:bg-cream-alt transition-colors duration-200 -mx-4 px-4"
                  aria-label={`Exterior design services in ${loc.fullName}`}
                >
                  <div className="md:col-span-1 hidden md:flex items-center">
                    <span className="font-sans text-[10px] tracking-[0.16em] text-warm-stone uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-3 flex items-center gap-3">
                    <span className="label md:hidden">{String(i + 1).padStart(2, '0')}</span>
                    <h3
                      className="font-display text-bark group-hover:text-moss transition-colors duration-200"
                      style={{ fontSize: 'clamp(1.15rem,1.6vw,1.45rem)', fontWeight: 400 }}
                    >
                      {loc.fullName}
                    </h3>
                  </div>
                  <div className="md:col-span-2 hidden md:block">
                    <span className="label text-clay">{loc.county}</span>
                    <p className="text-[rgba(26,24,20,0.38)] text-[10px] tracking-[0.06em] mt-0.5">{loc.distanceNote}</p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-clay text-[13px] leading-[1.65] max-w-[420px]">{loc.tagline}</p>
                  </div>
                  <div className="hidden md:flex md:col-span-1 justify-end">
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="text-warm-stone group-hover:text-moss transition-colors duration-200">
                      <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-cream-alt py-24 lg:py-36 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="faq-heading">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left: heading + CTA */}
            <RevealOnScroll className="lg:col-span-4">
              <SectionLabel className="mb-5">Common Questions</SectionLabel>
              <h2
                id="faq-heading"
                className="font-display text-bark text-balance"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: '1.08', fontWeight: 500 }}
              >
                Everything you&apos;d want to know before we begin
              </h2>
              <p className="text-clay text-[14px] leading-[1.8] mt-6 mb-10 max-w-[340px]">
                Have a question that&apos;s not answered here? We&apos;re always happy to speak directly.
              </p>
              <Button href="/consultation" variant="outline" size="md">Speak With Us</Button>
            </RevealOnScroll>

            {/* Right: accordion */}
            <RevealOnScroll delay={0.1} className="lg:col-span-8 lg:col-start-5">
              <FAQAccordion items={[
                {
                  question: 'How do I begin a project with Yardie?',
                  answer: 'Start with a complimentary consultation — a brief site visit and conversation where we learn about your property, your goals, and your aesthetic vision. There\'s no commitment and no cost. From there, we\'ll outline a design approach and proposal tailored to your specific project.',
                },
                {
                  question: 'What areas do you serve?',
                  answer: 'Yardie primarily serves Greenville, Winterville, Farmville, Ayden, and the greater Pitt County region. We occasionally take projects in surrounding Eastern North Carolina communities — contact us to discuss your location.',
                },
                {
                  question: 'What does an exterior design project typically cost?',
                  answer: 'Projects vary significantly based on scope, materials, and site conditions. Every project is priced individually after an initial consultation — we don\'t use fixed packages or generic tiers. We provide detailed, transparent proposals so you always know exactly what you\'re investing in before any work begins.',
                },
                {
                  question: 'How long does a typical project take from start to finish?',
                  answer: 'A focused intervention — a pathway, entry planting, or patio — typically takes two to four weeks from design approval to completion. Comprehensive full-property transformations generally run two to four months. We\'ll provide a clear timeline in your proposal and keep you updated at every phase.',
                },
                {
                  question: 'Do you offer ongoing maintenance after installation?',
                  answer: 'Yes — for most projects we offer seasonal maintenance programs covering lawn care, planting bed upkeep, irrigation management, and lighting service. These are tailored to each property. Ask about our stewardship program during your consultation.',
                },
                {
                  question: 'What makes Yardie different from a standard landscaping company?',
                  answer: 'Design intent. A standard landscaping company installs plants and hardscape according to what\'s available and affordable. We start with a considered design brief, develop a visual plan for your approval, select materials and plants that honor your home\'s architecture, and execute with craftsmen who take genuine pride in their work. The result looks like it was always meant to be there.',
                },
              ]} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <ConversionPopup />
    </>
  );
}
