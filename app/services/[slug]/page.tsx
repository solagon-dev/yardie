// One route for all twelve services.
//
// Five of them (landscapes, masonry, lighting, irrigation, outdoor-kitchens)
// used to have their own folders so their metadata could be hand-tuned. In
// practice each folder was a 19-line copy of this file whose only difference
// was a `keywords` array — while Next.js prerendered BOTH the folder and the
// [slug] variant of the same URL, and the two could silently drift apart.
// The hand-tuned keyword sets moved into SERVICE_KEYWORDS below, so nothing
// was lost and there is now a single place to change a service page.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

/** Per-service keyword sets. Services without an entry fall back to a set
 *  generated from the service name and the home market. */
const SERVICE_KEYWORDS: Record<string, string[]> = {
  landscapes: ["landscape design Greenville NC", "landscaping Eastern NC", "garden design Pitt County"],
  masonry: ["masonry contractor Greenville NC", "stone walls Eastern NC", "brick masonry Pitt County"],
  lighting: ["outdoor lighting Greenville NC", "landscape lighting Eastern NC", "architectural lighting Pitt County"],
  irrigation: ["irrigation Greenville NC", "smart irrigation Eastern NC", "drip irrigation Pitt County"],
  "outdoor-kitchens": [
    "outdoor kitchen Greenville NC",
    "built-in grill Eastern NC",
    "pizza oven Pitt County",
    "outdoor kitchen design Winterville NC",
  ],
};

function keywordsFor(name: string, slug: string) {
  return (
    SERVICE_KEYWORDS[slug] ?? [
      `${name} Greenville NC`,
      `${name} Eastern NC`,
      `${name} Pitt County`,
    ]
  );
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  // `dynamicParams = false` makes an unknown slug 404 before it reaches here,
  // so this branch only satisfies the type — it never serves a "not found"
  // page under a 200 that search engines could index.
  if (!service) {
    return buildMetadata({ title: "Service not found", description: "", path: `/services/${slug}`, noIndex: true });
  }
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    keywords: keywordsFor(service.name, service.slug),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();
  return <ServicePage service={service} />;
}
