import type { Metadata } from "next";
import Image from "next/image";
import { Bike } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import { ACTIVITIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Indoor and outdoor activities, Ayurvedic spa, signature pool, sports courts and cycling trails across seventy acres at Aldovia Resort & Convention.",
};

export default function ActivitiesPage() {
  const groups = Object.entries(ACTIVITIES);
  const heroImage = ACTIVITIES.Outdoor[2]?.image ?? ACTIVITIES.Indoor[0].image;

  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Seventy acres of things to do, or not do."
        subtitle="A signature pool, sports courts, an Ayurvedic spa, cycling trails, and rooms full of board games for the days you want to do nothing on purpose."
        image={heroImage}
      />

      {groups.map(([group, items], gi) => (
        <section
          key={group}
          className={`py-24 md:py-32 px-6 ${gi % 2 === 1 ? "bg-aldo-bg-2" : ""}`}
        >
          <Container>
            <SectionHeader
              icon={gi === 0 ? <Bike className="w-3 h-3" /> : undefined}
              eyebrow={group}
              title={group === "Health & Wellness Spa" ? "Restored on your own time." : group === "Indoor" ? "Indoor rallies and quiet rooms." : "Open sky, open courts."}
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {items.map((a) => (
                <article key={a.name} className="group block">
                  <div className="relative h-[340px] overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="pt-5">
                    <h3 className="font-display text-2xl text-aldo-cream">{a.name}</h3>
                    <div
                      className="mt-1 uppercase text-[10px] text-aldo-beige"
                      style={{ letterSpacing: "0.42em" }}
                    >
                      {a.tagline}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-aldo-muted">{a.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
