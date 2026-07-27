import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h1 className="mb-4 text-3xl">Page not found</h1>
      <p className="mb-8 text-[var(--color-ink-muted)]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary no-underline">
        Back to home
      </Link>
    </div>
  );
}
