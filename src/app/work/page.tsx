import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { ContactSection } from "@/components/contact-section";
import { caseStudies } from "@/content/case-studies";
import { featuredWorkIntro, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Featured work and case studies from ${site.name}.`,
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <p className="section-label mb-4">Featured work</p>
      <h1 className="mb-4 max-w-2xl text-4xl">
        Practical, measurable solutions across industries
      </h1>
      <p className="mb-12 max-w-2xl text-[var(--color-ink-muted)]">
        {featuredWorkIntro}
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      <div className="mt-16">
        <ContactSection />
      </div>
    </div>
  );
}
