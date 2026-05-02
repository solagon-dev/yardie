/** @type {import('next').NextConfig} */

// All bulk image assets live on Vercel Blob (the repo would be ~5 GB
// otherwise). The rewrites below transparently map the local-looking
// paths the app uses (`/projects/foo.jpg`, `/renderings/bar.png`, …)
// to the Blob origin, so no <Image src> in the codebase has to change.
// `BLOB_PUBLIC_URL` is set in env for portability; the literal default
// matches the Blob store currently provisioned for this project.
const BLOB_BASE = process.env.BLOB_PUBLIC_URL ||
  'https://dahwdk1paekenkyr.public.blob.vercel-storage.com';
const BLOB_DIRS = ['projects', 'renderings', 'photoshoot', 'journal', 'staff', 'cities', 'brand', 'sketches'];

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
    ],
  },

  experimental: {
    optimizePackageImports: ['resend'],
  },

  // Proxy local-style asset paths to the Blob origin. Each rule covers
  // one top-level asset directory; ordering doesn't matter since the
  // sources are mutually exclusive prefixes.
  async rewrites() {
    return BLOB_DIRS.map((dir) => ({
      source: `/${dir}/:path*`,
      destination: `${BLOB_BASE}/${dir}/:path*`,
    }));
  },

  // Permanent redirects — old URLs from yardiedesign.com.
  async redirects() {
    return [
      { source: '/insights', destination: '/journal', permanent: true },
      { source: '/insights/:slug*', destination: '/journal/:slug*', permanent: true },
      { source: '/blog', destination: '/journal', permanent: true },
      { source: '/blog/:slug*', destination: '/journal/:slug*', permanent: true },
      { source: '/post/:slug*', destination: '/journal/:slug*', permanent: true },
      { source: '/portfolio', destination: '/gallery', permanent: true },
      { source: '/portfolio/:slug*', destination: '/gallery/:slug*', permanent: true },
      { source: '/project/:slug*', destination: '/gallery/:slug*', permanent: true },
      { source: '/work', destination: '/gallery', permanent: true },
      { source: '/work/:slug*', destination: '/gallery/:slug*', permanent: true },
      { source: '/schedule-consultation', destination: '/quote', permanent: true },
      { source: '/consultation', destination: '/quote', permanent: true },
      { source: '/landscapes', destination: '/services/landscapes', permanent: true },
      { source: '/hardscapes', destination: '/services/hardscapes', permanent: true },
      { source: '/masonry', destination: '/services/masonry', permanent: true },
      { source: '/lighting', destination: '/services/lighting', permanent: true },
      { source: '/irrigation', destination: '/services/irrigation', permanent: true },
      { source: '/careers', destination: '/about', permanent: true },
    ];
  },
};

module.exports = nextConfig;
