import { TContactContent } from "@type/Content";
import { getSocial } from "./socials";

/**
 * Final conversion CTA (Home) + /connect form fields.
 * Formspree endpoint is public-by-design.
 */
export const contact: TContactContent = {
  eyebrow: "Contact",
  title: "Let's build something intelligent together",
  description:
    "Tell us about your full stack, AI automation, SaaS, API, or Chrome extension needs — and the outcome you want. We’ll reply with next steps and an honest view on fit.",
  formspreeEndpoint: "https://formspree.io/f/xwplpbrq",
  primaryCtaHref: "#contact-form",
  primaryCtaLabel: "Send a message",
  primaryCtaHint: "Prefer email or a call? Reach out directly below.",
  emailPlaceholder: "you@company.com",
  namePlaceholder: "Your name",
  companyPlaceholder: "Company",
  messagePlaceholder:
    "What are you building, who is it for, and what should be true when we’re done?",
  subjectPlaceholder: "Project inquiry",
  submitLabel: "Send message",
  submittingLabel: "Sending…",
  successTitle: "Message sent",
  successBody:
    "Thanks — we’ll review your note and reply with next steps shortly.",
  errorBody:
    "Something went wrong sending your message. Please try again or email us directly.",
  emailCtaHref: getSocial("email").url,
  emailCtaText: "akinolaolayemi667@gmail.com",
  phoneCtaHref: getSocial("phone").url,
  phoneCtaText: "Dial 07042299786",
  phoneDisplay: "07042299786",
  pageTitle: "Contact",
  pageHeading: "Let's build something intelligent together",
  formLabels: {
    name: "Name",
    company: "Company",
    email: "Email",
    subject: "Subject",
    message: "Message",
  },
};
