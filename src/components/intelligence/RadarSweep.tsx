"use client";

type Props = {
  reduceMotion: boolean;
  active: boolean;
};

/**
 * Soft radar sweep — low opacity, paused when inactive.
 */
export function RadarSweep({ reduceMotion, active }: Props) {
  if (reduceMotion || !active) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-[-8%] overflow-hidden rounded-full"
    >
      <div
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 animate-[spin_9s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 310deg, rgba(20,184,166,0.14) 335deg, transparent 360deg)",
          opacity: 0.55,
        }}
      />
    </div>
  );
}
