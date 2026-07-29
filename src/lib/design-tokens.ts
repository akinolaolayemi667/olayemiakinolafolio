/**
 * Design-system token map for JS consumers (docs, story tooling, runtime).
 * Source of truth remains CSS variables in `src/styles/design-tokens.css`.
 */
export const designTokens = {
  color: {
    ink: "var(--hv-ink)",
    surface: "var(--hv-surface)",
    surfaceElevated: "var(--hv-surface-elevated)",
    fg: "var(--hv-fg)",
    muted: "var(--hv-fg-muted)",
    accent: "var(--hv-accent)",
    cyan: "var(--hv-cyan)",
    border: "var(--hv-border)",
  },
  radius: {
    sm: "var(--hv-radius-sm)",
    md: "var(--hv-radius-md)",
    lg: "var(--hv-radius-lg)",
    xl: "var(--hv-radius-xl)",
    "2xl": "var(--hv-radius-2xl)",
    "3xl": "var(--hv-radius-3xl)",
  },
  shadow: {
    sm: "var(--hv-shadow-sm)",
    md: "var(--hv-shadow-md)",
    lg: "var(--hv-shadow-lg)",
    glow: "var(--hv-shadow-glow)",
  },
  motion: {
    ease: "var(--hv-ease-out)",
    fast: "var(--hv-duration-fast)",
    base: "var(--hv-duration-base)",
    slow: "var(--hv-duration-slow)",
  },
  space: {
    section: "var(--hv-section-y)",
    stack: "var(--hv-stack-gap)",
  },
} as const;
