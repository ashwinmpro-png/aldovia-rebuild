"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/content";

// Swan-and-feather intro per the Aldovia Wireframe Brief.
// Twelve frames live in /public/intro/ once delivered. The component degrades to a
// quiet wordmark fallback when frames are absent.
// Cap: 1.4 seconds. Skip-by-default after the first session (Black recommendation, Warden approved).

const FRAMES = [
  "/intro/01-bud.png",
  "/intro/02-blooming-bud.png",
  "/intro/03-swan-top.png",
  "/intro/04-swan-profile.png",
  "/intro/05-swan-front.png",
  "/intro/06-wings-spread.png",
  "/intro/07-take-off.png",
  "/intro/08-five-feathers.png",
  "/intro/09-feather-detail.png",
  "/intro/10-feather-water.png",
  "/intro/11-bud-reflection.png",
  "/intro/12-bud-top.png",
];

const TOTAL_MS = 1400;
const STORAGE_KEY = "aldovia.introSeen";

export default function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);
  const [frame, setFrame] = useState(0);
  const [hasFrames, setHasFrames] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY);
    if (seen) {
      setShow(false);
      return;
    }

    // Probe for the first frame. If it 404s the component shows the wordmark fallback.
    const probe = new window.Image();
    probe.src = FRAMES[0];
    probe.onload = () => setHasFrames(true);

    const perFrame = TOTAL_MS / FRAMES.length;
    const tick = setInterval(() => {
      setFrame((f) => Math.min(f + 1, FRAMES.length - 1));
    }, perFrame);

    const dismiss = setTimeout(() => {
      if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "1");
      setShow(false);
    }, TOTAL_MS);

    return () => {
      clearInterval(tick);
      clearTimeout(dismiss);
    };
  }, []);

  const skip = () => {
    if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {hasFrames && (
            <div className="absolute inset-0">
              {FRAMES.map((src, i) => (
                <motion.div
                  key={src}
                  animate={{
                    opacity: i === frame ? 1 : 0,
                    scale: i === frame ? 1 : 0.985,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden
                >
                  {/* Plain img keeps the splash light. Optimisation is unnecessary for a 1.4s overlay. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="max-w-full max-h-full object-contain" />
                </motion.div>
              ))}
            </div>
          )}

          {!hasFrames && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="rounded-full border border-aldo-beige/40"
                style={{ width: 420, height: 420 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              />
            </div>
          )}

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 80%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative z-10 text-center px-6 pointer-events-none"
          >
            <h1
              className="font-display font-light text-5xl md:text-7xl text-aldo-cream"
              style={{ letterSpacing: "0.2em" }}
            >
              ALDOVIA
            </h1>
            <div
              className="mt-3 uppercase text-xs text-aldo-muted"
              style={{ letterSpacing: "0.32em" }}
            >
              {BRAND.tagline}
            </div>
          </motion.div>

          <button
            onClick={skip}
            className="absolute bottom-10 uppercase text-[11px] text-aldo-beige hover:text-white transition-colors cursor-pointer"
            style={{ letterSpacing: "0.42em" }}
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
