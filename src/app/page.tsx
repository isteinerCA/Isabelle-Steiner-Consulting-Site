import Image from "next/image";
import Link from "next/link";
import { CaseStudyCard } from "@/components/case-study-card";
import { ContactSection } from "@/components/contact-section";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import {
  clientLogos,
  featuredWorkIntro,
  heroIntro,
  pillars,
  site,
} from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedCaseStudies();

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <section className="mb-12 max-w-3xl">
        <p className="section-label mb-4">{site.title}</p>
        <h1 className="text-4xl sm:text-5xl">{site.tagline}</h1>
      </section>

      <section className="mb-20">
        <div className="grid gap-8 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-12">
          <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-[var(--radius-lg)]">
            <Image
              src="/about/isabelle-steiner.jpg"
              alt={site.name}
              fill
              className="object-cover"
              sizes="220px"
              quality={90}
              priority
            />
          </div>
          <div>
            <div className="space-y-4 text-lg text-[var(--color-ink-muted)]">
              {heroIntro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="shrink-0 text-sm font-medium text-[var(--color-ink-muted)]">
                Selected companies
              </span>
              {clientLogos.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-8 rounded-md object-contain opacity-90 sm:h-9 sm:w-9"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <p className="section-label mb-8">How I help</p>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="card pillar-card p-6">
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
            <h2 className="mb-4 text-3xl">Solving problems</h2>
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
