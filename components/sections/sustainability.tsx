import Image from "next/image";
import { sustainability } from "@/lib/content";
import { TextLink } from "@/components/ui/pill-button";
import { SplitWords } from "@/components/ui/split-words";

export function Sustainability() {
  return (
    <section className="border-t border-line bg-canvas py-24 md:py-32">
      <div className="wrap">
        <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-accent">{sustainability.eyebrow}</p>
            <h2 className="drift section-title mt-6 text-balance"><SplitWords text={sustainability.title} /></h2>
            <p className="reveal mt-7 max-w-xl text-lg leading-8 text-ink-muted">{sustainability.intro}</p>
            <div className="reveal mt-8">
              <TextLink href={sustainability.cta.href} hover="green">
                {sustainability.cta.label}
              </TextLink>
            </div>
          </div>
          {/* clip, not hidden — see ai-workplace: hidden would anchor the image's
              view() timeline to a box that never scrolls */}
          <div className="counter-drift overflow-clip rounded-2xl border border-line bg-surface">
            <Image
              src={sustainability.image.src}
              alt={sustainability.image.alt}
              width={2048}
              height={1143}
              className="settle aspect-[16/10] size-full object-cover"
            />
          </div>
        </div>

        <div className="reveal-group mt-16 grid border-y border-line md:grid-cols-3">
          {sustainability.pillars.map((p, i) => (
            <div
              key={p.title}
              className={[
                "py-8 md:px-8",
                i > 0 ? "border-t border-line md:border-l md:border-t-0" : "",
              ].join(" ")}
            >
              <h3 className="text-xl font-medium text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
