import Image from "next/image";
import { hero } from "@/lib/content";
import { PillButton } from "@/components/ui/pill-button";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-start overflow-clip bg-canvas pt-28 md:pt-32">
      {/*
        No grayscale here, unlike the previous hero: this artwork is already
        brushed platinum on black, and desaturating it would remove the single
        blue LED that is the only colour in the frame.
      */}
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover object-center contrast-[1.04]"
      />

      {/* cool silver light, drifting slowly so the frame is never quite static */}
      <div
        aria-hidden
        className="hero-wash pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 62%, oklch(87% 0.008 250 / 0.18), transparent 70%)," +
            "radial-gradient(40% 32% at 20% 78%, oklch(87% 0.008 250 / 0.10), transparent 72%)",
        }}
      />

      {/*
        Two jobs: settle the type onto a dark ground so stray filaments
        never cut across a glyph, and dissolve the frame into black rather
        than ending it on a visible edge.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          /*
            Retuned for this artwork. The previous hero image was bright and
            needed suppressing; this one is already dark brushed metal on
            black, so the old scrim simply buried it. Darkening is now
            concentrated in the upper third where the type sits, and the lower
            half is left almost clear so the unit and its airflow read.
          */
          background:
            "radial-gradient(58% 34% at 50% 26%, oklch(0% 0 0 / 0.58), transparent 76%)," +
            "linear-gradient(to bottom, oklch(0% 0 0 / 0.52) 0%, oklch(0% 0 0 / 0.10) 42%," +
            "transparent 72%, oklch(0% 0 0 / 0.30) 100%)",
        }}
      />

      <div className="hero-depart relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
        <h1 className="hero-rise hero-rise-1 max-w-5xl text-balance text-[clamp(3.2rem,7.2vw,7rem)] font-medium leading-[0.93] tracking-[-0.05em] text-ink">
          {hero.title}
        </h1>
        <p className="hero-rise hero-rise-2 mt-7 max-w-2xl text-balance text-base leading-7 text-ink-muted md:text-xl md:leading-8">
          {hero.subtitle}
        </p>
        <div className="hero-rise hero-rise-3 mt-8">
          <PillButton href={hero.cta.href} tone="platinum">
            {hero.cta.label}
          </PillButton>
        </div>
      </div>
    </section>
  );
}
