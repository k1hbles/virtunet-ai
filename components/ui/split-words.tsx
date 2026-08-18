import { Fragment } from "react";

/**
 * Splits a heading into per-word masks.
 *
 * Each word is an `overflow: clip` box with the glyphs inside it, so the word
 * rises out from behind a hard edge rather than simply fading. `--i` carries
 * the index, which `.word-inner` turns into a staggered range.
 *
 * `clip` rather than `hidden` deliberately: `overflow: hidden` creates a
 * scroll container, which would anchor the inner span's view() timeline to a
 * box that never scrolls and freeze the animation.
 *
 * Spaces stay as real text nodes between the masks so wrapping, text-balance
 * and the element's accessible name are all unchanged.
 */
export function SplitWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="word">
            <span className="word-inner" style={{ "--i": i } as React.CSSProperties}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}
