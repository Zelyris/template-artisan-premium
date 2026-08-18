import type { Action } from "@/lib/types";

type ActionLinkProps = Action & {
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

export function ActionLink({
  href,
  label,
  ariaLabel,
  variant = "primary",
  className = "",
}: ActionLinkProps) {
  const variantClasses = {
    primary: "bg-brand text-brand-contrast hover:bg-brand-deep",
    secondary: "border border-current bg-transparent text-foreground hover:bg-surface",
    text: "min-h-0 border-b border-current px-0 py-1 text-foreground hover:text-brand",
  }[variant];

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-xs font-semibold uppercase tracking-[0.13em] transition-colors ${variantClasses} ${className}`}
    >
      <span>{label}</span>
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
