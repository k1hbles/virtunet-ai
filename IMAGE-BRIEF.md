# Image brief — two section images

Generate these two, then hand me the files and I'll trim, convert to WebP and
wire them in.

## Palette (measured from `app/globals.css`)

| Token | Hex | Use in the image |
|---|---|---|
| canvas | `#000000` | the ground — most of the frame |
| surface | `#010102` | near-black separation |
| platinum | `#D0D5D9` | the only "bright" — specular edges, brushed metal |
| platinum-dim | `#9C9FA2` | mid-tone metal |
| accent | `#1678FF` | restrained blue light, the single colour accent |
| accent-green | `#13C462` | image B only, and only as a trace |

## What is wrong with the current two

**Both** are lit green/yellow/teal, which is off-palette — the site is
near-black, platinum and one Apple-ish blue. They read as generic AI stock
render, not as the calm dark direction the hero set.

**ai-ready-workplace.webp** — a rainbow heat-map on the right monitor, wavy
"AI visualisation" lines on every screen, two large houseplants, warm wood
desk. Every one of those is a cliché and none of them are in the palette.

**sustainable-lifecycle.webp** — carries **visible HP logos** on the laptops.
That has to go: this site is vendor-neutral, and a third-party trademark
baked into illustrative art reads as a claim about that vendor. It is also
too busy — conveyor, shelving, bins, boxes and loose components all at once.

## Image A — "Prepare your workplace for AI."

Replaces `public/img/ai-ready-workplace.webp`.

**Deliver 2048 × 1075 (aspect 1.90).**

Composition is constrained by how it is displayed, so this matters more than
the subject:

- It is a full-bleed background with a left-to-right black scrim. The **left
  35% is 96%→78% black** — the heading and body sit there. Put nothing you
  care about in the left third.
- On mobile the box becomes **portrait (aspect 0.51)** and `object-cover`
  shows only the **centre 28.5% of the width — from 36% to 64% across**.
- So the subject must sit centred around **55–62% across**: far enough right
  to clear the scrim, central enough to survive the mobile crop. Detail may
  extend right; nothing essential past 80%.

> **Prompt**
>
> A dark, minimal workplace scene photographed on a near-black set. A single
> slim aluminium laptop, open, sitting on a smooth charcoal desk surface, with
> one thin external monitor behind it slightly out of focus. Everything is
> brushed aluminium and matte graphite — no wood, no fabric, no plants, no
> people. The screens are almost entirely dark, showing only a faint cool blue
> glow with no discernible interface, no charts, no waveforms and no readable
> text. Lighting is a single soft key from the upper right, raking across the
> metal so the edges catch a cool platinum highlight, plus one restrained blue
> rim light. The left third of the frame falls off to pure black. Colour is
> strictly monochrome graphite and platinum with one accent of blue (#1678FF);
> no green, no amber, no teal, no rainbow colour. Shallow depth of field,
> shot on an 85mm lens at f/2, high-end product photography, quiet and
> expensive, deep blacks, no glow bloom, no lens flare.
>
> **Negative:** plants, greenery, wood, warm light, orange, yellow, green,
> teal, rainbow, heatmap, data visualisation, wavy lines, charts, dashboards,
> readable text, logos, brand marks, people, hands, faces, busy background,
> office clutter, HDR, oversaturated.

## Image B — "Progress that lasts beyond deployment."

Replaces `public/img/sustainable-lifecycle.webp`.

**Deliver 2048 × 1280 (aspect 1.60, i.e. 16:10).** The current file is 16:9
and gets 11% cropped off top and bottom — 16:10 fixes that.

It sits in a rounded, bordered card beside the text, with no scrim, so the
whole frame is visible and the composition can be centred.

The idea is *longevity*, not a recycling depot: one device, treated with
care, built to outlast its first deployment.

> **Prompt**
>
> A single slim aluminium laptop shown closed and in profile on a dark
> brushed-steel surface, lit as a museum object rather than a product on a
> shelf. Beside it, precisely arranged, two or three small components — a
> memory module and a drive — laid out in a neat row like parts of a service
> kit, suggesting a machine designed to be opened and kept running. Near-black
> background falling away to pure black at the edges. Brushed metal and matte
> graphite only. Lighting is one soft overhead key with a cool platinum
> specular along every machined edge, and a single narrow blue accent light
> (#1678FF) grazing from the left. One very faint, small trace of green
> (#13C462) in a distant reflection, barely perceptible — a hint, not a theme.
> Symmetrical, calm, generous negative space, everything in sharp focus.
> Shot on a 50mm lens, top-down three-quarter view, high-end editorial product
> photography, deep blacks.
>
> **Negative:** logos, brand marks, HP, Dell, Lenovo, Apple, any visible
> trademark, text, labels, barcodes, green laptops, coloured devices, warehouse,
> conveyor belt, shelving, storage bins, cardboard boxes, clutter, recycling
> symbols, leaves, plants, people, hands, yellow, orange, teal, rainbow,
> oversaturated, HDR.

## When you hand them back

Any format is fine — PNG at full size is ideal. I will trim, convert to WebP,
check them against the scrim and the mobile crop, and confirm the text still
clears its contrast minimum over the new artwork.
