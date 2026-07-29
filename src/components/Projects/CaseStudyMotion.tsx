"use client";

import { ReactNode } from "react";
import { MotionProvider } from "@components/ui/MotionProvider";

/** Framer Motion tree for case study pages (scroll reveal / stagger). */
export function CaseStudyMotion({ children }: { children: ReactNode }) {
  return <MotionProvider>{children}</MotionProvider>;
}
