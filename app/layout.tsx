import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Homemade_Apple } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { localBusinessSchema, SITE_URL } from "@/lib/seo";
import { company } from "@/lib/content";

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

const signature = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
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
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Exterior Design Studio in Greenville, NC`,
    description: company.description,
    images: ["/brand/og.png"],
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
      className={`${display.variable} ${sans.variable} ${signature.variable} h-full antialiased`}
    >
      <head>
        {/* Ahrefs Web Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="58FdYKXK/cR1Vn7ZzkBBmQ"
          async
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-earth">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />

        <Script
          id="ld-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </body>
    </html>
  );
}
