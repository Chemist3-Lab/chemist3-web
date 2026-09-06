interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className = "" }: DividerProps) {
  if (label) {
    return (
      <div className={`relative flex items-center justify-center my-12 ${className}`}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#1F1F1F]" />
        </div>
        <div className="relative bg-black px-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#666666] uppercase">
            {label}
          </span>
        </div>
      </div>
    );
  }
  return <hr className={`border-t border-[#1F1F1F] my-0 ${className}`} />;
}
