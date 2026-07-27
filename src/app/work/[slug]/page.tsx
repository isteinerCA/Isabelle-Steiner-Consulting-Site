import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryTag } from "@/components/category-tag";
import { ContactSection } from "@/components/contact-section";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case study not found" };
  }

  return {
    title: study.title,
    description: study.problem,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <Link
        href="/work"
        className="mb-8 inline-block text-sm text-[var(--color-ink-muted)] no-underline hover:underline"
      >
        ← Back to work
      </Link>

      <div className="mb-6 flex flex-wrap gap-2">
        {study.categories.map((category) => (
          <CategoryTag key={category} label={category} />
        ))}
      </div>

      <h1 className="mb-10 max-w-3xl text-4xl">{study.title}</h1>

      <div className="grid max-w-3xl gap-10">
        <section>
          <h2 className="section-label mb-3">The problem</h2>
          <p className="text-[var(--color-ink-muted)]">{study.problem}</p>
        </section>

        <section>
          <h2 className="section-label mb-3">My approach</h2>
          <p className="text-[var(--color-ink-muted)]">{study.approach}</p>
        </section>

        <section>
          <h2 className="section-label mb-3">Outcome</h2>
          <p className="text-[var(--color-ink-muted)]">{study.outcome}</p>
        </section>

        <section>
          <h2 className="section-label mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {study.skills.map((skill) => (
              <CategoryTag key={skill} label={skill} />
            ))}
          </div>
        </section>

        {study.externalUrl ? (
          <p>
            <a
              href={study.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              View live project →
            </a>
          </p>
        ) : null}
      </div>

      <div className="mt-16">
        <ContactSection
          heading="Have a similar challenge?"
          description={`If ${study.title.toLowerCase()} resonates with something you're working on, I'd be happy to discuss how I can help.`}
        />
      </div>
    </div>
  );
}
