import { profile } from "@data/profile";

/** Pulsing availability indicator — design-system chip language. */
export function AvailabilityBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border border-[color:var(--hv-border-accent)] bg-[color:var(--hv-accent-dim)] px-3.5 py-1.5 text-[length:var(--hv-text-sm)] font-medium text-accent backdrop-blur-sm ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          aria-hidden
          className="motion-safe-ping absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"
        />
        <span
          aria-hidden
          className="relative inline-flex h-2 w-2 rounded-full bg-accent"
        />
      </span>
      <span>{profile.availability}</span>
    </div>
  );
}
