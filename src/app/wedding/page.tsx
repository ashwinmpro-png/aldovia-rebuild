import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { WEDDING_FEATURES, VENUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Weddings",
  description:
    "Wedding venues at Aldovia Resort & Convention. Grand ballrooms, garden settings, and full-service planning for weddings up to a thousand guests.",
};

export default function WeddingPage() {
  const weddingVenues = VENUES.filter((v) =>
    ["galaxy-grand-ballroom", "galaxy-grand-courtyard", "eden-lawn"].includes(v.id)
  );

  return (
    <>
      <PageHero
        eyebrow="Weddings"
        title="Your wedding, your way."
        subtitle="Seventy acres of grounds, fourteen curated venues, and a team that understands that no two weddings should look the same."
        image={WEDDING_FEATURES[0].image}
      />

      <section className="py-24 md:py-32 px-6">
        <Container>
          <SectionHeader
            icon={<Heart className="w-3 h-3" />}
            eyebrow="Why Aldovia"
            title="Built for the wedding that does not have to compromise."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {WEDDING_FEATURES.map((f, i) => (
              <article key={i} className="relative overflow-hidden h-[320px] group">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 30%, rgba(14,13,11,0.95) 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-display text-2xl text-aldo-cream">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-aldo-muted max-w-md">
                    {f.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 px-6 bg-aldo-bg-2">
        <Container>
          <SectionHeader
            eyebrow="The Venues"
            title="From a ballroom that seats a thousand to a lawn under the open sky."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {weddingVenues.map((v) => (
              <article key={v.id} className="relative overflow-hidden h-[400px] group">
                <Image
                  src={v.images[0]}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 30%, rgba(14,13,11,0.95) 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
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
          <div className="text-center mt-12">
            <ButtonLink href="/venues" variant="outline" icon={ArrowRight}>All Venues</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 px-6">
        <Container size="narrow" className="text-center">
          <SectionHeader eyebrow="Request a Proposal" title="Tell us about the day, and we will write back with the room." />
          <div className="mt-10">
            <ButtonLink href="/contact-us" variant="solid" icon={ArrowRight}>Request Proposal</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
