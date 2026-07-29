import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  /** Placement mode. */
  variant?: "fixed" | "absolute";
  /** Orb density. */
  intensity?: "soft" | "medium" | "strong";
};

const intensityOrb = {
  soft: ["bg-accent/[0.05]", "bg-cyan-400/[0.04]", "bg-teal-500/[0.035]"],
  medium: ["bg-accent/[0.07]", "bg-cyan-400/[0.06]", "bg-teal-500/[0.05]"],
  strong: ["bg-accent/[0.1]", "bg-cyan-400/[0.08]", "bg-teal-500/[0.07]"],
} as const;

/**
 * Floating ambient orbs — CSS-only, hidden under reduced motion.
 */
export function AnimatedBackground({
  variant = "fixed",
  intensity = "medium",
  className = "",
}: Props) {
  const [a, b, c] = intensityOrb[intensity];

  return (
    <div
      aria-hidden
      className={cx(
        "pointer-events-none inset-0 overflow-hidden motion-reduce:hidden",
        variant === "fixed" ? "fixed -z-10" : "absolute z-0",
        className
      )}
    >
      <div
        className={cx(
          "hv-float-orb hv-float-orb-a absolute -left-[10%] top-[12%] h-[28rem] w-[28rem] rounded-full blur-[100px]",
          a
        )}
      />
      <div
        className={cx(
          "hv-float-orb hv-float-orb-b absolute -right-[8%] top-[42%] h-[22rem] w-[22rem] rounded-full blur-[90px]",
          b
        )}
      />
      <div
        className={cx(
          "hv-float-orb hv-float-orb-c absolute bottom-[6%] left-[32%] h-[18rem] w-[18rem] rounded-full blur-[80px]",
          c
        )}
      />
    </div>
  );
}
