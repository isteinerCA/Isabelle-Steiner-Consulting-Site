import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/contact-section";
import { aboutContent, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.description}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <div className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-[var(--radius-lg)]">
          <Image
            src="/about/isabelle-steiner.jpg"
            alt={site.name}
            fill
            className="object-cover"
            sizes="240px"
            priority
          />
        </div>
        <div>
          <p className="section-label mb-4">About</p>
          <h1 className="mb-8 text-4xl">{site.name}</h1>
          <div className="prose text-[var(--color-ink-muted)]">
            {aboutContent.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8">
            <a
              href={site.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              Connect on LinkedIn →
            </a>
          </p>
        </div>
      </div>

      <div className="mt-16">
        <ContactSection
          heading="Interested in working together?"
          description="Whether you need strategic guidance, better measurement, or help prototyping AI-enabled solutions, reach out and we can explore whether there's a fit."
        />
      </div>
    </div>
  );
}
