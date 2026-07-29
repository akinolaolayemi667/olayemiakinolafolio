import type { Config } from "tailwindcss";

/**
 * Tailwind extends the HOLASVISION design tokens (CSS variables).
 * Prefer token-backed colors / radii — keep hex out of components.
 */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      maxWidth: {
        container: "var(--hv-container)",
        prose: "var(--hv-prose)",
      },
      spacing: {
        section: "var(--hv-section-y)",
        "section-sm": "var(--hv-section-y-sm)",
        stack: "var(--hv-stack-gap)",
      },
      borderRadius: {
        hv: "var(--hv-radius-lg)",
        "hv-sm": "var(--hv-radius-sm)",
        "hv-md": "var(--hv-radius-md)",
        "hv-lg": "var(--hv-radius-lg)",
        "hv-xl": "var(--hv-radius-xl)",
        "hv-2xl": "var(--hv-radius-2xl)",
        "hv-3xl": "var(--hv-radius-3xl)",
      },
      boxShadow: {
        "hv-sm": "var(--hv-shadow-sm)",
        "hv-md": "var(--hv-shadow-md)",
        "hv-lg": "var(--hv-shadow-lg)",
        "hv-xl": "var(--hv-shadow-xl)",
        "hv-glow": "var(--hv-shadow-glow)",
      },
      transitionTimingFunction: {
        hv: "var(--hv-ease-out)",
      },
      transitionDuration: {
        hv: "var(--hv-duration-base)",
        "hv-fast": "var(--hv-duration-fast)",
        "hv-slow": "var(--hv-duration-slow)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--hv-surface-elevated)",
        secondary: "var(--hv-fg-muted)",
        accent: "var(--hv-accent)",
        highlight: "var(--hv-accent-hover)",
        "neon-cyan": "var(--hv-accent)",
        "neon-purple": "var(--hv-cyan)",
        "deep-bg": "var(--hv-ink)",
        ink: "var(--hv-ink)",
        surface: "var(--hv-surface)",
        "surface-elevated": "var(--hv-surface-elevated)",
        muted: "var(--hv-fg-muted)",
        cyan: "var(--hv-cyan)",
      },
      animation: {
        changewidth: "width 2s ease-in-out infinite",
        spin: "spin 15s linear infinite",
        absoluteright: "absoluteright 4s ease-in infinite",
        translateright: "translateright 1.5s ease-in-out infinite",
        animatepingslow: "ping 5s cubic-bezier(0, 0, 0.2, 1) infinite",
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 1s ease-out",
        "glow-pulse": "glow-pulse 2s infinite alternate",
        "neon-flicker": "neon-flicker 1.5s infinite alternate",
        "scan-fast": "scan-fast 2s linear infinite",
        "spin-slow": "spin 15s linear infinite",
        "spin-reverse-slow": "spin-reverse 15s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        width: {
          "0%, 100%": { width: "20px" },
          "50%": { width: "40%" },
        },
        absoluteright: {
          "0%,100%": {
            right: "0px",
          },
          "50%": {
            right: "-30px",
          },
        },
        translateright: {
          "0%,100%": {
            "margin-left": "0px",
          },
          "50%": {
            "margin-left": "20px",
          },
        },
        ping: {
          "75%,100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        "glow-pulse": {
          "0%": { boxShadow: "0 0 5px #00f3ff, 0 0 10px #00f3ff" },
          "100%": { boxShadow: "0 0 20px #00f3ff, 0 0 40px #00f3ff" },
        },
        "neon-flicker": {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.5" },
        },
        wiggle: {
          "0%": { transform: "skewX(9deg)" },
          "10%": { transform: "skewX(-8deg)" },
          "20%": { transform: "skewX(7deg)" },
          "30%": { transform: "skewX(-6deg)" },
          "40%": { transform: "skewX(5deg)" },
          "50%": { transform: "skewX(-4deg)" },
          "60%": { transform: "skewX(3deg)" },
          "70%": { transform: "skewX(-2deg)" },
          "80%": { transform: "skewX(1deg)" },
          "90%": { transform: "skewX(0deg)" },
          "100%": { transform: "skewX(0deg)" },
        },
        "scan-fast": {
          "0%": { top: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
