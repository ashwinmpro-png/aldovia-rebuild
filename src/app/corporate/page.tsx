import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Briefcase } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { VENUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Corporate Events",
  description:
    "Conferences, offsites and corporate events at Aldovia Resort & Convention. Forty minutes from Bangalore, ten minutes from the airport.",
};

export default function CorporatePage() {
  const corporateVenues = VENUES.filter((v) =>
    [
      "ocean-convention-center",
      "lotus",
      "sunflower",
      "rose",
      "orchid",
      "geneva-boardroom",
      "pearl-boardroom",
    ].includes(v.id)
  );

  return (
    <>
      <PageHero
        eyebrow="Corporate Events"
        title="Far enough to think clearly."
        subtitle="A purpose-built convention center, eleven supporting venues, and the kind of distance from the city that lets the day actually feel different from the office."
        image={corporateVenues[0]?.images[0] ?? VENUES[0].images[0]}
      />

      <section className="py-24 md:py-32 px-6">
        <Container>
          <SectionHeader
            icon={<Briefcase className="w-3 h-3" />}
            eyebrow="Convention & Conference"
            title="From a six-thousand-seat keynote to a board meeting for twenty."
            description="The Ocean Convention Center is the flagship: a purpose-built, pillar-less hall designed for expos, conferences, and high-impact gatherings."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {corporateVenues.map((v) => (
              <article key={v.id} className="relative overflow-hidden h-[340px] group">
                <Image
                  src={v.images[0]}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 30%, rgba(14,13,11,0.95) 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="uppercase text-[10px] mb-2 text-aldo-beige" style={{ letterSpacing: "0.42em" }}>
                    {v.tagline}
                  </div>
                  <h3 className="font-display text-2xl text-aldo-cream">{v.name}</h3>
                  <div className="mt-2 text-xs uppercase text-aldo-muted" style={{ letterSpacing: "0.18em" }}>
                    {v.area} · {v.capacity} guests
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 px-6 bg-aldo-bg-2">
        <Container size="narrow" className="text-center">
          <SectionHeader eyebrow="Plan Your Offsite" title="Tell us the agenda. We will build the room around it." />
          <div className="mt-10">
            <ButtonLink href="/contact-us" variant="solid" icon={ArrowRight}>Request Proposal</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
