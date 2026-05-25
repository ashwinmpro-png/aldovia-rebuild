import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import { ABOUT_STATS, ABOUT_STORY, FOUNDER, HOME_HERO_IMAGES, BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Aldovia story. Formerly Clarks Exotica, reconsidered through a single lens: grace, not as decoration, as a standard.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Aldovia Story"
        title="Some resorts are built. Aldovia was reconsidered."
        subtitle={BRAND.former}
        image={HOME_HERO_IMAGES[0]}
      />

      <section className="py-24 md:py-32 px-6">
        <Container size="narrow">
          <div className="space-y-8 text-base md:text-lg leading-relaxed text-aldo-cream/90 font-light">
            {ABOUT_STORY.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 px-6 bg-aldo-bg-2">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {ABOUT_STATS.map((s, i) => (
            <div key={i}>
              <div className="font-display font-light text-5xl md:text-6xl text-aldo-beige">
                {s.value}{s.suffix}
              </div>
              <div
                className="uppercase text-[10px] mt-3 text-aldo-beige"
                style={{ letterSpacing: "0.42em" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-24 md:py-32 px-6">
        <Container>
          <SectionHeader eyebrow="Leadership" title="The Founder." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
            <div className="md:col-span-2">
              <div className="relative h-[480px] overflow-hidden">
                <Image
                  src={FOUNDER.image}
                  alt={FOUNDER.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <div
                className="uppercase text-[10px] mb-3 text-aldo-beige"
                style={{ letterSpacing: "0.42em" }}
              >
                {FOUNDER.title}
              </div>
              <h3 className="font-display font-light text-3xl md:text-4xl text-aldo-cream">
                {FOUNDER.name}
              </h3>
              <div className="mt-6 space-y-5 text-sm md:text-base leading-relaxed text-aldo-muted">
                {FOUNDER.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
