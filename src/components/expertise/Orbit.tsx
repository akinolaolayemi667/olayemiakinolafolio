"use client";

import { m } from "framer-motion";
import { TExpertiseOrbitNode } from "@type/Content";
import { OrbitNode } from "./OrbitNode";
import { ReactLogo } from "./techLogos";

type Props = {
  nodes: TExpertiseOrbitNode[];
  activeNodeId: string | null;
  /** Node currently emphasized (selection or hover preview). */
  highlightNodeId: string | null;
  reduceMotion: boolean;
  onSelect: (node: TExpertiseOrbitNode) => void;
  onPreview: (node: TExpertiseOrbitNode | null) => void;
  size: number;
};

const CYAN = "#00E5FF";
const PURPLE = "#C084FC";
const ORBIT_DURATION = 24;

type PositionedNode = TExpertiseOrbitNode & {
  angleDeg: number;
  x: number;
  y: number;
};

function positionOnOrbit(
  list: TExpertiseOrbitNode[],
  radius: number,
  offsetDeg = -90
): PositionedNode[] {
  if (list.length === 0) return [];
  return list.map((node, index) => {
    const angleDeg = (360 / list.length) * index + offsetDeg;
    const rad = (angleDeg * Math.PI) / 180;
    return {
      ...node,
      angleDeg,
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
    };
  });
}

/**
 * Concentric glowing orbit — React core, cyan arcs, purple dashed ring,
 * official SVG tech logos on the outer path.
 */
export function Orbit({
  nodes,
  activeNodeId,
  highlightNodeId,
  reduceMotion,
  onSelect,
  onPreview,
  size,
}: Props) {
  const rInner = size * 0.18;
  const rMid = size * 0.3;
  const rOuter = size * 0.42;
  const center = size / 2;
  const positioned = positionOnOrbit(nodes, rOuter);
  const active = positioned.find((node) => node.id === activeNodeId);
  const emphasizedId = highlightNodeId ?? activeNodeId;

  const orbitSpin = {
    duration: ORBIT_DURATION,
    repeat: Infinity,
    ease: "linear" as const,
  };

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size }}
      role="group"
      aria-label="Engineering expertise technology orbit"
    >
      {/* Ambient cyan core glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[8%] rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(0,229,255,0.28), rgba(0,229,255,0.08) 42%, transparent 68%)`,
          filter: "blur(2px)",
        }}
      />

      {/* Three concentric rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: rInner * 2,
          height: rInner * 2,
          boxShadow: `0 0 24px rgba(0,229,255,0.25), inset 0 0 18px rgba(0,229,255,0.12)`,
          border: `1px solid rgba(0,229,255,0.35)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
        style={{
          width: rMid * 2,
          height: rMid * 2,
          borderColor: `${PURPLE}99`,
          boxShadow: `0 0 18px rgba(192,132,252,0.18)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: rOuter * 2,
          height: rOuter * 2,
          border: `1px solid rgba(0,229,255,0.22)`,
          boxShadow: `0 0 28px rgba(0,229,255,0.12)`,
        }}
      />

      {/* Animated cyan progress arcs around center ring */}
      <svg
        className="pointer-events-none absolute inset-0"
        width={size}
        height={size}
        aria-hidden
      >
        <defs>
          <linearGradient id="orbitArcCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={CYAN} stopOpacity="0" />
            <stop offset="45%" stopColor={CYAN} stopOpacity="0.95" />
            <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
          </linearGradient>
        </defs>
        {!reduceMotion ? (
          <m.g
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${center}px ${center}px` }}
          >
            <circle
              cx={center}
              cy={center}
              r={rInner}
              fill="none"
              stroke="url(#orbitArcCyan)"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeDasharray={`${Math.PI * rInner * 0.28} ${Math.PI * rInner * 1.72}`}
              style={{
                filter: `drop-shadow(0 0 6px ${CYAN})`,
              }}
            />
          </m.g>
        ) : (
          <circle
            cx={center}
            cy={center}
            r={rInner}
            fill="none"
            stroke={CYAN}
            strokeOpacity={0.35}
            strokeWidth={2}
            strokeDasharray={`${Math.PI * rInner * 0.22} ${Math.PI * rInner * 1.78}`}
          />
        )}
        {!reduceMotion ? (
          <m.g
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${center}px ${center}px` }}
          >
            <circle
              cx={center}
              cy={center}
              r={rMid}
              fill="none"
              stroke="url(#orbitArcCyan)"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeDasharray={`${Math.PI * rMid * 0.18} ${Math.PI * rMid * 1.82}`}
              style={{
                filter: `drop-shadow(0 0 4px ${CYAN})`,
                opacity: 0.7,
              }}
            />
          </m.g>
        ) : null}
      </svg>

      {/* Rotating outer orbit + nodes */}
      <m.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={reduceMotion ? undefined : orbitSpin}
      >
        <svg
          className="pointer-events-none absolute inset-0"
          width={size}
          height={size}
          aria-hidden
        >
          {/* Faint orbit path under nodes */}
          <circle
            cx={center}
            cy={center}
            r={rOuter}
            fill="none"
            stroke={CYAN}
            strokeOpacity={0.14}
            strokeWidth={1}
          />
          {positioned.map((node) => {
            const isActive = node.id === emphasizedId;
            return (
              <line
                key={`spoke-${node.id}`}
                x1={center}
                y1={center}
                x2={center + node.x}
                y2={center + node.y}
                stroke={
                  isActive ? "rgba(0,229,255,0.45)" : "rgba(0,229,255,0.08)"
                }
                strokeWidth={isActive ? 1.25 : 0.75}
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {positioned.map((node) => (
          <div
            key={node.id}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(calc(-50% + ${node.x}px), calc(-50% + ${node.y}px))`,
            }}
          >
            {/* Counter-rotate so logos stay upright while the orbit spins */}
            <m.div
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={reduceMotion ? undefined : orbitSpin}
            >
              <OrbitNode
                node={node}
                active={activeNodeId === node.id}
                reduceMotion={reduceMotion}
                onSelect={onSelect}
                onPreview={onPreview}
              />
            </m.div>
          </div>
        ))}
      </m.div>

      {/* Glowing React core */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-[4.75rem] w-[4.75rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[5.75rem] sm:w-[5.75rem]">
        {!reduceMotion ? (
          <m.span
            aria-hidden
            className="absolute inset-[-10px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(0,229,255,0.35), transparent 70%)`,
            }}
            animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.06, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : (
          <span
            aria-hidden
            className="absolute inset-[-10px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(0,229,255,0.28), transparent 70%)`,
            }}
          />
        )}

        <div
          className="relative flex h-full w-full items-center justify-center rounded-full border-2 bg-[#07090c]/95 backdrop-blur-md"
          style={{
            borderColor: "rgba(0,229,255,0.65)",
            boxShadow: `0 0 0 1px rgba(0,229,255,0.2), 0 0 36px rgba(0,229,255,0.4), inset 0 0 24px rgba(0,229,255,0.08)`,
          }}
        >
          <ReactLogo className="h-8 w-8 sm:h-10 sm:w-10" title="React" />
          {!reduceMotion ? (
            <m.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{ background: "rgba(0,229,255,0.08)" }}
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ) : null}
        </div>
      </div>

      <span className="sr-only">
        {active
          ? `Selected technology: ${active.label}`
          : "No technology selected"}
      </span>
    </div>
  );
}
