/**
 * Elegant forthcoming slot — used when screenshots or outcomes are not yet publishable.
 * Does not invent content; signals honesty.
 */
export function PendingSlot({
  title,
  body,
  className = "",
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`hv-empty relative overflow-hidden border-dashed border-[color:var(--hv-border-accent)] text-center ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(20,184,166,0.1),transparent_65%)]"
      />
      <p className="relative hv-eyebrow">Forthcoming</p>
      <p className="relative mt-3 text-base font-semibold text-[color:var(--hv-fg)]">
        {title}
      </p>
      <p className="relative mx-auto mt-2 max-w-md text-sm leading-relaxed text-[color:var(--hv-fg-muted)]">
        {body}
      </p>
    </div>
  );
}
