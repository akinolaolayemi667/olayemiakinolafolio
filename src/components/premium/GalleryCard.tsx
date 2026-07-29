"use client";

import Image from "next/image";
import { cx, type WithClassName } from "@components/premium/types";
import { MediaFrame } from "@components/brand/MediaFrame";

type Props = WithClassName & {
  src: string;
  alt: string;
  caption?: string;
  isPlaceholder?: boolean;
  placeholderLabel?: string;
  /** Enable lightbox data attributes for existing lightbox wiring. */
  lightbox?: boolean;
  priority?: boolean;
  sizes?: string;
};

/**
 * Case-study gallery tile — browser frame, zoom, optional caption.
 */
export function GalleryCard({
  src,
  alt,
  caption,
  isPlaceholder = false,
  placeholderLabel = "Screenshot forthcoming",
  lightbox = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
}: Props) {
  const media = (
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="hv-image-zoom object-cover object-center"
        sizes={sizes}
        unoptimized
        priority={priority}
      />
      {isPlaceholder ? (
        <span className="absolute bottom-3 left-3 rounded-md border border-[color:var(--hv-border)] bg-[color:var(--hv-ink)]/80 px-2.5 py-1 text-[11px] font-medium text-[color:var(--hv-fg-muted)] backdrop-blur-md">
          {placeholderLabel}
        </span>
      ) : (
        <span
          aria-hidden
          className="absolute right-3 top-3 rounded-md border border-[color:var(--hv-border)] bg-[color:var(--hv-ink)]/70 p-1.5 text-[color:var(--hv-fg-muted)] opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 3h6v6M10 14 11 9l10-10" />
          </svg>
        </span>
      )}
    </div>
  );

  return (
    <figure className={cx("group", className)}>
      <MediaFrame glow={false}>
        {lightbox ? (
          <button
            type="button"
            data-lightbox-src={src}
            data-lightbox-alt={alt}
            className="relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            aria-label={`View full size: ${alt}`}
          >
            {media}
          </button>
        ) : (
          media
        )}
      </MediaFrame>
      {caption || alt ? (
        <figcaption className="mt-3 px-1 text-xs leading-relaxed text-[color:var(--hv-fg-muted)] sm:text-sm">
          {caption ?? alt}
        </figcaption>
      ) : null}
    </figure>
  );
}
