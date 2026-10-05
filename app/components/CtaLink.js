import WhatsAppIcon from "./WhatsAppIcon";
import ArrowIcon from "./ArrowIcon";

/**
 * The site's only button vocabulary — three quiet variants:
 *   primary  → solid, high contrast
 *   outline  → hairline border, restrained
 *   text     → underlined editorial link with a thin arrow
 *
 * `tone` describes the background the button sits on, so contrast
 * is always deliberate. Minimum touch target is 44px.
 */
export default function CtaLink({
  href,
  children,
  variant = "primary",
  tone = "onDark",
  icon = null,
  size = "md",
  className = "",
}) {
  const isDark = tone === "onDark";

  const sizes = {
    md: "min-h-[48px] px-7 text-sm",
    sm: "min-h-[44px] px-5 text-[13px]",
  };

  const variants = {
    primary: isDark
      ? "bg-cream-50 text-chocolate-950 hover:bg-cream-100 hover:-translate-y-0.5"
      : "bg-chocolate-950 text-cream-50 hover:bg-chocolate-800 hover:-translate-y-0.5",
    outline: isDark
      ? "border border-cream-50/30 text-cream-50 hover:border-cream-50/70 hover:-translate-y-0.5"
      : "border border-chocolate-950/30 text-chocolate-950 hover:border-chocolate-950/70 hover:-translate-y-0.5",
    text: isDark
      ? "text-cream-50 hover:text-cream-300"
      : "text-chocolate-950 hover:text-chocolate-600",
  };

  const iconEl =
    icon === "whatsapp" ? (
      <WhatsAppIcon className="h-4.5 w-4.5 shrink-0" />
    ) : icon === "arrow" ? (
      <ArrowIcon className="h-4.5 w-4.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    ) : null;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center justify-center gap-2.5 font-medium tracking-wide transition-all duration-300 ${
        variant === "text" ? "min-h-[44px]" : sizes[size]
      } ${variants[variant]} ${className}`}
    >
      {iconEl}
      <span>{children}</span>
    </a>
  );
}
