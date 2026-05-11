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
  //
  // ORDER MATTERS: more specific paths must come BEFORE wildcard rules.
  // Next.js applies the first matching rule, so a wildcard like
  // `/post/:slug*` would short-circuit any specific `/post/foo` below it.
  async redirects() {
    return [
      // --- Specific old slugs that no longer exist under /journal --- //
      // The wildcard `/post/:slug*` rule below cannot help here because the
      // new journal slug is a SHORTENED version of the old post slug.
      // Each of the URLs below was showing up in Search Console as a 404
      // or as ranked impressions with no destination page.
      { source: '/post/how-masonry-enhances-curb-appeal-and-increases-property-value',
        destination: '/journal/how-masonry-enhances-curb-appeal', permanent: true },
      { source: '/post/the-benefits-of-drip-irrigation-for-your-garden',
        destination: '/journal/the-benefits-of-drip-irrigation', permanent: true },
      { source: '/insights/the-benefits-of-drip-irrigation-for-your-garden',
        destination: '/journal/the-benefits-of-drip-irrigation', permanent: true },
      { source: '/post/the-importance-of-efficient-irrigation-systems-for-your-lawn-and-garden',
        destination: '/journal/efficient-irrigation-systems', permanent: true },
      { source: '/post/the-advantages-of-using-natural-stone-in-hardscape-projects',
        destination: '/journal/natural-stone-in-hardscape-projects', permanent: true },
      { source: '/post/top-7-hardscape-features-to-transform-your-outdoor-space',
        destination: '/journal/top-7-hardscape-features', permanent: true },
      { source: '/post/the-ultimate-guide-to-choosing-the-right-hardscaping-materials',
        destination: '/journal/ultimate-guide-to-hardscaping-materials', permanent: true },
      { source: '/post/pathway-lighting-a-guide-to-choosing-the-perfect-fixtures',
        destination: '/journal/pathway-lighting-guide', permanent: true },
      { source: '/post/solar-vs-wired-lighting-which-is-right-for-your-yard',
        destination: '/journal/solar-vs-wired-lighting', permanent: true },
      { source: '/post/choosing-the-right-masonry-for-your-home-stone-brick-or-concrete',
        destination: '/journal/choosing-the-right-masonry-stone-brick-or-concrete', permanent: true },
      { source: '/post/masonry-vs-wood-why-you-should-choose-stone-or-brick-for-your-landscape',
        destination: '/journal/masonry-vs-wood', permanent: true },
      { source: '/post/modern-vs-traditional-finding-the-right-style-for-your-outdoor-space',
        destination: '/journal/modern-vs-traditional-finding-the-right-style', permanent: true },
      { source: '/post/5-creative-ways-to-boost-curb-appeal-with-landscaping',
        destination: '/journal/five-creative-ways-to-boost-curb-appeal', permanent: true },
      { source: '/post/low-maintenance-landscaping-ideas-for-busy-homeowners',
        destination: '/journal/low-maintenance-landscaping-ideas', permanent: true },

      // --- Wildcard fallback for any other old post/insight slugs --- //
      { source: '/insights', destination: '/journal', permanent: true },
      { source: '/insights/:slug*', destination: '/journal/:slug*', permanent: true },
      { source: '/blog', destination: '/journal', permanent: true },
      { source: '/blog/:slug*', destination: '/journal/:slug*', permanent: true },
      { source: '/post/:slug*', destination: '/journal/:slug*', permanent: true },

      // --- Old portfolio/project URLs -> gallery hub --- //
      // /gallery does NOT have dynamic [slug] routes, so individual project
      // URLs land on the main gallery page (previously they redirected to
      // /gallery/:slug which 404'd).
      { source: '/portfolio', destination: '/gallery', permanent: true },
      { source: '/portfolio/:slug*', destination: '/gallery', permanent: true },
      { source: '/project/:slug*', destination: '/gallery', permanent: true },
      { source: '/work', destination: '/gallery', permanent: true },
      { source: '/work/:slug*', destination: '/gallery', permanent: true },

      // --- Consultation / quote flow --- //
      { source: '/schedule-consultation', destination: '/quote', permanent: true },
      { source: '/consultation', destination: '/quote', permanent: true },

      // --- Old root-level service URLs (pre-rebuild) --- //
      { source: '/landscapes', destination: '/services/landscapes', permanent: true },
      { source: '/hardscapes', destination: '/services/hardscapes', permanent: true },
      { source: '/masonry', destination: '/services/masonry', permanent: true },
      { source: '/lighting', destination: '/services/lighting', permanent: true },
      { source: '/irrigation', destination: '/services/irrigation', permanent: true },
      { source: '/careers', destination: '/about', permanent: true },

      // --- Misc legacy URLs --- //
      // Old "/home" path used by some external links — send to homepage.
      { source: '/home', destination: '/', permanent: true },
      // Template-leftover category pages that have no business being on the
      // site (these are not Yardie services). Send to the homepage so the
      // crawl budget stops getting wasted on them.
      { source: '/category/packs', destination: '/', permanent: true },
      { source: '/category/tents', destination: '/', permanent: true },
      { source: '/category/:slug*', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
