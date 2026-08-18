import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SmartLink } from "@/components/ui/smart-link";

const SIZES = {
  sm: { pad: "px-5 py-2.5 text-sm", icon: 15 },
  md: { pad: "px-7 py-3.5 text-base", icon: 17 },
} as const;

/**
 * The SVG lens the refraction layer samples through.
 *
 * Turbulence, blurred, then used to displace the backdrop: the noise field
 * becomes the surface irregularity of the glass. The published version ran
 * at scale 70 — over half the height of a pill, which smears the backdrop
 * into pulp — so this is dialled back to a wobble the eye reads as thickness.
 *
 * Rendered once, by the single button that uses it; a second instance on the
 * same page would duplicate the filter id.
 */
function LiquidGlassFilter() {
  return (
    <svg className="hidden" aria-hidden>
      <defs>
        <filter id="liquid-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="4" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
          <feDisplacementMap in="SourceGraphic" in2="soft" scale="26" xChannelSelector="R" yChannelSelector="B" result="bent" />
          <feGaussianBlur in="bent" stdDeviation="0.4" />
        </filter>
      </defs>
    </svg>
  );
}

/**
 * The liquid glass CTA, for use over artwork.
 *
 * A link rather than a button: the hero CTA navigates, and a <button> that
 * routes breaks middle-click, keyboard and the browser's own status bar.
 * Staying an anchor also keeps the hero a server component — there is no
 * state here, so the page ships no JavaScript for it.
 *
 * Only worth using where there is something behind it to bend. On flat
 * canvas there is nothing to refract and PillButton is the stronger CTA.
 */
export function LiquidButton({
  href,
  children,
  size = "md",
  icon = "right",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  size?: keyof typeof SIZES;
  icon?: "right" | "up-right";
  className?: string;
}) {
  const { pad, icon: px } = SIZES[size];
  const Icon = icon === "right" ? ArrowRight : ArrowUpRight;
  return (
    <SmartLink
      href={href}
      className={`cta liquid inline-flex shrink-0 items-center gap-2 rounded-full font-medium ${pad} ${className}`}
    >
      <span className="liquid-refraction" aria-hidden />
      {children}
      <Icon size={px} aria-hidden />
      <LiquidGlassFilter />
    </SmartLink>
  );
}
