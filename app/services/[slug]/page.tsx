// Dynamic route for any service slug not covered by an explicit folder.
// The five long-standing services (landscapes, masonry, lighting,
// irrigation, outdoor-kitchens) keep their static folders so their
// SEO metadata can be hand-tuned. New services route through here.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return buildMetadata({ title: "Service not found", description: "", path: `/services/${slug}` });
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
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
