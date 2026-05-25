"use client";

import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

// Bottom-right floating toggle. Sun icon when in day mode, moon when in night.
// Matches the live site's day/night button placement.

export default function NightModeToggle() {
  const { mode, toggle, ready } = useTheme();

  if (!ready) return null;

  const isDay = mode === "day";

  return (
    <button
      onClick={toggle}
      aria-label={isDay ? "Switch to night mode" : "Switch to day mode"}
      title={isDay ? "Switch to night mode" : "Switch to day mode"}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-aldo-cream/95 backdrop-blur text-aldo-bg shadow-lg flex items-center justify-center hover:bg-aldo-beige transition-colors cursor-pointer border border-aldo-beige/40"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDay ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex"
          >
            <Sun className="w-5 h-5" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex"
          >
            <Moon className="w-5 h-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
