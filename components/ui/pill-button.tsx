import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SmartLink } from "@/components/ui/smart-link";

type Tone = "accent" | "platinum";

const TONE: Record<Tone, string> = {
  accent: "bg-accent text-on-accent hover:bg-accent-lift",
  platinum: "bg-platinum text-canvas hover:bg-platinum-lift",
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
  return (
    <SmartLink
      href={href}
      className={`cta inline-flex shrink-0 items-center gap-2 rounded-full font-medium ${TONE[tone]} ${dims} ${className}`}
    >
      {children}
      <Icon size={size === "sm" ? 15 : 17} aria-hidden />
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
  const hoverClass = hover === "green" ? "hover:text-accent-green" : "hover:text-accent-ink";
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
