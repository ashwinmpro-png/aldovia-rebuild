import type { Metadata } from "next";
import Image from "next/image";
import { BedDouble, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { ROOMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Six room categories at Aldovia Resort & Convention. From the Deluxe Room to the Executive Suite, designed for the way you actually use a hotel.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & Suites"
        title="Six ways to stay."
        subtitle="Each one designed around a different idea of comfort."
        image={ROOMS[0].images[0]}
      />

      <section className="py-24 md:py-32 px-6">
        <Container>
          <SectionHeader
            icon={<BedDouble className="w-3 h-3" />}
            eyebrow="The Collection"
            title="From a considered king bed to a private residence in the sky."
          />

          <div className="mt-16 space-y-24">
            {ROOMS.map((room, i) => (
              <article
                key={room.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-[420px] md:h-[520px] overflow-hidden">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
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
                    {room.category}
                  </div>
                  <h3 className="font-display font-light text-3xl md:text-4xl text-aldo-cream">
                    {room.name}
                  </h3>
                  <div
                    className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase text-aldo-muted"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    <span>{room.size}</span>
                    <span>{room.occupancy}</span>
                    <span>{room.bed}</span>
                  </div>
                  <p className="mt-6 text-sm md:text-base leading-relaxed text-aldo-muted max-w-xl">
                    {room.description}
                  </p>
                  <div className="mt-8">
                    <ButtonLink href="/contact-us" variant="outline" icon={ArrowRight}>
                      Book Your Stay
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
