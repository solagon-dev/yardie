"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import YardieWordmark from "@/components/brand/YardieWordmark";

/* ─── Navigation (Rooted Southern Craft) ──────────────────────────
   Top nav:  About · Services · Work · Journal · Start a project
   Phone:    (252) 756-7788
*/

const serviceLinks = [
  { label: "Landscapes", href: "/services/landscapes", tagline: "Planting, grading, lawn" },
  { label: "Hardscapes", href: "/services/hardscapes", tagline: "Patios, walls, paths" },
  { label: "Masonry", href: "/services/masonry", tagline: "Stone & brick, built once" },
  { label: "Lighting", href: "/services/lighting", tagline: "Architectural outdoor lighting" },
  { label: "Irrigation", href: "/services/irrigation", tagline: "Smart systems for Eastern NC" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Work", href: "/gallery" },
  { label: "Journal", href: "/journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Pages that start with a dark/photographic hero where nav text must be light.
  const isDarkHero =
    ["/", "/about", "/services", "/gallery", "/contact"].includes(pathname) ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/gallery/") ||
    pathname.startsWith("/journal/") ||
    pathname.startsWith("/service-areas/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = scrolled ? "bg-limestone border-b border-moss/20" : "bg-transparent";
  const textColor = scrolled ? "text-ink" : isDarkHero ? "text-limestone" : "text-ink";
  const markTone = scrolled ? "forest" : isDarkHero ? "limestone" : "forest";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg}`}
        style={{ height: "76px" }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-gutter h-full flex items-center justify-between">
          {/* Wordmark + small tagline */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-baseline gap-3 hover:opacity-80 transition-opacity"
            aria-label="Yardie — Home"
          >
            <YardieWordmark tone={markTone as "forest" | "limestone"} size={24} />
            <span
              className={`hidden md:inline-block mono-caption-sm uppercase ${
                scrolled || !isDarkHero ? "text-moss" : "text-limestone/70"
              }`}
            >
              Exterior Design · Eastern NC
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    className={`flex items-center gap-1.5 text-[14px] transition-colors duration-200 ${textColor} hover:text-ochre`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-limestone border border-moss/40 w-[420px]">
                      <div className="grid grid-cols-1 divide-y divide-moss/20">
                        {serviceLinks.map((s, i) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-4 px-5 py-4 hover:bg-paper transition-colors group"
                          >
                            <span className="font-mono text-ochre text-[13px] tabular-nums">
                              0{i + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <span className="block text-[15px] text-forest font-display tracking-tight">
                                {s.label}
                              </span>
                              <span className="block text-[12px] text-moss mt-0.5 font-sans">
                                {s.tagline}
                              </span>
                            </div>
                            <span
                              aria-hidden
                              className="text-moss group-hover:text-ochre group-hover:translate-x-0.5 transition-all"
                            >
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-moss/30 px-5 py-3">
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="eyebrow hover:text-forest transition-colors"
                        >
                          See all services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] transition-colors duration-200 ${textColor} hover:text-ochre ${
                    pathname === link.href || pathname.startsWith(`${link.href}/`)
                      ? "text-ochre"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+12527567788"
              className={`mono-caption-sm uppercase transition-colors duration-200 ${
                scrolled || !isDarkHero ? "text-moss" : "text-limestone/80"
              } hover:text-ochre`}
            >
              (252) 756-7788
            </a>
            <Link
              href="/quote"
              className="bg-forest text-limestone text-[13px] font-medium px-6 py-3 inline-flex items-center justify-center gap-2 hover:bg-ochre hover:text-ink transition-colors"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  mobileOpen ? "w-6 rotate-45 translate-y-[6px]" : "w-6"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  mobileOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  mobileOpen ? "w-6 -rotate-45 -translate-y-[6px]" : "w-6"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-forest transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="h-full flex flex-col overflow-y-auto px-10 pt-24 pb-16">
          <div className="absolute top-0 left-0 right-0 flex items-center px-10" style={{ height: "76px" }}>
            <YardieWordmark tone="limestone" size={24} />
          </div>

          <nav className="space-y-0" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block font-display text-limestone transition-opacity hover:opacity-70 py-3 ${
                    mobileOpen ? "animate-fade-up opacity-0" : ""
                  }`}
                  style={{
                    fontSize: "clamp(2rem, 5vw, 2.5rem)",
                    letterSpacing: "-0.015em",
                    animationDelay: `${0.1 + i * 0.06}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="mt-2 mb-3 ml-1 space-y-0.5">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block text-[13px] text-limestone/70 tracking-[0.06em] uppercase hover:text-ochre transition-colors py-2.5"
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
              className={`block font-display text-limestone transition-opacity hover:opacity-70 py-3 ${
                mobileOpen ? "animate-fade-up opacity-0" : ""
              }`}
              style={{
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                letterSpacing: "-0.015em",
                animationDelay: `${0.1 + navLinks.length * 0.06}s`,
                animationFillMode: "forwards",
              }}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`block font-display text-limestone transition-opacity hover:opacity-70 py-3 ${
                mobileOpen ? "animate-fade-up opacity-0" : ""
              }`}
              style={{
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                letterSpacing: "-0.015em",
                animationDelay: `${0.1 + (navLinks.length + 1) * 0.06}s`,
                animationFillMode: "forwards",
              }}
            >
              Let&rsquo;s talk
            </Link>
          </nav>

          <div className="mt-auto space-y-5">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 border border-limestone/70 text-limestone text-[13px] tracking-wide font-medium px-7 py-3.5 hover:bg-ochre hover:border-ochre hover:text-ink transition-colors"
            >
              Start a project <span aria-hidden>→</span>
            </Link>
            <div className="flex flex-col gap-1 text-limestone/70 text-[13px]">
              <a href="tel:+12527567788" className="hover:text-ochre transition-colors mono-caption-sm uppercase">
                (252) 756-7788
              </a>
              <a href="mailto:hello@yardiedesign.com" className="hover:text-ochre transition-colors mono-caption-sm">
                hello@yardiedesign.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
