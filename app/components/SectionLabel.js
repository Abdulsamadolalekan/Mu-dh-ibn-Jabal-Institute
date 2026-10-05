/**
 * Refined small-caps section label with a short rule — the quiet
 * wayfinding thread that ties every section to the same brand.
 */
export default function SectionLabel({
  children,
  tone = "onLight",
  className = "",
}) {
  const isDark = tone === "onDark";
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] ${
        isDark ? "text-cream-400" : "text-chocolate-600"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-9 ${isDark ? "bg-cream-400/60" : "bg-chocolate-600/50"}`}
      />
      {children}
    </p>
  );
}
