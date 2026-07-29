import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  /** Grid cell size in px. */
  cellSize?: number;
  opacity?: number;
  /** Perspective tilt for depth. */
  perspective?: boolean;
  /** Slow pan animation. */
  animate?: boolean;
};

/**
 * Decorative floating / perspective grid plane.
 */
export function FloatingGrid({
  cellSize = 56,
  opacity = 0.08,
  perspective = true,
  animate = true,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden
      className={cx(
        "pointer-events-none absolute inset-0 z-[1] overflow-hidden motion-reduce:hidden",
        className
      )}
      style={{ opacity }}
    >
      <div
        className={cx(
          "absolute -inset-x-[20%] bottom-[-10%] top-[8%]",
          animate && "motion-safe:animate-[gridPan_28s_linear_infinite]"
        )}
        style={{
          backgroundImage:
            "linear-gradient(var(--hv-accent-mid) 1px, transparent 1px), linear-gradient(90deg, var(--hv-accent-mid) 1px, transparent 1px)",
          backgroundSize: `${cellSize}px ${cellSize}px`,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 70%, transparent 100%)",
          transform: perspective
            ? "perspective(720px) rotateX(62deg) scale(1.55)"
            : undefined,
          transformOrigin: "50% 0%",
        }}
      />
    </div>
  );
}
