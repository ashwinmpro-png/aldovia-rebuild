"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Full-bleed video hero. Plays muted, loops, falls back to the poster when video is
// absent or cannot autoplay. Cinematic gradient overlay so foreground type stays legible.

export default function HeroVideo({
  src,
  poster,
  heightClass = "h-screen",
  objectPosition = "50% 60%",
  overlay = true,
  children,
}: {
  src: string;
  poster: string;
  heightClass?: string;
  objectPosition?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canAutoplay, setCanAutoplay] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = v.play();
    if (play !== undefined) {
      play.catch(() => setCanAutoplay(false));
    }
  }, []);

  return (
    <section className={`relative w-full overflow-hidden ${heightClass}`}>
      {canAutoplay ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      )}

      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,13,11,0.45) 0%, rgba(14,13,11,0.2) 35%, rgba(14,13,11,0.92) 100%)",
          }}
        />
      )}

      {children}
    </section>
  );
}
