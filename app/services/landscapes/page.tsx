import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { getServiceBySlug, faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Landscape Design in Greenville, NC — Gardens, Planting & Lawn Care',
  description:
    'Custom landscape design, planting, and lawn care in Greenville, NC. Yardie Design creates beautiful, enduring landscapes for Eastern North Carolina homeowners.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/services/landscapes',
  },
  openGraph: {
    title: 'Landscape Design — Yardie Design, Greenville NC',
    description: 'Custom landscape design, planting, and lawn care for Eastern NC homeowners. Serving Greenville, Winterville, Farmville, and Pitt County.',
    images: [{ url: '/DSC00636.JPG', alt: 'Landscape design by Yardie Design in Greenville NC' }],
  },
};

export default function LandscapesPage() {
  const service = getServiceBySlug('landscapes')!;
  const serviceFaqs = faqs.find((f) => f.category === 'Landscapes')!;
  return <ServicePage service={service} faqs={serviceFaqs} />;
}
