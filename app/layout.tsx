import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { SmoothScroll } from "@/components/smooth-scroll";
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
    /*
     * Deliberately not the hero artwork. The hero is a dark close crop that
     * reads as a near-black rectangle at card size; this wider shot of the
     * whole unit survives the thumbnail.
     */
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
      <body>
        <div className="min-h-screen overflow-x-clip bg-canvas">
          <Navbar />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <SmoothScroll />
        </div>
      </body>
    </html>
  );
}
