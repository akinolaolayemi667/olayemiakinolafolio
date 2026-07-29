"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { TExpertiseOrbitNode } from "@type/Content";
import { TechnologyIcon } from "./TechnologyIcon";
import { TechnologyTooltip } from "./TechnologyTooltip";
import { easeOutPremium, motionDuration } from "@lib/motion";

type Props = {
  node: TExpertiseOrbitNode;
  active: boolean;
  reduceMotion: boolean;
  onSelect: (node: TExpertiseOrbitNode) => void;
  onPreview: (node: TExpertiseOrbitNode | null) => void;
};

const CYAN = "#00E5FF";

/**
 * Dark circular badge with cyan border/glow and official SVG logo (no text).
 */
export function OrbitNode({
  node,
  active,
  reduceMotion,
  onSelect,
  onPreview,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const emphasized = active || hovered;

  return (
    <m.button
      type="button"
      aria-label={`${node.label}, show related expertise`}
      aria-pressed={active}
      className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 bg-[#07090c]/95 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:h-14 sm:w-14"
      style={{
        borderColor: emphasized ? CYAN : "rgba(0,229,255,0.55)",
        boxShadow: emphasized
          ? `0 0 0 1px rgba(0,229,255,0.35), 0 0 22px rgba(0,229,255,0.45)`
          : `0 0 14px rgba(0,229,255,0.22), 0 8px 24px rgba(0,0,0,0.45)`,
      }}
      initial={false}
      animate={{
        scale: emphasized ? 1.12 : 1,
      }}
      transition={
        reduceMotion
          ? { duration: 0.01 }
          : { duration: motionDuration.fast, ease: easeOutPremium }
      }
      whileHover={reduceMotion ? undefined : { scale: 1.14 }}
      onMouseEnter={() => {
        setHovered(true);
        onPreview(node);
      }}
      onMouseLeave={() => {
        setHovered(false);
        onPreview(null);
      }}
      onFocus={() => onPreview(node)}
      onBlur={() => onPreview(null)}
      onClick={() => onSelect(node)}
    >
      <TechnologyTooltip
        label={node.label}
        visible={hovered}
        reduceMotion={reduceMotion}
      >
        <span className="relative flex items-center justify-center">
          {active && !reduceMotion ? (
            <m.span
              aria-hidden
              className="absolute inset-[-8px] rounded-full border border-[#00E5FF]/40"
              animate={{ opacity: [0.25, 0.75, 0.25], scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ) : null}
          <TechnologyIcon label={node.label} icon={node.icon} size="sm" />
        </span>
      </TechnologyTooltip>
    </m.button>
  );
}
