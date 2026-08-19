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

## Image A — "Where the work actually changes."  (second pass)

Replaces `public/img/ai-workplace-desk.webp`.

**Deliver 2048 × 1078 (aspect 1.90).**

### Why the first replacement is being replaced

It is a product still life, and the page already has two of those: the hero
is a close crop of a compute unit, and the AI services section runs a scrubbed
clip of a chassis opening. A fourth adds nothing, and "desk with devices" is not the same
statement as "workplace". The rack aisle in Image B works because it is
architectural — depth, scale, atmosphere — and this section can carry the
same register at human scale.

Also drop the blue underglow beneath the laptop. Light spilling out from
under a device reads as gaming hardware, not as enterprise IT.

### Composition constraints (unchanged, and they are strict)

- Full-bleed background with a left-to-right black scrim: the **left 35% is
  96%→78% black** and carries the heading and body. Keep it empty and dark.
- On mobile the box becomes **portrait (0.51)** and object-cover shows only
  the **centre 28.5% of the width — 36% to 64% across**. Whatever matters
  most has to live inside that window.
- So: the lit focal point sits around **55–62% across**, depth and detail
  extend right, and nothing essential goes past 80%.

Do not repeat Image B's dead-centre one-point perspective — that section is
directly below this one and two symmetrical vanishing-point shots in a row
will read as the same photograph twice. Use an off-axis three-quarter view.

> **Prompt**
>
> A wide, quiet view across an empty open-plan office at night, shot from one
> corner at a three-quarter angle rather than straight down the middle. The
> room is almost entirely dark. A single workstation two-thirds into the
> frame is lit by one soft pool of light from above — a slim laptop and a thin
> external display on a plain dark desk, screens dim and showing no readable
> interface. Beyond it, rows of empty desks recede into shadow, their edges
> catching faint cool platinum highlights. Floor-to-ceiling glazing along the
> far wall shows a night skyline reduced to a few distant cool lights, heavily
> darkened. Architecture is minimal and modern: matte charcoal surfaces,
> brushed metal edges, a polished concrete floor with soft reflections. No
> plants, no timber, no soft furnishing, no clutter, no people. The left third
> of the frame falls away to near-black. Colour is graphite and cool platinum
> with a single restrained blue accent (#1678FF) in the screen glow. Shot on a
> 24mm lens at f/4, architectural interior photography, deep blacks, natural
> falloff, no bloom, no lens flare, no light spilling from under furniture.
>
> **Negative:** plants, greenery, wood, warm light, amber, orange, yellow,
> green, teal, rainbow, RGB lighting, underglow, glowing edges, gaming setup,
> data visualisation, charts, dashboards, wavy lines, readable text, logos,
> brand marks, people, hands, faces, clutter, cables, coffee cups, symmetrical
> one-point perspective, HDR, oversaturated.

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
