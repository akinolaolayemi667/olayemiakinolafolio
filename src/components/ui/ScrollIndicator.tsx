import Link from "next/link";

/** Animated scroll cue — premium engineering landing indicator. */
export function ScrollIndicator() {
  return (
    <Link
      href="/#work"
      className="group absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[color:var(--hv-fg-muted)] transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      aria-label="Scroll to case studies"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] opacity-70 transition-opacity group-hover:opacity-100">
        Scroll
      </span>
      <span
        aria-hidden
        className="flex h-11 w-6 items-start justify-center rounded-full border border-[color:var(--hv-border-strong)] bg-[color:var(--hv-glass-bg)] p-1.5 shadow-[var(--hv-shadow-sm)] backdrop-blur-md motion-safe:animate-[scrollBounce_2s_ease-in-out_infinite]"
      >
        <span className="h-1.5 w-1 rounded-full bg-accent shadow-[0_0_8px_var(--hv-glow-accent)]" />
      </span>
    </Link>
  );
}
