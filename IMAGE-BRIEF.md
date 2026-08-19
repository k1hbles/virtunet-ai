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

**Subject: serviceability at infrastructure scale, not raw compute power.**
The headline is "Progress that lasts beyond deployment" and the pillars under
it are Choose, Operate and Renew. A supercomputer reads as power and density,
which says nothing about any of those — and since a supercomputer is the stock
example of energy-hungry compute, it would argue against the sustainability
claim it sits above. A rack designed to be opened, maintained and kept running
says the same "serious infrastructure" thing while actually earning the
headline.

Do not make this a close-up of an opened chassis: the AI services section
already runs a scrubbed clip of exactly that, and the hero is a close crop of
a compute unit. This one has to work at a different scale from both.

> **Prompt**
>
> A wide, calm view down a maintenance aisle between two rows of server racks
> in a research computing hall. One rack module is drawn part-way out on its
> rails toward the viewer, revealing precise internal structure and clean,
> deliberate cable management — the room reads as something built to be
> serviced and kept running, not as a showpiece. Everything is brushed
> aluminium, matte graphite and near-black. Lighting is even and cool: a soft
> overhead wash picking out platinum highlights along the machined rails and
> rack edges, with a single restrained blue accent (#1678FF) running as a thin
> line of status light down the row. Background falls away into darkness. One
> very faint trace of green (#13C462) in a distant status indicator, barely
> perceptible. Symmetrical one-point perspective, generous negative space
> overhead, immaculately clean, no clutter, no cables on the floor. Shot on a
> 35mm lens, editorial architectural photography, deep blacks, quiet and
> expensive.
>
> **Negative:** logos, brand marks, HP, Dell, Lenovo, any visible trademark,
> text, labels, barcodes, screens showing interfaces, people, hands, warehouse,
> conveyor belt, storage bins, cardboard boxes, clutter, tangled cables,
> recycling symbols, leaves, plants, green or amber lighting, teal, rainbow,
> heat haze, lens flare, oversaturated, HDR.

## When you hand them back

Any format is fine — PNG at full size is ideal. I will trim, convert to WebP,
check them against the scrim and the mobile crop, and confirm the text still
clears its contrast minimum over the new artwork.
