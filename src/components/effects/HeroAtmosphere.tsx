/** CSS-only hero atmosphere — token-backed aurora + noise. */
export function HeroAtmosphere() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="hero-aurora hero-aurora-a" />
        <div className="hero-aurora hero-aurora-b" />
        <div className="hero-aurora hero-aurora-c" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--hv-ink) 0%, color-mix(in srgb, var(--hv-ink) 88%, var(--hv-surface)) 55%, var(--hv-surface) 100%), var(--hv-gradient-hero)",
          }}
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 70% 20%, var(--hv-cyan-dim), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, var(--hv-accent-dim), transparent 55%)",
          }}
        />
      </div>
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.04]"
      />
    </>
  );
}
