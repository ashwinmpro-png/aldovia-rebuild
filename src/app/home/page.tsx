"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Video,
  MapPin,
  Plus,
  Minus,
  Play,
} from "lucide-react";
import { useTheme } from "@/lib/theme-context";

// Three Escape/Celebrate/Gather cards live on a cream band. Source per ASSETS.md.
const SIGNAL_CARDS = [
  {
    title: "Escape",
    eyebrow: "Stay & Leisure",
    body: "Rejuvenate in nature's lap with premium luxury.",
    image: "/assets/home/escape.jpg",
    href: "/rooms",
  },
  {
    title: "Celebrate",
    eyebrow: "Wedding & Social Events",
    body: "Grand lawns and ballrooms for your timeless moments.",
    image: "/assets/home/celebrate.jpg",
    href: "/wedding",
  },
  {
    title: "Gather",
    eyebrow: "Corporate & Conventions",
    body: "World-class venues for impactful gatherings.",
    image: "/assets/home/gather.jpg",
    href: "/corporate",
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "What is the check-in and check-out time?",
    a: "Check-in begins at 2:00 PM, check-out is at 12:00 noon. Early check-in and late check-out can be arranged on request, subject to availability.",
  },
  {
    q: "What room categories are available at Aldovia?",
    a: "Six categories, from the Deluxe Room and Luxury Room to the 1 Bedroom Suite, 2 Bedroom Suite, Deluxe Suite, and the Executive Suite — our most expansive accommodation.",
  },
  {
    q: "Is breakfast included with the room?",
    a: "Yes. All bookings made directly through Aldovia include a complimentary buffet breakfast at Ambrosia, served daily from 7:00 AM to 11:00 AM.",
  },
  {
    q: "What is the cancellation and refund policy?",
    a: "Cancellations made at least 72 hours before the check-in date receive a full refund. Cancellations within 72 hours of arrival are charged for the first night of stay.",
  },
  {
    q: "What spa and wellness facilities does Aldovia offer?",
    a: "Exotica Spa & Wellness offers Ayurvedic therapies, aromatherapy, signature massages, body scrubs, facial treatments, and dedicated couples spa suites. Open daily from 9:00 AM to 9:00 PM.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { mode } = useTheme();
  const isNight = mode === "night";

  return (
    <>
      {/* HERO with drone video + stats overlay. Source swaps with theme. */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          key={mode}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/hero/drone-property.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {isNight ? (
            <source src="/assets/hero/home-hero-night.webm" type="video/webm" />
          ) : (
            <source src="/assets/hero/home-hero-day.mp4" type="video/mp4" />
          )}
        </video>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,13,11,0.55) 0%, rgba(14,13,11,0.25) 35%, rgba(14,13,11,0.92) 100%)",
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="uppercase text-[10px] text-aldo-beige mb-6"
            style={{ letterSpacing: "0.42em" }}
          >
            Where Grace Finds You
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-display font-light text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-aldo-cream max-w-5xl text-balance"
          >
            Aldovia Resort in Bangalore
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-aldo-muted"
          >
            A destination resort 10 minutes from Kempegowda International Airport, Bangalore.
            70 acres of world-class venues, refined dining, and hospitality that arrives before you ask for it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 px-8 py-[14px] bg-aldo-beige text-aldo-bg text-[11px] uppercase border border-aldo-beige hover:bg-transparent hover:text-aldo-cream transition-colors"
              style={{ letterSpacing: "0.22em" }}
            >
              Book Your Stay <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#explore"
              className="inline-flex items-center gap-2 px-8 py-[14px] border border-aldo-beige text-aldo-cream text-[11px] uppercase hover:bg-aldo-beige hover:text-aldo-bg transition-colors"
              style={{ letterSpacing: "0.22em" }}
            >
              Explore the Resort
            </Link>
          </motion.div>

          {/* Stats overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-12 md:gap-20"
          >
            <div className="text-center">
              <div className="font-display font-light text-3xl md:text-4xl text-aldo-cream">70 Acres</div>
              <div
                className="uppercase text-[10px] mt-1 text-aldo-beige"
                style={{ letterSpacing: "0.32em" }}
              >
                Lush Greenery
              </div>
            </div>
            <div className="w-px h-12 bg-aldo-beige/40" />
            <div className="text-center">
              <div className="font-display font-light text-3xl md:text-4xl text-aldo-cream">5,000+</div>
              <div
                className="uppercase text-[10px] mt-1 text-aldo-beige"
                style={{ letterSpacing: "0.32em" }}
              >
                Capacity
              </div>
            </div>
          </motion.div>

          {/* Swipe up prompt */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 uppercase text-[10px] text-aldo-cream/70"
            style={{ letterSpacing: "0.42em" }}
          >
            Swipe Up
          </motion.div>
        </div>
      </section>

      {/* ESCAPE / CELEBRATE / GATHER on cream */}
      <section className="bg-[#efe6cf] py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {SIGNAL_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <Link
                href={card.href}
                className="group block relative overflow-hidden rounded-xl h-[440px]"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1800ms] group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(14,13,11,0.92) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-display text-4xl md:text-5xl text-aldo-cream">
                    {card.title}
                  </h3>
                  <div
                    className="uppercase text-[10px] mt-3 text-aldo-beige"
                    style={{ letterSpacing: "0.32em" }}
                  >
                    {card.eyebrow}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-aldo-cream/85 max-w-xs">
                    {card.body}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPLORE THE RESORT */}
      <section id="explore" className="bg-[#efe6cf] py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-light text-4xl md:text-5xl text-[#3d2817] text-center mb-16">
            Explore the Resort
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Virtual Tour - main card */}
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden h-[480px] lg:h-auto">
              <Image
                src="/assets/hero/drone-property.jpg"
                alt="Aldovia property"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <Video className="w-8 h-8 text-aldo-cream mb-4" />
                <div
                  className="uppercase text-[10px] text-aldo-beige mb-4"
                  style={{ letterSpacing: "0.42em" }}
                >
                  Immersive Experience
                </div>
                <h3 className="font-display font-light text-3xl md:text-4xl text-aldo-cream">
                  Before You Arrive
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-aldo-cream/85">
                  Experience our venues, rooms, and amenities in stunning 360° detail.
                </p>
                <a
                  href="#virtual-tour"
                  className="mt-8 inline-flex items-center px-8 py-[14px] bg-aldo-cream text-aldo-bg text-[11px] uppercase hover:bg-aldo-beige transition-colors"
                  style={{ letterSpacing: "0.22em" }}
                >
                  Enter Virtual Tour
                </a>
                <div className="mt-3 text-[11px] text-aldo-cream/70">
                  Loads in 5-10 seconds · Exit anytime
                </div>
              </div>
            </div>

            {/* Two video cards stacked */}
            <div className="lg:col-span-2 grid grid-rows-2 gap-6 min-h-[480px]">
              {[
                { title: "Wedding Setup Walkthrough", poster: "/assets/home/celebrate.jpg" },
                { title: "Corporate Hall Tour", poster: "/assets/home/gather.jpg" },
              ].map((v) => (
                <div
                  key={v.title}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={v.poster}
                    alt={v.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-aldo-cream/95 flex items-center justify-center">
                      <Play className="w-6 h-6 text-aldo-bg ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="font-display text-xl text-aldo-cream">
                      {v.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#efe6cf] py-20 md:py-28 px-6 border-t border-[#3d2817]/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="uppercase text-[10px] text-[#3d2817] mb-4"
              style={{ letterSpacing: "0.42em" }}
            >
              Frequently Asked
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-[#3d2817]">
              Questions, Answered
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="border border-[#3d2817]/20 rounded-xl overflow-hidden bg-[#f5ecd4]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#ece2c1] transition-colors cursor-pointer"
                  >
                    <span className="font-display text-lg md:text-xl text-[#3d2817]">
                      {item.q}
                    </span>
                    <span className="ml-4 w-8 h-8 rounded-full bg-[#3d2817] text-aldo-beige flex items-center justify-center flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm md:text-base leading-relaxed text-[#5a4a3a]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERFECTLY LOCATED */}
      <section className="bg-[#efe6cf] py-20 md:py-28 px-6 border-t border-[#3d2817]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-light text-4xl md:text-5xl text-[#3d2817]">
            Perfectly Located
          </h2>
          <p className="mt-4 text-base text-[#5a4a3a]">Easily accessible</p>

          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f5ecd4] border border-[#3d2817]/15">
            <MapPin className="w-4 h-4 text-red-700" />
            <span className="text-sm text-[#3d2817]">15 minutes from Bangalore Airport</span>
          </div>

          <div className="mt-10 h-[360px] md:h-[420px] overflow-hidden rounded-2xl border border-[#3d2817]/15">
            <iframe
              title="Aldovia Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.6800%2C13.2200%2C77.7500%2C13.2700&layer=mapnik"
              className="w-full h-full"
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-[14px] bg-[#3d2817] text-aldo-beige text-[11px] uppercase hover:bg-[#5a3e25] transition-colors"
              style={{ letterSpacing: "0.22em" }}
            >
              Check Availability <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/wedding"
              className="inline-flex items-center px-8 py-[14px] border border-[#3d2817] text-[#3d2817] text-[11px] uppercase hover:bg-[#3d2817] hover:text-aldo-beige transition-colors"
              style={{ letterSpacing: "0.22em" }}
            >
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
