/**
 * The shape of the estate at each stage, drawn rather than labelled.
 *
 * The argument the section makes is not about how far AI reaches. It is that
 * the tools are already scattered and nobody is going to migrate, so the work
 * is to build over what is there. That is a shape, and these are the three it
 * takes:
 *
 *   scattered  people reach their own tools directly, and nothing reports
 *   joined     one layer you own sits between them, so there is one number
 *   acting     an agent works inside that layer and writes back out
 *
 * Line work at 1px, no fills, because that is the register technical figures
 * use on black and it survives being small.
 */

/** left edge of the tools column, and the three rows they sit on */
const TOOL_X = 206.5;
const ROWS = [18.5, 48.5, 78.5];

export function StageDiagram({ shape }: { shape: "scattered" | "joined" | "acting" }) {
  const hub = shape !== "scattered";
  const acting = shape === "acting";

  return (
    <svg viewBox="0 0 260 96" fill="none" aria-hidden className="w-full max-w-[17rem] text-ink">
      {/* the people, always there */}
      <rect x="6.5" y="40.5" width="26" height="16" rx="4" stroke="currentColor" strokeOpacity="0.45" />

      {/* the tools already in use, which never go away */}
      {ROWS.map((y) => (
        <rect
          key={y}
          x={TOOL_X}
          y={y - 8}
          width="38"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeOpacity={hub ? 0.5 : 0.38}
        />
      ))}

      {/* stage 1: everyone straight to their own tool, past nothing */}
      {!hub &&
        ROWS.map((y) => (
          <path
            key={y}
            d={`M32.5 48.5L${TOOL_X} ${y}`}
            stroke="currentColor"
            strokeOpacity="0.26"
            strokeDasharray="3 4"
          />
        ))}

      {/* stage 2 and 3: the layer you own, and everything through it */}
      {hub && (
        <>
          <rect
            x="104.5"
            y="28.5"
            width="64"
            height="40"
            rx="8"
            stroke="currentColor"
            strokeOpacity={acting ? 0.55 : 0.9}
          />
          <path d="M32.5 48.5h72" stroke="currentColor" strokeOpacity="0.5" />
          {ROWS.map((y) => (
            <path key={y} d={`M168.5 48.5L${TOOL_X} ${y}`} stroke="currentColor" strokeOpacity="0.5" />
          ))}
        </>
      )}

      {/* stage 3: the agent inside it, and the direction of travel */}
      {acting && (
        <>
          <rect x="116.5" y="40.5" width="40" height="16" rx="3" stroke="currentColor" strokeOpacity="0.95" />
          {ROWS.map((y) => (
            <path
              key={y}
              d={`M${TOOL_X - 5} ${y - 3.5}l4.5 3.5-4.5 3.5`}
              stroke="currentColor"
              strokeOpacity="0.7"
            />
          ))}
        </>
      )}
    </svg>
  );
}
