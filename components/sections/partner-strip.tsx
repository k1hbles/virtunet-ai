import Image from "next/image";
import { partners } from "@/lib/content";

export function PartnerStrip() {
  return (
    <section className="border-y border-line bg-canvas py-10">
      <div className="wrap">
        <p className="reveal text-center text-[11px] font-medium uppercase tracking-[0.3em] text-ink-muted">
          Strategic technology partnerships
        </p>
        <div className="reveal-group mt-8 flex items-center gap-12 overflow-x-auto pb-2 md:justify-between md:overflow-visible">
          {partners.map((p) => (
            <div key={p.name} className="flex min-w-24 items-center justify-center" title={p.name}>
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                width={96}
                height={32}
                className="h-7 max-w-24 object-contain opacity-60 grayscale transition-opacity hover:opacity-100 md:h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
