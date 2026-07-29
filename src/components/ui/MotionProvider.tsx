"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

/** Single Framer feature load for the homepage motion tree. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
