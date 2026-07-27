type WordmarkProps = {
  className?: string;
};

/**
 * Name-as-logo treatment: "Isabelle" in dark blue, "Steiner" in teal,
 * same serif, weight, and size — no separators or symbols.
 */
export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span className={`wordmark font-serif tracking-tight ${className}`}>
      <span className="wordmark-dark">Isabelle</span>{" "}
      <span className="wordmark-accent">Steiner</span>
    </span>
  );
}
