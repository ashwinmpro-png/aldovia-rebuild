import Image from "next/image";
import Link from "next/link";
import { RoomPillBar } from "./RoomPillBar";
import type { Room } from "@/lib/content";

// /rooms/[slug] body. Full-bleed hero, room pill bar, 3-up gallery on
// the left, copy panel on the right. Mirrors the aldovia-build pattern.

export function RoomDetail({ room }: { room: Room }) {
  // Use whatever images the content store has for the gallery, falling
  // back to the hero when only one image is available.
  const galleryImages = [
    room.images[0] ?? room.images[0],
    room.images[1] ?? room.images[0],
    room.images[2] ?? room.images[0],
  ];

  return (
    <article
      className="w-full overflow-hidden"
      style={{ background: "var(--color-cream-bg)" }}
    >
      {/* Full-bleed hero room photo */}
      <div className="relative w-full aspect-[16/8] md:aspect-[16/7]">
        <Image
          src={room.images[0]}
          alt={`${room.name} at Aldovia`}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
      </div>

      {/* Pill bar */}
      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-10">
        <RoomPillBar activeId={room.id} />
      </div>

      {/* Detail body */}
      <div className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-14">
          {/* Gallery thumbnails */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={`${room.id}-${i}`}
                className="relative overflow-hidden rounded-xl aspect-[3/4]"
              >
                <Image
                  src={src}
                  alt={`${room.name} interior view ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 33vw, 200px"
                  quality={70}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Copy panel */}
          <div className="flex flex-col">
            <h1
              className="font-fraunces leading-tight mb-3"
              style={{
                color: "var(--color-brown-text)",
                fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                fontWeight: 400,
              }}
            >
              {room.name}
            </h1>
            <div
              className="h-[2px] w-12 mb-5"
              style={{ background: "var(--color-gold)" }}
              aria-hidden="true"
            />
            <div
              className="uppercase mb-5 text-[11px]"
              style={{
                color: "var(--color-brown-soft)",
                letterSpacing: "0.2em",
              }}
            >
              {room.kicker}
            </div>
            <p
              className="leading-relaxed mb-6 text-[15px]"
              style={{ color: "var(--color-brown-soft)" }}
            >
              {room.description}
            </p>
            <div
              className="mb-8 text-[13px]"
              style={{ color: "var(--color-brown-soft)", opacity: 0.85 }}
            >
              {room.size}
              <span className="mx-2">·</span>
              {room.occupancy}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                prefetch={false}
                className="font-fraunces inline-flex h-12 items-center justify-center rounded-full px-7 text-[14px] bg-brown-text text-cream-bg hover:opacity-90 transition-opacity"
                style={{ letterSpacing: "0.02em" }}
              >
                Book Your Stay
              </Link>
              <Link
                href={`/rooms/${room.id}#gallery`}
                prefetch={false}
                className="room-detail-gallery-link font-fraunces inline-flex h-12 items-center justify-center rounded-full px-7 text-[14px] transition-colors"
                style={{ letterSpacing: "0.02em" }}
              >
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
