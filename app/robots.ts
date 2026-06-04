import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

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
