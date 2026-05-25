"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Align = "center" | "left" | "right";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  icon,
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: Align;
  icon?: React.ReactNode;
  className?: string;
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "flex flex-col max-w-3xl",
        alignment,
        align === "center" && "mx-auto",
        className
      )}
    >
      {eyebrow && (
        <div
          className="flex items-center gap-2 uppercase text-[10px] mb-5 text-aldo-beige"
          style={{ letterSpacing: "0.42em" }}
        >
          {icon}
          <span>{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.1] text-aldo-cream text-balance">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-6 text-sm md:text-base leading-relaxed text-aldo-muted max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
