/** CSS-only sparse particles — denser premium field, no canvas. */
export function HeroParticles() {
  const particles = [
    { left: "10%", top: "16%", size: 3, delay: "0s", duration: "14s" },
    { left: "78%", top: "20%", size: 2, delay: "2s", duration: "18s" },
    { left: "45%", top: "32%", size: 2, delay: "4s", duration: "16s" },
    { left: "88%", top: "46%", size: 3, delay: "1s", duration: "20s" },
    { left: "22%", top: "58%", size: 2, delay: "3s", duration: "17s" },
    { left: "62%", top: "70%", size: 2, delay: "5s", duration: "19s" },
    { left: "8%", top: "42%", size: 2, delay: "2.5s", duration: "15s" },
    { left: "92%", top: "66%", size: 3, delay: "0.5s", duration: "21s" },
    { left: "34%", top: "24%", size: 2, delay: "1.5s", duration: "16s" },
    { left: "70%", top: "38%", size: 2, delay: "3.5s", duration: "18s" },
    { left: "55%", top: "55%", size: 3, delay: "0.8s", duration: "22s" },
    { left: "18%", top: "75%", size: 2, delay: "4.2s", duration: "17s" },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden motion-reduce:hidden"
    >
      {particles.map((particle, index) => (
        <span
          key={index}
          className="hero-particle absolute rounded-full bg-accent/45 shadow-[0_0_10px_var(--hv-glow-accent-soft)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
