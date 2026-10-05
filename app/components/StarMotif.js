/**
 * A single eight-pointed star built from two overlapping squares —
 * the classic "Rub el Hizb" geometry, kept as a quiet decorative
 * motif. Stroke-only, low-opacity, currentColor so it sits
 * unobtrusively over either the chocolate or the cream ground.
 */
export default function StarMotif({ className = "h-64 w-64" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g strokeWidth="1">
        <rect x="55" y="55" width="90" height="90" />
        <rect
          x="55"
          y="55"
          width="90"
          height="90"
          transform="rotate(45 100 100)"
        />
      </g>
      {/* Concentric circles to give the star a quiet orbit */}
      <circle cx="100" cy="100" r="97" strokeWidth="0.75" />
      <circle cx="100" cy="100" r="72" strokeWidth="0.75" />
      <circle cx="100" cy="100" r="1.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
