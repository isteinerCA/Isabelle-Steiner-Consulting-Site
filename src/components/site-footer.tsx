import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { contactMailto, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-cream-dark)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <BrandMark size={18} className="text-[var(--color-accent)]" />
          <div>
            <p className="font-serif text-lg">{site.name}</p>
            <p className="text-sm text-[var(--color-ink-muted)]">{site.title}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={contactMailto()}
            className="no-underline hover:underline"
          >
            Email
          </a>
          <a
            href={site.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline"
          >
            LinkedIn
          </a>
          <Link href="/work" className="no-underline hover:underline">
            Work
          </Link>
        </div>
      </div>
    </footer>
  );
}
