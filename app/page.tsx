
import { Hero } from "@/components/sections/hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { AiServices } from "@/components/sections/ai-services";
import { Capabilities } from "@/components/sections/capabilities";
import { AiWorkplace } from "@/components/sections/ai-workplace";
import { Sustainability } from "@/components/sections/sustainability";
import { Insights } from "@/components/sections/insights";

export default function Home() {
  return (
    <>
        <Hero />
        <PartnerStrip />
        <AiServices />
        <Capabilities />
        <AiWorkplace />
        <Sustainability />
        <Insights />
    </>
  );
}
