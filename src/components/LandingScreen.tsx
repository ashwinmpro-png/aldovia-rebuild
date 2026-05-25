"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/content";

// Landing screen. Plays the brand video on a visitor's first session.
// Mobile and desktop have separate cuts so the portrait/landscape framing both work.
// Falls back to a quiet wordmark and a single rotating ring if the videos are not yet present.
// Skip-by-default after the first visit, via sessionStorage.

const VIDEO_DESKTOP = "/landing/landing-desktop.mp4";
const VIDEO_DESKTOP_WEBM = "/landing/landing-desktop.webm";
const VIDEO_MOBILE = "/landing/landing-mobile.mp4";
const VIDEO_MOBILE_WEBM = "/landing/landing-mobile.webm";
const POSTER_DESKTOP = "/landing/landing-desktop.jpg";
const POSTER_MOBILE = "/landing/landing-mobile.jpg";

// Six stitched clips run roughly 50 seconds. The safety timer trails the
// natural video end so the landing dismisses cleanly even if the browser
// stalls playback mid-stream. onEnded dismisses on normal completion.
const FALLBACK_MS = 55000;
const STORAGE_KEY = "aldovia.landingSeen";
const MOBILE_BREAKPOINT = 768;

export default function LandingScreen() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (seen) {
      setShow(false);
      return;
    }

    const mobile = window.innerWidth < MOBILE_BREAKPOINT;
    setIsMobile(mobile);

    // Probe for the video file. If absent we drop into the wordmark fallback.
    const src = mobile ? VIDEO_MOBILE : VIDEO_DESKTOP;
    fetch(src, { method: "HEAD" })
      .then((res) => setHasVideo(res.ok))
      .catch(() => setHasVideo(false));

    fallbackTimerRef.current = setTimeout(() => dismiss(), FALLBACK_MS);

    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dismiss = () => {
    if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "1");
    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    setShow(false);
  };

  if (!mounted) return null;

  const desktopSources = (
    <>
      <source src={VIDEO_DESKTOP_WEBM} type="video/webm" />
      <source src={VIDEO_DESKTOP} type="video/mp4" />
    </>
  );
  const mobileSources = (
    <>
      <source src={VIDEO_MOBILE_WEBM} type="video/webm" />
      <source src={VIDEO_MOBILE} type="video/mp4" />
    </>
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {hasVideo === true && (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              poster={isMobile ? POSTER_MOBILE : POSTER_DESKTOP}
              onEnded={dismiss}
              className="absolute inset-0 w-full h-full object-cover"
            >
              {isMobile ? mobileSources : desktopSources}
            </video>
          )}

          {hasVideo === false && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="rounded-full border border-aldo-beige/40"
                style={{ width: 420, height: 420 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              />
            </div>
          )}

          {hasVideo === false && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.75) 80%)",
              }}
            />
          )}

          {hasVideo === false && (
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
          )}

          <button
            onClick={dismiss}
            className="absolute bottom-10 right-10 uppercase text-[11px] text-aldo-beige hover:text-white transition-colors cursor-pointer z-20"
            style={{ letterSpacing: "0.42em" }}
            aria-label="Skip landing"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
