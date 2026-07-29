"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { TProjectGalleryItem } from "@type/Project";

type Props = {
  items: TProjectGalleryItem[];
  children: React.ReactNode;
};

/** Full-screen gallery lightbox — activates on prepared gallery buttons. */
export function GalleryLightbox({ items, children }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") {
        setActiveIndex((i) =>
          i === null ? null : (i + 1) % items.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + items.length) % items.length
        );
      }
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, items.length]);

  function openFromEvent(event: React.MouseEvent | React.KeyboardEvent) {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("button[data-lightbox-src]");
    if (!button) return;
    const src = button.dataset.lightboxSrc;
    const index = items.findIndex((item) => item.src === src);
    if (index >= 0) setActiveIndex(index);
  }

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div
        onClick={openFromEvent}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") openFromEvent(event);
        }}
      >
        {children}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md motion-safe:animate-[fadeUp_0.2s_ease-out]"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-surface/80 text-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close gallery"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) =>
                    i === null ? null : (i - 1 + items.length) % items.length
                  );
                }}
                className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-surface/80 text-white hover:text-accent sm:flex"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) =>
                    i === null ? null : (i + 1) % items.length
                  );
                }}
                className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-surface/80 text-white hover:text-accent sm:flex"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          ) : null}

          <div
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="100vw"
                unoptimized
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted">{active.alt}</p>
            {items.length > 1 ? (
              <p className="mt-1 text-center text-xs text-white/50">
                {(activeIndex ?? 0) + 1} / {items.length}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
