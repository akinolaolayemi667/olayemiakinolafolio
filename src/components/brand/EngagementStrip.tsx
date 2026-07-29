import { cx, type WithClassName } from "@components/premium/types";

type Step = {
  label: string;
  detail: string;
};

type Props = WithClassName & {
  title?: string;
  steps?: Step[];
  /** Stack steps vertically (narrow columns). */
  compact?: boolean;
};

/** Default engagement strip — mirrors published process language, no invented SLAs. */
const defaultSteps: Step[] = [
  {
    label: "Brief",
    detail: "Share goals, constraints, and what success looks like.",
  },
  {
    label: "Fit",
    detail: "Honest assessment of scope, stack, and engagement shape.",
  },
  {
    label: "Build",
    detail: "Architecture, delivery, deployment, and clear handoff.",
  },
];

/**
 * Compact engagement process — used on Connect / contact CTA surfaces.
 */
export function EngagementStrip({
  title = "How engagements start",
  steps = defaultSteps,
  compact = false,
  className = "",
}: Props) {
  return (
    <div className={cx("w-full", className)}>
      <p className="hv-eyebrow">{title}</p>
      <ol
        className={cx(
          "mt-5 grid list-none gap-3 p-0",
          compact ? "grid-cols-1" : "sm:grid-cols-3 sm:gap-4"
        )}
      >
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="hv-glass relative flex flex-col gap-2 p-4 sm:p-5"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {String(index + 1).padStart(2, "0")} · {step.label}
            </span>
            <p className="text-sm leading-relaxed text-[color:var(--hv-fg-secondary)]">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
