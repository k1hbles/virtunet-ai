/**
 * Where the AI sits relative to your systems, drawn rather than labelled.
 *
 * The previous version was a row of dots with words under them, which is a
 * legend pretending to be a diagram. This draws the actual relationship: a
 * boundary around your systems, and the AI outside it, at a gate on it, or
 * working inside it. The boundary is dashed while nothing can cross it.
 *
 * Line work rather than fills, at 1px, because that is the register the
 * reference interfaces use for technical figures and it survives on black.
 */
export function ReachDiagram({ reach }: { reach: "outside" | "gated" | "inside" }) {
  const systemsLive = reach !== "outside";
  const aiInside = reach === "inside";

  return (
    <svg
      viewBox="0 0 260 96"
      fill="none"
      aria-hidden
      className="w-full max-w-[17rem] text-ink"
    >
      {/* your systems */}
      <rect
        x="120.5"
        y="12.5"
        width="127"
        height="71"
        rx="9"
        stroke="currentColor"
        strokeOpacity={systemsLive ? 0.55 : 0.22}
        strokeDasharray={systemsLive ? undefined : "3 4"}
      />

      {/* the operator, always present */}
      <rect x="6.5" y="38.5" width="30" height="19" rx="4" stroke="currentColor" strokeOpacity="0.45" />

      {/* the AI: outside the boundary, or within it once it may act */}
      <rect
        x={aiInside ? "150.5" : "58.5"}
        y="38.5"
        width="34"
        height="19"
        rx="4"
        stroke="currentColor"
        strokeOpacity="0.95"
        className="[transition:x_.5s_cubic-bezier(.16,1,.3,1)]"
      />

      {/* operator to AI */}
      {!aiInside && <path d="M37 48h21" stroke="currentColor" strokeOpacity="0.45" />}
      {aiInside && <path d="M37 48h83" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="3 4" />}

      {/* AI to the boundary, once there is a way through */}
      {reach === "gated" && <path d="M93 48h27" stroke="currentColor" strokeOpacity="0.55" />}

      {/* the gate itself, sitting on the boundary */}
      {systemsLive && (
        <>
          <path d="M120.5 38v20" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.5" />
          <circle cx="120.5" cy="48" r="3" fill="currentColor" fillOpacity="0.95" />
        </>
      )}

      {/* what the AI reaches once inside */}
      {aiInside && (
        <>
          <path d="M184 48h22" stroke="currentColor" strokeOpacity="0.55" />
          <rect x="206.5" y="30.5" width="30" height="14" rx="3" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="206.5" y="51.5" width="30" height="14" rx="3" stroke="currentColor" strokeOpacity="0.4" />
        </>
      )}
    </svg>
  );
}
