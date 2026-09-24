import { TContactContent } from "@type/Content";
import { getSocial } from "./socials";

const phone = getSocial("phone");
const bookingDigits = phone.url.replace(/\D/g, "");
const bookingMessage = encodeURIComponent(
  "Hi Akinola — I'd like to book a discovery call about a HOLASVISION project."
);

/**
 * Final conversion CTA (Home) + /connect form fields.
 * Formspree endpoint is public-by-design.
 * Booking uses WhatsApp until a Calendly/Cal.com URL is published.
 */
export const contact: TContactContent = {
  eyebrow: "Contact",
  title: "Let's build something intelligent together",
  description:
    "Tell us about your full stack, AI automation, SaaS, API, or Chrome extension needs — and the outcome you want. We’ll reply with next steps and an honest view on fit.",
  formspreeEndpoint: "https://formspree.io/f/xwplpbrq",
  primaryCtaHref: "#contact-form",
  primaryCtaLabel: "Send a message",
  primaryCtaHint: "Prefer a call first? Book a discovery chat below.",
  bookingHref: `https://wa.me/${bookingDigits}?text=${bookingMessage}`,
  bookingLabel: "Book a discovery call",
  bookingHint: "15–20 min WhatsApp chat — usually within 1–2 business days.",
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
  phoneCtaHref: phone.url,
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
