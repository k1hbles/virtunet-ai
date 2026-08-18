import Image from "next/image";

/**
 * The Virtu wordmark.
 *
 * Each variant carries its own intrinsic aspect: the white mark is a separate
 * piece of artwork, not a recolour of the brand one, and its trimmed
 * proportions differ by about 2% — enough to squash visibly if a single
 * ratio were shared across both.
 *
 * `brand` is the blue and green mark. `white` is the flat white mark, for the
 * navbar where it sits over artwork. `platinum` is a flattened silver version
 * for placements where even the white reads too hot.
 */
const VARIANTS = {
  brand: { src: "/brand/virtu-logo.png", aspect: 1832 / 651 },
  white: { src: "/brand/virtu-logo-white.webp", aspect: 1891 / 659 },
  platinum: { src: "/brand/virtu-logo-platinum.png", aspect: 1832 / 651 },
} as const;

export type LogoTone = keyof typeof VARIANTS;

export function Logo({
  height = 26,
  tone = "brand",
  alt = "Virtu",
  priority = false,
}: {
  height?: number;
  tone?: LogoTone;
  alt?: string;
  priority?: boolean;
}) {
  const { src, aspect } = VARIANTS[tone];
  const width = Math.round(height * aspect);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
    />
  );
}
