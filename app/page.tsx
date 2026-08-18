import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

import { Hero } from "@/components/sections/hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { AiServices } from "@/components/sections/ai-services";
import { Capabilities } from "@/components/sections/capabilities";
import { AiWorkplace } from "@/components/sections/ai-workplace";
import { Sustainability } from "@/components/sections/sustainability";
import { Insights } from "@/components/sections/insights";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <PartnerStrip />
        <AiServices />
        <Capabilities />
        <AiWorkplace />
        <Sustainability />
        <Insights />
      </main>
      <Footer />
      <SmoothScroll />
    </div>
  );
}
