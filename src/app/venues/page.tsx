import type { Metadata } from "next";
import Image from "next/image";
import { Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import { VENUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Venues",
  description:
    "Fourteen venues at Aldovia Resort & Convention. The flagship Galaxy Grand Ballroom, the Ocean Convention Center, garden lawns and intimate boardrooms.",
};

export default function VenuesPage() {
  return (
    <>
      <PageHero
        eyebrow="All Venues"
        title="Fourteen rooms for every kind of moment."
        subtitle="From a ballroom that seats nine hundred to a boardroom that seats twenty. From open-air courtyards to a pillar-less convention center built for six thousand."
        image={VENUES[0].images[0]}
      />

      <section className="py-24 md:py-32 px-6">
        <Container>
          <SectionHeader
            icon={<Users className="w-3 h-3" />}
            eyebrow="The Collection"
            title="Every venue earns its own purpose."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VENUES.map((v) => (
              <article key={v.id} className="relative group overflow-hidden h-[380px]">
                <Image
                  src={v.images[0]}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 30%, rgba(14,13,11,0.95) 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="uppercase text-[10px] mb-2 text-aldo-beige"
                    style={{ letterSpacing: "0.42em" }}
                  >
                    {v.tagline}
                  </div>
                  <h3 className="font-display text-xl text-aldo-cream">{v.name}</h3>
                  <div
                    className="mt-2 text-xs uppercase text-aldo-muted"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {v.area} · {v.capacity} guests
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
