"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { GlowBorder } from "@components/premium/GlowBorder";
import { TechBadge } from "@components/premium/TechBadge";
import { ProjectBadge } from "@components/premium/ProjectBadge";
import { profile } from "@data/profile";
import {
  expertiseArchitectureLayers,
  engineeringIntelligenceSection,
} from "@data/engineering-intelligence";
import { easeOutPremium, motionDuration } from "@lib/motion";

type Props = {
  active: boolean;
};

/**
 * Founder portrait in premium architecture frame — 4:5 crop for clear face visibility,
 * layered domain stack, and status badges that never obscure the subject.
 */
export function FounderArchitectureVisual({ active }: Props) {
  const reduce = Boolean(useReducedMotion());
  const badges = engineeringIntelligenceSection.badges;

  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-accent/15 blur-3xl motion-reduce:opacity-40"
      />

      <m.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={
          reduce
            ? { duration: 0.01 }
            : { duration: motionDuration.slow, ease: easeOutPremium }
        }
        className="relative"
      >
        <GlowBorder intensity="strong" rounded="3xl" className="shadow-[var(--hv-shadow-lg)]">
          <div className="relative overflow-hidden rounded-[1.7rem] bg-[color:var(--hv-surface)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={profile.avatarSrc}
                alt={profile.avatarAlt}
                fill
                priority
                decoding="async"
                className="object-cover object-[center_14%] brightness-[1.04] contrast-[1.06] saturate-[1.03]"
                sizes="(max-width: 1024px) 340px, 420px"
              />

              {/* Light edge lift — keeps face readable in dark UI */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-accent/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[color:var(--hv-bg)] via-[color:var(--hv-bg)]/55 to-transparent"
              />

              {/* Status rail — top, not over the face */}
              <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4 sm:p-5">
                {badges.map((badge) => (
                  <ProjectBadge
                    key={badge.id}
                    label={badge.label}
                    tone={badge.tone === "brand" ? "brand" : badge.tone === "accent" ? "accent" : "neutral"}
                    leading={badge.id === "available" ? "dot" : undefined}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 bg-[color:var(--hv-bg)]/70 p-4 backdrop-blur-xl sm:p-5">
              <p className="text-base font-semibold tracking-tight text-white sm:text-lg">
                {profile.name}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                Founder · {profile.brand}
              </p>
              <p className="mt-2 text-xs text-white/65 sm:text-sm">{profile.title}</p>
            </div>
          </div>
        </GlowBorder>
      </m.div>

      {/* Architecture domain stack */}
      <div className="relative mt-6 space-y-3">
        {expertiseArchitectureLayers.map((layer, index) => (
          <m.article
            key={layer.id}
            initial={reduce ? false : { opacity: 0, x: -12 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={
              reduce
                ? { duration: 0.01 }
                : {
                    delay: 0.12 + index * 0.08,
                    duration: motionDuration.base,
                    ease: easeOutPremium,
                  }
            }
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md sm:p-4"
            style={{
              boxShadow: `inset 3px 0 0 ${layer.accentColor}`,
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Layer {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{layer.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/65">
                  {layer.description}
                </p>
              </div>
              <span
                aria-hidden
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-black/25 text-[10px] font-semibold text-accent"
              >
                {layer.short}
              </span>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {layer.technologies.map((tech) => (
                <li key={tech}>
                  <TechBadge label={tech} size="sm" />
                </li>
              ))}
            </ul>
          </m.article>
        ))}
      </div>
    </div>
  );
}
