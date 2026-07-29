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

/**
 * Technology Ecosystem — interactive three-ring showcase.
 * Orbit box size is reserved via CSS breakpoints to avoid CLS.
 */
export default function ExpertiseHub() {
  const reduceMotion = Boolean(useReducedMotion());
  const searchParams = useSearchParams();
  const orbitBoxRef = useRef<HTMLDivElement>(null);
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
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 12% 35%, rgba(20,184,166,0.1), transparent 58%), radial-gradient(ellipse 42% 38% at 92% 18%, rgba(45,212,191,0.06), transparent 55%), linear-gradient(180deg, transparent, rgba(14,18,24,0.35))",
        }}
      />

      <Container className="relative z-10">
        <SectionHeading
          titleId="expertise-hub-heading"
          eyebrow={expertiseHubSection.eyebrow}
          title={expertiseHubSection.title}
          description={expertiseHubSection.description}
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <div className="flex justify-center lg:justify-start">
            <div
              ref={orbitBoxRef}
              className="aspect-square w-[310px] shrink-0 sm:w-[390px] lg:w-[460px] xl:w-[520px]"
            >
              <Orbit
                nodes={expertiseOrbitNodes}
                activeNodeId={activeNodeId}
                highlightNodeId={previewNode?.id ?? activeNodeId}
                reduceMotion={reduceMotion}
                onSelect={selectNode}
                onPreview={onPreview}
                size={orbitSize}
              />
            </div>
          </div>

          <div className="min-w-0">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
