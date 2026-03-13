import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, generateLocationSlugParams } from '@/lib/locations';
import LocationPage from '@/components/locations/LocationPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return generateLocationSlugParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `https://www.yardiedesign.com/service-areas/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      images: [{ url: location.heroImage, alt: `Exterior design in ${location.fullName}` }],
    },
  };
}

export default async function LocationRoute({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <LocationPage location={location} />;
}
