'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const nav = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
        <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
        <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
        <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
      </svg>
    ),
  },
  {
    label: 'Hero Slides',
    href: '/admin/hero',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1" y="3.5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M5.5 8.5l2-2 2 2 1.5-1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4.5" cy="7" r="0.75" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Projects',
    href: '/admin/projects',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M5 6h6M5 9h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Blog Posts',
    href: '/admin/posts',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 3.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 12.5v-9z" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function getPageLabel(pathname: string): string {
  if (pathname === '/admin/dashboard') return 'Dashboard';
  if (pathname === '/admin/hero') return 'Hero Slideshow';
  if (pathname === '/admin/projects') return 'Projects';
  if (pathname === '/admin/projects/new') return 'New Project';
  if (pathname.match(/^\/admin\/projects\/[^/]+\/edit$/)) return 'Edit Project';
  if (pathname === '/admin/posts') return 'Blog Posts';
  if (pathname === '/admin/posts/new') return 'New Post';
  if (pathname.match(/^\/admin\/posts\/[^/]+\/edit$/)) return 'Edit Post';
  return 'Admin';
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (pathname === '/admin/login') return <>{children}</>;

  async function handleLogout() {
    setLoggingOut(true);
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  const pageLabel = getPageLabel(pathname);

  return (
    <div className="min-h-screen bg-[#F5F3EF] flex">

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-60 bg-[#1A1814] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:flex`}
      >
        {/* Logo */}
        <div className="px-5 py-4 border-b border-[rgba(248,244,238,0.06)]">
          <Image
            src="/yardielogofullwhite.svg"
            alt="Yardie Design"
            width={120}
            height={36}
            priority
            className="opacity-85"
          />
          <p className="text-[rgba(248,244,238,0.28)] text-[10px] mt-1 tracking-[0.06em] uppercase">Content Studio</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 px-3 overflow-y-auto">
          <p className="px-3 mb-2 mt-1 text-[rgba(248,244,238,0.22)] text-[9px] tracking-[0.2em] uppercase font-[500]">Content</p>
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 mb-0.5 text-[13px] transition-colors duration-100 ${
                  active
                    ? 'bg-[rgba(248,244,238,0.09)] text-[rgba(248,244,238,0.92)]'
                    : 'text-[rgba(248,244,238,0.42)] hover:text-[rgba(248,244,238,0.72)] hover:bg-[rgba(248,244,238,0.05)]'
                }`}
                style={{ borderRadius: '4px' }}
              >
                <span className={`flex-shrink-0 ${active ? 'text-[rgba(248,244,238,0.7)]' : 'text-[rgba(248,244,238,0.3)]'}`}>
                  {item.icon}
                </span>
                {item.label}
                {active && <span className="ml-auto w-1 h-4 bg-[#7A8C5A] rounded-full flex-shrink-0" />}
              </Link>
            );
          })}

          <div className="mt-5 pt-4 border-t border-[rgba(248,244,238,0.06)]">
            <p className="px-3 mb-2 text-[rgba(248,244,238,0.22)] text-[9px] tracking-[0.2em] uppercase font-[500]">Site</p>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 text-[13px] text-[rgba(248,244,238,0.38)] hover:text-[rgba(248,244,238,0.65)] hover:bg-[rgba(248,244,238,0.04)] transition-colors duration-100"
              style={{ borderRadius: '4px' }}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                <path d="M6 2H2.5A1.5 1.5 0 0 0 1 3.5v8A1.5 1.5 0 0 0 2.5 13h8A1.5 1.5 0 0 0 12 11.5V8M8 1h5v5M13 1 6.5 7.5"
                  stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View Website
            </a>
          </div>
        </nav>

        {/* Logout */}
        <div className="px-3 py-3 border-t border-[rgba(248,244,238,0.06)]">
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] text-[rgba(248,244,238,0.3)] hover:text-[rgba(248,244,238,0.58)] hover:bg-[rgba(248,244,238,0.04)] transition-colors duration-100"
            style={{ borderRadius: '4px' }}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
              <path d="M5 12H2.5A1.5 1.5 0 0 1 1 10.5v-7A1.5 1.5 0 0 1 2.5 2H5M9 10l4-3-4-3M13 7H5"
                stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {loggingOut ? 'Signing out…' : 'Sign Out'}
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-[rgba(26,24,20,0.5)] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-[52px] bg-white border-b border-[#EAE6DE] flex items-center justify-between px-5 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-1.5 text-[#8C8478] hover:text-[#1A1814] transition-colors"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </button>
            <p className="text-[13px] text-[#5C5548] font-[500] tracking-[0.01em]">{pageLabel}</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-[#A8A098] hover:text-[#5C5548] tracking-[0.03em] transition-colors"
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M6 2H2.5A1.5 1.5 0 0 0 1 3.5v8A1.5 1.5 0 0 0 2.5 13h8A1.5 1.5 0 0 0 12 11.5V8M8 1h5v5M13 1 6.5 7.5"
                  stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              yardiedesign.com
            </a>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
