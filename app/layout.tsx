import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import "./globals.css";
import PublicWrapper from "@/components/layout/PublicWrapper";

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const sansFont = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
});

const BASE_URL = 'https://www.yardiedesign.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yardie Design — Exterior Design & Landscaping, Greenville NC",
    template: "%s | Yardie Design",
  },
  description:
    "Yardie Design transforms outdoor spaces into stunning, functional environments. Expert landscape design, hardscaping, masonry, lighting, and irrigation in Greenville, NC.",
  keywords: [
    "exterior design Greenville NC",
    "landscape design Greenville NC",
    "hardscaping Greenville NC",
    "masonry contractor Greenville NC",
    "outdoor lighting installation Greenville NC",
    "irrigation system Greenville NC",
    "outdoor living spaces Eastern NC",
    "patio design Greenville NC",
    "landscaping company Pitt County NC",
    "yard design Winterville NC",
    "exterior designer Farmville NC",
    "landscaping Ayden NC",
  ],
  authors: [{ name: "Yardie Design" }],
  creator: "Yardie Design",
  openGraph: {
    title: "Yardie Design — Premium Exterior Design, Greenville NC",
    description:
      "Transforming outdoor spaces into beautiful, functional environments. Serving Greenville, NC and surrounding areas.",
    type: "website",
    locale: "en_US",
    siteName: "Yardie Design",
    url: BASE_URL,
    images: [
      {
        url: "/IMG_8148.jpg",
        width: 1200,
        height: 800,
        alt: "Yardie Design — Exterior Design & Landscaping, Greenville NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yardie Design — Exterior Design & Landscaping",
    description: "Premium exterior design and landscaping in Greenville, NC.",
    images: ["/IMG_8148.jpg"],
  },
  icons: {
    icon: [
      { url: '/yardie-favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/yardie-favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Yardie Design",
  description:
    "Premium exterior design and landscaping in Greenville, NC — landscapes, hardscapes, masonry, outdoor lighting, and irrigation.",
  url: BASE_URL,
  telephone: "+1-252-756-7788",
  email: "hello@yardiedesign.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5036 Winterville Parkway",
    addressLocality: "Winterville",
    addressRegion: "NC",
    postalCode: "28590",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.5301,
    longitude: -77.4155,
  },
  areaServed: [
    { "@type": "City", name: "Greenville" },
    { "@type": "City", name: "Winterville" },
    { "@type": "City", name: "Farmville" },
    { "@type": "City", name: "Ayden" },
  ],
  founder: {
    "@type": "Person",
    name: "Scott Baldwin",
  },
  priceRange: "$$$",
  image: `${BASE_URL}/IMG_8148.jpg`,
  sameAs: [
    "https://www.instagram.com/yardienc/",
    "https://www.facebook.com/yardiedesign/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body>
        <PublicWrapper>{children}</PublicWrapper>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
