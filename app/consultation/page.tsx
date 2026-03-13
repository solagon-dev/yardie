import type { Metadata } from 'next';
import ConsultationContent from './ConsultationContent';

export const metadata: Metadata = {
  title: 'Schedule a Free Consultation — Yardie Design, Greenville NC',
  description:
    'Schedule your complimentary exterior design consultation with Yardie Design. No cost, no obligation — just a conversation about your outdoor space. Serving Greenville, Winterville, Farmville, and Pitt County, NC.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/consultation',
  },
  openGraph: {
    title: 'Free Exterior Design Consultation — Yardie Design',
    description: 'Schedule your complimentary consultation with Yardie Design in Greenville, NC. No cost, no obligation.',
    images: [{ url: '/IMG_8148.jpg', alt: 'Yardie Design — Premium Exterior Design, Greenville NC' }],
  },
};

export default function ConsultationPage() {
  return <ConsultationContent />;
}
