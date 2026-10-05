/**
 * The Institute monogram — an eight-pointed star (two squares,
 * one turned 45°) enclosing an italic serif "M".
 * Rendered with currentColor so it adapts to any background.
 */
export default function BrandMark({ className = "h-10 w-10" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="10.5" y="10.5" width="27" height="27" strokeWidth="1.1" />
      <rect
        x="10.5"
        y="10.5"
        width="27"
        height="27"
        strokeWidth="1.1"
        transform="rotate(45 24 24)"
      />
      <text
        x="24"
        y="24"
        dy="0.36em"
        textAnchor="middle"
        stroke="none"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-playfair-display), Georgia, serif",
          fontStyle: "italic",
          fontSize: "16px",
        }}
      >
        M
      </text>
    </svg>
  );
}
