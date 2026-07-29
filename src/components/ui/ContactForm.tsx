"use client";

import { FormEvent, useId, useState } from "react";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { contact } from "@data/contact";

const fieldClassName =
  "w-full min-h-11 rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white transition-colors placeholder:text-muted focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  /** Visual variant for Home vs Connect page */
  variant?: "home" | "connect";
  className?: string;
};

/**
 * Shared contact form — Formspree JSON submit with loading/success/error + honeypot.
 */
export function ContactForm({ variant = "home", className = "" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const errorId = useId();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this; humans never see it
    if (String(data.get("website") || "").trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");

    try {
      const payload = {
        name: String(data.get("name") || ""),
        company: String(data.get("company") || ""),
        email: String(data.get("email") || ""),
        subject: String(data.get("subject") || "Project inquiry"),
        message: String(data.get("message") || ""),
      };

      const response = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Formspree error");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`success-pop rounded-2xl border border-accent/25 bg-accent/[0.08] p-5 md:p-6 ${className}`}
        role="status"
      >
        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <div>
            <p className="text-lg font-semibold text-white">{contact.successTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {contact.successBody}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="mt-4 text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  const connectStyle = variant === "connect";
  const isError = status === "error";

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      className={`flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink/50 p-5 md:p-6 ${className}`}
      noValidate={false}
      aria-describedby={isError ? errorId : undefined}
    >
      <p className="sr-only">
        Fields marked required must be completed before submitting.
      </p>

      {/* Honeypot */}
      <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
          {contact.formLabels.name}{" "}
          <span aria-hidden className="text-accent">
            *
          </span>
          <span className="sr-only">(required)</span>
        </span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          placeholder={contact.namePlaceholder}
          aria-invalid={isError || undefined}
          aria-describedby={isError ? errorId : undefined}
          className={
            connectStyle
              ? fieldClassName.replace("rounded-xl", "rounded-lg")
              : fieldClassName
          }
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
          {contact.formLabels.company}
        </span>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          placeholder={contact.companyPlaceholder}
          className={fieldClassName}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
          {contact.formLabels.email}{" "}
          <span aria-hidden className="text-accent">
            *
          </span>
          <span className="sr-only">(required)</span>
        </span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          required
          placeholder={contact.emailPlaceholder}
          aria-invalid={isError || undefined}
          aria-describedby={isError ? errorId : undefined}
          className={fieldClassName}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
          {contact.formLabels.subject}
        </span>
        <input
          type="text"
          name="subject"
          placeholder={contact.subjectPlaceholder}
          className={fieldClassName}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
          {contact.formLabels.message}{" "}
          <span aria-hidden className="text-accent">
            *
          </span>
          <span className="sr-only">(required)</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={contact.messagePlaceholder}
          aria-invalid={isError || undefined}
          aria-describedby={isError ? errorId : undefined}
          className={`min-h-[8rem] resize-y ${fieldClassName}`}
        />
      </label>

      {isError ? (
        <p id={errorId} className="text-sm text-rose-300" role="alert">
          {contact.errorBody}
        </p>
      ) : null}

      <PrimaryButton
        type="submit"
        className="mt-1 w-full sm:w-auto"
        ariaLabel={
          status === "submitting"
            ? contact.submittingLabel
            : contact.submitLabel
        }
        disabled={status === "submitting"}
      >
        {status === "submitting"
          ? contact.submittingLabel
          : contact.submitLabel}
      </PrimaryButton>
    </form>
  );
}
