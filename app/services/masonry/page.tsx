import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { getServiceBySlug, faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Masonry in Greenville, NC — Stone, Brick & Custom Built Features',
  description:
    'Expert masonry — stone walls, brick pathways, columns, steps, outdoor kitchens, and seating walls in Greenville, NC. Timeless craftsmanship by Yardie Design.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/services/masonry',
  },
  openGraph: {
    title: 'Masonry Services — Yardie Design, Greenville NC',
    description: 'Stone walls, brick pathways, columns, outdoor kitchens, and seating walls in Greenville, NC. Timeless masonry craftsmanship from Yardie Design.',
    images: [{ url: '/IMG_8140.jpg', alt: 'Custom masonry work by Yardie Design in Greenville NC' }],
  },
};

export default function MasonryPage() {
  const service = getServiceBySlug('masonry')!;
  const serviceFaqs = faqs.find((f) => f.category === 'Masonry')!;
  return <ServicePage service={service} faqs={serviceFaqs} />;
}
