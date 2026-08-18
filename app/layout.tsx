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
        url: "/img/hero-ai-unit.webp",
        width: 1672,
        height: 941,
        alt: "A brushed aluminium AI compute unit with airflow traced around it",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/img/hero-ai-unit.webp"],
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
