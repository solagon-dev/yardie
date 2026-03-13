import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { getServiceBySlug, faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Irrigation Systems in Greenville, NC — Smart, Efficient Landscape Watering',
  description:
    'Custom irrigation system design, installation, and maintenance in Greenville, NC. Smart, efficient solutions that keep your landscape healthy year-round.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/services/irrigation',
  },
  openGraph: {
    title: 'Irrigation Systems — Yardie Design, Greenville NC',
    description: 'Custom irrigation design, installation, and maintenance in Greenville, NC. Efficient systems that keep your landscape healthy year-round.',
    images: [{ url: '/DSC04294.jpg', alt: 'Irrigation system installation by Yardie Design in Greenville NC' }],
  },
};

export default function IrrigationPage() {
  const service = getServiceBySlug('irrigation')!;
  const serviceFaqs = faqs.find((f) => f.category === 'Irrigation')!;
  return <ServicePage service={service} faqs={serviceFaqs} />;
}
