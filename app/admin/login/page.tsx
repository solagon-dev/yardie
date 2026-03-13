'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        router.push('/admin/dashboard');
      } else {
        const data = await res.json();
        setError(data.error ?? 'Login failed');
      }
    } catch {
      setError('Network error — please try again');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1814] flex items-center justify-center p-6">
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="mb-10 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/yardielogofullwhite.svg"
              alt="Yardie Design"
              width={160}
              height={48}
              priority
              className="opacity-90"
            />
          </div>
          <h1 className="text-[rgba(248,244,238,0.9)] text-[22px] font-[300]" style={{ fontFamily: 'var(--font-display, Georgia), serif' }}>
            Content Studio
          </h1>
          <p className="text-[rgba(248,244,238,0.35)] text-[13px] mt-2 tracking-[0.01em]">
            Sign in to manage your content
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] text-[rgba(248,244,238,0.4)] tracking-[0.1em] uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full bg-[rgba(248,244,238,0.06)] border border-[rgba(248,244,238,0.1)] text-[rgba(248,244,238,0.85)] text-[14px] px-4 py-3 outline-none focus:border-[rgba(122,140,90,0.6)] transition-colors placeholder-[rgba(248,244,238,0.2)]"
              style={{ borderRadius: '2px' }}
              placeholder="admin@yardiedesign.com"
            />
          </div>

          <div>
            <label className="block text-[11px] text-[rgba(248,244,238,0.4)] tracking-[0.1em] uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full bg-[rgba(248,244,238,0.06)] border border-[rgba(248,244,238,0.1)] text-[rgba(248,244,238,0.85)] text-[14px] px-4 py-3 outline-none focus:border-[rgba(122,140,90,0.6)] transition-colors"
              style={{ borderRadius: '2px' }}
            />
          </div>

          {error && (
            <div className="flex items-center gap-2.5 bg-[rgba(220,80,80,0.12)] border border-[rgba(220,80,80,0.25)] px-4 py-3" style={{ borderRadius: '2px' }}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6" stroke="rgba(220,80,80,0.8)" strokeWidth="1.2"/>
                <path d="M7 4v3.5M7 10h.01" stroke="rgba(220,80,80,0.8)" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <p className="text-[rgba(220,100,100,0.9)] text-[12px]">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#7A8C5A] text-white text-[11px] tracking-[0.14em] uppercase font-[500] py-3.5 hover:bg-[#6A7C4A] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            style={{ borderRadius: '2px' }}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
