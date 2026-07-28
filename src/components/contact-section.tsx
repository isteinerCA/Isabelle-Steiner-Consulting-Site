import { contactMailto, site } from "@/lib/site";

type ContactSectionProps = {
  heading?: string;
  description?: string;
  className?: string;
};

export function ContactSection({
  heading = "Connect",
  description = "If you're building, scaling, or rethinking growth, and you are looking for a partner who combines strategy with hands-on execution, I'd love to hear from you.",
  className = "",
}: ContactSectionProps) {
  return (
    <section
      className={`rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10 sm:px-10 ${className}`}
    >
      <p className="section-label mb-3">Contact</p>
      <h2 className="mb-3 text-3xl">{heading}</h2>
      <p className="mb-8 max-w-xl text-[var(--color-ink-muted)]">{description}</p>
      <div className="flex flex-wrap gap-3">
        <a href={contactMailto()} className="btn-primary no-underline">
          Send an email
        </a>
        <a
          href={site.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary no-underline"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
