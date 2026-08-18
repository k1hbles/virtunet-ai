import { routes } from "@/lib/content";
import { PillButton } from "@/components/ui/pill-button";
import { SplitWords } from "@/components/ui/split-words";

/** Closes every page with the same ask, so no page is a dead end. */
export function CtaBand({
  title = "Start with the business problem.",
  body = "A conversation costs nothing. Tell us what is not working and we will tell you honestly whether AI is the right answer for it.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-line bg-canvas">
      <div className="wrap grid gap-10 py-20 md:grid-cols-[1.2fr_auto] md:items-end md:py-28">
        <div>
          <h2 className="drift max-w-[18ch] text-balance text-[clamp(2rem,3.6vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.04em] text-ink">
            <SplitWords text={title} />
          </h2>
          <p className="reveal mt-6 max-w-xl text-[1.02rem] leading-7 text-ink-muted">{body}</p>
        </div>
        <div className="reveal">
          <PillButton href={routes.contact}>Speak to our specialists</PillButton>
        </div>
      </div>
    </section>
  );
}
