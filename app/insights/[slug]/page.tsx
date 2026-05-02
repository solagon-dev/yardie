import { redirect } from "next/navigation";

export default async function InsightsSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/journal/${slug}`);
}
