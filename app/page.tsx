
import { Hero } from "@/components/sections/hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { CrawlWalkRun } from "@/components/sections/crawl-walk-run";
import { Proof } from "@/components/sections/proof";
import { AiServices } from "@/components/sections/ai-services";
import { AiWorkplace } from "@/components/sections/ai-workplace";
import { Sustainability } from "@/components/sections/sustainability";
import { Insights } from "@/components/sections/insights";
import { CtaBand } from "@/components/page/cta-band";

export default function Home() {
  return (
    <>
        <Hero />
        <PartnerStrip />
        <AiServices />
        <CrawlWalkRun />
        <AiWorkplace />
        <Sustainability />
        <Proof />
        <Insights />
      <CtaBand title="Ready to build what comes next?" />
    </>
  );
}
