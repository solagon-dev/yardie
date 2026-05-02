"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navigation, company, services } from "@/lib/content";
import { photosByService, photos as allPhotos } from "@/lib/media";

// Twelve services Yardie leads with — grouped into three thematic
// columns for the mega-menu, mirroring the Bluefin dropdown pattern
// (Living Spaces / Foundations / Gardens & Systems).
const dropdownGroups: { title: string; slugs: string[] }[] = [
  {
    title: "Living Spaces",
    slugs: ["outdoor-kitchens", "fire-features", "pergolas-pavilions", "pool-decks"],
  },
  {
    title: "Foundations",
    slugs: ["patios-pavers", "walkways-driveways", "masonry", "retaining-walls"],
  },
  {
    title: "Gardens & Systems",
    slugs: ["landscapes", "lighting", "irrigation", "water-features"],
  },
];

// Short, single-clause teaser per service. Sits under each name in
// the dropdown — keeps the mega-menu scannable.
const serviceTeasers: Record<string, string> = {
  "outdoor-kitchens":  "Built-in grills, bars + masonry kitchens.",
  "fire-features":     "Fireplaces, fire pits + pizza ovens.",
  "pergolas-pavilions": "Cedar, aluminum + screened-porch builds.",
  "pool-decks":        "Paver, travertine + bluestone surrounds.",
  "patios-pavers":     "Stone, brick + paver outdoor rooms.",
  "walkways-driveways": "Front walks, garden paths + paver drives.",
  "masonry":           "Hand-laid stone, brick + veneer.",
  "retaining-walls":   "Engineered grade-change in stone + block.",
  "landscapes":        "Master plans, planting + seasonal upkeep.",
  "lighting":          "Layered low-voltage, warmer light.",
  "irrigation":        "Smart-controller systems, drip + zone design.",
  "water-features":    "Spillways, fountains + pondless waterfalls.",
};

// Routes whose hero is light — would need a different header treatment.
// Yardie's pages all open on dark editorial heroes, so this stays empty.
const SOLID_HEADER_ROUTES = new Set<string>([]);

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Trigger the scrolled-state nav once the user is past the hero.
  useEffect(() => {
    const findHero = (): HTMLElement | null => {
      const main = document.querySelector("main");
      if (!main) return null;
      for (const child of Array.from(main.children)) {
        if (["SCRIPT", "STYLE", "LINK"].includes(child.tagName)) continue;
        const el = child as HTMLElement;
        if (el.offsetHeight > 50) return el;
      }
      return null;
    };

    const update = () => {
      const hero = findHero();
      const triggerY = hero ? hero.offsetTop + hero.offsetHeight - 80 : 80;
      setScrolled(window.scrollY >= triggerY);
    };

    update();
    const raf = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  // Lock scroll while mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const hasDarkHero = !SOLID_HEADER_ROUTES.has(pathname);
  const transparent = hasDarkHero && !scrolled;

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const queueCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 350);
  };

  return (
    <>
      <header className="sticky top-0 z-50" data-scrolled={scrolled ? "true" : "false"}>
        {/* Top fade scrim — keeps the navbar legible against bright spots
            in the hero photo while header is transparent. */}
        <div
          aria-hidden
          className={`absolute inset-x-0 top-0 h-[170px] lg:h-[200px] bg-gradient-to-b from-bark/70 via-bark/30 to-transparent pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            transparent ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Backdrop — dark warm bark on scroll. */}
        <div
          aria-hidden
          className={`absolute inset-0 bg-bark/95 backdrop-blur-2xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            transparent ? "opacity-0 -translate-y-1.5" : "opacity-100 translate-y-0"
          }`}
        />
        <div
          aria-hidden
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-moss/60 to-transparent transition-opacity duration-1000 ease-out ${
            transparent ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          aria-hidden
          className={`absolute inset-x-0 bottom-0 h-px bg-cream/15 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${
            transparent ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
          }`}
        />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex h-14 lg:h-[68px] items-center justify-between gap-6">
            <Link
              href="/"
              className="flex-shrink-0 relative h-5 lg:h-[22px]"
              aria-label={company.name}
            >
              <Image
                src="/brand/logo-full-white.svg"
                alt={company.name}
                width={400}
                height={75}
                priority
                className="h-full w-auto object-contain"
              />
            </Link>

            {/* Desktop nav — centered */}
            <nav className="hidden lg:flex items-center gap-8 ml-auto mr-auto">
              {navigation.main.map((item) => {
                const isServices = item.label === "Services";
                if (isServices) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={openServices}
                      onMouseLeave={queueCloseServices}
                    >
                      <Link
                        href={item.href}
                        onFocus={openServices}
                        onBlur={queueCloseServices}
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        className="flex items-center gap-1.5 text-[11px] tracking-[0.22em] uppercase text-cream/75 hover:text-cream transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      >
                        {item.label}
                        <svg
                          className={`h-2.5 w-2.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </Link>
                      {servicesOpen && (
                        <span aria-hidden className="absolute left-0 right-0 top-full h-4" />
                      )}
                    </div>
                  );
                }
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[11px] tracking-[0.22em] uppercase transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      active ? "text-cream" : "text-cream/75 hover:text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href={navigation.cta.href}
                className="inline-flex items-center justify-center px-4 py-2 text-[10.5px] tracking-[0.22em] uppercase font-medium border border-cream/80 text-cream hover:bg-cream hover:text-bark transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                {navigation.cta.label}
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              type="button"
              className={`lg:hidden p-2 -mr-2 transition-colors ${mobileOpen ? "text-bark" : "text-cream"}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Services mega-menu — three thematic columns + featured panel */}
        <div
          onMouseEnter={openServices}
          onMouseLeave={queueCloseServices}
          aria-hidden={!servicesOpen}
          className={`hidden lg:block absolute inset-x-0 top-full bg-white backdrop-blur-2xl border-b border-border origin-top transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            servicesOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-10 lg:py-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {dropdownGroups.map((group) => (
                <div key={group.title} className="lg:col-span-3 border-t border-border pt-5">
                  <p className="font-mono text-[10.5px] tabular-nums text-clay/65 tracking-[0.22em] uppercase mb-5">
                    {group.title}
                  </p>
                  <ul className="space-y-1">
                    {group.slugs
                      .map((slug) => services.find((s) => s.slug === slug))
                      .filter((s): s is NonNullable<typeof s> => Boolean(s))
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="group block py-2.5"
                          >
                            <p className="font-display text-[18px] text-bark group-hover:text-moss transition-colors leading-snug tracking-tight font-light">
                              {s.name}
                            </p>
                            <p className="text-[12.5px] text-clay/65 leading-relaxed mt-0.5">
                              {serviceTeasers[s.slug] ?? s.tagline}
                            </p>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}

              {/* Featured panel — small image + call to action */}
              <div className="lg:col-span-3 border-t border-border pt-5">
                <p className="font-mono text-[10.5px] tabular-nums text-clay/65 tracking-[0.22em] uppercase mb-5">
                  Now Designing
                </p>
                <Link href="/services/outdoor-kitchens" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                    <Image
                      src="/projects/outdoor-kitchens/outdoor-kitchen-grill-stone-base-01.jpg"
                      alt="Built-in stainless grill, wine fridge, and stone-clad cabinetry under a covered patio."
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-bark/90 via-bark/30 to-transparent">
                      <p className="font-display italic text-stone/90 text-[13px] tracking-tight font-light leading-tight">
                        Recent work
                      </p>
                      <p className="mt-1 font-display text-[18px] text-cream leading-tight tracking-tight">
                        Outdoor kitchens, built-in.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/services"
                  className="group mt-5 inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase font-medium text-bark hover:text-moss transition-colors"
                >
                  <span aria-hidden className="block h-px w-6 bg-bark group-hover:w-10 group-hover:bg-moss transition-all duration-500 ease-out" />
                  All Services
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-[60] bg-bark text-cream transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-5 sm:px-8 h-14 border-b border-cream/10 shrink-0">
            <Link href="/" onClick={() => setMobileOpen(false)} className="relative h-5" aria-label={company.name}>
              <Image src="/brand/logo-full-white.svg" alt={company.name} width={400} height={75} className="h-full w-auto object-contain" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center h-10 w-10 -mr-2 text-cream"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col px-5 sm:px-8 pt-7">
            <MobileNav onNavigate={() => setMobileOpen(false)} />
          </nav>

          <div className="border-t border-cream/10 px-5 sm:px-8 py-7 pb-[calc(env(safe-area-inset-bottom)+1.75rem)] space-y-6">
            <Link
              href={navigation.cta.href}
              onClick={() => setMobileOpen(false)}
              className="group flex items-center justify-center gap-2.5 py-4 text-[12px] tracking-[0.22em] uppercase font-medium bg-cream text-bark hover:bg-stone transition-colors"
            >
              {navigation.cta.label}
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5 text-[13.5px] min-w-0">
                <a href={company.phoneTel} className="text-cream hover:text-stone transition-colors font-medium tracking-wide">
                  {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="text-cream/70 hover:text-cream transition-colors break-all">
                  {company.email}
                </a>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <SocialIcon href={company.instagram} label="Instagram" type="ig" />
                <SocialIcon href={company.facebook} label="Facebook" type="fb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SocialIcon({ href, label, type }: { href: string; label: string; type: "ig" | "fb" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-cream/55 hover:text-cream transition-colors">
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        {type === "ig" ? (
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.91.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.25 2.14.55 2.9.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.49 2.9.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.14-.25 2.9-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.49-1.63.55-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.25-2.14-.55-2.9-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.85.62c-.76-.3-1.63-.49-2.9-.55C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
        ) : (
          <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
        )}
      </svg>
    </a>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <ul className="flex flex-col divide-y divide-cream/10">
      {navigation.main.map((item, i) => {
        const num = String(i + 1).padStart(2, "0");
        if (item.label === "Services") {
          const open = openSection === "services";
          return (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => setOpenSection(open ? null : "services")}
                aria-expanded={open}
                className="group w-full flex items-center gap-4 py-5"
              >
                <span className="footer-label text-cream/45 w-8 text-left">{num}</span>
                <span className="flex-1 text-left font-display text-[34px] text-cream leading-none tracking-tight">
                  Services
                </span>
                <svg
                  className={`h-4 w-4 text-cream/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className={`grid overflow-hidden transition-[grid-template-rows,opacity,padding] duration-500 ease-out ${
                  open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0 pb-0"
                }`}
              >
                <ul className="overflow-hidden pl-12 space-y-2.5">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        onClick={onNavigate}
                        className="block py-1 text-[15px] text-cream/75 hover:text-cream transition-colors"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      href="/services"
                      onClick={onNavigate}
                      className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.22em] uppercase text-stone hover:text-cream transition-colors"
                    >
                      Explore All Services
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          );
        }
        return (
          <li key={item.href}>
            <Link href={item.href} onClick={onNavigate} className="group flex items-center gap-4 py-5">
              <span className="footer-label text-cream/45 w-8">{num}</span>
              <span className="font-display text-[34px] text-cream leading-none tracking-tight group-hover:text-stone transition-colors">
                {item.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
