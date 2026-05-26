"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Images, Maximize2, Users, BedDouble } from "lucide-react";
import { ROOMS } from "@/lib/content";

// Each room is a full section. Left column carries a three-image gallery
// (one hero + two stacked details). Right column carries the copy
// (category, name, spec chips, body, CTAs). Sections alternate so the eye
// keeps moving. A sticky right-rail navigator tracks the current room and
// jumps to any section.

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function RoomsPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((r) => r === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO - quieter than other pages, matches the live's pacing */}
      <RoomsHero />

      {/* INTRO */}
      <section className="py-20 md:py-24 px-6 text-center">
        <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
          <div
            className="uppercase text-[10px] mb-4 text-aldo-beige"
            style={{ letterSpacing: "0.42em" }}
          >
            Room Types at Aldovia Resort
          </div>
          <h2 className="font-display font-light text-3xl md:text-5xl text-aldo-cream max-w-3xl mx-auto leading-[1.1] text-balance">
            From a considered king bed to a private residence in the sky.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-aldo-muted leading-relaxed">
            Six categories. Each one designed around a different idea of comfort.
            All of them set in seventy acres, ten minutes from the airport.
          </p>
        </motion.div>
      </section>

      {/* ROOMS */}
      <div className="relative">
        {/* Sticky right-rail room navigator */}
        <nav
          aria-label="Room navigator"
          className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-3"
        >
          {ROOMS.map((r, i) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              className="group flex items-center gap-3 justify-end"
              aria-label={`Jump to ${r.name}`}
            >
              <span
                className={`uppercase text-[10px] text-aldo-beige transition-opacity duration-300 ${
                  active === i ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                }`}
                style={{ letterSpacing: "0.32em" }}
              >
                {r.name}
              </span>
              <span
                className={`block rounded-full transition-all duration-500 ${
                  active === i
                    ? "w-3 h-3 bg-aldo-beige"
                    : "w-2 h-2 bg-aldo-beige/30 group-hover:bg-aldo-beige/60"
                }`}
              />
            </a>
          ))}
        </nav>

        {ROOMS.map((room, i) => {
          const isOdd = i % 2 === 1;
          return (
            <section
              key={room.id}
              id={room.id}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
              className={`py-20 md:py-32 px-6 ${i % 2 === 0 ? "" : "bg-aldo-bg-2"}`}
            >
              <div className="max-w-7xl mx-auto">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isOdd ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* THREE-IMAGE GALLERY */}
                  <motion.div
                    initial={{ opacity: 0, x: isOdd ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:col-span-7 grid grid-cols-3 gap-3 md:gap-4 h-[460px] md:h-[600px]"
                  >
                    <div className="col-span-2 row-span-2 relative overflow-hidden rounded-sm group">
                      <Image
                        src={room.images[0]}
                        alt={`${room.name} hero`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-sm group">
                      <Image
                        src={room.images[1] ?? room.images[0]}
                        alt={`${room.name} detail 1`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-sm group">
                      <Image
                        src={room.images[2] ?? room.images[0]}
                        alt={`${room.name} detail 2`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                  {/* COPY */}
                  <div className="lg:col-span-5">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.8, delay: 0.15 }}
                      className="uppercase text-[10px] text-aldo-beige"
                      style={{ letterSpacing: "0.42em" }}
                    >
                      {room.category}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.9, delay: 0.25 }}
                      className="font-display font-light text-4xl md:text-5xl text-aldo-cream mt-3"
                    >
                      {room.name}
                    </motion.h3>

                    {/* SPEC CHIPS */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.8, delay: 0.45 }}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      <SpecChip Icon={Maximize2} label={room.size} />
                      <SpecChip Icon={Users} label={room.occupancy} />
                      <SpecChip Icon={BedDouble} label={room.bed} />
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.9, delay: 0.6 }}
                      className="mt-6 text-sm md:text-base text-aldo-muted leading-relaxed"
                    >
                      {room.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.8, delay: 0.85 }}
                      className="mt-8 flex flex-wrap gap-3"
                    >
                      <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-7 py-[14px] bg-aldo-beige text-aldo-bg text-[11px] uppercase border border-aldo-beige hover:bg-transparent hover:text-aldo-cream transition-colors rounded-full"
                        style={{ letterSpacing: "0.22em" }}
                      >
                        Book Your Stay <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={`#${room.id}-gallery`}
                        className="inline-flex items-center gap-2 px-7 py-[14px] border border-aldo-beige/60 text-aldo-cream text-[11px] uppercase hover:bg-aldo-beige hover:text-aldo-bg transition-colors rounded-full"
                        style={{ letterSpacing: "0.22em" }}
                      >
                        <Images className="w-4 h-4" />
                        Gallery
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div
            className="uppercase text-[10px] mb-4 text-aldo-beige"
            style={{ letterSpacing: "0.42em" }}
          >
            Plan Your Stay
          </div>
          <h2 className="font-display font-light text-3xl md:text-5xl text-aldo-cream">
            Tell us the dates. We will take it from here.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-[14px] bg-aldo-beige text-aldo-bg text-[11px] uppercase border border-aldo-beige hover:bg-transparent hover:text-aldo-cream transition-colors rounded-full"
              style={{ letterSpacing: "0.22em" }}
            >
              Check Availability <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center px-8 py-[14px] border border-aldo-beige/60 text-aldo-cream text-[11px] uppercase hover:bg-aldo-beige hover:text-aldo-bg transition-colors rounded-full"
              style={{ letterSpacing: "0.22em" }}
            >
              Explore Packages
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

function SpecChip({ Icon, label }: { Icon: typeof Maximize2; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 border border-aldo-beige/25 rounded-full text-xs text-aldo-cream/90"
      style={{ letterSpacing: "0.08em" }}
    >
      <Icon className="w-3 h-3 text-aldo-beige" />
      {label}
    </span>
  );
}

function RoomsHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-[70vh] min-h-[480px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={ROOMS[0].images[0]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,13,11,0.55) 0%, rgba(14,13,11,0.25) 35%, rgba(14,13,11,0.95) 100%)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-end pb-20 md:pb-28 px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="uppercase text-[10px] text-aldo-beige mb-6"
          style={{ letterSpacing: "0.42em" }}
        >
          Rooms & Suites
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="font-display font-light text-aldo-cream max-w-4xl text-balance"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4.6rem)", lineHeight: 1.1 }}
        >
          Luxury Rooms &amp; Suites in Bangalore
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-5 max-w-xl text-sm md:text-base text-aldo-muted leading-relaxed"
        >
          Six categories of stay. One standard.
        </motion.p>
        <div className="w-16 h-px bg-aldo-beige opacity-60 mt-8" />
      </motion.div>
    </section>
  );
}
