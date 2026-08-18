import { SplitWords } from "@/components/ui/split-words";

/**
 * The opening of every inner page. Deliberately quieter than the home hero:
 * no artwork, no pinning — the type and the surrounding black do the work,
 * so a fourteen-page catalogue stays calm.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  meta?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-clip border-b border-line bg-canvas">
      <div
        aria-hidden
        className="hero-wash pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52% 60% at 22% 0%, oklch(61% 0.235 260 / 0.13), transparent 70%)," +
            "radial-gradient(38% 46% at 78% 10%, oklch(72% 0.19 151 / 0.07), transparent 72%)",
        }}
      />
      <div className="wrap relative z-10 pb-16 pt-40 md:pb-24 md:pt-48">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-6 max-w-[17ch] text-balance text-[clamp(2.6rem,5.6vw,4.8rem)] font-medium leading-[1.0] tracking-[-0.045em] text-ink">
          <SplitWords text={title} />
        </h1>
        {lead && (
          <p className="reveal mt-8 max-w-2xl text-[1.15rem] leading-8 text-ink-muted">{lead}</p>
        )}
        {meta && <div className="reveal mt-10">{meta}</div>}
      </div>
    </section>
  );
}
