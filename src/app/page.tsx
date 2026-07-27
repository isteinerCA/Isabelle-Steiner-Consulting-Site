import Link from "next/link";
import { CaseStudyCard } from "@/components/case-study-card";
import { ContactSection } from "@/components/contact-section";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import {
  credibilityLine,
  featuredWorkIntro,
  pillars,
  site,
  todayLine,
} from "@/lib/site";
import { pillarAccents } from "@/lib/tag-colors";

export default function HomePage() {
  const featured = getFeaturedCaseStudies();

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <section className="mb-20 max-w-3xl">
        <p className="section-label mb-4">{site.title}</p>
        <h1 className="mb-6 text-4xl sm:text-5xl">{site.tagline}</h1>
        <p className="mb-4 text-lg text-[var(--color-ink-muted)]">
          {credibilityLine}
        </p>
        <p className="text-lg text-[var(--color-ink-muted)]">{todayLine}</p>
      </section>

      <section className="mb-20">
        <p className="section-label mb-8">How I help</p>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className={`card pillar-card pillar-card--${pillarAccents[pillar.title]} p-6`}
            >
              <p className="section-label mb-2">{pillar.audience}</p>
              <h2 className="mb-3 text-2xl">{pillar.title}</h2>
              <p className="text-sm text-[var(--color-ink-muted)]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Featured work</p>
            <h2 className="mb-4 text-3xl">Strategy, analytics, and technology</h2>
            <p className="text-[var(--color-ink-muted)]">{featuredWorkIntro}</p>
          </div>
          <Link
            href="/work"
            className="shrink-0 text-sm font-medium no-underline hover:underline"
          >
            View all examples →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
