import { Fragment } from "react";

/**
 * Splits a heading into per-word spans carrying their index as `--i`, which
 * `.word` turns into a staggered reveal. Spaces stay as real text nodes
 * between the spans so wrapping and text-balance behave normally, and the
 * element's accessible name is unchanged.
 */
export function SplitWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="word" style={{ "--i": i } as React.CSSProperties}>
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}
