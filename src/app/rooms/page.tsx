import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ROOMS } from "@/lib/content";

// Mirrors the /rooms page from ashwinmpro-png/aldovia-build (the cream-theme
// preview at cream-theme-hotel.preview.emergentagent.com). Clean three-up
// card grid on cream paper. Each card carries a 4:3 hero, the room name in
// Fraunces, a three-line description, and a size · occupancy footer line.
// Hover scales the image gently and lifts the card shadow. Our local
// ROOMS data feeds it, our hero.jpg assets fill each card.

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Six distinct room categories at Aldovia, each designed for a different kind of comfort. Deluxe, Luxury, 1 Bedroom Suite, 2 Bedroom Suite, Deluxe Suite, and Executive Suite.",
};

export default function RoomsPage() {
  return (
    <section
      className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20"
      style={{ background: "var(--color-cream-bg)" }}
    >
      <div className="mx-auto max-w-[1320px]">
        <h1
          className="font-fraunces text-center leading-tight mb-4"
          style={{
            color: "var(--color-brown-text)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 400,
          }}
        >
          Rooms &amp; Suites
        </h1>
        <p
          className="text-center mx-auto leading-relaxed mb-12 md:mb-16 max-w-2xl"
          style={{
            color: "var(--color-brown-soft)",
            fontSize: "15px",
          }}
        >
          Six distinct room categories, each designed for a different kind of
          comfort. From intimate retreats to sprawling family suites, every stay
          at Aldovia begins with a room that feels considered, not just
          furnished.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {ROOMS.map((room) => (
            <Link
              key={room.id}
              href="/contact-us"
              prefetch={false}
              className="group block overflow-hidden rounded-2xl transition-shadow"
              style={{
                background: "var(--color-cream-bg-2)",
                boxShadow: "0 6px 18px rgba(73,38,28,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(73,38,28,0.16)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(73,38,28,0.08)";
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={`${room.name} at Aldovia`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={72}
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col gap-3">
                <h2
                  className="font-fraunces leading-tight"
                  style={{
                    color: "var(--color-brown-text)",
                    fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
                    fontWeight: 400,
                  }}
                >
                  {room.name}
                </h2>
                <p
                  className="leading-relaxed line-clamp-3"
                  style={{
                    color: "var(--color-brown-soft)",
                    fontSize: "14px",
                  }}
                >
                  {room.description}
                </p>
                <div
                  className="mt-1"
                  style={{
                    color: "var(--color-brown-soft)",
                    opacity: 0.7,
                    fontSize: "12px",
                  }}
                >
                  {room.size}
                  <span className="mx-2">·</span>
                  {room.occupancy}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
