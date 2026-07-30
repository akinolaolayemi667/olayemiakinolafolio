"use client";

import { useEffect, useMemo, useState, type RefObject } from "react";
import { m } from "framer-motion";

type AnchorRefs = Record<string, RefObject<HTMLElement | null>>;

type LinkPath = {
  id: string;
  d: string;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
};

type Props = {
  containerRef: RefObject<HTMLElement | null>;
  orbitRef: RefObject<HTMLElement | null>;
  cardRefs: AnchorRefs;
  activeCategoryId: string;
  motionEnabled: boolean;
  reduceMotion: boolean;
};

const CATEGORY_TONE: Record<string, { base: string; glow: string; node: string }> = {
  frontend: {
    base: "rgba(34,211,238,0.45)",
    glow: "rgba(34,211,238,0.88)",
    node: "rgba(103,232,249,0.95)",
  },
  ai: {
    base: "rgba(45,212,191,0.45)",
    glow: "rgba(45,212,191,0.9)",
    node: "rgba(110,231,183,0.96)",
  },
  platform: {
    base: "rgba(20,184,166,0.45)",
    glow: "rgba(20,184,166,0.9)",
    node: "rgba(94,234,212,0.95)",
  },
};

/**
 * SVG overlay that renders animated architecture flow lines from the orbit
 * into each category blueprint card. Active category gets stronger emphasis.
 */
export function DataFlowOverlay({
  containerRef,
  orbitRef,
  cardRefs,
  activeCategoryId,
  motionEnabled,
  reduceMotion,
}: Props) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [paths, setPaths] = useState<LinkPath[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const compute = () => {
      const c = containerRef.current;
      const orbit = orbitRef.current;
      if (!c || !orbit) return;

      const cRect = c.getBoundingClientRect();
      const oRect = orbit.getBoundingClientRect();
      const nextSize = { width: Math.round(cRect.width), height: Math.round(cRect.height) };

      const fromX = oRect.right - cRect.left - 10;
      const fromY = oRect.top - cRect.top + oRect.height * 0.5;
      const nextPaths: LinkPath[] = [];

      for (const [id, ref] of Object.entries(cardRefs)) {
        const node = ref.current;
        if (!node) continue;
        const r = node.getBoundingClientRect();
        const toX = r.left - cRect.left + 10;
        const toY = r.top - cRect.top + r.height * 0.5;
        const cx1 = fromX + (toX - fromX) * 0.35;
        const cx2 = fromX + (toX - fromX) * 0.68;
        const d = `M ${fromX} ${fromY} C ${cx1} ${fromY}, ${cx2} ${toY}, ${toX} ${toY}`;
        nextPaths.push({ id, d, fromX, fromY, toX, toY });
      }

      setSize(nextSize);
      setPaths(nextPaths);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(container);
    if (orbitRef.current) ro.observe(orbitRef.current);
    Object.values(cardRefs).forEach((ref) => {
      if (ref.current) ro.observe(ref.current);
    });
    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [containerRef, orbitRef, cardRefs]);

  const showMotion = motionEnabled && !reduceMotion;
  const hasRenderableSize = size.width > 0 && size.height > 0;
  const renderedPaths = useMemo(() => paths.filter((p) => Boolean(p.d)), [paths]);

  if (!hasRenderableSize || renderedPaths.length === 0) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      aria-hidden
    >
      {renderedPaths.map((path) => {
        const active = path.id === activeCategoryId;
        const tone = CATEGORY_TONE[path.id] ?? CATEGORY_TONE.platform;
        const baseColor = active ? tone.base : "rgba(20,184,166,0.2)";
        const glowColor = active ? tone.glow : "rgba(56,189,248,0.55)";
        return (
          <g key={`flow-${path.id}`}>
            <path
              d={path.d}
              fill="none"
              stroke={baseColor}
              strokeWidth={active ? 2.3 : 1.4}
              strokeLinecap="round"
              strokeDasharray={active ? "10 8" : "7 9"}
            />
            {active ? (
              <path
                d={path.d}
                fill="none"
                stroke={tone.base}
                strokeWidth={6}
                strokeLinecap="round"
                filter="blur(2.4px)"
              />
            ) : null}

            {showMotion ? (
              <>
                <path id={`path-${path.id}`} d={path.d} fill="none" stroke="none" />
                <m.circle r={active ? 4.2 : 3.4} fill={glowColor}>
                  <animateMotion dur={active ? "2.4s" : "3.2s"} repeatCount="indefinite" rotate="auto">
                    <mpath href={`#path-${path.id}`} />
                  </animateMotion>
                </m.circle>
                <m.circle
                  cx={path.fromX}
                  cy={path.fromY}
                  r={active ? 4.4 : 3.4}
                  fill={tone.node}
                  animate={active ? { opacity: [0.35, 0.95, 0.35], scale: [1, 1.2, 1] } : { opacity: [0.18, 0.4, 0.18] }}
                  transition={{ duration: active ? 1.8 : 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <m.circle
                  cx={path.toX}
                  cy={path.toY}
                  r={active ? 4.8 : 3.6}
                  fill={tone.node}
                  animate={active ? { opacity: [0.4, 1, 0.4], scale: [1, 1.28, 1] } : { opacity: [0.15, 0.45, 0.15] }}
                  transition={{ duration: active ? 1.6 : 2.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </>
            ) : (
              <circle cx={path.fromX} cy={path.fromY} r={2.6} fill={glowColor} />
            )}
          </g>
        );
      })}
    </svg>
  );
}

