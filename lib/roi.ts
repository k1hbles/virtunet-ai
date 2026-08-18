/**
 * AI ROI estimate.
 *
 * Inputs follow the calculator on virtunet.ai: knowledge workers, average
 * salary, hours per week lost to automatable admin, the share AI can
 * realistically absorb, and expected adoption.
 *
 * Every assumption is named and exported, because a number produced by hidden
 * assumptions is worse than no number — the reader has to be able to argue
 * with the arithmetic before they will take it to a CFO.
 */

export const assumptions = {
  /** 52 weeks less four weeks annual leave and roughly two weeks of public holidays. */
  workingWeeks: 46,
  /** The Australian full-time standard under the Fair Work Act. */
  standardWeekHours: 38,
  /**
   * Salary understates the cost of an hour: superannuation, payroll tax,
   * leave loading, equipment and space. 1.3 is a conservative multiplier —
   * many organisations use 1.4 or higher.
   */
  onCostMultiplier: 1.3,
} as const;

export const defaults = {
  employees: 250,
  salary: 110_000,
  hoursPerWeek: 8,
  automationShare: 0.3,
  adoption: 0.7,
} as const;

export const limits = {
  employees: { min: 1, max: 20_000 },
  salary: { min: 40_000, max: 400_000 },
  hoursPerWeek: { min: 1, max: 20, step: 1 },
  automationShare: { min: 0.05, max: 0.8, step: 0.05 },
  adoption: { min: 0.1, max: 1, step: 0.05 },
} as const;

export type RoiInput = {
  employees: number;
  salary: number;
  hoursPerWeek: number;
  automationShare: number;
  adoption: number;
};

export type RoiResult = {
  hoursPerYear: number;
  fteEquivalent: number;
  valuePerYear: number;
  hourlyCost: number;
  hoursPerPersonPerWeek: number;
};

export function calculateRoi(input: RoiInput): RoiResult {
  const { workingWeeks, standardWeekHours, onCostMultiplier } = assumptions;

  const annualHours = workingWeeks * standardWeekHours;
  const hourlyCost = (input.salary * onCostMultiplier) / annualHours;

  const hoursPerPersonPerWeek = input.hoursPerWeek * input.automationShare * input.adoption;
  const hoursPerYear = hoursPerPersonPerWeek * workingWeeks * input.employees;

  return {
    hoursPerYear: Math.round(hoursPerYear),
    fteEquivalent: hoursPerYear / annualHours,
    valuePerYear: Math.round(hoursPerYear * hourlyCost),
    hourlyCost,
    hoursPerPersonPerWeek,
  };
}

export const formatMoney = (n: number) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);

export const formatNumber = (n: number) =>
  new Intl.NumberFormat("en-AU", { maximumFractionDigits: 0 }).format(n);
