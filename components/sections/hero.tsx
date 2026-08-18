import Image from "next/image";
import { hero } from "@/lib/content";
import { PillButton } from "@/components/ui/pill-button";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-start overflow-clip bg-canvas pt-28 md:pt-32">
      {/*
        No grayscale here, unlike an earlier hero: the artwork is already
        near-monochrome brushed platinum on black, so a filter would only cost
        contrast in the shadows without changing the palette. The subject is a
        close crop that sits low and right, which is what leaves the upper half
        clear for the type.
      */}
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover object-center contrast-[1.04]"
      />

      {/*
        Cool silver light, drifting slowly so the frame is never quite static.
        Sits lower than it used to: centred at 62% its upper reach fell across
        the copy, adding light to the one band that needed less of it.
      */}
      <div
        aria-hidden
        className="hero-wash pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(66% 42% at 52% 78%, oklch(87% 0.008 250 / 0.18), transparent 72%)," +
            "radial-gradient(38% 28% at 20% 88%, oklch(87% 0.008 250 / 0.10), transparent 74%)",
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
            "linear-gradient(to bottom, oklch(0% 0 0 / 0.52) 0%, oklch(0% 0 0 / 0.14) 52%," +
            "transparent 74%, oklch(0% 0 0 / 0.30) 100%)",
        }}
      />

      <div className="hero-depart relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
        {/*
          Anchored to the copy rather than to a fraction of the viewport, because
          where the copy lands moves with the headline's wrap. The artwork's one
          bright edge crosses the frame at roughly the height of the paragraph —
          measured, the brightest 5% of that band sits at gray 173 — so without
          this the description is set on lit metal. Negative z-index keeps it
          behind the type but inside the block, so it departs on scroll with it.
        */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-[6%] -inset-y-[14%] -z-10"
          style={{
            background:
              "radial-gradient(72% 76% at 50% 44%, oklch(0% 0 0 / 0.62) 0%," +
              "oklch(0% 0 0 / 0.44) 46%, oklch(0% 0 0 / 0.12) 72%, transparent 88%)",
          }}
        />

        <h1 className="hero-rise hero-rise-1 max-w-5xl text-balance text-[clamp(3.2rem,7.2vw,7rem)] font-medium leading-[0.93] tracking-[-0.05em] text-ink">
          {hero.title}
        </h1>
        {/*
          Platinum, not ink-muted. The secondary token is tuned for text on the
          flat black canvas and cannot hold its own over artwork — against the
          lit edge behind it, it measured 1.04:1. Platinum is the hero's own
          silver, still a step below the headline's ink, and clears 4.5:1 with
          the halo above. The measure is capped tighter than the headline's so
          the centred lines stay near 60 characters.
        */}
        <p className="hero-rise hero-rise-2 mt-7 max-w-xl text-balance text-[1.05rem] leading-7 text-platinum md:text-xl md:leading-[1.65]">
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
