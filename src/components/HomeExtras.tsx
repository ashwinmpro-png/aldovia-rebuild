"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ABOUT_STATS,
  ABOUT_STORY,
  ROOMS,
  DINING,
  TESTIMONIALS,
  CONTACT_INFO,
} from "@/lib/content";

// Sections appended after the canonical home HTML blob. Each section keeps the
// cream palette, Fraunces serif headlines, and framer-motion fade-up on scroll
// so the page reads like one continuous body of work, not a parsed shell with
// React bolted on. Order: Story + Stats, Rooms preview, Dining preview,
// Testimonials, FAQ, Perfectly Located.

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const FAQS = [
  {
    q: "What are the check-in and check-out timings?",
    a: "Check-in opens at 2:00 PM and check-out closes at 12:00 noon. Early check-in and late check-out are offered subject to availability and may carry an additional charge.",
  },
  {
    q: "What room categories do you offer?",
    a: "Six categories across rooms and suites. Deluxe Room, Luxury Room, 1 Bedroom Suite, 2 Bedroom Suite, Deluxe Suite, and the Presidential Suite. Sizes range from 350 to 1,846 square feet.",
  },
  {
    q: "Is breakfast included in the stay?",
    a: "Breakfast is included on most rate plans. It is served at Ambrosia, our multi-cuisine restaurant, from 7:00 AM to 11:00 AM. Your booking confirmation will indicate inclusions.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellation policies vary by rate plan and date of stay. Standard reservations allow cancellation up to 48 hours before arrival without charge. Peak season and group bookings may carry separate terms.",
  },
  {
    q: "Do you offer spa and wellness services?",
    a: "Yes. Our wellness centre offers Ayurvedic therapies, couples treatments, and a full menu of restorative experiences. Bookings are recommended in advance through the concierge.",
  },
];

export default function HomeExtras() {
  return (
    <div className="bg-cream-bg text-brown-text">
      <StorySection />
      <RoomsPreview />
      <DiningPreview />
      <TestimonialsBlock />
      <FaqBlock />
      <LocatedBlock />
    </div>
  );
}

function StorySection() {
  const featured = ABOUT_STORY.slice(0, 2);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <motion.div {...fadeUp}>
          <p
            className="text-[10px] uppercase mb-6 text-brown-65"
            style={{ letterSpacing: "0.42em" }}
          >
            The Aldovia Story
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-brown-text">
            Where seventy acres
            <br />
            become an hour
            <br />
            away from everything.
          </h2>
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <div className="space-y-6 text-[15px] md:text-base leading-relaxed text-brown-soft">
            {featured.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-3 mt-10 uppercase text-[11px] text-brown-text border border-brown-text/70 rounded-full px-7 py-3 transition-colors hover:bg-brown-text hover:text-cream"
            style={{ letterSpacing: "0.22em" }}
          >
            Read the full story
            <span aria-hidden>&rarr;</span>
          </Link>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 mt-20 md:mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-brown-text/20 rounded-3xl overflow-hidden border border-brown-text/15">
          {ABOUT_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="bg-cream-bg p-10 md:p-14 text-center"
            >
              <div className="font-display font-light text-5xl md:text-6xl text-brown-text">
                {s.value}
                <span className="text-[var(--color-gold,#c9a84c)]">{s.suffix}</span>
              </div>
              <div
                className="mt-4 text-[11px] uppercase text-brown-65"
                style={{ letterSpacing: "0.32em" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomsPreview() {
  // Three rooms that read as a ladder: a room, a suite, the flagship.
  const featured = ROOMS.filter((r) =>
    ["deluxe-room", "1-bedroom-suite", "executive-suite"].includes(r.id)
  );

  return (
    <section className="relative py-24 md:py-32 border-t border-brown-text/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div {...fadeUp}>
            <p
              className="text-[10px] uppercase mb-5 text-brown-65"
              style={{ letterSpacing: "0.42em" }}
            >
              Stay
            </p>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.08] text-brown-text max-w-xl">
              Rooms that learn the rhythm of your stay.
            </h2>
          </motion.div>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-3 self-start md:self-auto uppercase text-[11px] text-brown-text border border-brown-text/70 rounded-full px-7 py-3 transition-colors hover:bg-brown-text hover:text-cream"
            style={{ letterSpacing: "0.22em" }}
          >
            All rooms &amp; suites
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((r, i) => (
            <motion.div
              key={r.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-cream-bg border border-brown-text/15"
            >
              <Link href={`/rooms/${r.id}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-brown-text/5">
                  <Image
                    src={r.images[0]}
                    alt={r.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-text/55 via-brown-text/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-cream">
                    <div
                      className="text-[10px] uppercase opacity-85"
                      style={{ letterSpacing: "0.32em" }}
                    >
                      {r.category}
                    </div>
                    <div className="font-display font-light text-2xl md:text-[26px] mt-2">
                      {r.name}
                    </div>
                  </div>
                </div>
                <div className="px-6 py-7">
                  <p className="text-sm leading-relaxed text-brown-soft line-clamp-3">
                    {r.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-[11px] uppercase text-brown-65" style={{ letterSpacing: "0.22em" }}>
                    <span>{r.size}</span>
                    <span className="text-brown-text">View room &rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiningPreview() {
  const featured = DINING.filter((d) =>
    ["ambrosia", "oasis", "mirage"].includes(d.id)
  );

  return (
    <section className="relative py-24 md:py-32 border-t border-brown-text/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div {...fadeUp}>
            <p
              className="text-[10px] uppercase mb-5 text-brown-65"
              style={{ letterSpacing: "0.42em" }}
            >
              Dining
            </p>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.08] text-brown-text max-w-xl">
              Three kitchens. One standard.
            </h2>
          </motion.div>
          <Link
            href="/dining"
            className="inline-flex items-center gap-3 self-start md:self-auto uppercase text-[11px] text-brown-text border border-brown-text/70 rounded-full px-7 py-3 transition-colors hover:bg-brown-text hover:text-cream"
            style={{ letterSpacing: "0.22em" }}
          >
            Explore dining
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((d, i) => (
            <motion.div
              key={d.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-cream-bg border border-brown-text/15"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-brown-text/5">
                <Image
                  src={d.images[0]}
                  alt={d.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-6 py-7">
                <div
                  className="text-[10px] uppercase text-brown-65"
                  style={{ letterSpacing: "0.32em" }}
                >
                  {d.cuisine}
                </div>
                <div className="font-display font-light text-2xl md:text-[26px] mt-2 text-brown-text">
                  {d.name}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brown-soft line-clamp-3">
                  {d.description}
                </p>
                <div
                  className="mt-6 text-[11px] uppercase text-brown-65"
                  style={{ letterSpacing: "0.22em" }}
                >
                  {d.timings}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsBlock() {
  const featured = TESTIMONIALS.slice(0, 4);
  return (
    <section className="relative py-24 md:py-32 border-t border-brown-text/10 bg-brown-text text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p
            className="text-[10px] uppercase mb-5 opacity-75"
            style={{ letterSpacing: "0.42em" }}
          >
            Said about Aldovia
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.08] mx-auto max-w-3xl">
            The room you stay in sets the tone for everything else.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((t, i) => (
            <motion.figure
              key={t.author}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="rounded-3xl border border-cream/20 bg-cream/[0.04] backdrop-blur-sm p-8 md:p-10"
            >
              <div
                className="text-[var(--color-gold,#c9a84c)] text-sm tracking-[0.3em] mb-5"
                aria-label={`${t.rating} out of 5`}
              >
                {"★".repeat(t.rating)}
              </div>
              <blockquote className="font-display font-light text-lg md:text-[22px] leading-[1.45]">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption
                className="mt-6 text-[11px] uppercase opacity-75"
                style={{ letterSpacing: "0.32em" }}
              >
                {t.author}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqBlock() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-32 border-t border-brown-text/10">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p
            className="text-[10px] uppercase mb-5 text-brown-65"
            style={{ letterSpacing: "0.42em" }}
          >
            Before you arrive
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.08] text-brown-text">
            The answers that come up most often.
          </h2>
        </motion.div>

        <div className="divide-y divide-brown-text/15 border-y border-brown-text/15">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left"
                >
                  <span className="font-display text-lg md:text-xl text-brown-text">
                    {f.q}
                  </span>
                  <span
                    className={`inline-flex w-9 h-9 shrink-0 items-center justify-center rounded-full border border-brown-text/40 text-brown-text transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 text-[15px] leading-relaxed text-brown-soft max-w-3xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LocatedBlock() {
  return (
    <section className="relative py-24 md:py-32 border-t border-brown-text/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div {...fadeUp}>
          <p
            className="text-[10px] uppercase mb-5 text-brown-65"
            style={{ letterSpacing: "0.42em" }}
          >
            Perfectly Located
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.08] text-brown-text max-w-xl">
            Ten minutes from the runway. Forty minutes from the city.
          </h2>
          <p className="mt-6 text-[15px] md:text-base leading-relaxed text-brown-soft max-w-xl">
            Set in Swiss Town, Devanahalli, Aldovia sits a short drive from
            Kempegowda International Airport and a calm distance from the noise
            of Bangalore. The arrival itself is part of the stay.
          </p>

          <dl className="mt-10 grid sm:grid-cols-2 gap-y-6 gap-x-10 text-sm">
            <div>
              <dt
                className="text-[10px] uppercase text-brown-65 mb-1"
                style={{ letterSpacing: "0.32em" }}
              >
                Address
              </dt>
              <dd className="text-brown-text">{CONTACT_INFO.address}</dd>
            </div>
            <div>
              <dt
                className="text-[10px] uppercase text-brown-65 mb-1"
                style={{ letterSpacing: "0.32em" }}
              >
                Reservations
              </dt>
              <dd className="text-brown-text">
                <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`} className="hover:underline">
                  {CONTACT_INFO.phone1}
                </a>
                <br />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </dd>
            </div>
            <div>
              <dt
                className="text-[10px] uppercase text-brown-65 mb-1"
                style={{ letterSpacing: "0.32em" }}
              >
                From the airport
              </dt>
              <dd className="text-brown-text">10 minutes by road</dd>
            </div>
            <div>
              <dt
                className="text-[10px] uppercase text-brown-65 mb-1"
                style={{ letterSpacing: "0.32em" }}
              >
                From Bangalore
              </dt>
              <dd className="text-brown-text">40 minutes by road</dd>
            </div>
          </dl>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 mt-12 uppercase text-[11px] text-cream bg-brown-text border border-brown-text rounded-full px-7 py-3 transition-colors hover:bg-transparent hover:text-brown-text"
            style={{ letterSpacing: "0.22em" }}
          >
            Plan your visit
            <span aria-hidden>&rarr;</span>
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="relative aspect-[4/5] lg:aspect-[5/6] rounded-3xl overflow-hidden border border-brown-text/15 bg-brown-text/5"
        >
          <iframe
            title="Aldovia Resort and Convention on the map"
            src="https://www.google.com/maps?q=Aldovia+Resort+%26+Convention+Swiss+Town+Sadahalli+Devanahalli&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
