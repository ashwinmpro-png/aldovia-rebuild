"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Feather } from "lucide-react";

// Bubbles navigator. Seven floating dark spheres, each holding a feather
// and a category label. Click routes to the category page. Gentle drift
// animation per bubble. Bursting-feather effect deferred per the Warden.

type Bubble = {
  label: string;
  href: string;
  // Position as percentages so the layout responds to viewport. x is centre-x, y is centre-y.
  x: number;
  y: number;
  size: number; // diameter in px at desktop scale
  drift: { x: number[]; y: number[] }; // drift offsets in px
  duration: number; // animation duration seconds
};

const BUBBLES: Bubble[] = [
  { label: "Convention Center", href: "/venues",     x: 30, y: 35, size: 200, drift: { x: [0, 14, -8, 0], y: [0, -10, 6, 0] }, duration: 14 },
  { label: "Experience & Packages", href: "/experience", x: 60, y: 30, size: 220, drift: { x: [0, -12, 10, 0], y: [0, 8, -6, 0] }, duration: 16 },
  { label: "Virtual Tour", href: "#virtual-tour",    x: 16, y: 55, size: 200, drift: { x: [0, 10, -10, 0], y: [0, -12, 4, 0] }, duration: 18 },
  { label: "Activities", href: "/activities",        x: 80, y: 50, size: 200, drift: { x: [0, -10, 8, 0], y: [0, -8, 10, 0] }, duration: 15 },
  { label: "Rooms", href: "/rooms",                  x: 50, y: 56, size: 220, drift: { x: [0, 14, -6, 0], y: [0, 10, -8, 0] }, duration: 17 },
  { label: "Events", href: "/wedding",               x: 34, y: 76, size: 200, drift: { x: [0, -10, 12, 0], y: [0, 6, -8, 0] }, duration: 19 },
  { label: "Dining", href: "/dining",                x: 66, y: 78, size: 200, drift: { x: [0, 12, -8, 0], y: [0, -6, 10, 0] }, duration: 16 },
];

export default function BubblesPage() {
  return (
    <div className="relative w-full min-h-[calc(100vh-2rem)] overflow-hidden bg-black">
      {/* Subtle bubble field background — many small bubbles drifting up */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {Array.from({ length: 40 }).map((_, i) => {
          const left = (i * 37) % 100;
          const top = ((i * 53) % 80) + 10;
          const sz = 6 + ((i * 7) % 14);
          const delay = (i % 10) * 0.4;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full border border-aldo-beige/20"
              style={{ left: `${left}%`, top: `${top}%`, width: sz, height: sz }}
              animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 8 + (i % 6),
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Big seven bubbles */}
      <div className="relative w-full h-screen">
        {BUBBLES.map((b) => (
          <motion.div
            key={b.label}
            className="absolute"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: b.size,
              height: b.size,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ x: b.drift.x, y: b.drift.y }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Link href={b.href} className="group block w-full h-full">
              <div
                className="relative w-full h-full rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  background:
                    "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 28%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,1) 100%)",
                  boxShadow:
                    "inset 0 0 50px rgba(255,255,255,0.08), 0 30px 60px rgba(0,0,0,0.6)",
                }}
              >
                {/* Highlight on top-left of sphere */}
                <div
                  className="absolute top-[12%] left-[16%] w-[36%] h-[20%] rounded-full opacity-70"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                  <Feather
                    className="w-12 h-12 text-aldo-cream/95"
                    strokeWidth={1}
                    style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}
                  />
                  <div
                    className="mt-3 uppercase text-[10px] text-aldo-cream max-w-[140px]"
                    style={{ letterSpacing: "0.22em", lineHeight: 1.4 }}
                  >
                    {b.label}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Click prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none"
      >
        <div className="uppercase text-[11px] text-aldo-cream/85" style={{ letterSpacing: "0.32em" }}>
          Click a bubble to explore
        </div>
      </motion.div>
    </div>
  );
}
