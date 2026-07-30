"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { GlowBorder } from "@components/premium/GlowBorder";
import { easeOutPremium, motionDuration } from "@lib/motion";
import { profile } from "@data/profile";
import { cx } from "@components/premium/types";

type Props = {
  className?: string;
};

/**
 * Premium founder portrait for the home hero — glow frame, glass caption, soft float.
 */
export function HeroPortrait({ className = "" }: Props) {
  const reduce = Boolean(useReducedMotion());

  return (
    <m.div
      className={cx("relative mx-auto w-full max-w-[26rem] lg:ml-auto lg:mr-0", className)}
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={
        reduce
          ? { duration: 0.01 }
          : { duration: motionDuration.slow, ease: easeOutPremium, delay: 0.18 }
      }
    >
      {/* Ambient glow stack */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/20 blur-3xl motion-reduce:opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-10 -z-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-2xl motion-reduce:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 bottom-16 -z-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl motion-reduce:hidden"
      />

      {/* Offset decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-3 top-8 hidden h-[88%] w-[92%] rounded-[1.85rem] border border-accent/20 sm:block"
      />

      <m.div
        animate={
          reduce
            ? undefined
            : {
                y: [0, -8, 0],
              }
        }
        transition={
          reduce
            ? undefined
            : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }
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
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 320px, 416px"
              />

              {/* Cinematic washes */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--hv-bg)] via-[color:var(--hv-bg)]/20 to-transparent opacity-90"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent opacity-70"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/25 to-transparent"
              />

              {/* Soft scan-line sheen */}
              {!reduce ? (
                <m.div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-white/10 to-transparent"
                  animate={{ top: ["-20%", "120%"] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3,
                  }}
                />
              ) : null}
            </div>

            {/* Glass identity caption */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <div className="rounded-2xl border border-white/10 bg-[color:var(--hv-bg)]/55 p-3.5 shadow-[var(--hv-shadow-md)] backdrop-blur-xl sm:p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold tracking-tight text-white sm:text-base">
                      {profile.name}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-accent sm:text-xs">
                      {profile.brand}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/70 sm:text-[13px]">
                      Founder · Full stack & AI automation
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/15 text-xs font-semibold text-accent shadow-[0_0_18px_rgba(20,184,166,0.25)]"
                  >
                    {profile.initials}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-[11px] text-white/55 sm:text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-60 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="truncate">{profile.location}</span>
                </div>
              </div>
            </div>
          </div>
        </GlowBorder>
      </m.div>
    </m.div>
  );
}
