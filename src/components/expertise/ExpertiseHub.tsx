"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import {
  expertiseHubCategories,
  expertiseHubSection,
  expertiseOrbitNodes,
  getExpertiseCategory,
} from "@data/expertise-hub";
import { TExpertiseOrbitNode } from "@type/Content";
import { Orbit } from "./Orbit";
import { ExpertisePanel } from "./ExpertisePanel";
import { SectionBridge } from "@components/ui/SectionBridge";
import { DataFlowOverlay } from "./DataFlowOverlay";

/**
 * Technology Ecosystem — interactive three-ring showcase.
 * Orbit box size is reserved via CSS breakpoints to avoid CLS.
 */
export default function ExpertiseHub() {
  const reduceMotion = Boolean(useReducedMotion());
  const searchParams = useSearchParams();
  const layoutRef = useRef<HTMLDivElement>(null);
  const orbitBoxRef = useRef<HTMLDivElement>(null);
  const orbitAnchorRef = useRef<HTMLDivElement>(null);
  const cardFrontendRef = useRef<HTMLElement>(null);
  const cardAiRef = useRef<HTMLElement>(null);
  const cardPlatformRef = useRef<HTMLElement>(null);
  const [orbitSize, setOrbitSize] = useState(390);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(
    expertiseOrbitNodes[0]?.id ?? null
  );
  const [categoryId, setCategoryId] = useState(
    expertiseOrbitNodes[0]?.categoryId ?? expertiseHubCategories[0].id
  );
  const [previewNode, setPreviewNode] = useState<TExpertiseOrbitNode | null>(
    null
  );
  const [urlSynced, setUrlSynced] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(!reduceMotion);
  const [rotationDuration, setRotationDuration] = useState(14);
  const architectureCardRefs = useMemo(
    () => ({
      frontend: cardFrontendRef,
      ai: cardAiRef,
      platform: cardPlatformRef,
    }),
    []
  );

  const syncUrl = useCallback((nextCategoryId: string, nextNodeId?: string | null) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("tech", nextCategoryId);
    if (nextNodeId) url.searchParams.set("node", nextNodeId);
    else url.searchParams.delete("node");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }, []);

  useEffect(() => {
    if (urlSynced) return;
    const tech = searchParams.get("tech");
    const node = searchParams.get("node");

    if (node) {
      const match = expertiseOrbitNodes.find((item) => item.id === node);
      if (match) {
        setActiveNodeId(match.id);
        setCategoryId(match.categoryId);
        setUrlSynced(true);
        return;
      }
    }

    if (tech && getExpertiseCategory(tech)) {
      setCategoryId(tech);
      const first = expertiseOrbitNodes.find((item) => item.categoryId === tech);
      setActiveNodeId(first?.id ?? null);
    }

    setUrlSynced(true);
  }, [searchParams, urlSynced]);

  useEffect(() => {
    const el = orbitBoxRef.current;
    if (!el) return;

    const sync = () => {
      const width = Math.round(el.getBoundingClientRect().width);
      if (width > 0) setOrbitSize(width);
    };

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setMotionEnabled(false);
    }
  }, [reduceMotion]);

  const activeNode = useMemo(
    () => expertiseOrbitNodes.find((node) => node.id === activeNodeId) ?? null,
    [activeNodeId]
  );

  const displayedCategoryId = previewNode?.categoryId ?? categoryId;
  const displayedTechLabel =
    previewNode?.label ?? activeNode?.label ?? null;

  const category = useMemo(
    () =>
      getExpertiseCategory(displayedCategoryId) ?? expertiseHubCategories[0],
    [displayedCategoryId]
  );

  const selectNode = (node: TExpertiseOrbitNode) => {
    setActiveNodeId(node.id);
    setCategoryId(node.categoryId);
    setPreviewNode(null);
    syncUrl(node.categoryId, node.id);
  };

  const onPreview = (node: TExpertiseOrbitNode | null) => {
    setPreviewNode(node);
  };

  const selectCategory = (id: string) => {
    setCategoryId(id);
    setPreviewNode(null);
    const first = expertiseOrbitNodes.find((node) => node.categoryId === id);
    setActiveNodeId(first?.id ?? null);
    syncUrl(id, first?.id ?? null);
  };

  return (
    <section
      id="technology-ecosystem"
      className="cv-auto relative scroll-mt-24 overflow-hidden py-20 md:py-28"
      aria-labelledby="expertise-hub-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hv-section-wash"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 12% 35%, var(--hv-accent-dim), transparent 58%), radial-gradient(ellipse 42% 38% at 92% 18%, var(--hv-cyan-dim), transparent 55%), linear-gradient(180deg, transparent, color-mix(in srgb, var(--hv-ink) 35%, transparent))",
        }}
      />

      <Container className="relative z-10">
        <SectionHeading
          titleId="expertise-hub-heading"
          eyebrow={expertiseHubSection.eyebrow}
          title={expertiseHubSection.title}
          description={expertiseHubSection.description}
        />

        <div
          ref={layoutRef}
          className="relative mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16"
        >
          <DataFlowOverlay
            containerRef={layoutRef}
            orbitRef={orbitAnchorRef}
            cardRefs={architectureCardRefs}
            activeCategoryId={displayedCategoryId}
            motionEnabled={motionEnabled}
            reduceMotion={reduceMotion}
          />
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setMotionEnabled((prev) => !prev)}
                className={`rounded-xl border px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  motionEnabled
                    ? "border-accent/40 bg-accent/12 text-[color:var(--hv-fg)]"
                    : "border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] text-[color:var(--hv-fg-muted)] hover:border-accent/30 hover:text-[color:var(--hv-fg)]"
                }`}
              >
                {motionEnabled ? "Pause orbit motion" : "Resume orbit motion"}
              </button>

              <button
                type="button"
                onClick={() => setRotationDuration(10)}
                className={`rounded-lg border px-2.5 py-1.5 text-[11px] transition-colors ${
                  rotationDuration === 10
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-[color:var(--hv-border)] text-[color:var(--hv-fg-muted)] hover:border-accent/30 hover:text-[color:var(--hv-fg)]"
                }`}
              >
                Fast
              </button>
              <button
                type="button"
                onClick={() => setRotationDuration(14)}
                className={`rounded-lg border px-2.5 py-1.5 text-[11px] transition-colors ${
                  rotationDuration === 14
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-[color:var(--hv-border)] text-[color:var(--hv-fg-muted)] hover:border-accent/30 hover:text-[color:var(--hv-fg)]"
                }`}
              >
                Balanced
              </button>
              <button
                type="button"
                onClick={() => setRotationDuration(20)}
                className={`rounded-lg border px-2.5 py-1.5 text-[11px] transition-colors ${
                  rotationDuration === 20
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-[color:var(--hv-border)] text-[color:var(--hv-fg-muted)] hover:border-accent/30 hover:text-[color:var(--hv-fg)]"
                }`}
              >
                Slow
              </button>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div ref={orbitAnchorRef} className="relative z-10">
                <div
                  ref={orbitBoxRef}
                  className="aspect-square w-[310px] shrink-0 sm:w-[390px] lg:w-[460px] xl:w-[520px]"
                >
                  <Orbit
                    nodes={expertiseOrbitNodes}
                    activeNodeId={activeNodeId}
                    highlightNodeId={previewNode?.id ?? activeNodeId}
                    reduceMotion={reduceMotion}
                    motionEnabled={motionEnabled}
                    rotationDuration={rotationDuration}
                    onSelect={selectNode}
                    onPreview={onPreview}
                    size={orbitSize}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 min-w-0">
            <ExpertisePanel
              category={category}
              activeTechLabel={displayedTechLabel}
              reduceMotion={reduceMotion}
              onSelectCategory={selectCategory}
            />
            <SectionBridge
              className="mt-6"
              hint="See how those capabilities show up in shipped work."
              label="View selected work"
              href="#work"
            />
            <p className="mt-3 text-sm text-muted">
              Prefer the full archive?{" "}
              <Link
                href="/projects"
                className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Browse all projects
              </Link>
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {expertiseHubCategories.map((item) => (
                <article
                  key={`architecture-${item.id}`}
                  ref={
                    item.id === "frontend"
                      ? cardFrontendRef
                      : item.id === "ai"
                        ? cardAiRef
                        : cardPlatformRef
                  }
                  className={`rounded-xl border p-3.5 backdrop-blur-md ${
                    displayedCategoryId === item.id
                      ? "border-accent/40 bg-accent/[0.08] shadow-[var(--hv-shadow-md)]"
                      : "border-[color:var(--hv-border)] bg-[color:var(--hv-surface-elevated)]"
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--hv-fg-muted)]">
                    Architecture Blueprint
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--hv-fg-secondary)]">
                    {item.capabilities.slice(0, 2).join(" + ")}
                  </p>
                  <p className="mt-2 text-[11px] text-[color:var(--hv-fg-muted)]">
                    {item.technologies.slice(0, 2).join(" / ")}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="rounded-md border border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[color:var(--hv-fg-muted)]">
                      Ingress
                    </span>
                    <span className="rounded-md border border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[color:var(--hv-fg-muted)]">
                      Processing
                    </span>
                    <span className="rounded-md border border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[color:var(--hv-fg-muted)]">
                      Delivery
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-[color:var(--hv-border-strong)] bg-[color:var(--hv-surface-elevated)] p-4 shadow-[var(--hv-shadow-sm)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                Architecture Principles
              </p>
              <ul className="mt-3 grid gap-2 text-xs text-[color:var(--hv-fg-secondary)] sm:grid-cols-2">
                <li className="rounded-lg border border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] px-3 py-2">
                  Domain-first boundaries with typed contracts between layers
                </li>
                <li className="rounded-lg border border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] px-3 py-2">
                  Event-ready flows for automation, observability, and retries
                </li>
                <li className="rounded-lg border border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] px-3 py-2">
                  Progressive enhancement from MVP to production architecture
                </li>
                <li className="rounded-lg border border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] px-3 py-2">
                  Security-aware defaults across auth, data, and delivery paths
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
