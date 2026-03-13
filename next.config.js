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
  experimental: {
    optimizePackageImports: ['resend', '@prisma/client', 'bcryptjs', 'iron-session'],
  },
};

module.exports = nextConfig;
