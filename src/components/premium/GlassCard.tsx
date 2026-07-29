import {
  cx,
  paddingClass,
  type CardSurfaceProps,
} from "./types";

type Props = CardSurfaceProps & {
  /** Use gradient-edge treatment (static). Prefer GlowBorder for animated edges. */
  gradientBorder?: boolean;
};

/**
 * Premium glass surface — shared base for metric / feature / contact cards.
 */
export function GlassCard({
  children,
  className = "",
  as: Tag = "article",
  id,
  padding = "md",
  interactive = false,
  wash = false,
  gradientBorder = false,
}: Props) {
  return (
    <Tag
      id={id}
      className={cx(
        "group/card relative overflow-hidden",
        gradientBorder
          ? "hv-gradient-border"
          : interactive
            ? "hv-card"
            : "hv-glass",
        interactive && "hv-card-interactive",
        paddingClass[padding],
        className
      )}
    >
      {wash ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 0% 0%, rgba(20,184,166,0.14), transparent 55%)",
          }}
        />
      ) : null}
      <div className="relative h-full">{children}</div>
    </Tag>
  );
}
