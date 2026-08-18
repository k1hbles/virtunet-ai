import { SplitWords } from "@/components/ui/split-words";

/** A section opener used across the inner pages. */
export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="reveal eyebrow text-ink-muted">{eyebrow}</p>}
      <h2 className="drift mt-4 max-w-[20ch] text-balance text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.04em] text-ink">
        <SplitWords text={title} />
      </h2>
      {lead && <p className="reveal mt-6 text-[1.05rem] leading-7 text-ink-muted">{lead}</p>}
    </div>
  );
}
