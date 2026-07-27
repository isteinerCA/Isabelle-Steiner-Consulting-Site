import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="card flex h-full flex-col p-6 transition-colors hover:border-[var(--color-ink-muted)]">
      <div className="mb-4 flex flex-wrap gap-2">
        {study.categories.slice(0, 3).map((category) => (
          <span key={category} className="category-tag">
            {category}
          </span>
        ))}
      </div>
      <h3 className="mb-3 text-xl">
        <Link
          href={`/work/${study.slug}`}
          className="no-underline hover:text-[var(--color-accent)]"
        >
          {study.title}
        </Link>
      </h3>
      <p className="mb-6 flex-1 text-sm text-[var(--color-ink-muted)]">
        {study.problem}
      </p>
      <Link
        href={`/work/${study.slug}`}
        className="text-sm font-medium no-underline hover:underline"
      >
        Read case study →
      </Link>
    </article>
  );
}
