import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { getServiceBySlug, faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Outdoor Lighting Design in Greenville, NC — Architectural & Landscape Lighting',
  description:
    'Architectural outdoor lighting design — pathway lights, uplighting, patio lighting, and security lighting in Greenville, NC. Transforming outdoor spaces after dark.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/services/lighting',
  },
  openGraph: {
    title: 'Outdoor Lighting Design — Yardie Design, Greenville NC',
    description: 'Architectural landscape lighting — pathway lights, uplighting, patio ambiance, and security lighting. Serving Greenville and Eastern North Carolina.',
    images: [{ url: '/nav-menu-arch-2.png', alt: 'Outdoor lighting design by Yardie Design in Greenville NC' }],
  },
};

export default function LightingPage() {
  const service = getServiceBySlug('lighting')!;
  const serviceFaqs = faqs.find((f) => f.category === 'Lighting')!;
  return <ServicePage service={service} faqs={serviceFaqs} />;
}
