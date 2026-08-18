import type { Metadata } from "next";
import { site } from "@/lib/content";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://virtu.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_AU",
    url: "/",
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/img/hero-ai-ready-device.webp",
        width: 2048,
        height: 868,
        alt: "AI-ready laptop illuminated by Virtu blue, green and yellow light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/img/hero-ai-ready-device.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
