import Link from "next/link";

interface TacticalButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function TacticalButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  onClick,
}: TacticalButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs font-medium tracking-wide transition-colors focus:outline-none";

  const variants = {
    primary:
      "bg-white text-black border border-white hover:bg-neutral-200 hover:border-neutral-200",
    secondary:
      "bg-transparent text-white border border-neutral-700 hover:border-neutral-400 hover:bg-white/5",
    tertiary:
      "bg-transparent text-neutral-400 border border-transparent hover:text-white hover:border-neutral-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[11px]",
    md: "px-5 py-2.5",
    lg: "px-6 py-3 text-sm",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
