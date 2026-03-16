import type { Metadata } from 'next';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Yardie Design — Greenville, NC Exterior Design',
  description:
    'Reach the Yardie Design team in Greenville, NC. Call (252) 756-7788, email hello@yardiedesign.com, or send us a message. Serving Pitt County and Eastern North Carolina.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/contact',
  },
  openGraph: {
    title: 'Contact Yardie Design — Greenville, NC',
    description: 'Get in touch with Yardie Design. Call, email, or send a message. Serving Greenville, Winterville, Farmville, and Pitt County, NC.',
    images: [{ url: '/DSC03806.jpg', alt: 'Yardie Design stone masonry work in Greenville NC' }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]" aria-label="Contact hero">
        {/* Left */}
        <div className="bg-bark flex flex-col justify-end px-6 lg:px-[clamp(32px,4vw,80px)] pt-[152px] pb-16 lg:pt-[184px] lg:pb-24">
          <SectionLabel light className="mb-8 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            Get in Touch
          </SectionLabel>
          <h1
            className="font-display text-cream text-balance animate-fade-up opacity-0"
            style={{
              fontSize: 'clamp(2.5rem,5.5vw,5rem)',
              lineHeight: '1.02',
              fontWeight: 500,
              animationDelay: '0.1s',
              animationFillMode: 'forwards',
            }}
          >
            Let&apos;s talk about<br /><em>your project.</em>
          </h1>
          <p className="text-dark-muted text-[15px] leading-[1.75] mt-8 max-w-[400px] animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            For new project inquiries, our consultation form is the fastest path forward. For everything else, we&apos;re here.
          </p>
        </div>
        {/* Right — photo */}
        <div className="relative min-h-[300px] lg:min-h-0">
          <Image
            src="/DSC03806.jpg"
            alt="Custom stone masonry and outdoor living space by Yardie Design, Greenville NC"
            fill
            priority
            className="object-cover"
            sizes="(max-width:1024px)100vw,50vw"
            unoptimized
          />
        </div>
      </section>

      <ContactForm />
    </>
  );
}
