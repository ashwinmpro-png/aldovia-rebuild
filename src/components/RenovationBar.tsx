"use client";

import { useEffect, useState } from "react";
import { RENOVATION_NOTICE } from "@/lib/content";

// Persistent renovation alert under the navbar on every page.
// Marquee text scrolls from right to left, repeated for continuity.
// Dismissible. Hidden once a visitor closes it for the session.

const STORAGE_KEY = "aldovia.renovationDismissed";

export default function RenovationBar() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY)) {
      setShow(false);
    }
  }, []);

  const dismiss = () => {
    if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
  };

  if (!mounted || !show) return null;

  // Build the repeating phrase. Three copies make the loop visually seamless on wide screens.
  const phrase = (
    <span className="mx-12 inline-block">{RENOVATION_NOTICE}</span>
  );

  return (
    <div className="fixed left-0 right-0 top-[78px] md:top-[122px] w-full bg-[#3d2817] text-aldo-beige overflow-hidden text-[12px] uppercase tracking-[0.18em] py-2.5 z-30 border-y border-[#5a3e25]">
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        <div className="marquee-content flex shrink-0">
          {phrase}
          {phrase}
          {phrase}
          {phrase}
        </div>
        <div className="marquee-content flex shrink-0" aria-hidden>
          {phrase}
          {phrase}
          {phrase}
          {phrase}
        </div>
      </div>

      <button
        onClick={dismiss}
        aria-label="Dismiss renovation notice"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-aldo-beige/70 hover:text-aldo-cream"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 5l14 14M19 5 5 19" />
        </svg>
      </button>

      <style jsx>{`
        .marquee-track {
          animation: marquee 38s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
