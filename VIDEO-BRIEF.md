# Video brief — a hero that behaves like a scroll-driven film

## The concept

This is not a background video. It never autoplays, never loops, and has no
playback controls. **The scrollbar is the projector.** The reader's scroll
position is wired directly to the clip's playhead: scrolling down runs the
film forward, scrolling up runs it backward, and stopping freezes it on a
frame. Scroll slowly and it plays slowly. Stop and it holds.

Apple does exactly this on the MacBook page — measured with a browser: their
clip advances from 2.06s to 15.68s across roughly 6,000px of scroll, pinned
inside a sticky container. Nothing about it is 3D or interactive. It is a
short film with its playhead on a leash.

That framing should drive every creative decision below. You are not making
a loop to sit behind text. You are making **a ten-second film that a reader
scrubs through at their own pace, and stares at frozen for most of it.**

---

## The single most important constraint: the mobile crop

The clip renders full-bleed with `object-fit: cover`. On desktop that is
roughly the whole frame. On a phone it is not.

Measured against the real stage on this site:

| Viewport | Stage box | Of a 16:9 frame, visible |
|---|---|---|
| Desktop 1440×900 | 1440 × 900 | ~full width, ~94% height |
| Tablet 768×900 | 768 × 700 | ~62% of width |
| **Phone 390×844** | **390 × 574** | **~38% of width, centre only** |

A 1920×1080 frame on a phone shows only the middle **~730px**. Everything in
the outer thirds is thrown away.

```
 1920px wide frame
┌──────────┬───────────────┬──────────┐
│ CROPPED  │  SAFE ON ALL  │ CROPPED  │
│ on phone │   DEVICES     │ on phone │
│          │   ~730px      │          │
│  ~595px  │   centre      │  ~595px  │
└──────────┴───────────────┴──────────┘
             put the subject here
```

**So: keep the subject in the centre third. Horizontally and vertically.**
Let the outer thirds be atmosphere, falloff and pure black — material that is
nice on desktop and no loss when cropped away. Never let the subject drift
out of the centre band during the clip; a rotation that swings wide will
leave phone readers watching an empty frame.

---

## Technical requirements

Send the file at any path. **Ignore format, codec, bitrate and compression** —
generate the highest quality your tool allows and I re-encode locally with
ffmpeg. What I cannot fix in post is composition, motion and cuts.

| | |
|---|---|
| Resolution | 1920×1080 minimum, 2560×1440 preferred |
| Frame rate | 30fps (60 is fine, I can halve it) |
| Duration | **8–12 seconds** |
| Aspect | 16:9 |
| Background | **Pure `#000000`** — not dark grey, not near-black |
| Audio | None; it is stripped |

### The five rules that decide whether it works

1. **One continuous take. No cuts, ever.** A cut becomes a violent snap
   mid-scroll, because the reader controls when it happens. Not a fast cut —
   an instantaneous teleport under their thumb.

2. **Constant speed.** Scrubbing multiplies any change in velocity. Motion
   that eases in or out reads as the page stuttering rather than the clip
   being expressive. Perfectly linear motion feels controlled and expensive.

3. **Every single frame is a poster.** The reader will stop somewhere
   arbitrary and read the headline over that frame for as long as it takes.
   There is no throwaway in-between frame. If any moment of the clip looks
   like a transitional smear, it will be the frame someone parks on.

4. **Pure black background, dissolving at every edge.** The section has no
   visible boundary — the clip has to melt into the page rather than sit in a
   rectangle. Density in the centre, complete black by the edges.

5. **No text, no logos, no UI, no readable symbols.** Every word on this page
   is live HTML so it stays crisp, translatable and screen-reader accessible.
   Generated text also comes out malformed, and this sits under a headline.

---

## Give it an arc, not a loop

Because scroll position maps to time, the clip's beginning is *the moment the
reader arrives* and its end is *the moment they leave*. That is a narrative
opportunity most background video throws away. Structure it:

| Time | Beat | What the reader is doing |
|---|---|---|
| 0–2s | **Sparse.** Near-empty black, the faintest suggestion of structure. | Section is entering the viewport |
| 2–7s | **Assembling.** Elements converge steadily, form resolving. | Reading the headline, deciding whether to care |
| 7–10s | **Resolved and still.** A calm, complete, confident form. | Leaving toward the nine services |

The arc is the message: *unformed → governed → working*. That is the whole
proposition of the section, told without a word.

Avoid a seamless loop. A loop means the first and last frames are identical,
which wastes the arc and makes the clip feel like wallpaper.

---

## Prompt A — the assembling form *(recommended)*

Safest for scrubbing: continuous, always legible, subject locked to centre,
and the arc matches the section's meaning. If this comes out well, stop.

> A ten-second continuous cinematic shot against a pure black background. In
> the exact centre of the frame, thousands of fine luminous particles drift
> inward from the surrounding darkness and slowly assemble into a single
> precise geometric structure — an ordered lattice resolving out of chaos.
> The motion is perfectly steady and linear from the first frame to the last,
> never accelerating, never pausing, never reversing. The particles are lit
> in cool electric blue and teal, with one warm yellow-green rim accent
> catching the leading edges. The form stays locked in the middle third of
> the frame at all times and never drifts toward the edges. Density
> concentrates at the centre and falls off to complete pure black at every
> edge with no visible border or vignette ring. Shallow depth of field, fine
> grain, high contrast, cinematic product-photography lighting. One
> uninterrupted take, locked-off camera, no cuts, no camera shake, no zoom.

**Negative prompt:**
> text, letters, words, numbers, logos, watermarks, UI, interface, people,
> faces, hands, cuts, jump cuts, scene changes, fast motion, acceleration,
> easing, strobing, flashing, flicker, lens flare, purple, magenta, orange,
> red, white background, grey background, vignette border, frame, letterbox,
> subject drifting off centre, camera shake, zoom, handheld

---

## Prompt B — the rotating monolith

Closest to the MacBook reference. Higher risk: generated video frequently
morphs or wobbles during rotation, and scrubbing makes that unmissable
because the reader can hold on the bad frame.

> A ten-second continuous cinematic shot against a pure black background. A
> single matte dark-aluminium monolith with clean machined edges stands in the
> exact centre of the frame, rotating slowly and steadily on its vertical axis
> through one complete revolution across the full duration. The rotation is
> perfectly linear — identical speed in the first second and the last, with no
> easing, no pause, and no change of direction. Cool electric blue and teal
> edge-light rakes across its faces as they turn, with a single warm
> yellow-green highlight tracing one edge. The object remains centred and the
> same size throughout, never drifting or scaling. No environment, no floor,
> no horizon — it floats in complete blackness that reaches pure black at
> every edge. Shallow depth of field, studio product lighting, high contrast.
> One uninterrupted locked-off take, no cuts.

**Negative prompt:**
> everything in prompt A, plus: morphing, shape changes, melting, wobble,
> deformation, inconsistent geometry, floor, ground, shadow on floor, room,
> environment, reflections of a studio

---

## Prompt C — the flowing field

Most forgiving of generation artefacts, because there is no rigid object
whose consistency can break. Least "wow", most reliable.

> A ten-second continuous cinematic shot against a pure black background.
> Fine luminous filaments of light stream steadily through deep black space
> like light travelling through fibre optics, flowing in one consistent
> direction at a perfectly even speed for the entire duration. The filaments
> are densest through the centre third of the frame and thin out to complete
> pure black at every edge. Cool electric blue and teal throughout, with a
> single warm yellow-green thread woven among them. The flow never surges,
> bursts, or changes direction. Shallow depth of field, delicate detail,
> cinematic, high contrast. One uninterrupted locked-off take, no cuts.

**Negative prompt:**
> everything in prompt A, plus: turbulence, explosions, bursts, particles
> scattering outward, smoke, fire, waves, water, direction changes

---

## What happens when you send it

1. **Re-encode for scrubbing.** Default encodes place keyframes every 2–5
   seconds, so seeking to an arbitrary frame decodes from the last keyframe
   and stutters. I re-encode with every frame a keyframe (`-g 1`). It roughly
   triples the file size — that trade is precisely why Apple's scrub feels
   smooth and most imitations feel broken.
2. **Two codecs** — H.264 MP4 for reach, WebM/VP9 for size.
3. **Poster frame** pulled for first paint, so the stage is never empty.
4. **Fallbacks, always shipped:** phones, reduced-motion readers and any load
   failure get a still frame plus the copy. The section never depends on the
   video arriving.
5. **I report the real cost** — bytes over the wire before and after, not an
   estimate.

If you can only get one clip right, make it **A**.
