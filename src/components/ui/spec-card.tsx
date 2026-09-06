interface SpecificationItem {
  label: string;
  value: string;
}

interface SpecCardProps {
  code?: string;
  index?: string;
  title: string;
  category?: string;
  description: string;
  specifications?: readonly SpecificationItem[] | SpecificationItem[];
  specs?: readonly string[] | string[];
  className?: string;
}

export function SpecCard({
  code,
  index,
  title,
  category,
  description,
  specifications,
  specs,
  className = "",
}: SpecCardProps) {
  const displayCode = code || index || "SPEC";

  return (
    <div
      className={`border border-[#222222] bg-[#0A0A0A] p-6 lg:p-8 flex flex-col justify-between hover:border-[#333333] transition-colors ${className}`}
    >
      <div>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1A1A1A] font-mono text-xs text-neutral-500">
          <span>{displayCode}</span>
          {category && <span className="text-neutral-400">{category}</span>}
        </div>

        <h3 className="text-lg font-medium text-white tracking-tight mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {specifications && specifications.length > 0 && (
        <div className="pt-4 border-t border-[#181818] space-y-2">
          {specifications.map((spec) => (
            <div
              key={spec.label}
              className="flex items-start justify-between text-[11px] font-mono gap-4"
            >
              <span className="text-neutral-500">{spec.label}</span>
              <span className="text-neutral-300 text-right">{spec.value}</span>
            </div>
          ))}
        </div>
      )}

      {specs && specs.length > 0 && (
        <div className="pt-4 border-t border-[#181818] flex flex-wrap gap-2">
          {specs.map((spec, i) => (
            <span
              key={i}
              className="px-2 py-1 font-mono text-[10px] tracking-wider text-neutral-400 border border-[#222222] bg-black uppercase"
            >
              {spec}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
