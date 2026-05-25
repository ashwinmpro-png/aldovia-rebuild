import type { Metadata } from "next";
import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import { DINING } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Three restaurants. One poolside bar. One café. Five entirely different reasons to sit down at Aldovia Resort & Convention.",
};

export default function DiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Dining"
        title="Five entirely different reasons to sit down."
        subtitle="Three restaurants. One poolside bar. One café. Whether it is a meal at Ambrosia, a cocktail at Oasis, or a quiet hour at Mirage, every table at Aldovia is set with intention."
        image={DINING[0].images[0]}
      />

      <section className="py-24 md:py-32 px-6">
        <Container>
          <SectionHeader
            icon={<UtensilsCrossed className="w-3 h-3" />}
            eyebrow="The Tables"
            title="Each restaurant earns its own room."
          />

          <div className="mt-16 space-y-24">
            {DINING.map((d, i) => (
              <article
                key={d.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-[420px] md:h-[520px] overflow-hidden">
                  <Image
                    src={d.images[0]}
                    alt={d.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div
                    className="uppercase text-[10px] mb-3 text-aldo-beige"
                    style={{ letterSpacing: "0.42em" }}
                  >
                    {d.cuisine}
                  </div>
                  <h3 className="font-display font-light text-3xl md:text-4xl text-aldo-cream">
                    {d.name}
                  </h3>
                  <div
                    className="mt-2 uppercase text-xs text-aldo-muted"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    {d.tagline}
                  </div>
                  <p className="mt-6 text-sm md:text-base leading-relaxed text-aldo-muted max-w-xl">
                    {d.description}
                  </p>
                  <div
                    className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase text-aldo-beige"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    <span>{d.timings}</span>
                    <span className="text-aldo-muted">{d.capacity}</span>
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
