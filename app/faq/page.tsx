import type { Metadata } from 'next';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Yardie Design, Greenville NC',
  description:
    "Answers to common questions about exterior design, landscaping, hardscaping, masonry, lighting, and irrigation services from Yardie Design in Greenville, NC.",
  alternates: {
    canonical: 'https://www.yardiedesign.com/faq',
  },
  openGraph: {
    title: 'FAQ — Yardie Design, Greenville NC',
    description: 'Answers to common questions about exterior design and landscaping services in Greenville, NC.',
    images: [{ url: '/DSC03551.jpg', alt: 'Yardie Design exterior design — Greenville NC' }],
  },
};

export default function FAQPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-cream-alt pt-[72px]" aria-label="FAQ hero">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] pt-20 pb-16 lg:pt-28 lg:pb-20">
          <SectionLabel className="mb-8 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            Frequently Asked Questions
          </SectionLabel>
          <h1
            className="font-display text-bark text-balance animate-fade-up opacity-0"
            style={{
              fontSize: 'clamp(2.5rem,5.5vw,5rem)',
              lineHeight: '1.02',
              fontWeight: 300,
              maxWidth: '620px',
              animationDelay: '0.1s',
              animationFillMode: 'forwards',
            }}
          >
            Common questions,<br /><em>clear answers.</em>
          </h1>
          <p
            className="text-clay text-[15px] leading-[1.75] mt-8 max-w-[440px] animate-fade-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            We&apos;ve answered the questions we hear most often. Can&apos;t find what you&apos;re looking for?{' '}
            <a href="mailto:hello@yardiedesign.com" className="text-bark hover:text-moss transition-colors underline underline-offset-2">
              Email us directly.
            </a>
          </p>
        </div>
      </section>

      {/* ── FAQ SECTIONS ── */}
      <section className="bg-cream py-16 lg:py-24 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto space-y-16 lg:space-y-24">
          {faqs.map((category, i) => (
            <RevealOnScroll key={category.category} delay={i * 0.05}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-3">
                  <SectionLabel className="mb-2">Service</SectionLabel>
                  <h2
                    className="font-display text-bark"
                    style={{ fontSize: 'clamp(1.3rem,2vw,1.75rem)', fontWeight: 400, lineHeight: '1.2' }}
                  >
                    {category.category}
                  </h2>
                  <div className="mt-4">
                    <Button
                      href={`/services/${category.category.toLowerCase()}`}
                      variant="outline"
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-9 border-t border-border-light">
                  <FAQAccordion items={category.items} />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream-alt py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[1320px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10 border border-border-light p-10 lg:p-14">
          <div>
            <SectionLabel className="mb-4">Still Have Questions?</SectionLabel>
            <h2
              className="font-display text-bark text-balance"
              style={{ fontSize: 'clamp(1.4rem,2.2vw,2rem)', lineHeight: '1.2', fontWeight: 400, maxWidth: '460px' }}
            >
              The best way to understand what&apos;s possible for your property is a conversation.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <Button href="/consultation" variant="primary" size="md">Schedule a Consultation</Button>
            <Button href="/contact" variant="outline" size="md">Send a Message</Button>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
