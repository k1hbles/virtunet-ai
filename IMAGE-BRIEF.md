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

## Image A — "Where the work actually changes."  (third pass)

Replaces `public/img/ai-workplace-desk.webp`.

**Deliver 2048 × 1078 (aspect 1.90).**

### Direction

Aerospace and engineered, matching the hero rather than departing from it.
The previous brief called for an architectural interior; that is dropped.

The hero works because it is a machined object photographed as though it were
an instrument: hard speculars on anodised metal, everything else falling to
black. This section should sit in that same world.

It has to differ from the hero in scale, or the page shows the same photograph
twice. The hero is an extreme close crop of a single edge with shallow focus.
This one wants **depth and repetition** — a structure that recedes, so the two
read as different views of the same engineering culture rather than as two
crops of the same part.

It must also not be a chassis opening to reveal its internals, because the AI
services section already runs a scrubbed clip of exactly that.

Thermal is the honest subject. Cooling is the defining constraint of AI
compute, and a cold plate photographed properly looks like a turbine section,
which is where the aerospace register comes from without pretending to be
about aircraft.

### Composition constraints (unchanged, and they decide whether it works)

- Full-bleed background with a left-to-right black scrim: the **left 35% is
  96%→78% black** and carries the heading and body. Keep it empty and dark.
- On mobile the box becomes **portrait (0.51)** and object-cover shows only
  the **centre 28.5% of the width — 36% to 64% across**.
- So the focal point sits around **55–62% across**, the structure recedes to
  the right, and nothing essential goes past 80%.

> **Prompt**
>
> A precision-machined aluminium cold plate for AI accelerators, photographed
> like an aerospace component on a black set. Rows of micro-milled cooling fins
> run in parallel and recede into shallow focus, each fin edge catching a hard
> specular line. Anodised graphite surface with faint visible tool paths,
> countersunk titanium fasteners, and a honeycomb vent panel at one end. One
> cool blue light (#1678FF) rakes low across the fins from the right; a single
> soft platinum key picks out the top edges. Everything else falls to pure
> black. No text, no logos, no branding, no screens, no people. Shot on a 100mm
> macro at f/5.6 from a low three-quarter angle, high-end aerospace product
> photography, deep blacks, hard controlled speculars, no bloom, no lens flare.
>
> **Negative:** warm light, amber, orange, yellow, green, teal, rainbow, RGB
> lighting, underglow, gaming hardware, plastic, wood, fabric, plants, people,
> hands, text, logos, brand marks, screens, interfaces, dust, scratches,
> busy background, clutter, HDR, oversaturated, soft focus everywhere.

### If that reads too much like the hero

Second subject, same register: a radial heatsink assembly shot down its axis,
fins fanning out like a turbine rotor, one blue rim light along the leading
edges and the centre falling to black. Same lens, same palette, same
constraints. Pick whichever comes back with more depth on the right-hand side
of the frame.

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
