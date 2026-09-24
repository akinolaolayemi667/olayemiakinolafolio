"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import { m, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Container } from "@components/ui/Container";
import { AvailabilityBadge } from "@components/ui/AvailabilityBadge";
import { ScrollIndicator } from "@components/ui/ScrollIndicator";
import { MagneticButton } from "@components/ui/MagneticButton";
import { HeroAtmosphere } from "@components/effects/HeroAtmosphere";
import { HeroSpotlight } from "@components/effects/HeroSpotlight";
import { FloatingGrid } from "@components/premium/FloatingGrid";
import { BrandMark } from "@components/brand/BrandMark";
import { HeroPortrait } from "@components/brand/HeroPortrait";
import { HeroStagger, HeroItem } from "@components/ui/Motion";
import { MotionProvider } from "@components/ui/MotionProvider";
import { HeroTypeLine } from "@components/Home/HeroTypeLine";
import { hero } from "@data/hero";
import { profile } from "@data/profile";
import { getSocial, isPublishableSocialUrl } from "@data/socials";

/** Premium engineering landing hero — brand + founder portrait. */
export default function HomeHero() {
  const reduce = Boolean(useReducedMotion());
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 42, damping: 18, mass: 0.35 });
  const sy = useSpring(my, { stiffness: 42, damping: 18, mass: 0.35 });
  const ix = useMotionValue(0);
  const iy = useMotionValue(0);
  const isx = useSpring(ix, { stiffness: 42, damping: 18, mass: 0.35 });
  const isy = useSpring(iy, { stiffness: 42, damping: 18, mass: 0.35 });

  useEffect(() => {
    const unsubX = sx.on("change", (v) => ix.set(-v * 0.55));
    const unsubY = sy.on("change", (v) => iy.set(-v * 0.55));
    return () => {
      unsubX();
      unsubY();
    };
  }, [sx, sy, ix, iy]);

  const github = getSocial("github");
  const linkedin = getSocial("linkedin");
  const showGitHub = isPublishableSocialUrl(github.url);
  const showLinkedIn = isPublishableSocialUrl(linkedin.url);
  const showResume = Boolean(profile.resumePath.trim());
  const trustPoints = hero.trustPoints.filter((point) => point.trim());

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    if (reduce || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px * 14);
    my.set(py * 10);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <MotionProvider>
      <section
        ref={sectionRef}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="relative flex min-h-[100svh] items-center overflow-hidden"
        aria-labelledby="home-hero-heading"
      >
        <HeroAtmosphere />
        <HeroSpotlight />
        <FloatingGrid opacity={0.06} cellSize={64} />

        <m.div
          aria-hidden
          className="pointer-events-none absolute -right-[8%] top-[14%] h-[32rem] w-[32rem] rounded-full bg-accent/[0.08] blur-[110px] motion-reduce:hidden"
          style={reduce ? undefined : { x: sx, y: sy }}
        />

        <Container className="relative z-10 py-24 sm:py-28 md:py-32 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
            <m.div style={reduce ? undefined : { x: sx, y: sy }}>
              <HeroStagger className="flex max-w-xl flex-col gap-7 md:gap-9 xl:max-w-2xl">
                <HeroItem>
                  <AvailabilityBadge />
                </HeroItem>

                <HeroItem>
                  <BrandMark size="hero" />
                </HeroItem>

                <HeroItem>
                  <div className="flex flex-col gap-5 md:gap-6">
                    <h1
                      id="home-hero-heading"
                      className="hv-heading-xl max-w-xl text-balance !text-[clamp(1.55rem,3.4vw,2.55rem)]"
                    >
                      {hero.headline}
                    </h1>
                    <p className="hv-body-lg max-w-lg">{hero.subheadline}</p>
                    <HeroTypeLine />
                  </div>
                </HeroItem>

                <HeroItem>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                      <MagneticButton href={hero.primaryHref} glow>
                        {hero.primaryCta}
                      </MagneticButton>
                      <MagneticButton
                        href={hero.secondaryHref}
                        variant="secondary"
                      >
                        {hero.secondaryCta}
                      </MagneticButton>
                    </div>

                    {trustPoints.length > 0 ? (
                      <ul
                        className="flex list-none flex-wrap gap-2 p-0"
                        aria-label="Trust points"
                      >
                        {trustPoints.map((point) => (
                          <li
                            key={point}
                            className="inline-flex items-center rounded-lg border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] px-3 py-1.5 text-xs font-medium tracking-wide text-[color:var(--hv-fg-secondary)] backdrop-blur-sm sm:text-[0.8125rem]"
                          >
                            <span
                              aria-hidden
                              className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(20,184,166,0.55)]"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="flex flex-wrap items-center gap-3">
                      {showGitHub ? (
                        <MagneticButton
                          href={github.url}
                          variant="ghost"
                          ariaLabel={github.label}
                        >
                          <GitHubIcon />
                          {github.label}
                        </MagneticButton>
                      ) : null}
                      {showLinkedIn ? (
                        <MagneticButton
                          href={linkedin.url}
                          variant="ghost"
                          ariaLabel={linkedin.label}
                        >
                          <LinkedInIcon />
                          {linkedin.label}
                        </MagneticButton>
                      ) : null}
                      {showResume ? (
                        <MagneticButton
                          href={profile.resumePath}
                          variant="ghost"
                          ariaLabel="Download resume"
                        >
                          <ResumeIcon />
                          Resume
                        </MagneticButton>
                      ) : null}
                    </div>
                  </div>
                </HeroItem>
              </HeroStagger>
            </m.div>

            <div className="relative flex justify-center lg:justify-end">
              <m.div
                style={reduce ? undefined : { x: isx, y: isy }}
                className="w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-[26rem]"
              >
                <HeroPortrait />
              </m.div>
            </div>
          </div>
        </Container>

        <ScrollIndicator />
      </section>
    </MotionProvider>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M14 3v6h6M8 13h8M8 17h5" />
    </svg>
  );
}
