import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { articles, getArticle } from "@/lib/articles";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/page/cta-band";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.summary,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.summary },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={article.category} title={article.title} lead={article.summary} />

      <section className="border-b border-line bg-canvas">
        <article className="wrap max-w-3xl py-16 md:py-24">
          {article.body.map((block, i) => {
            if (block.kind === "h2") {
              return (
                <h2
                  key={i}
                  className="reveal mt-14 text-[1.6rem] font-medium leading-[1.2] tracking-[-0.03em] text-ink first:mt-0"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.kind === "list") {
              return (
                <ul key={i} className="reveal-group mt-7 grid gap-4">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-4 border-l border-line pl-5">
                      <span className="text-[1.05rem] leading-8 text-ink-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="reveal mt-6 text-[1.12rem] leading-8 text-ink-muted first:mt-0">
                {block.text}
              </p>
            );
          })}
        </article>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="wrap py-14 md:py-16">
          <p className="reveal eyebrow text-ink-muted">More reading</p>
          <div className="reveal-group mt-8 grid border-t border-line md:grid-cols-3">
            {related.map((a, i) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className={[
                  "group flex min-h-[12rem] flex-col justify-between border-b border-line py-7 transition-colors hover:bg-surface md:px-7",
                  i > 0 ? "md:border-l" : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                    {a.category}
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="shrink-0 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-6 text-balance text-[1.05rem] font-medium leading-[1.3] tracking-[-0.02em] text-ink">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want to talk this through?" />
    </>
  );
}
