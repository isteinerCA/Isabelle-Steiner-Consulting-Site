import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { productLabProjects, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Lab",
  description: `Product prototypes and experiments from ${site.name}.`,
};

export default function ProductLabPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <p className="section-label mb-4">Product Lab</p>
      <h1 className="mb-4 max-w-2xl text-4xl">Projects I am exploring</h1>
      <p className="mb-12 max-w-2xl text-[var(--color-ink-muted)]">
        Side projects where I combine product design, AI-assisted development,
        and real-world problems—often in education and decision-making.
      </p>

      <div className="grid gap-8">
        {productLabProjects.map((project) => (
          <article key={project.title} className="card p-8">
            <div className="mb-6 flex aspect-[16/9] items-center justify-center rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] bg-[var(--color-cream-dark)]">
              <span className="text-sm text-[var(--color-ink-muted)]">
                Screenshot placeholder — {project.title}
              </span>
            </div>
            <h2 className="mb-3 text-2xl">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-[var(--color-accent)]"
              >
                {project.title}
              </a>
            </h2>
            <p className="mb-6 text-[var(--color-ink-muted)]">{project.summary}</p>
            <div className="rounded-[var(--radius-md)] bg-[var(--color-cream-dark)] p-5">
              <p className="section-label mb-2">What I learned</p>
              <p className="text-sm text-[var(--color-ink-muted)]">
                {project.learned}
              </p>
            </div>
            <p className="mt-5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                Visit project →
              </a>
              {" · "}
              <Link
                href={`/work/${project.title === "SpellQuest" ? "spellquest" : "groundwork"}`}
                className="text-sm font-medium"
              >
                Read case study
              </Link>
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <ContactSection
          heading="Building something similar?"
          description="I help companies prototype AI-enabled tools quickly—then iterate based on real usage. Happy to talk through what you're exploring."
        />
      </div>
    </div>
  );
}
