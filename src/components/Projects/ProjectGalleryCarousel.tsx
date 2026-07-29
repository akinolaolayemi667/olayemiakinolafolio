"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TProjectGalleryItem } from "@type/Project";

type Props = {
  items: TProjectGalleryItem[];
  className?: string;
  sizes?: string;
};

/** Crossfades gallery images on hover when multiple screenshots exist. */
export function ProjectGalleryCarousel({
  items,
  className = "object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: Props) {
  const realItems = items.filter((item) => !item.isPlaceholder);
  const slides = realItems.length > 0 ? realItems : items;
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function startCycle() {
    if (slides.length <= 1) return;
    stopCycle();
    intervalRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 900);
  }

  function stopCycle() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIndex(0);
  }

  useEffect(() => () => stopCycle(), []);

  const active = slides[index] ?? slides[0];

  if (!active) return null;

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={startCycle}
      onMouseLeave={stopCycle}
      onFocus={startCycle}
      onBlur={stopCycle}
    >
      {slides.map((item, i) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          fill
          className={`${className} ${
            i === index ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 motion-reduce:transition-none`}
          sizes={sizes}
          unoptimized
        />
      ))}
      {slides.length > 1 ? (
        <span className="absolute right-3 top-3 rounded-md border border-white/15 bg-ink/70 px-2 py-0.5 text-[10px] text-white/70 backdrop-blur-md">
          {index + 1}/{slides.length}
        </span>
      ) : null}
    </div>
  );
}
