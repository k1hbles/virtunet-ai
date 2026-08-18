import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { capabilities } from "@/lib/content";
import { TextLink } from "@/components/ui/pill-button";

export function Capabilities() {
  return (
    <section className="bg-canvas py-24 md:py-36">
      <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="drift section-title text-balance">{capabilities.title}</h2>
          <p className="reveal mt-7 max-w-md text-lg leading-8 text-ink-muted">{capabilities.intro}</p>
          <div className="reveal mt-8">
            <TextLink href={capabilities.cta.href}>{capabilities.cta.label}</TextLink>
          </div>
        </div>

        <div className="reveal-group grid auto-rows-[250px] gap-4 md:grid-cols-2">
          {capabilities.items.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className={[
                "group relative overflow-hidden rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/70",
                c.feature ? "md:col-span-2 md:row-span-2" : "md:col-span-1",
              ].join(" ")}
            >
              {c.image && (
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-[1.02]"
                />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.28)_72%)]" />
              {!c.image && (
                <div className="absolute inset-x-0 bottom-0 h-28 bg-[radial-gradient(circle_at_75%_100%,rgba(32,96,255,.18),transparent_60%)]" />
              )}

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-[-0.025em] text-ink">{c.title}</h3>
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="text-ink-muted transition-colors group-hover:text-accent"
                  />
                </div>
                <p className="max-w-sm text-sm leading-6 text-ink-muted">{c.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
