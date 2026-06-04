import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const service = services.find((s) => s.slug === "irrigation")!;

export const metadata: Metadata = buildMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: `/services/${service.slug}`,
  keywords: ["irrigation Greenville NC", "smart irrigation Eastern NC", "drip irrigation Pitt County"],
});

export default function Page() {
  if (!service) return notFound();
  return <ServicePage service={service} />;
}
