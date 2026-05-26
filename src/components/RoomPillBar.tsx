"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ROOMS } from "@/lib/content";

// Horizontal pill bar listing all six room categories with scrollable
// arrows. The active room renders in serif bold; the others in uppercase
// sans tracking. Ported from ashwinmpro-png/aldovia-build.

export function RoomPillBar({ activeId }: { activeId: string }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto max-w-[1180px] w-full px-12 md:px-14">
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Previous room"
        disabled={!canPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        style={{
          background: "var(--color-cream-bg)",
          border: "1px solid rgba(61,40,23,0.2)",
          color: "var(--color-brown-text)",
        }}
        onMouseEnter={(e) => {
          if (e.currentTarget.disabled) return;
          e.currentTarget.style.background = "var(--color-brown-text)";
          e.currentTarget.style.color = "var(--color-cream-bg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--color-cream-bg)";
          e.currentTarget.style.color = "var(--color-brown-text)";
        }}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Next room"
        disabled={!canNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        style={{
          background: "var(--color-cream-bg)",
          border: "1px solid rgba(61,40,23,0.2)",
          color: "var(--color-brown-text)",
        }}
        onMouseEnter={(e) => {
          if (e.currentTarget.disabled) return;
          e.currentTarget.style.background = "var(--color-brown-text)";
          e.currentTarget.style.color = "var(--color-cream-bg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--color-cream-bg)";
          e.currentTarget.style.color = "var(--color-brown-text)";
        }}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div
        ref={scrollerRef}
        className="flex items-center justify-center md:justify-between gap-6 md:gap-8 overflow-x-auto px-2 py-3 rounded-full no-scrollbar"
        style={{
          background: "rgba(61,40,23,0.05)",
          border: "1px solid rgba(61,40,23,0.15)",
          boxShadow: "0 4px 14px rgba(73,38,28,0.08)",
        }}
        role="tablist"
        aria-label="Room categories"
      >
        {ROOMS.map((room) => {
          const isActive = room.id === activeId;
          return (
            <Link
              key={room.id}
              href={`/rooms/${room.id}`}
              prefetch={false}
              role="tab"
              aria-selected={isActive}
              className={
                isActive
                  ? "font-fraunces whitespace-nowrap text-[15px] md:text-[16px]"
                  : "uppercase whitespace-nowrap text-[11px] md:text-[12px] transition-colors hover:opacity-90"
              }
              style={
                isActive
                  ? { color: "var(--color-brown-text)", fontWeight: 400 }
                  : { color: "var(--color-brown-soft)", letterSpacing: "0.16em" }
              }
            >
              {room.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
