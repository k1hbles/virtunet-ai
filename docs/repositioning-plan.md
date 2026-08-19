# Repositioning virtunet.ai — plan

**Decided with Martin's feedback, 2026-08-19.**

virtu.net keeps hardware distribution, procurement, licensing and lifecycle.
virtunet.ai becomes an AI services firm — governance, ethics, agents,
automation and adoption — with AI infrastructure (GPUs, workstations,
inference) as its only hardware.

The site currently argues the opposite. This plan replaces the argument.

---

## What the category actually says

Measured, not assumed — home pages of Faculty, Tribe AI, Sierra, AE Studio,
Credo AI, Mantel/Eliiza and Section, read 2026-08-19.

| Firm | Their line |
|---|---|
| Section | "You bought AI. That was the easy part. The tools are on everyone's desk. Almost nobody's work has changed." |
| Tribe AI | "Most companies have the tools, not the results." Map · Build · Activate |
| Credo AI | "AI Governance, Built for the **Agentic** Era" |
| AE Studio | "Applied AI, where it has to work." |
| Faculty | "Frontier AI for the frontlines." **Now expanding into Australia.** |

Two findings that shape the work:

1. **Nobody sells tools.** Every one of them sells the gap between owning AI
   and having it change how work gets done. That is Martin's point, and it is
   the position to take.
2. **Governance has already moved to agents.** Credo AI renamed the category.
   Writing "AI governance" without saying "agents" now reads a year late.

What none of them name yet: **the agentic coding and knowledge-work tools
themselves** — Claude Code, Codex, Claude Cowork. That is the opening.

## Decisions taken

| Question | Decision |
|---|---|
| ROI calculator | **Remove.** Its assumptions were invented and salary arithmetic is the wrong argument here. |
| Readiness Check | **Keep, rework.** "AI readiness" is vague; it has to ask concrete, answerable questions about agents, governance and delivery. |
| Sustainability | **Keep, reframed to AI.** Inference cost and energy, right-sizing models, efficient infrastructure. Not device lifecycle or e-waste. |
| Partnerships | **Blocked.** Nothing written until the real list is confirmed. No invented tiers. |
| Case studies | **Remove.** |
| virtu.net | **Fully independent, explicitly signposted.** No in-content links to its product pages; one clear signpost for visitors who want hardware. |

## The new spine

**Orient → Govern → Build → Adopt**, with infrastructure underneath.

| Stage | Services |
|---|---|
| Orient | AI Strategy Day · AI Readiness Assessment |
| Govern | AI & Agent Governance · Responsible AI & Ethics · Securing AI |
| Build | AI Agents · Workflow Automation · Agentic Engineering (Claude Code, Codex) |
| Adopt | AI Training & Enablement · AI-Native Knowledge Work (Claude Cowork) |
| Infrastructure | AI Infrastructure & Workstations (GPUs, inference) |

### Services leaving

| Service | Why |
|---|---|
| Microsoft Copilot Adoption | Superseded by AI-native tooling. |
| AI-Ready Devices | Becomes AI Infrastructure & Workstations. |
| AI Physical Security | Cameras and access control are virtu.net. |
| AI Collaboration | Vague; absorbed by AI-Native Knowledge Work. |
| AI-Powered Service Desk | Absorbed by Workflow Automation. |

## Phases

Each phase is independently shippable and independently reviewable.

### Phase 1 — the spine
`lib/services.ts`, `lib/content.ts`. New stages, new service list, new hero
subtitle. The hero's headline and artwork stay: "The technology partner for
an AI-native future" is already the right claim. Its subtitle is not — it
currently reads "From procurement and licensing to deployment and lifecycle".

### Phase 2 — home page
- **Remove** `Capabilities` (Procure/License/Deploy/Secure/Sustain) — this is
  virtu.net's five-stage story in full.
- **Rewrite** the pinned AI services sequence: beats and the nine cards.
- **Reframe** `AiWorkplace` from "prepare your workplace" to agentic tooling
  adoption. The new image brief is already written against this section.
- **Reframe** `Sustainability` to efficient AI — inference cost and energy.
- **Hold** `PartnerStrip` until the partnership list is confirmed.

### Phase 3 — pages out
Remove and redirect: `/tools/ai-roi-calculator`, `/client-outcomes` and its
detail pages, `/partnerships`. Every removed route needs a redirect entry so
nothing 404s, and the sitemap regenerates from the same data.

### Phase 4 — pages reworked
`/services` and detail pages, `/industries`, `/about`, `/responsible-ai`
(which becomes more central, not less), `/insights`.

### Phase 5 — Readiness Check
Rework the ten questions around agents, governance and delivery, with bands
that describe a concrete next step rather than a grade.

### Phase 6 — partnerships
Blocked on the real list.

### Phase 7 — images and cards
New artwork per section, briefed as we go.

## Standing rules for this work

- **Invented positioning is fine; invented facts are not.** Martin has said
  guessing at the service mix is acceptable. That does not extend to client
  outcomes, partner tiers, certifications, headcounts or statistics.
- **Nothing about virtu.net's hardware business survives into the copy**
  except the single signpost.
- Every removed route gets a redirect. No 404s at any point.
