interface SectionHeaderProps {
  kicker?: string;
  index?: string;
  title: string;
  description?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  kicker,
  index,
  title,
  description,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const displayKicker = kicker || index;
  const displayDescription = description || subtitle;

  return (
    <div
      className={`space-y-3 max-w-3xl ${
        align === "center" ? "text-center mx-auto" : ""
      } ${className}`}
    >
      {displayKicker && (
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.3em] text-emerald-500 uppercase">
            {displayKicker}
          </span>
          <span className="h-px w-8 bg-[#262626]" />
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
        {title}
      </h2>
      {displayDescription && (
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
          {displayDescription}
        </p>
      )}
    </div>
  );
}
