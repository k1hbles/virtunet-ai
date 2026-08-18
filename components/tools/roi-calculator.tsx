"use client";

import { useMemo, useState } from "react";
import {
  assumptions,
  calculateRoi,
  defaults,
  formatMoney,
  formatNumber,
  limits,
  type RoiInput,
} from "@/lib/roi";
import { LeadForm } from "@/components/tools/lead-form";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block border-b border-line py-6">
      <span className="text-[0.85rem] uppercase tracking-[0.14em] text-ink-muted">{label}</span>
      {children}
      {hint && <span className="mt-2 block text-[0.85rem] leading-5 text-ink-muted opacity-70">{hint}</span>}
    </label>
  );
}

export function RoiCalculator() {
  const [input, setInput] = useState<RoiInput>({
    employees: defaults.employees,
    salary: defaults.salary,
    hoursPerWeek: defaults.hoursPerWeek,
    automationShare: defaults.automationShare,
    adoption: defaults.adoption,
  });

  const result = useMemo(() => calculateRoi(input), [input]);
  const set = <K extends keyof RoiInput>(key: K, value: number) =>
    setInput((prev) => ({ ...prev, [key]: value }));

  const summary = [
    `Knowledge workers: ${formatNumber(input.employees)}`,
    `Average salary: ${formatMoney(input.salary)}`,
    `Hours/week on automatable admin: ${input.hoursPerWeek}`,
    `Share AI absorbs: ${Math.round(input.automationShare * 100)}%`,
    `Expected adoption: ${Math.round(input.adoption * 100)}%`,
    "",
    `Hours returned per year: ${formatNumber(result.hoursPerYear)}`,
    `Full-time equivalent: ${result.fteEquivalent.toFixed(1)}`,
    `Indicative annual value: ${formatMoney(result.valuePerYear)}`,
    "",
    `Assumptions: ${assumptions.workingWeeks} working weeks, ${assumptions.standardWeekHours}h week, ${assumptions.onCostMultiplier}x on-cost multiplier.`,
  ].join("\n");

  const numberInput =
    "mt-3 w-full border-b border-line bg-transparent pb-2 text-[1.6rem] font-medium tracking-[-0.02em] text-ink outline-none transition-colors focus:border-accent tabular-nums";
  const range = "mt-4 w-full accent-[oklch(61%_0.235_260)]";

  return (
    <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
      <div>
        <p className="eyebrow text-ink-muted">Your organisation</p>

        <Field label="Knowledge workers" hint="People whose work involves documents, email and analysis.">
          <input
            type="number"
            value={input.employees}
            min={limits.employees.min}
            max={limits.employees.max}
            onChange={(e) =>
              set("employees", Math.min(limits.employees.max, Math.max(limits.employees.min, +e.target.value || 0)))
            }
            className={numberInput}
          />
        </Field>

        <Field label="Average annual salary" hint="Before on-costs. We add those separately.">
          <input
            type="number"
            value={input.salary}
            min={limits.salary.min}
            max={limits.salary.max}
            step={5000}
            onChange={(e) =>
              set("salary", Math.min(limits.salary.max, Math.max(limits.salary.min, +e.target.value || 0)))
            }
            className={numberInput}
          />
        </Field>

        <Field label={`Hours per week on automatable admin — ${input.hoursPerWeek}h`}>
          <input
            type="range"
            value={input.hoursPerWeek}
            min={limits.hoursPerWeek.min}
            max={limits.hoursPerWeek.max}
            step={limits.hoursPerWeek.step}
            onChange={(e) => set("hoursPerWeek", +e.target.value)}
            className={range}
          />
        </Field>

        <Field
          label={`Share of that work AI can absorb — ${Math.round(input.automationShare * 100)}%`}
          hint="Be conservative. Thirty per cent of a well-chosen task is a realistic first year."
        >
          <input
            type="range"
            value={input.automationShare}
            min={limits.automationShare.min}
            max={limits.automationShare.max}
            step={limits.automationShare.step}
            onChange={(e) => set("automationShare", +e.target.value)}
            className={range}
          />
        </Field>

        <Field
          label={`Expected staff adoption — ${Math.round(input.adoption * 100)}%`}
          hint="The number most estimates quietly assume is 100%. It never is."
        >
          <input
            type="range"
            value={input.adoption}
            min={limits.adoption.min}
            max={limits.adoption.max}
            step={limits.adoption.step}
            onChange={(e) => set("adoption", +e.target.value)}
            className={range}
          />
        </Field>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow text-ink-muted">Indicative return</p>

        <div className="mt-8 border-t border-line">
          <div className="border-b border-line py-8">
            <p className="text-[clamp(2.6rem,6vw,4.4rem)] font-medium leading-none tracking-[-0.04em] text-ink tabular-nums">
              {formatNumber(result.hoursPerYear)}
            </p>
            <p className="mt-3 text-[0.98rem] text-ink-muted">hours returned per year</p>
          </div>
          <div className="border-b border-line py-8">
            <p className="text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-none tracking-[-0.035em] text-accent tabular-nums">
              {formatMoney(result.valuePerYear)}
            </p>
            <p className="mt-3 text-[0.98rem] text-ink-muted">indicative annual value of that time</p>
          </div>
          <div className="border-b border-line py-8">
            <p className="text-[1.7rem] font-medium leading-none tracking-[-0.03em] text-ink tabular-nums">
              {result.fteEquivalent.toFixed(1)}
            </p>
            <p className="mt-3 text-[0.98rem] text-ink-muted">full-time equivalents of capacity</p>
          </div>
        </div>

        <div className="mt-8 border-l border-line pl-6">
          <p className="text-[0.9rem] leading-6 text-ink-muted">
            Working from {assumptions.workingWeeks} working weeks, a {assumptions.standardWeekHours}-hour
            week, and a {assumptions.onCostMultiplier}× on-cost multiplier for superannuation, payroll
            tax and the rest — so an hour costs {formatMoney(result.hourlyCost)}.
          </p>
          <p className="mt-4 text-[0.9rem] leading-6 text-ink-muted">
            This is capacity returned, not cash saved. It becomes money only if the time is
            redeployed to something that matters — which is a management decision, not a technology
            one.
          </p>
        </div>

        <div className="mt-12">
          <LeadForm tool="roi" summary={summary} />
        </div>
      </div>
    </div>
  );
}
