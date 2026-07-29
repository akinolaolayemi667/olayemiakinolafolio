"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TProjectGalleryItem } from "@type/Project";

type Props = {
  item: TProjectGalleryItem;
};

/** Subtle parallax on case study hero media while scrolling. */
export function ProjectHeroParallax({ item }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    function onScroll() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      el.style.transform = `translateY(${progress * 24}px) scale(1.04)`;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 will-change-transform motion-reduce:transform-none">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        unoptimized
        priority
      />
    </div>
  );
}
