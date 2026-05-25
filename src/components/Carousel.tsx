"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({
  images,
  interval = 7000,
  overlay = true,
  children,
  heightClass = "h-screen",
  priority = false,
}: {
  images: string[];
  interval?: number;
  overlay?: boolean;
  children?: React.ReactNode;
  heightClass?: string;
  priority?: boolean;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className={`relative w-full overflow-hidden ${heightClass}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 14, ease: "linear" } }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={images[idx]}
            alt=""
            fill
            priority={priority && idx === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,13,11,0.45) 0%, rgba(14,13,11,0.25) 40%, rgba(14,13,11,0.92) 100%)",
          }}
        />
      )}

      {children}

      {images.length > 1 && (
        <>
          <div className="absolute bottom-8 right-8 flex items-center gap-3 z-20">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-[rgba(216,201,168,0.5)] bg-[rgba(14,13,11,0.4)] backdrop-blur-sm flex items-center justify-center text-aldo-cream hover:bg-aldo-beige hover:text-aldo-bg transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-[rgba(216,201,168,0.5)] bg-[rgba(14,13,11,0.4)] backdrop-blur-sm flex items-center justify-center text-aldo-cream hover:bg-aldo-beige hover:text-aldo-bg transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute bottom-10 left-8 flex items-center gap-2 z-20">
            {images.map((_, i) => (
              <motion.span
                key={i}
                animate={{ width: i === idx ? 36 : 14, opacity: i === idx ? 1 : 0.4 }}
                transition={{ duration: 0.4 }}
                className="h-[2px] bg-aldo-beige"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
