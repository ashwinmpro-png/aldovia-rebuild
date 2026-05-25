import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
}) {
  const widths = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "max-w-none",
  } as const;
  return (
    <div className={cn("mx-auto px-6 md:px-10", widths[size], className)}>
      {children}
    </div>
  );
}
