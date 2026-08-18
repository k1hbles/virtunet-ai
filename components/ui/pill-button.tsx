import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SmartLink } from "@/components/ui/smart-link";

type Tone = "accent" | "platinum";

/**
 * Each tone carries its own hover glow and sheen. The platinum face is
 * already near-white, so its sheen has to run hot to register at all;
 * the accent face is mid-blue and needs far less.
 */
const TONE: Record<Tone, string> = {
  accent:
    "bg-accent text-on-accent [--pill-glow:oklch(61%_0.235_260/0.55)] [--pill-sheen:oklch(100%_0_0/0.34)]",
  platinum:
    "bg-platinum text-canvas [--pill-glow:oklch(87%_0.008_250/0.45)] [--pill-sheen:oklch(100%_0_0/0.9)]",
};

/** The filled pill used by the navbar, hero and footer CTAs. */
export function PillButton({
  href,
  children,
  size = "md",
  icon = "right",
  tone = "accent",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  icon?: "right" | "up-right";
  tone?: Tone;
  className?: string;
}) {
  const Icon = icon === "right" ? ArrowRight : ArrowUpRight;
  const dims = size === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-base";
  /* The arrow travels the way it points — the up-right variant would look
     broken sliding sideways. Named group so a `group` on any ancestor
     section cannot drive it. */
  const nudge =
    icon === "right"
      ? "group-hover/pill:translate-x-0.5"
      : "group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5";
  return (
    <SmartLink
      href={href}
      className={`pill group/pill inline-flex shrink-0 items-center gap-2 rounded-full font-medium ${TONE[tone]} ${dims} ${className}`}
    >
      {children}
      <Icon
        size={size === "sm" ? 15 : 17}
        aria-hidden
        className={`transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${nudge}`}
      />
    </SmartLink>
  );
}

/** The quieter inline "Explore …" link that sits under section copy. */
export function TextLink({
  href,
  children,
  hover = "accent",
}: {
  href: string;
  children: React.ReactNode;
  hover?: "accent" | "green";
}) {
  const hoverClass = hover === "green" ? "hover:text-accent-green" : "hover:text-accent";
  return (
    <SmartLink
      href={href}
      className={`inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-colors ${hoverClass}`}
    >
      {children}
      <ArrowRight size={15} aria-hidden />
    </SmartLink>
  );
}
