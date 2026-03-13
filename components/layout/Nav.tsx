'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const serviceLinks = [
  { label: 'Landscapes', href: '/services/landscapes', image: '/DSC03551.jpg', tagline: 'Living gardens & planting' },
  { label: 'Hardscapes', href: '/services/hardscapes', image: '/DSC00044.jpg', tagline: 'Patios, paths & structure' },
  { label: 'Masonry', href: '/services/masonry', image: '/DSC03765.jpg', tagline: 'Stone, brick & custom work' },
  { label: 'Lighting', href: '/services/lighting', image: '/nav-menu-arch-2.png', tagline: 'Ambiance after dark' },
  { label: 'Irrigation', href: '/services/irrigation', image: '/File_027.jpg', tagline: 'Efficient water systems' },
];

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/insights' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect dark-hero pages (where nav starts transparent with light text)
  const isDarkHero = ['/', '/about', '/services', '/work', '/contact'].includes(pathname) ||
    pathname.startsWith('/services/') ||
    pathname.startsWith('/work/') ||
    pathname.startsWith('/insights/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navBg = scrolled
    ? 'bg-cream border-b border-border-light'
    : 'bg-transparent';

  const textColor = scrolled
    ? 'text-earth'
    : isDarkHero ? 'text-cream' : 'text-earth';

  const useLightLogo = !scrolled && isDarkHero;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        style={{ height: '72px' }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] h-full flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-75 transition-opacity duration-300"
            aria-label="Yardie Design — Home"
          >
            <Image
              src={useLightLogo ? '/yardielogo.svg' : '/yardielogoblack.svg'}
              alt="Yardie Design"
              width={610}
              height={112}
              className="h-[18px] w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    className={`flex items-center gap-1.5 text-[13px] tracking-[0.04em] transition-colors duration-200 ${textColor} hover:opacity-70`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      width="10" height="6" viewBox="0 0 10 6" fill="none"
                      className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-cream border border-border-warm shadow-lg w-[480px]">
                      <div className="grid grid-cols-1 divide-y divide-border-light">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-4 px-5 py-3.5 hover:bg-cream-alt transition-colors duration-150 group"
                          >
                            <div className="relative w-14 h-10 flex-shrink-0 overflow-hidden">
                              <Image
                                src={s.image}
                                alt=""
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="56px"
                                unoptimized
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="block text-[13px] text-bark tracking-[0.04em] font-[500]">{s.label}</span>
                              <span className="block text-[11px] text-clay tracking-[0.03em] mt-0.5">{s.tagline}</span>
                            </div>
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="flex-shrink-0 text-warm-stone group-hover:text-bark transition-colors">
                              <path d="M1 1L7 6L1 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border-warm px-5 py-3">
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="text-[11px] text-clay tracking-[0.1em] uppercase hover:text-bark transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] tracking-[0.04em] transition-colors duration-200 ${textColor} hover:opacity-70 ${
                    pathname === link.href ? 'border-b border-current pb-0.5' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12527567788"
              className={`text-[12px] tracking-[0.08em] uppercase transition-colors duration-200 ${textColor} hover:opacity-70`}
            >
              (252) 756-7788
            </a>
            <Link
              href="/consultation"
              className="bg-bark text-cream text-[11px] tracking-[0.12em] uppercase font-[500] px-6 py-3 transition-colors duration-200 hover:bg-earth"
              style={{ borderRadius: '2px' }}
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-6'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bark transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="h-full flex flex-col overflow-y-auto px-10 pt-20 pb-16">
          {/* Mobile logo */}
          <div className="absolute top-0 left-0 right-0 flex items-center px-10" style={{ height: '72px' }}>
            <Image
              src="/yardielogo.svg"
              alt="Yardie Design"
              width={610}
              height={112}
              className="h-[18px] w-auto"
              unoptimized
            />
          </div>
          {/* Main links */}
          <nav className="space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block font-display text-cream transition-opacity hover:opacity-60 ${
                    mobileOpen ? 'animate-fade-up opacity-0' : ''
                  }`}
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    animationDelay: `${0.1 + i * 0.06}s`,
                    animationFillMode: 'forwards',
                  }}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="mt-1 mb-3 ml-1 space-y-0.5">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block text-[13px] text-dark-muted tracking-[0.06em] uppercase hover:text-cream transition-colors py-3"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/faq"
              className={`block font-display text-cream transition-opacity hover:opacity-60 ${
                mobileOpen ? 'animate-fade-up opacity-0' : ''
              }`}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                animationDelay: `${0.1 + navLinks.length * 0.06}s`,
                animationFillMode: 'forwards',
              }}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`block font-display text-cream transition-opacity hover:opacity-60 ${
                mobileOpen ? 'animate-fade-up opacity-0' : ''
              }`}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                animationDelay: `${0.1 + (navLinks.length + 1) * 0.06}s`,
                animationFillMode: 'forwards',
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Bottom */}
          <div className="mt-auto space-y-4">
            <Link
              href="/consultation"
              className="inline-block border border-cream text-cream text-[11px] tracking-[0.12em] uppercase font-[500] px-8 py-4"
              style={{ borderRadius: '2px' }}
            >
              Schedule Consultation
            </Link>
            <div className="flex flex-col gap-1 text-dark-muted text-[12px] tracking-[0.08em] uppercase">
              <a href="tel:+12527567788" className="hover:text-cream transition-colors">(252) 756-7788</a>
              <a href="mailto:hello@yardiedesign.com" className="hover:text-cream transition-colors">hello@yardiedesign.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
