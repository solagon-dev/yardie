import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { localBusinessSchema, SITE_URL } from "@/lib/seo";
import { company } from "@/lib/content";

// Every project photo is rewritten to this origin (see next.config.js).
const BLOB_ORIGIN =
  process.env.BLOB_PUBLIC_URL ||
  "https://dahwdk1paekenkyr.public.blob.vercel-storage.com";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A1814",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} — Exterior Design Studio in Greenville, NC`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  keywords: [
    "exterior design Greenville NC",
    "landscape design Greenville NC",
    "hardscape design Eastern NC",
    "masonry contractor Greenville NC",
    "outdoor lighting Pitt County",
    "irrigation systems Eastern NC",
    "landscape architect Greenville NC",
    "landscaping Winterville",
    "landscaping Farmville NC",
    "landscaping Washington NC",
    "Yardie Design",
    "Yardie",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: company.name,
    title: `${company.name} — Exterior Design Studio in Greenville, NC`,
    description: company.description,
    images: [{ url: "/yardieopengraph.png", width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Exterior Design Studio in Greenville, NC`,
    description: company.description,
    images: ["/yardieopengraph.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <head>
        {/* Warm up the Blob origin that serves every project photo — the
            connection is otherwise opened cold when the hero image loads. */}
        <link rel="preconnect" href={BLOB_ORIGIN} crossOrigin="" />
        <link rel="dns-prefetch" href={BLOB_ORIGIN} />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-earth">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />

        <JsonLd id="ld-business" data={localBusinessSchema()} />

        {/* GA4 + Ahrefs — loaded only for visitors who haven't declined. */}
        <Analytics />
      </body>
    </html>
  );
}
