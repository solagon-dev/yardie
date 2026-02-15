import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yardie - Premium Exterior Design & Landscaping Services",
  description: "Transform your outdoor space with Yardie's expert exterior design, landscaping, and hardscaping services. Creating beautiful, functional outdoor environments.",
  keywords: ["exterior design", "landscaping", "hardscaping", "outdoor design", "garden design", "landscape architecture"],
  authors: [{ name: "Yardie Design" }],
  openGraph: {
    title: "Yardie - Premium Exterior Design & Landscaping",
    description: "Transform your outdoor space with expert design and landscaping services",
    type: "website",
    locale: "en_US",
    siteName: "Yardie Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yardie - Premium Exterior Design",
    description: "Transform your outdoor space with expert design services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
