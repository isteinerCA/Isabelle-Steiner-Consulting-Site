type PhotoPlaceholderProps = {
  className?: string;
  label?: string;
};

export function PhotoPlaceholder({
  className = "",
  label = "Photo coming soon",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] bg-[var(--color-cream-dark)] ${className}`}
      aria-label={label}
    >
      <span className="px-4 text-center text-sm text-[var(--color-ink-muted)]">
        {label}
      </span>
    </div>
  );
}
