import type { ReactNode } from "react";
import { cx, type WithClassName } from "@components/premium/types";

type Props = WithClassName & {
  children: ReactNode;
  /** Optional URL bar label (path only — no invented domains). */
  pathLabel?: string;
  /** Soft outer glow frame. */
  glow?: boolean;
};

/**
 * Browser chrome frame for product screenshots — presentation only.
 */
export function MediaFrame({
  children,
  pathLabel = "",
  glow = true,
  className = "",
}: Props) {
  return (
    <div
      className={cx(
        "overflow-hidden rounded-2xl border border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] shadow-[var(--hv-shadow-lg)]",
        glow && "shadow-[var(--hv-shadow-glow)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-[color:var(--hv-border)] bg-[color:var(--hv-surface-elevated)]/80 px-3 py-2.5">
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--hv-fg-subtle)]/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--hv-fg-subtle)]/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--hv-fg-subtle)]/25" />
        </span>
        {pathLabel ? (
          <span className="ml-1 min-w-0 flex-1 truncate rounded-md border border-[color:var(--hv-border)] bg-[color:var(--hv-ink)]/40 px-2.5 py-1 font-mono text-[10px] text-[color:var(--hv-fg-muted)] sm:text-[11px]">
            {pathLabel}
          </span>
        ) : (
          <span className="ml-1 h-5 flex-1 rounded-md border border-[color:var(--hv-border)] bg-[color:var(--hv-ink)]/30" aria-hidden />
        )}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
