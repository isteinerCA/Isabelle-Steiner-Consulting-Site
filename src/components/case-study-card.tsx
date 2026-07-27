import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { CategoryTag } from "@/components/category-tag";
import type { CaseStudy } from "@/content/case-studies";
import { getTagColorKey, tagColorHexMap } from "@/lib/tag-colors";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const colorKey = getTagColorKey(study.categories[0]);
  const { bg, fg } = tagColorHexMap[colorKey];

  return (
    <article className="card portfolio-card flex h-full flex-col overflow-hidden">
      <Link
        href={`/work/${study.slug}`}
        aria-label={study.title}
        className="cover-tile relative block aspect-[16/10] no-underline"
        style={study.coverImage ? undefined : { backgroundColor: bg }}
      >
        {study.coverImage ? (
          <Image
            src={study.coverImage}
            alt={study.coverImageAlt ?? study.title}
            fill
            className="cover-tile__image object-cover object-top"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        ) : (
          <BrandMark size={64} className="cover-tile__mark" style={{ color: fg }} />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {study.categories.slice(0, 3).map((category) => (
            <CategoryTag key={category} label={category} />
          ))}
        </div>
        <h3 className="mb-3 text-xl">
          <Link
            href={`/work/${study.slug}`}
            className="case-card__link no-underline"
          >
            {study.title}
          </Link>
        </h3>
        <p className="mb-6 flex-1 text-sm text-[var(--color-ink-muted)]">
          {study.problem}
        </p>
        <Link
          href={`/work/${study.slug}`}
          className="case-card__link text-sm font-medium no-underline"
        >
          Read case study →
        </Link>
      </div>
    </article>
  );
}
