"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { profile } from "@data/profile";
import { TIntelligenceBadge } from "@type/Content";
import { ScanRings } from "./ScanRings";
import { RadarSweep } from "./RadarSweep";
import { StatusBadges } from "./StatusBadges";
import { easeOutPremium } from "@lib/motion";

type Props = {
  badges: TIntelligenceBadge[];
  reduceMotion: boolean;
  active: boolean;
};

/**
 * Portrait with restrained scan frame — premium, not neon HUD.
 */
export function PortraitScan({ badges, reduceMotion, active }: Props) {
  return (
    <div className="relative mx-auto flex w-full max-w-[22rem] flex-col items-center sm:max-w-[24rem] lg:max-w-[26rem]">
      <div className="relative aspect-square w-[78%] max-w-[19rem]">
        <ScanRings reduceMotion={reduceMotion || !active} />
        <RadarSweep reduceMotion={reduceMotion} active={active} />

        <m.div
          className="absolute inset-[8%] overflow-hidden rounded-full border border-white/15 bg-ink shadow-[0_0_36px_rgba(20,184,166,0.16)]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={
            active
              ? {
                  opacity: 1,
                  scale: 1,
                  boxShadow: reduceMotion
                    ? "0 0 36px rgba(20,184,166,0.16)"
                    : [
                        "0 0 28px rgba(20,184,166,0.12)",
                        "0 0 40px rgba(20,184,166,0.2)",
                        "0 0 28px rgba(20,184,166,0.12)",
                      ],
                }
              : { opacity: 0, scale: 0.98 }
          }
          transition={
            reduceMotion
              ? { duration: 0.01 }
              : {
                  opacity: { duration: 0.65, ease: easeOutPremium },
                  scale: { duration: 0.65, ease: easeOutPremium },
                  boxShadow: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
        >
          <Image
            src={profile.avatarSrc}
            alt={profile.avatarAlt}
            fill
            decoding="async"
            className="object-cover object-center"
            sizes="(max-width: 640px) 240px, 304px"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
          />
        </m.div>
      </div>

      <StatusBadges
        badges={badges}
        reduceMotion={reduceMotion}
        visible={active}
      />
    </div>
  );
}
