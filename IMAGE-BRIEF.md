# Image brief

Prompts for the artwork the site is missing. Generate at the stated aspect,
as large as your tool allows (2048px on the long edge is ideal — everything
gets downscaled and re-encoded by `next/image`, so oversized is free).

Drop the files anywhere and tell me the paths; I'll trim, convert to WebP and
wire them in. **PNG or WebP, no JPEG** — JPEG artefacts show badly on the
near-black backgrounds this site uses.

---

## The house style

Every existing image on the site shares one look. Paste this block into every
prompt so the new work sits alongside `procurement-devices.webp` and
`secure-connectivity.webp` rather than beside them.

> Cinematic product photography, near-black background, deep shadows, shallow
> depth of field. Cool lighting: electric blue and teal with a single warm
> yellow-green rim accent. Industrial materials — brushed aluminium, matte
> concrete, smoked glass. Premium enterprise technology, understated, no
> branding. Photographed on a long lens, subject small in frame with generous
> negative space. Moody, quiet, expensive.

**Always add as negative prompt:**

> no text, no words, no letters, no logos, no watermarks, no visible faces,
> no people looking at camera, no bright white backgrounds, no clutter, no
> stock-photo handshakes, no neon cyberpunk, no purple, no orange

**Why no text:** the site renders all copy as live HTML. Baked-in text can't
be translated, read by screen readers, or kept crisp when scaled.

---

## 1. Capability cards — 3 images, 4:3 (2048 × 1536)

These three cards currently have no artwork and fall back to a radial glow,
which is why the middle of the page reads flatter than the top.

### `license.webp` — "Software and licence services"
> House style. Overlapping translucent glass panels floating in dark space,
> edge-lit in electric blue, suggesting layered software licences stacked in
> depth. Faint grid etched into the glass. One panel catches a yellow-green
> rim light. Abstract, architectural, no interface elements.

### `deploy.webp` — "Deployment, project management, cloud transformation"
> House style. A row of server racks receding into darkness, seen from a low
> angle down a cold aisle. Blue status LEDs in soft focus, one rack in sharp
> focus in the foreground. Teal ambient light, faint yellow-green glow at the
> far end of the aisle. Empty, still, no operators.

### `sustain.webp` — "IT asset lifecycle management"
> House style. A refurbishment workbench in a dark facility: laptop chassis
> laid out in an ordered grid, one opened with internals visible, tools
> arranged neatly. Overhead task light pooling on the bench, blue-teal wash
> beyond. Suggests careful reuse rather than disposal. No hands, no people.

---

## 2. Insight card headers — 3 images, 16:9 (2048 × 1152)

The insights section is text-only. These sit above each card headline.

### `insight-ai-pcs.webp` — "Maximise workforce productivity with AI PCs"
> House style. A single thin modern laptop three-quarter view on a dark desk,
> screen showing abstract flowing data ribbons in blue and green, no readable
> interface. Room dark behind, one soft window reflection on the lid.

### `insight-windows-11.webp` — "Windows 11 upgrade guide"
> House style. Three laptops of different ages arranged in a receding
> diagonal, oldest furthest and darkest, newest nearest and sharply lit —
> suggesting a fleet upgrade. Cool blue key light, yellow-green accent on the
> nearest device. No visible operating system, screens abstract.

### `insight-education.webp` — "AI, VR and AR in education"
> House style. An empty modern lecture space at night, tiered seating in
> silhouette, a single AR headset resting on a desk in the foreground catching
> blue rim light. Faint teal projection glow on the far wall. Nobody present.

---

## 3. Section seam textures — 2 images, 21:9 (2560 × 1097)

Full-bleed, near-abstract bands used to soften the hard cuts between
sections. These sit at very low opacity behind section boundaries, so they
should be almost featureless — texture, not subject.

### `seam-light.webp`
> Abstract macro photograph of brushed aluminium under raking light, almost
> black with a soft platinum sheen sweeping across the centre. Extremely
> subtle, no distinct forms, fine directional grain. Suitable as a background
> texture at 15% opacity.

### `seam-deep.webp`
> Abstract long-exposure of cool blue and teal light diffusing through smoked
> glass, dissolving to pure black at both edges. No hard shapes, no visible
> source. Suitable as a background texture at 15% opacity.

---

## 4. Open Graph card — 1 image, exactly 1200 × 630

Currently the share preview reuses `hero-ai-ready-device.webp`, which is a
2048×868 crop and sits awkwardly in a 1.91:1 card.

### `og-card.webp`
> House style. Wide cinematic composition, a single modern laptop slightly
> right of centre, closed, catching a blue and yellow-green light ribbon
> across its lid. Left third deliberately empty near-black negative space.
> Balanced for a 1200×630 crop with nothing important near the edges.

The empty left third matters — that's where the title overlays on most
platforms.

---

## What I am *not* asking for

**A 360° render sequence.** Apple's scroll-driven spin is a video scrubbed
against scroll position, which needs frame-to-frame consistent geometry.
Image generation can't hold an object stable across frames, so that effect is
out of scope. If a real 360° render or product video ever exists, the pinned
stage built in this round is already the right container for it — wiring it up
would be a small change, not a rebuild.

**Anything with text in it.** See above.
