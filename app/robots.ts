import type { MetadataRoute } from "next";

// Inlined to dodge a Turbopack edge case where path aliases don't resolve
// inside Next's special metadata route entrypoints (robots.ts gets compiled
// via app/robots--route-entry.js, which doesn't see the @/* mapping the same
// way page components do). Matches lib/seo.ts SITE_URL exactly.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.yardiedesign.com";

/**
 * Robots policy.
 *
 * - Block admin / API surfaces.
 * - Block tracking-parameter URL variants (utm/fbclid/gclid) so
 *   Google doesn't index `/post?utm_source=x` as a separate page.
 *   This directly addresses the "URLs with >3 parameters" finding
 *   in the 2026-06-01 Ahrefs audit.
 * - Block AI-training crawlers that don't send referral traffic.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/admin/*",
          "/*?*utm_",
          "/*?*fbclid",
          "/*?*gclid",
          "/*?*mc_eid",
        ],
      },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
