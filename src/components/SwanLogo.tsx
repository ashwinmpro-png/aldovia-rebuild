import Image from "next/image";

// Official Aldovia brand mark. Swan + ALDOVIA wordmark + RESORT & CONVENTION tagline.
// Brand PNGs live at /public/brand/. Variant chooses which colour file renders.
// Height controls render size, width preserves aspect via next/image's intrinsic ratio.

type Variant =
  | "wetearth-on-beige"
  | "wetearth-transparent"
  | "black-on-white"
  | "black-transparent"
  | "beige-on-wetearth"
  | "jacaranda-on-white"
  | "white-on-jacaranda";

const FILE: Record<Variant, string> = {
  "wetearth-on-beige": "/brand/wetearth-on-beige.png",
  "wetearth-transparent": "/brand/wetearth-transparent.png",
  "black-on-white": "/brand/black-on-white.png",
  "black-transparent": "/brand/black-transparent.png",
  "beige-on-wetearth": "/brand/beige-on-wetearth.png",
  "jacaranda-on-white": "/brand/jacaranda-on-white.png",
  "white-on-jacaranda": "/brand/white-on-jacaranda.png",
};

export default function SwanLogo({
  height = 48,
  variant = "wetearth-transparent",
  className = "",
  alt = "Aldovia Resort & Convention",
  priority = false,
}: {
  height?: number;
  variant?: Variant;
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={FILE[variant]}
      alt={alt}
      width={Math.round(height * 1.8)}
      height={height}
      priority={priority}
      className={className}
      style={{ height, width: "auto", display: "block" }}
      draggable={false}
    />
  );
}
