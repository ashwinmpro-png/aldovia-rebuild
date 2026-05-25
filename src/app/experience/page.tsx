import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { PACKAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiences & Packages",
  description:
    "Curated day-out and evening experiences at Aldovia Resort & Convention. The Morning Escape, The Still Afternoon, The Complete Retreat.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences & Packages"
        title="Days designed around how you want to feel by sundown."
        subtitle="Five curated packages. Each one shaped around the things that make Aldovia what it is: the grounds, the food, the quiet."
        image={PACKAGES[0].images[0]}
      />

      <section className="py-24 md:py-32 px-6">
        <Container>
          <SectionHeader
            icon={<Sparkles className="w-3 h-3" />}
            eyebrow="The Packages"
            title="Choose the day. We will shape the rest."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {PACKAGES.map((p) => (
              <article key={p.id} className="bg-aldo-bg-2 overflow-hidden">
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div
                    className="uppercase text-[10px] mb-3 text-aldo-beige"
                    style={{ letterSpacing: "0.42em" }}
                  >
                    {p.duration}
                  </div>
                  <h3 className="font-display font-light text-2xl md:text-3xl text-aldo-cream">
                    {p.name}
                  </h3>
                  <div
                    className="mt-2 uppercase text-xs text-aldo-muted"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    {p.tagline}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-aldo-muted">{p.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-aldo-cream/90">
                    {p.inclusions.map((inc, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-aldo-beige">·</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink href="/contact-us" variant="outline" icon={ArrowRight}>
                      Enquire
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
