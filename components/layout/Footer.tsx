import Link from 'next/link';
import Image from 'next/image';

const serviceLinks = [
  { label: 'Landscapes', href: '/services/landscapes' },
  { label: 'Hardscapes', href: '/services/hardscapes' },
  { label: 'Masonry', href: '/services/masonry' },
  { label: 'Lighting', href: '/services/lighting' },
  { label: 'Irrigation', href: '/services/irrigation' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/insights' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const locationLinks = [
  { label: 'Winterville, NC', href: '/service-areas/winterville-nc' },
  { label: 'Ayden, NC',       href: '/service-areas/ayden-nc'       },
  { label: 'Farmville, NC',   href: '/service-areas/farmville-nc'   },
  { label: 'Washington, NC',  href: '/service-areas/washington-nc'  },
  { label: 'Kinston, NC',     href: '/service-areas/kinston-nc'     },
  { label: 'New Bern, NC',    href: '/service-areas/new-bern-nc'    },
];

export default function Footer() {
  return (
    <footer className="bg-bark" aria-label="Site footer">

      {/* CTA Strip */}
      <div className="bg-moss px-6 lg:px-[clamp(24px,5vw,80px)] py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <div className="lg:col-span-7">
            <p className="label-light mb-8">Greenville, NC &amp; Surrounding Areas</p>
            <h2
              className="font-display text-cream text-balance"
              style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', lineHeight: '1.04', fontWeight: 300 }}
            >
              Ready to Transform<br /><em>Your Outdoor Space?</em>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 space-y-6">
            <p className="text-[rgba(248,244,238,0.65)] text-[15px] leading-[1.8]">
              Let&apos;s talk about your project. Our initial consultation is complimentary — no cost, no obligation.
            </p>
            <Link
              href="/consultation"
              className="block sm:inline-block text-center w-full sm:w-auto bg-cream text-bark text-[10px] tracking-[0.18em] uppercase font-[500] px-9 py-[14px] transition-all duration-300 hover:bg-warm-stone"
              style={{ borderRadius: '2px' }}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Body */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] py-20 lg:py-24">
        {/* Main grid — 5 columns on lg: Brand | Services | Company | Locations | Contact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 mb-16">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link
              href="/"
              className="block mb-5 hover:opacity-75 transition-opacity"
              aria-label="Yardie Design — Home"
            >
              <Image
                src="/yardielogofullwhite.svg"
                alt="Yardie Design"
                width={610}
                height={177}
                className="h-[52px] w-auto"
                unoptimized
              />
            </Link>
            <p className="text-dark-muted text-sm leading-relaxed mb-6 max-w-[220px]">
              Exterior design and landscaping in Greenville, NC — transforming outdoor spaces into living environments.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/yardienc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yardie on Instagram"
                className="text-dark-muted hover:text-cream transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/yardiedesign/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yardie on Facebook"
                className="text-dark-muted hover:text-cream transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-[500] tracking-[0.15em] uppercase text-dark-muted mb-5">
              Design Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[rgba(248,244,238,0.6)] text-[13px] hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-[500] tracking-[0.15em] uppercase text-dark-muted mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[rgba(248,244,238,0.6)] text-[13px] hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <p className="text-[11px] font-[500] tracking-[0.15em] uppercase text-dark-muted mb-5">
              Service Areas
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/service-areas" className="text-[rgba(248,244,238,0.6)] text-[13px] hover:text-cream transition-colors duration-200">
                  All Areas
                </Link>
              </li>
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[rgba(248,244,238,0.6)] text-[13px] hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <p className="text-[11px] font-[500] tracking-[0.15em] uppercase text-dark-muted mb-5">
              Contact
            </p>
            <address className="not-italic space-y-3">
              <div>
                <p className="text-[rgba(248,244,238,0.65)] text-sm">
                  5036 Winterville Parkway
                </p>
                <p className="text-[rgba(248,244,238,0.65)] text-sm">
                  Winterville, NC 28590
                </p>
              </div>
              <div>
                <a
                  href="tel:+12527567788"
                  className="text-[rgba(248,244,238,0.65)] text-sm hover:text-cream transition-colors block"
                >
                  (252) 756-7788
                </a>
                <a
                  href="mailto:hello@yardiedesign.com"
                  className="text-[rgba(248,244,238,0.65)] text-sm hover:text-cream transition-colors block"
                >
                  hello@yardiedesign.com
                </a>
              </div>
              <p className="text-[rgba(248,244,238,0.45)] text-xs leading-relaxed">
                Greenville, Winterville, Farmville,<br />
                Ayden, Washington, Kinston,<br />
                New Bern &amp; Eastern NC.
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-dark-muted text-xs tracking-[0.06em]">
            © {new Date().getFullYear()} Yardie Design. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/legal/privacy-policy"
              className="text-dark-muted text-xs tracking-[0.06em] hover:text-cream transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-dark-muted text-xs tracking-[0.06em] hover:text-cream transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
