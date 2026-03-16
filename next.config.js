/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
      // Behold / Instagram CDN
      { protocol: 'https', hostname: '*.cdninstagram.com' },
      { protocol: 'https', hostname: '*.behold.so' },
    ],
  },

  // Server-only packages that should NOT be bundled by Turbopack/webpack —
  // resolved natively by Node.js instead. This is the main cause of slow
  // dev-server startup: without this, Turbopack compiles Prisma + pg from
  // source on every cold start, which adds 30–40 seconds.
  serverExternalPackages: [
    '@prisma/client',
    '@prisma/adapter-pg',
    'prisma',
    'pg',
    'pg-native',
    'bcryptjs',
    'iron-session',
  ],

  experimental: {
    // optimizePackageImports re-exports only the named exports actually used,
    // reducing bundle size for packages with large re-export surfaces.
    // Keep client-facing packages here; server-only ones go in serverExternalPackages.
    optimizePackageImports: ['resend'],
  },
};

module.exports = nextConfig;
