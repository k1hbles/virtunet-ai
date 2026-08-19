
import { Hero } from "@/components/sections/hero";
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
        <Proof />
        <AiServices />
        <AiWorkplace />
        <Sustainability />
        <Insights />
      <CtaBand title="Ready to build what comes next?" />
    </>
  );
}
