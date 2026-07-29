import { TSectionHeading, TFaqItem } from "@type/Content";

/**
 * FAQ (Home) — hiring objections + answer-engine intent questions.
 */
export const faqSection: TSectionHeading = {
  eyebrow: "FAQ",
  title: "Questions about hiring HOLASVISION",
  description:
    "Quick answers on full stack engineering, AI automation, who we work with, and how engagements start.",
};

export const faqItems: TFaqItem[] = [
  {
    question: "What does HOLASVISION do?",
    answer:
      "HOLASVISION is a full stack development and AI automation practice. We design and ship SaaS products, web applications, AI agents, workflow automation, API integrations, and Chrome extensions — with production deployment and clear handoff.",
  },
  {
    question: "Can you build both AI agents and full stack applications?",
    answer:
      "Yes. We build complete product surfaces (frontend, backend, data) and the AI automation layer around them — agents, workflows, integrations, and cloud deployment — so intelligence and software work as one system.",
  },
  {
    question: "Do you build Chrome extensions and API integrations?",
    answer:
      "Yes. We build Manifest V3 Chrome extensions that fit existing browser workflows, and stable API integrations across CRMs, payments, messaging, and internal systems.",
  },
  {
    question: "What’s the fastest way to get started?",
    answer:
      "Book a discovery call or send a short project brief via the contact form. You’ll get an honest fit assessment, next steps, and a recommended engagement shape — usually within 1–2 business days.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "Startups, agencies, and operators who need a senior partner to ship production software and automation without assembling a large team — especially teams combining product engineering with AI workflows.",
  },
  {
    question: "Do you handle deployment and handoff?",
    answer:
      "Yes. We deploy to production and leave documentation, ownership clarity, and systems your team can maintain or extend.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on scope and urgency. After discovery we recommend a fixed project, milestone-based build, or ongoing partnership — with clear deliverables before work begins.",
  },
];
