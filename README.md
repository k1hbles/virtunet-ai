# Virtu

Marketing site for Virtu — "the technology partner for an AI-native future".
Next.js 16 App Router, Tailwind v4, statically prerendered, dark only.

Rebuilt from a saved Astro build of the original page. Layout is verified
against that original by pixel diff (see **Fidelity** below).

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint       # eslint
npx tsc --noEmit   # typecheck
```

## Layout

```
app/
  layout.tsx        root shell + site-wide metadata
  page.tsx          composes the sections, in render order
  globals.css       design tokens and the four shared utilities
components/
  layout/           navbar (client, owns the mobile menu), footer
  sections/         one file per section of the page
  ui/pill-button    the accent CTA pill and the quieter text link
lib/content.ts      every string, link and image reference on the page
public/img          section artwork      public/logos  partner marks
```

`app/page.tsx` is the table of contents — import order matches what you see
on screen. `lib/content.ts` holds the copy, so wording and URLs change
without touching markup.

## Design tokens

Defined in the `@theme` block of `app/globals.css` and used as Tailwind
utilities (`bg-canvas`, `text-ink-muted`, `border-line`).

| Token           | Value                  | Role                          |
|-----------------|------------------------|-------------------------------|
| `canvas`        | `oklch(0% 0 0)`        | page background               |
| `surface`       | `oklch(7.5% .008 260)` | cards and panels              |
| `ink`           | `oklch(98% .005 90)`   | primary text                  |
| `ink-muted`     | `oklch(68% .01 260)`   | secondary text                |
| `line`          | `oklch(24% 0 0)`       | hairline borders              |
| `accent`        | `oklch(61% .235 260)`  | blue — CTAs, links, hovers    |
| `accent-warm`   | `oklch(84% .18 91)`    | yellow — second insight rule  |
| `accent-green`  | `oklch(72% .19 151)`   | green — sustainability        |

These are the original's `--ploy-*` tokens with the vendor prefix dropped;
the mapping is documented at the top of `globals.css`.

Type is the system stack (`system-ui`), as in the original — no webfont is
loaded. Headings carry `-0.045em` tracking at `0.98` line-height via the
`.section-title` utility, so the five section headings stay in step.

## Fidelity

Rendered at 1440px against the original and diffed pixel by pixel. All nine
section landmarks match exactly on both offset and height. `partner-strip`,
`ai-services` and `footer` are pixel-identical; the whole page differs by
1.15%, entirely inside the four image-bearing sections, because `next/image`
re-encodes and resizes the artwork rather than shipping the source file.

That resizing is the point: a phone pulls **87 KB** of imagery instead of the
572 KB the original serves to every device.

## Before launch

- Every nav, card and footer link points at absolute `virtu.net` /
  `virtunet.ai` URLs, carried over from the original. Repoint any that should
  be internal routes.
- Set `NEXT_PUBLIC_SITE_URL`; metadata falls back to `https://virtu.net`.
- `app/favicon.ico` is still the Next.js default.
- The three insight cards all link to the insights index rather than to
  individual articles.
