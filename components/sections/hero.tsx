import Image from "next/image";
import { hero } from "@/lib/content";
import { PillButton } from "@/components/ui/pill-button";

export function Hero() {
  return (
    <section className="relative flex min-h-[820px] items-start overflow-hidden bg-canvas pt-36 md:min-h-[900px] md:pt-44">
      {/*
        The artwork ships in full colour; the platinum reading is applied
        here in CSS, so reverting is a one-line change and the source file
        is never touched.
      */}
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover object-center grayscale contrast-[1.08] brightness-[0.92]"
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
          background:
            "radial-gradient(54% 44% at 50% 43%, oklch(0% 0 0 / 0.68), transparent 76%)," +
            "linear-gradient(to bottom, oklch(0% 0 0 / 0.58) 0%, oklch(0% 0 0 / 0.14) 32%," +
            "oklch(0% 0 0 / 0.38) 64%, oklch(0% 0 0) 100%)," +
            "radial-gradient(125% 82% at 50% 44%, transparent 38%, oklch(0% 0 0 / 0.68) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
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
