type Props = {
  items: string[];
  className?: string;
};

/** Vertical step diagram for user-journey supplementary sections. */
export function JourneySteps({ items, className = "" }: Props) {
  if (!items.length) return null;

  return (
    <ol className={`relative flex flex-col gap-0 ${className}`}>
      <div
        aria-hidden
        className="absolute bottom-2 left-[0.95rem] top-2 w-px bg-gradient-to-b from-accent/50 via-white/15 to-accent/20"
      />
      {items.map((item, index) => (
        <li
          key={`${index}-${item.slice(0, 20)}`}
          className="relative flex gap-4 pb-6 last:pb-0"
        >
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-ink text-[11px] font-semibold text-accent shadow-[0_0_16px_rgba(20,184,166,0.15)]">
            {index + 1}
          </span>
          <div className="min-w-0 flex-1 rounded-xl border border-white/10 bg-ink/50 px-4 py-3.5">
            <p className="text-sm leading-relaxed text-white/85">{item}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
