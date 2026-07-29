"use client";

type Props = {
  reduceMotion: boolean;
  className?: string;
};

/**
 * Concentric rings — slow counter-rotation for the portrait scan frame.
 */
export function ScanRings({ reduceMotion, className = "" }: Props) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <div
        className={`absolute inset-[-6%] rounded-full border border-accent/25 ${
          reduceMotion ? "" : "animate-[spin_36s_linear_infinite]"
        }`}
        style={{
          borderStyle: "dashed",
          animationDirection: "reverse",
        }}
      />
      <div
        className={`absolute inset-[-14%] rounded-full border border-accent/15 ${
          reduceMotion ? "" : "animate-[spin_48s_linear_infinite]"
        }`}
      />
      <div
        className={`absolute inset-[-22%] rounded-full border border-white/10 ${
          reduceMotion ? "" : "animate-[spin_64s_linear_infinite]"
        }`}
        style={{ animationDirection: "reverse" }}
      />
    </div>
  );
}
