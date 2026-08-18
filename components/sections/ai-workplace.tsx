import Image from "next/image";
import { aiWorkplace } from "@/lib/content";
import { TextLink } from "@/components/ui/pill-button";

export function AiWorkplace() {
  return (
    <section className="border-y border-line bg-canvas py-6">
      <div className="mx-auto max-w-[1440px] px-3 md:px-6">
        {/* `overflow-clip`, not `hidden`: hidden creates a scroll container, which
            would anchor the view() timelines of the heading and image inside it
            to a box that never scrolls. clip does the same visual job. */}
        <div className="relative min-h-[720px] overflow-clip rounded-2xl border border-line bg-surface">
          <Image
            src={aiWorkplace.image.src}
            alt={aiWorkplace.image.alt}
            fill
            sizes="100vw"
            className="settle object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.78)_35%,rgba(0,0,0,.12)_78%)]" />
          <div className="relative z-10 flex min-h-[720px] max-w-xl flex-col justify-center px-7 py-20 md:px-14 lg:px-20">
            <h2 className="drift section-title text-balance">{aiWorkplace.title}</h2>
            <p className="reveal mt-7 text-lg leading-8 text-ink-muted">{aiWorkplace.body}</p>
            <div className="reveal mt-8">
              <TextLink href={aiWorkplace.cta.href}>{aiWorkplace.cta.label}</TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
