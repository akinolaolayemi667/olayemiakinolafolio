import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  label: string;
  /** Emphasize on parent hover. */
  interactive?: boolean;
  size?: "sm" | "md";
};

/** Technology chip — stack lists, service cards, case studies. */
export function TechBadge({
  label,
  interactive = true,
  size = "sm",
  className = "",
}: Props) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-lg border border-[color:var(--hv-border)] bg-white/[0.03] font-medium text-[color:var(--hv-fg-muted)]",
        size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs",
        interactive &&
          "transition-colors group-hover:border-accent/30 group-hover:text-[color:var(--hv-fg-secondary)]",
        className
      )}
    >
      {label}
    </span>
  );
}
