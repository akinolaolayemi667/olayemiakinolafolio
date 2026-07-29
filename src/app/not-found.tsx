import type { Metadata } from "next";
import { Container } from "@components/ui/Container";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { profile } from "@data/profile";
import { buildPageMetadata } from "@lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Page not found",
  description: `That URL does not exist on ${profile.brand}. Return home or browse case studies.`,
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="hv-page-shell flex min-h-[70vh] items-center">
      <Container>
        <p className="hv-eyebrow">404</p>
        <h1 className="hv-heading-xl mt-3">Page not found</h1>
        <p className="hv-body-lg mt-4 max-w-lg">
          That URL doesn’t exist on {profile.brand}. Check the address or head
          back to the home page.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryButton href="/" glow>
            Go home
          </PrimaryButton>
          <PrimaryButton href="/projects" variant="secondary">
            View case studies
          </PrimaryButton>
          <PrimaryButton href="/connect" variant="ghost">
            Contact
          </PrimaryButton>
        </div>
      </Container>
    </div>
  );
}
