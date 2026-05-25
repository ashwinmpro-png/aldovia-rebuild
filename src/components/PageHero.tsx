import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  heightClass = "h-[88vh] min-h-[600px]",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  heightClass?: string;
}) {
  return (
    <section className={`relative w-full overflow-hidden ${heightClass}`}>
      <div className="absolute inset-0 kenburns">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,13,11,0.5) 0%, rgba(14,13,11,0.25) 40%, rgba(14,13,11,0.92) 100%)",
        }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 px-6 text-center">
        {eyebrow && (
          <div
            className="uppercase text-[10px] text-aldo-beige mb-6 fade-in"
            style={{ letterSpacing: "0.42em" }}
          >
            {eyebrow}
          </div>
        )}
        <h1 className="font-display font-light text-aldo-cream max-w-5xl text-balance fade-in" style={{ fontSize: "clamp(2.4rem, 6vw, 5.2rem)", lineHeight: 1.05 }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-aldo-muted fade-in">
            {subtitle}
          </p>
        )}
        <div className="w-16 h-px bg-aldo-beige opacity-60 mt-8" />
      </div>
    </section>
  );
}
