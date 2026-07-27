type BrandMarkProps = {
  className?: string;
  size?: number;
};

/**
 * Abstract mark: two offset nodes converge into a level pair,
 * representing messy inputs resolving into a clear outcome.
 */
export function BrandMark({ className = "", size = 22 }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line
        x1="6"
        y1="6"
        x2="16"
        y2="18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="18"
        x2="27"
        y2="18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="6" cy="6" r="3" fill="currentColor" />
      <circle cx="16" cy="18" r="3" fill="currentColor" />
      <circle cx="27" cy="18" r="3" fill="currentColor" />
    </svg>
  );
}
