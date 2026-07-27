import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="no-underline hover:text-[var(--color-ink)]">
          <span className="font-serif text-xl tracking-tight">{site.name}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="no-underline text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
