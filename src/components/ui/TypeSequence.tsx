"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  active: boolean;
  /** ms per character */
  charMs?: number;
  className?: string;
  onComplete?: () => void;
};

/**
 * One-shot typing line. Skips instantly when reduced motion is preferred.
 */
export function TypeSequence({
  text,
  active,
  charMs = 28,
  className = "",
  onComplete,
}: Props) {
  const reduceMotion = Boolean(useReducedMotion());
  const [shown, setShown] = useState(reduceMotion ? text : "");
  const [done, setDone] = useState(reduceMotion);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!active) return;

    if (reduceMotion) {
      setShown(text);
      setDone(true);
      onCompleteRef.current?.();
      return;
    }

    setShown("");
    setDone(false);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
        setDone(true);
        onCompleteRef.current?.();
      }
    }, charMs);

    return () => window.clearInterval(id);
  }, [active, text, charMs, reduceMotion]);

  return (
    <p className={className} aria-live="polite">
      <span className="font-mono text-sm text-accent/90 md:text-[0.95rem]">
        {shown}
      </span>
      {!done ? (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-accent/80"
        />
      ) : null}
    </p>
  );
}
