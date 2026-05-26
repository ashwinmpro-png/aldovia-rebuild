"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Users, BedDouble } from "lucide-react";
import { ROOMS } from "@/lib/content";

// Ported verbatim from the Emergent push at ashwinmpro-png/Aldovia.
// Same animation timing, easing, layoutId pill indicator, expanding photo
// accordion with flexGrow hover, right info panel with animated underline.
// Assets remain the local /assets/rooms/<id>/hero.jpg fallbacks.

function PillButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-7 py-3 rounded-full text-[11px] uppercase transition-all duration-300 inline-flex items-center"
      style={{
        border: "1px solid var(--color-brown-text)",
        color: "var(--color-brown-text)",
        background: "transparent",
        letterSpacing: "0.28em",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--color-brown-text)";
        e.currentTarget.style.color = "var(--color-cream-bg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--color-brown-text)";
      }}
    >
      {children}
    </Link>
  );
}

// ExpandingPhotoColumn — portrait photo that visually expands when hovered
// (flex-grow), pushing siblings to compress. If nothing is hovered the
// "active" (middle by default) card stays slightly larger so the row
// never feels static. Mirrors the hover-accordion pattern on aldovia.in/rooms.
function ExpandingPhotoColumn({
  src,
  isHovered,
  isDefaultActive,
  onHover,
  onLeave,
  delay = 0,
}: {
  src: string;
  isHovered: boolean;
  isDefaultActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay?: number;
}) {
  const growValue = isHovered ? 2.6 : isDefaultActive ? 1.2 : 1;

  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onTouchStart={onHover}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, flexGrow: growValue }}
      transition={{
        opacity: { duration: 0.9, delay, ease: [0.22, 0.61, 0.36, 1] },
        y: { duration: 0.9, delay, ease: [0.22, 0.61, 0.36, 1] },
        flexGrow: { duration: 0.85, ease: [0.22, 0.61, 0.36, 1] },
      }}
      className="relative overflow-hidden rounded-[18px] cursor-pointer group"
      style={{
        flexBasis: 0,
        minWidth: 0,
        height: "clamp(420px, 58vh, 640px)",
        boxShadow: isHovered
          ? "0 28px 70px -28px rgba(61, 40, 23, 0.55)"
          : "0 18px 50px -28px rgba(61, 40, 23, 0.4)",
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: isHovered ? 1.12 : 1 }}
        transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
      </motion.div>

      {/* gradient veil — softens when expanded so the photo shines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 0 : 0.18 }}
        transition={{ duration: 0.6 }}
        style={{
          background:
            "linear-gradient(180deg, rgba(61,40,23,0.0) 40%, rgba(61,40,23,0.28) 100%)",
        }}
      />

      {/* subtle bottom border highlight on hover */}
      <motion.div
        className="absolute left-6 right-6 bottom-5 h-px origin-left"
        animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ background: "rgba(255,255,255,0.75)" }}
      />
    </motion.div>
  );
}

export default function RoomsPage() {
  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const room = ROOMS[active];
  const prev = () => {
    setActive((i) => (i - 1 + ROOMS.length) % ROOMS.length);
    setHoveredIdx(null);
  };
  const next = () => {
    setActive((i) => (i + 1) % ROOMS.length);
    setHoveredIdx(null);
  };

  // Default "active" expanded card when nothing is hovered (middle)
  const defaultActiveIdx = 1;

  return (
    <section
      className="relative py-12 md:py-16 px-4 md:px-8"
      style={{ background: "var(--color-cream-bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Tab pill bar */}
        <div
          className="flex items-center justify-center mx-auto mb-10 overflow-x-auto no-scrollbar rounded-full"
          style={{
            border: "1px solid rgba(61,40,23,0.45)",
            background: "transparent",
            maxWidth: "fit-content",
            padding: 6,
          }}
        >
          {ROOMS.map((r, i) => {
            const selected = i === active;
            return (
              <button
                key={r.id}
                onClick={() => {
                  setActive(i);
                  setHoveredIdx(null);
                }}
                className="relative px-6 md:px-8 py-3 text-[12px] md:text-[13px] whitespace-nowrap transition-colors duration-300 rounded-full font-fraunces"
                style={{
                  color: selected
                    ? "var(--color-cream-bg)"
                    : "var(--color-brown-text)",
                  letterSpacing: "0.04em",
                }}
              >
                {selected && (
                  <motion.span
                    layoutId="roomTabPill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--color-banner-bg)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{r.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main showcase row */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous room"
            className="hidden lg:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center transition-colors"
            style={{
              border: "1px solid rgba(61,40,23,0.3)",
              color: "var(--color-brown-text)",
              background: "rgba(244,236,212,0.75)",
              backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-brown-text)";
              e.currentTarget.style.color = "var(--color-cream-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(244,236,212,0.75)";
              e.currentTarget.style.color = "var(--color-brown-text)";
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Expanding photo accordion */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.id}
                className="flex items-stretch gap-3 md:gap-4 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {[0, 1, 2].map((idx) => (
                  <ExpandingPhotoColumn
                    key={`${room.id}-${idx}`}
                    src={room.images[idx % room.images.length]}
                    isHovered={hoveredIdx === idx}
                    isDefaultActive={
                      hoveredIdx === null && idx === defaultActiveIdx
                    }
                    onHover={() => setHoveredIdx(idx)}
                    onLeave={() =>
                      setHoveredIdx((curr) => (curr === idx ? null : curr))
                    }
                    delay={0.1 + idx * 0.12}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right info panel */}
          <div className="lg:col-span-5 pl-2 lg:pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <h1
                  className="font-fraunces text-5xl md:text-6xl leading-[1.05] mb-3"
                  style={{ color: "var(--color-brown-text)", fontWeight: 400 }}
                >
                  {room.name}
                </h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  className="h-[2px] w-28 mb-7 origin-left"
                  style={{
                    background: "var(--color-brown-text)",
                    opacity: 0.85,
                  }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="text-[15px] leading-[1.7] mb-8 max-w-[560px]"
                  style={{ color: "var(--color-brown-text)" }}
                >
                  {room.description}
                </motion.p>

                {/* Specs row */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="grid grid-cols-3 gap-6 mb-10 max-w-[460px]"
                >
                  <div className="flex items-start gap-2.5">
                    <Maximize
                      className="w-4 h-4 mt-0.5"
                      style={{ color: "var(--color-brown-text)" }}
                    />
                    <div
                      className="text-[13px] leading-tight"
                      style={{ color: "var(--color-brown-text)" }}
                    >
                      {room.size}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Users
                      className="w-4 h-4 mt-0.5"
                      style={{ color: "var(--color-brown-text)" }}
                    />
                    <div
                      className="text-[13px] leading-tight"
                      style={{ color: "var(--color-brown-text)" }}
                    >
                      {room.occupancy}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BedDouble
                      className="w-4 h-4 mt-0.5"
                      style={{ color: "var(--color-brown-text)" }}
                    />
                    <div
                      className="text-[13px] leading-tight"
                      style={{ color: "var(--color-brown-text)" }}
                    >
                      {room.bed}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <PillButton href="/contact-us">Book Your Stay</PillButton>
                  <PillButton href={`#${room.id}-gallery`}>Gallery</PillButton>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next room"
            className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center transition-colors"
            style={{
              border: "1px solid rgba(61,40,23,0.3)",
              color: "var(--color-brown-text)",
              background: "rgba(244,236,212,0.75)",
              backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-brown-text)";
              e.currentTarget.style.color = "var(--color-cream-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(244,236,212,0.75)";
              e.currentTarget.style.color = "var(--color-brown-text)";
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile prev/next */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              border: "1px solid rgba(61,40,23,0.35)",
              color: "var(--color-brown-text)",
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              border: "1px solid rgba(61,40,23,0.35)",
              color: "var(--color-brown-text)",
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
