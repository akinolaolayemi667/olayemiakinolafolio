import dynamic from "next/dynamic";
import HomeHero from "@components/Home/HomeHero";
import AnswerEngineSummary from "@components/Home/AnswerEngineSummary";
import { MotionProvider } from "@components/ui/MotionProvider";

/** Below-fold interactive sections — separate chunks. */
const EngineeringIntelligence = dynamic(
  () => import("@components/intelligence/EngineeringIntelligence"),
  { loading: () => <SectionPlaceholder minHeight="32rem" /> }
);
const ExpertiseHub = dynamic(
  () => import("@components/expertise/ExpertiseHub"),
  { loading: () => <SectionPlaceholder minHeight="32rem" /> }
);
const FeaturedProjects = dynamic(
  () => import("@components/Projects/FeaturedProjects"),
  { loading: () => <SectionPlaceholder minHeight="28rem" /> }
);
const Services = dynamic(() => import("@components/Home/Services"), {
  loading: () => <SectionPlaceholder minHeight="24rem" />,
});
const Process = dynamic(() => import("@components/Home/Process"), {
  loading: () => <SectionPlaceholder minHeight="36rem" />,
});
const EngineeringTimeline = dynamic(
  () => import("@components/Home/EngineeringTimelineSection"),
  { loading: () => <SectionPlaceholder minHeight="28rem" /> }
);
const EngineeringMetrics = dynamic(
  () => import("@components/Home/EngineeringMetrics"),
  { loading: () => <SectionPlaceholder minHeight="18rem" /> }
);
const Faq = dynamic(() => import("@components/Home/Faq"), {
  loading: () => <SectionPlaceholder minHeight="22rem" />,
});
const TestimonialsSection = dynamic(
  () => import("@components/Home/TestimonialsSection"),
  { loading: () => <SectionPlaceholder minHeight="20rem" /> }
);
const ContactCta = dynamic(() => import("@components/Home/ContactCta"), {
  loading: () => <SectionPlaceholder minHeight="24rem" />,
});

function SectionPlaceholder({ minHeight = "12rem" }: { minHeight?: string }) {
  return (
    <div
      className="hv-skeleton w-full"
      style={{ minHeight }}
      aria-hidden
    />
  );
}

/**
 * HOLASVISION homepage — premium engineering portfolio shell.
 */
export default function HomePage() {
  return (
    <div className="hv-page-shell">
      <HomeHero />
      <AnswerEngineSummary />
      <MotionProvider>
        <EngineeringIntelligence />
        <ExpertiseHub />
        <FeaturedProjects />
        <Services />
        <Process />
        <EngineeringTimeline />
        <EngineeringMetrics />
        <TestimonialsSection />
        <Faq />
        <ContactCta />
      </MotionProvider>
    </div>
  );
}
