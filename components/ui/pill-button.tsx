import { ArrowRight, ArrowUpRight } from "lucide-react";

/** The filled accent pill used by the navbar, hero and footer CTAs. */
export function PillButton({
  href,
  children,
  size = "md",
  icon = "right",
}: {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  icon?: "right" | "up-right";
}) {
  const Icon = icon === "right" ? ArrowRight : ArrowUpRight;
  const dims = size === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-base";
  return (
    <a
      href={href}
      className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-accent font-medium text-on-accent transition-opacity hover:opacity-90 ${dims}`}
    >
      {children}
      <Icon size={size === "sm" ? 15 : 17} aria-hidden />
    </a>
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
    <a
      href={href}
      className={`inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-colors ${hoverClass}`}
    >
      {children}
      <ArrowRight size={15} aria-hidden />
    </a>
  );
}
