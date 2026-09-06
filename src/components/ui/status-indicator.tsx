interface StatusIndicatorProps {
  label: string;
  variant?: "neutral" | "active" | "subtle";
  className?: string;
}

export function StatusIndicator({
  label,
  variant = "neutral",
  className = "",
}: StatusIndicatorProps) {
  const styles = {
    neutral: "text-neutral-400 border-neutral-800 bg-neutral-950",
    active: "text-neutral-200 border-neutral-700 bg-neutral-900",
    subtle: "text-neutral-500 border-neutral-900 bg-transparent",
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider border ${styles} ${className}`}
    >
      {label}
    </span>
  );
}
