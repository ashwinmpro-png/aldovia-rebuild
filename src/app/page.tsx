"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BedDouble, UtensilsCrossed, Users, Award, Phone } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import SectionHeader from "@/components/SectionHeader";
import { ButtonLink } from "@/components/Button";
import Container from "@/components/Container";
import {
  ABOUT_STATS,
  ROOMS,
  DINING,
  VENUES,
  TESTIMONIALS,
  AWARDS,
  BRAND,
} from "@/lib/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

export default function HomePage() {
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    if (!TESTIMONIALS.length) return;
    const t = setInterval(() => setTIdx((i) => (i + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <HeroVideo
        src="/assets/hero/drone-property.mp4"
        poster="/assets/hero/drone-property.jpg"
        heightClass="h-screen"
        objectPosition="50% 65%"
      >
        <div className="relative z-10 h-full flex flex-col items-center justify-center pb-12 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="uppercase text-[10px] text-aldo-beige mb-6"
            style={{ letterSpacing: "0.42em" }}
          >
            {BRAND.tagline}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4 }}
            className="font-display font-light text-4xl md:text-7xl leading-[1.05] text-aldo-cream max-w-5xl text-balance"
          >
            A resort reborn,<br />across seventy acres of grace.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-aldo-muted"
          >
            Ten minutes from Kempegowda International Airport. Forty minutes from the heart of Bangalore. A different latitude entirely.
          </motion.p>
          <div className="w-16 h-px bg-aldo-beige opacity-60 mt-8" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <ButtonLink href="/rooms" variant="solid" icon={ArrowRight}>Book Your Stay</ButtonLink>
            <ButtonLink href="/about-us" variant="outline">Discover Aldovia</ButtonLink>
          </motion.div>
        </div>
      </HeroVideo>

      {/* STORY */}
      <section className="py-24 md:py-32 px-6">
        <SectionHeader
          eyebrow="The Aldovia Story"
          title="Some resorts are built. Aldovia was reconsidered."
          description="Set across seventy acres of landscaped grounds, Aldovia Resort & Convention is where celebrations find their setting, where corporate events find their standard, and where families find their weekend. Every space, every service, every experience reconsidered through a single lens: grace."
        />
        <div className="flex justify-center mt-10">
          <ButtonLink href="/about-us" variant="outline" icon={ArrowRight}>Learn More</ButtonLink>
        </div>
        <div className="max-w-5xl mx-auto mt-20 grid grid-cols-3 gap-8">
          {ABOUT_STATS.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.15 }} className="text-center">
              <div className="font-display font-light text-5xl md:text-6xl text-aldo-beige">
                {s.value}{s.suffix}
              </div>
              <div className="uppercase text-[10px] mt-3 text-aldo-beige" style={{ letterSpacing: "0.42em" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROOMS */}
      <section className="py-24 md:py-32 px-6 bg-aldo-bg-2">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeader
              align="left"
              icon={<BedDouble className="w-3 h-3" />}
              eyebrow="Rooms & Suites"
              title="Quiet that makes forty minutes feel like another latitude."
            />
            <ButtonLink href="/rooms" variant="outline" icon={ArrowRight}>Explore Rooms</ButtonLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS.slice(0, 3).map((room, i) => (
              <motion.div key={room.id} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.12 }}>
                <Link href="/rooms" className="group relative block overflow-hidden">
                  <div className="relative h-[440px] overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg, transparent 30%, rgba(14,13,11,0.92) 100%)" }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="uppercase text-[10px] mb-2 text-aldo-beige" style={{ letterSpacing: "0.42em" }}>
                      {room.category}
                    </div>
                    <div className="font-display text-3xl mb-1 text-aldo-cream">{room.name}</div>
                    <div className="text-xs uppercase text-aldo-muted" style={{ letterSpacing: "0.2em" }}>
                      {room.size} · {room.occupancy}
                    </div>
                    <div className="mt-5 flex items-center justify-end">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-aldo-beige" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* DINING */}
      <section className="py-24 md:py-32 px-6">
        <SectionHeader
          icon={<UtensilsCrossed className="w-3 h-3" />}
          eyebrow="Dining"
          title="Three restaurants. One poolside bar. One café. Five reasons to sit down."
        />
        <Container className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DINING.slice(0, 3).map((d, i) => (
              <motion.div key={d.id} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }}>
                <Link href="/dining" className="group block">
                  <div className="relative h-[360px] overflow-hidden">
                    <Image
                      src={d.images[0]}
                      alt={d.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="uppercase text-[10px] mb-2 text-aldo-beige" style={{ letterSpacing: "0.42em" }}>
                      {d.cuisine}
                    </div>
                    <div className="font-display text-2xl text-aldo-cream">{d.name}</div>
                    <div className="text-xs mt-2 uppercase text-aldo-muted" style={{ letterSpacing: "0.18em" }}>
                      {d.timings}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
        <div className="text-center mt-12">
          <ButtonLink href="/dining" variant="outline" icon={ArrowRight}>Explore Dining</ButtonLink>
        </div>
      </section>

      {/* VENUES */}
      <section className="py-24 md:py-32 px-6 bg-aldo-bg-2">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeader
              align="left"
              icon={<Users className="w-3 h-3" />}
              eyebrow="Events & Venues"
              title="Fourteen venues. From intimate boardrooms to a courtyard under open sky."
            />
            <ButtonLink href="/venues" variant="outline" icon={ArrowRight}>All Venues</ButtonLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VENUES.slice(0, 4).map((v, i) => (
              <motion.div key={v.id} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="relative group overflow-hidden h-[340px]">
                <Image
                  src={v.images[0]}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(14,13,11,0.95) 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="uppercase text-[10px] mb-2 text-aldo-beige" style={{ letterSpacing: "0.42em" }}>
                    {v.tagline}
                  </div>
                  <div className="font-display text-2xl text-aldo-cream">{v.name}</div>
                  <div className="flex items-center gap-5 mt-3 text-xs uppercase text-aldo-muted" style={{ letterSpacing: "0.18em" }}>
                    <span>{v.area}</span>
                    <span>{v.capacity} guests</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6">
        <Container size="narrow" className="text-center">
          <div className="uppercase text-[10px] mb-6 text-aldo-beige" style={{ letterSpacing: "0.42em" }}>
            What Our Guests Say
          </div>
          <motion.div
            key={tIdx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-[240px]"
          >
            <div className="font-display font-light text-2xl md:text-3xl leading-relaxed text-aldo-cream text-balance">
              &ldquo;{TESTIMONIALS[tIdx].text}&rdquo;
            </div>
            <div className="uppercase text-[10px] mt-8 text-aldo-beige" style={{ letterSpacing: "0.42em" }}>
              — {TESTIMONIALS[tIdx].author}
            </div>
          </motion.div>
          <div className="mt-10 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setTIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                animate={{ width: i === tIdx ? 32 : 12, opacity: i === tIdx ? 1 : 0.35 }}
                className="h-[2px] bg-aldo-beige cursor-pointer"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* AWARDS */}
      <section className="py-24 md:py-32 px-6 bg-aldo-bg-2">
        <Container>
          <SectionHeader icon={<Award className="w-3 h-3" />} eyebrow="Awards & Recognition" title="Recognised, year after year." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-16">
            {AWARDS.slice(0, 8).map((a, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="text-center border-t border-aldo-beige/15 pt-6"
              >
                <div className="font-display text-3xl text-aldo-beige">{a.year}</div>
                <div className="font-display text-lg mt-2 text-aldo-cream">{a.title}</div>
                <p className="text-xs mt-3 leading-relaxed text-aldo-muted">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* PLAN YOUR VISIT */}
      <section className="py-24 md:py-32 px-6">
        <Container size="narrow" className="text-center">
          <SectionHeader eyebrow="Plan Your Visit" title="Begin the conversation. We will take it from here." />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact-us" variant="solid" icon={Phone}>Get in Touch</ButtonLink>
            <ButtonLink href="/wedding" variant="outline">Request Proposal</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
