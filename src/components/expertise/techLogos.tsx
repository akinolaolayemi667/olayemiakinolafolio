/**
 * Official brand SVG logos for the Technology Ecosystem orbit.
 * Paths adapted from Simple Icons / Devicon mark shapes; brand colors preserved.
 */
import type { ComponentType, ReactNode } from "react";

export type TechLogoId =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "supabase"
  | "nodejs"
  | "vercel"
  | "lovable";

type LogoProps = {
  className?: string;
  title?: string;
};

function SvgShell({
  children,
  className = "",
  title,
  viewBox = "0 0 24 24",
}: {
  children: ReactNode;
  className?: string;
  title?: string;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function ReactLogo({ className, title }: LogoProps) {
  return (
    <SvgShell className={className} title={title}>
      <circle cx="12" cy="12" r="2.15" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.15">
        <ellipse rx="11" ry="4.2" cx="12" cy="12" />
        <ellipse
          rx="11"
          ry="4.2"
          cx="12"
          cy="12"
          transform="rotate(60 12 12)"
        />
        <ellipse
          rx="11"
          ry="4.2"
          cx="12"
          cy="12"
          transform="rotate(120 12 12)"
        />
      </g>
    </SvgShell>
  );
}

export function NextjsLogo({ className, title }: LogoProps) {
  return (
    <SvgShell className={className} title={title}>
      <path
        fill="#fff"
        d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L11.03 9.689H8.405v9.938h2.059v-7.042l7.201 9.393zm.862-2.048-7.15-9.304h3.682l7.088 9.223A11.942 11.942 0 0 1 18.665 21.978z"
      />
    </SvgShell>
  );
}

export function TypeScriptLogo({ className, title }: LogoProps) {
  return (
    <SvgShell className={className} title={title}>
      <rect width="24" height="24" rx="2.5" fill="#3178C6" />
      <path
        fill="#fff"
        d="M13.1 10.2h3.9v1.45h-1.45v5.55h-1.7V11.65H13.1V10.2zm-5.35 1.45h2.35v5.95H8.35v-5.95H6.15V10.2h5.9v1.45H7.75z"
      />
    </SvgShell>
  );
}

export function TailwindLogo({ className, title }: LogoProps) {
  return (
    <SvgShell className={className} title={title}>
      <path
        fill="#38BDF8"
        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.4 10.9 14.53 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.6 7.1 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.4 16.9 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.6 13.1 9.47 12 7 12z"
      />
    </SvgShell>
  );
}

export function SupabaseLogo({ className, title }: LogoProps) {
  return (
    <SvgShell className={className} title={title}>
      <path
        fill="#3ECF8E"
        d="M13.94 3.2c.4-.7 1.4-.45 1.4.37v7.55h5.05c.92 0 1.4 1.1.78 1.77l-8.33 9.02c-.72.78-2.02.2-1.85-.83l1.4-7.55H6.34c-.92 0-1.4-1.1-.78-1.77L13.94 3.2z"
      />
    </SvgShell>
  );
}

export function NodejsLogo({ className, title }: LogoProps) {
  return (
    <SvgShell className={className} title={title}>
      <path
        fill="#339933"
        d="M11.998 1.5 3.2 6.6v10.8l8.798 5.1 8.802-5.1V6.6L11.998 1.5zm0 1.85 7.1 4.11v8.88l-7.1 4.11-7.1-4.11V7.46l7.1-4.11z"
      />
      <path
        fill="#339933"
        d="M12 6.4c-2.2 0-3.55 1.15-3.55 3.05h1.75c0-.8.55-1.35 1.8-1.35 1.1 0 1.7.4 1.7 1.2 0 .6-.3.95-1.3 1.3l-.95.32c-1.75.58-2.55 1.45-2.55 2.95 0 1.75 1.15 2.85 3.15 2.85 2.05 0 3.45-1.1 3.55-2.9h-1.8c-.1.85-.65 1.35-1.8 1.35-.95 0-1.6-.4-1.6-1.15 0-.6.3-.95 1.25-1.28l1-.33c1.9-.62 2.7-1.55 2.7-3.05C15.55 7.5 14.2 6.4 12 6.4z"
      />
    </SvgShell>
  );
}

export function VercelLogo({ className, title }: LogoProps) {
  return (
    <SvgShell className={className} title={title}>
      <path fill="#fff" d="M12 3.5 22 20.5H2L12 3.5z" />
    </SvgShell>
  );
}

/** Lovable brand mark — soft heart inspired by product identity. */
export function LovableLogo({ className, title }: LogoProps) {
  return (
    <SvgShell className={className} title={title}>
      <defs>
        <linearGradient
          id="hv-lovable-grad"
          x1="4"
          y1="4"
          x2="20"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A65" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <path
        fill="url(#hv-lovable-grad)"
        d="M12 20.4S3.6 15.2 3.6 9.6C3.6 6.55 5.95 4.4 8.7 4.4c1.55 0 2.95.7 3.3 1.85.35-1.15 1.75-1.85 3.3-1.85 2.75 0 5.1 2.15 5.1 5.2 0 5.6-8.4 10.8-8.4 10.8z"
      />
    </SvgShell>
  );
}

const logoMap: Record<TechLogoId, ComponentType<LogoProps>> = {
  react: ReactLogo,
  nextjs: NextjsLogo,
  typescript: TypeScriptLogo,
  tailwind: TailwindLogo,
  supabase: SupabaseLogo,
  nodejs: NodejsLogo,
  vercel: VercelLogo,
  lovable: LovableLogo,
};

export function TechLogo({
  id,
  className = "h-5 w-5",
  title,
}: {
  id: string;
  className?: string;
  title?: string;
}) {
  const Logo = logoMap[id as TechLogoId];
  if (!Logo) return null;
  return <Logo className={className} title={title} />;
}

export const TECH_LOGO_IDS = Object.keys(logoMap) as TechLogoId[];
