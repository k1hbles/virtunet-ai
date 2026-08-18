import Image from "next/image";

/** Intrinsic aspect of the trimmed artwork (1832 x 651). */
const ASPECT = 1832 / 651;

/**
 * The Virtu wordmark.
 *
 * `tone="platinum"` swaps to a flattened silver version of the same artwork,
 * for placements where the brand blue and green would fight the surrounding
 * palette. Width is derived from the height so the box never shifts.
 */
export function Logo({
  height = 26,
  tone = "brand",
  alt = "Virtu",
  priority = false,
}: {
  height?: number;
  tone?: "brand" | "platinum";
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={tone === "platinum" ? "/brand/virtu-logo-platinum.png" : "/brand/virtu-logo.png"}
      alt={alt}
      width={Math.round(height * ASPECT)}
      height={height}
      priority={priority}
      sizes={`${Math.round(height * ASPECT)}px`}
    />
  );
}
