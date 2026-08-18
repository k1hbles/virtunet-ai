import Image from "next/image";
import { hero } from "@/lib/content";
import { PillButton } from "@/components/ui/pill-button";

export function Hero() {
  return (
    <section className="relative flex min-h-[820px] items-start overflow-x-clip bg-canvas pt-36 md:min-h-[900px] md:pt-44">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* scrim keeps the headline legible over the artwork */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.15)_0%,rgba(0,0,0,.05)_45%,rgba(0,0,0,.6)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
        <h1 className="max-w-5xl text-balance text-[clamp(3.2rem,7.2vw,7rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-ink">
          {hero.title}
        </h1>
        <p className="mt-7 max-w-2xl text-balance text-base leading-7 text-ink-muted md:text-xl md:leading-8">
          {hero.subtitle}
        </p>
        <div className="mt-8">
          <PillButton href={hero.cta.href}>{hero.cta.label}</PillButton>
        </div>
      </div>
    </section>
  );
}
