"use client";

import { m } from "framer-motion";
import { StatusChip } from "@components/ui/StatusChip";
import { TIntelligenceBadge } from "@type/Content";
import { easeOutPremium } from "@lib/motion";

type Props = {
  badges: TIntelligenceBadge[];
  reduceMotion: boolean;
  visible: boolean;
};

const desktopSlots = [
  "lg:left-[0%] lg:top-[10%]",
  "lg:right-[-2%] lg:top-[20%]",
  "lg:left-[-4%] lg:bottom-[24%]",
  "lg:right-[2%] lg:bottom-[14%]",
];

/**
 * Status badges — subtle float, company-product restraint.
 */
export function StatusBadges({ badges, reduceMotion, visible }: Props) {
  return (
    <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:pointer-events-none lg:absolute lg:inset-0 lg:mt-0 lg:block">
      {badges.map((badge, index) => (
        <m.li
          key={badge.id}
          className={`lg:pointer-events-auto lg:absolute ${desktopSlots[index] ?? ""}`}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={
            visible
              ? {
                  opacity: 1,
                  y: reduceMotion ? 0 : [0, -2, 0],
                }
              : { opacity: 0, y: 6 }
          }
          transition={
            reduceMotion
              ? { duration: 0.01 }
              : {
                  opacity: {
                    delay: 0.3 + index * 0.08,
                    duration: 0.4,
                    ease: easeOutPremium,
                  },
                  y: {
                    delay: 0.8 + index * 0.12,
                    duration: 5 + index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
        >
          <StatusChip label={badge.label} tone={badge.tone ?? "neutral"} />
        </m.li>
      ))}
    </ul>
  );
}
