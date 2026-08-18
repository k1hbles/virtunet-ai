"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import {
  questions,
  dimensions,
  bandFor,
  scoreByDimension,
  totalScore,
  MAX_SCORE,
} from "@/lib/readiness";
import { getService } from "@/lib/services";
import { LeadForm } from "@/components/tools/lead-form";

export function ReadinessCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const question = questions[step];
  const answered = answers[question?.id] !== undefined;
  const progress = (step + (answered ? 1 : 0)) / questions.length;

  const result = useMemo(() => {
    const score = totalScore(answers);
    return { score, band: bandFor(score), byDimension: scoreByDimension(answers) };
  }, [answers]);

  function choose(value: number) {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    // move on once the choice has registered, so the selection is visible
    setTimeout(() => {
      if (step === questions.length - 1) setDone(true);
      else setStep((s) => s + 1);
    }, 180);
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  if (done) {
    const service = getService(result.band.service);
    const summary = [
      `Score: ${result.score} of ${MAX_SCORE} — ${result.band.name}`,
      "",
      ...result.byDimension.map((d) => `${d.name}: ${d.score}/${d.max}`),
      "",
      result.band.verdict,
    ].join("\n");

    return (
      <div>
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
          <div>
            <p className="eyebrow text-ink-muted">Your result</p>
            <p className="mt-4 text-[clamp(3rem,7vw,5.5rem)] font-medium leading-none tracking-[-0.04em] text-ink tabular-nums">
              {result.score}
              <span className="text-ink-muted"> / {MAX_SCORE}</span>
            </p>
          </div>
          <p className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.03em] text-accent">
            {result.band.name}
          </p>
        </div>

        <p className="mt-8 max-w-2xl text-[1.12rem] leading-8 text-ink-muted">
          {result.band.verdict}
        </p>

        <div className="mt-12 grid border-t border-line">
          {result.byDimension.map((d) => (
            <div key={d.key} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-[1.05rem] text-ink">{d.name}</p>
                <p className="mt-1 text-[0.9rem] leading-5 text-ink-muted">{d.blurb}</p>
              </div>
              <div className="flex items-center gap-4 sm:w-64">
                <span className="h-1 flex-1 overflow-hidden rounded-full bg-line">
                  <span
                    className="block h-1 rounded-full bg-accent transition-[width] duration-500"
                    style={{ width: `${(d.score / d.max) * 100}%` }}
                  />
                </span>
                <span className="w-12 text-right font-mono text-sm tabular-nums text-ink-muted">
                  {d.score}/{d.max}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-l border-accent pl-6">
          <p className="text-[1.05rem] leading-7 text-ink">{result.band.next}</p>
          {service && (
            <Link
              href={`/services/${service.slug}`}
              className="group mt-4 inline-flex items-center gap-2 text-[0.98rem] font-medium text-accent"
            >
              {service.title}
              <ArrowRight size={15} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        <button
          onClick={restart}
          className="mt-10 inline-flex items-center gap-2 text-[0.95rem] text-ink-muted transition-colors hover:text-ink"
        >
          <RotateCcw size={15} aria-hidden />
          Start again
        </button>

        <div className="mt-14">
          <LeadForm tool="readiness" summary={summary} />
        </div>
      </div>
    );
  }

  const dimension = dimensions.find((d) => d.key === question.dimension);

  return (
    <div>
      <div className="flex items-center justify-between gap-6 border-b border-line pb-5">
        <p className="eyebrow text-ink-muted">{dimension?.name}</p>
        <p className="font-mono text-sm tabular-nums text-ink-muted">
          <span className="text-ink">{String(step + 1).padStart(2, "0")}</span>
          <span className="mx-1.5 opacity-40">/</span>
          {String(questions.length).padStart(2, "0")}
        </p>
      </div>

      <span className="mt-px block h-px w-full bg-line">
        <span
          className="block h-px origin-left bg-ink transition-transform duration-500"
          style={{ transform: `scaleX(${progress})` }}
        />
      </span>

      <h2 className="mt-12 max-w-[20ch] text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">
        {question.prompt}
      </h2>

      <div className="mt-10 grid gap-3">
        {question.options.map((option, value) => {
          const selected = answers[question.id] === value;
          return (
            <button
              key={option}
              onClick={() => choose(value)}
              aria-pressed={selected}
              className={[
                "group flex items-center justify-between gap-6 rounded-lg border px-6 py-5 text-left transition-colors",
                selected
                  ? "border-accent bg-accent/10 text-ink"
                  : "border-line text-ink-muted hover:border-ink-muted hover:text-ink",
              ].join(" ")}
            >
              <span className="text-[1.05rem] leading-6">{option}</span>
              <span
                className={[
                  "size-4 shrink-0 rounded-full border transition-colors",
                  selected ? "border-accent bg-accent" : "border-line group-hover:border-ink-muted",
                ].join(" ")}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex items-center gap-6">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-2 text-[0.95rem] text-ink-muted transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft size={15} aria-hidden />
          Back
        </button>
        <p className="text-[0.9rem] text-ink-muted opacity-70">
          Nothing is sent anywhere. Your answers stay in this browser.
        </p>
      </div>
    </div>
  );
}
