import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";
type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type SharedProps = {
  children: React.ReactNode;
  variant?: Variant;
  icon?: IconType;
  full?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 uppercase font-sans text-[11px] px-8 py-[14px] border transition-colors duration-300 cursor-pointer";

const variants: Record<Variant, string> = {
  solid:
    "bg-aldo-beige text-aldo-bg border-aldo-beige hover:bg-transparent hover:text-aldo-cream",
  outline:
    "bg-transparent text-aldo-cream border-aldo-beige hover:bg-aldo-beige hover:text-aldo-bg",
  ghost:
    "bg-transparent text-aldo-cream border-transparent hover:text-aldo-beige",
};

export function ButtonLink({
  href,
  children,
  variant = "outline",
  icon: Icon,
  full,
  className,
}: SharedProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], full && "w-full", className)}
      style={{ letterSpacing: "0.18em" }}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </Link>
  );
}

export function Button({
  children,
  variant = "outline",
  icon: Icon,
  full,
  className,
  type = "button",
  disabled,
  onClick,
}: SharedProps & {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        base,
        variants[variant],
        full && "w-full",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      style={{ letterSpacing: "0.18em" }}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
}
