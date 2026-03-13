import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { getServiceBySlug, faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hardscape Design in Greenville, NC — Patios, Walkways & Outdoor Living',
  description:
    'Custom patios, walkways, retaining walls, and outdoor living structures in Greenville, NC. Expert hardscaping design and installation by Yardie Design.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/services/hardscapes',
  },
  openGraph: {
    title: 'Hardscape Design — Yardie Design, Greenville NC',
    description: 'Custom patios, walkways, retaining walls, and outdoor structures in Greenville, NC. Expert hardscaping from concept to completion.',
    images: [{ url: '/minshew-(1).png', alt: 'Hardscape design — patios and outdoor structures by Yardie Design, Greenville NC' }],
  },
};

export default function HardscapesPage() {
  const service = getServiceBySlug('hardscapes')!;
  const serviceFaqs = faqs.find((f) => f.category === 'Hardscapes')!;
  return <ServicePage service={service} faqs={serviceFaqs} />;
}
