
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
        {/*
          The order is an argument, and it only works in this sequence:

          1. AiWorkplace   what AI-native means, which is the premise everything
                           below depends on. It used to sit fourth, so the site
                           sold the services before it said what they were for.
          2. AiServices    what Virtu does about it.
          3. CrawlWalkRun  the order it is done in, and what each stage returns.
          4. Proof         the evidence, immediately after the claim it supports.
                           It used to sit behind Sustainability, two sections
                           downstream of the argument it proves.
          5. Sustainability what it costs to keep running.
          6. Insights      further reading, then the ask.
        */}
        <AiWorkplace />
        <AiServices />
        <CrawlWalkRun />
        <Proof />
        <Sustainability />
        <Insights />
      <CtaBand title="Ready to build what comes next?" />
    </>
  );
}
