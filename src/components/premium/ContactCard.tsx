import type { ReactNode } from "react";
import { GlassCard } from "./GlassCard";
import { GlowBorder } from "./GlowBorder";
import { cx, type WithClassName } from "./types";

type Channel = {
  id: string;
  label: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
};

type Props = WithClassName & {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Channel action buttons. */
  channels?: Channel[];
  /** Availability / status node. */
  badge?: ReactNode;
  children?: ReactNode;
  /** Wrap with animated glow edge. */
  glow?: boolean;
};

/**
 * Contact CTA shell — headline, channels, and optional form slot.
 */
export function ContactCard({
  eyebrow,
  title,
  description,
  channels = [],
  badge,
  children,
  glow = true,
  className = "",
}: Props) {
  const body = (
    <GlassCard
      as="div"
      padding="lg"
      className={cx(
        glow &&
          "!rounded-[calc(1.75rem-1px)] border-0 bg-[color:var(--hv-glass-bg)] shadow-none",
        !glow && className
      )}
      wash
    >
      <div className="flex flex-wrap items-center gap-3">
        {eyebrow ? <p className="hv-eyebrow !text-accent">{eyebrow}</p> : null}
        {badge}
      </div>
      <h2 className="hv-heading-lg mt-4 max-w-2xl">{title}</h2>
      {description ? (
        <p className="hv-body-lg mt-4 max-w-2xl">{description}</p>
      ) : null}

      {channels.length > 0 ? (
        <ul className="mt-8 flex list-none flex-wrap gap-2.5 p-0 sm:gap-3">
          {channels.map((channel) => (
            <li key={channel.id}>
              <a
                href={channel.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[color:var(--hv-border)] bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-[color:var(--hv-fg-secondary)] transition-colors hover:border-accent/40 hover:text-[color:var(--hv-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {channel.icon}
                {channel.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      {children ? <div className="mt-8 md:mt-10">{children}</div> : null}
    </GlassCard>
  );

  if (!glow) return body;

  return (
    <GlowBorder rounded="3xl" intensity="strong" className={className}>
      {body}
    </GlowBorder>
  );
}
