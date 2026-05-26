import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO, BRAND } from "@/lib/content";
import {
  InstagramGlyph,
  FacebookGlyph,
  LinkedinGlyph,
  YoutubeGlyph,
  ThreadsGlyph,
  XGlyph,
} from "./SocialIcons";

export default function Footer() {
  const socials = [
    { Icon: InstagramGlyph, href: CONTACT_INFO.instagram, label: "Instagram" },
    { Icon: FacebookGlyph, href: CONTACT_INFO.facebook, label: "Facebook" },
    { Icon: LinkedinGlyph, href: CONTACT_INFO.linkedin, label: "LinkedIn" },
    { Icon: YoutubeGlyph, href: "#", label: "YouTube" },
    { Icon: ThreadsGlyph, href: "#", label: "Threads" },
    { Icon: XGlyph, href: "#", label: "X" },
  ];

  const columns: { heading: string; items: { label: string; href: string }[] }[] = [
    {
      heading: "Stay",
      items: [
        { label: "Rooms & Suites", href: "/rooms" },
        { label: "Experience & Packages", href: "/experience" },
        { label: "Dining", href: "/dining" },
        { label: "Activities", href: "/activities" },
      ],
    },
    {
      heading: "Events",
      items: [
        { label: "Venues", href: "/venues" },
        { label: "Weddings", href: "/wedding" },
        { label: "Corporate", href: "/corporate" },
        { label: "Convention Center", href: "/venues" },
      ],
    },
    {
      heading: "Discover",
      items: [
        { label: "About Us", href: "/about-us" },
        { label: "Testimonials", href: "/about-us#testimonials" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Blog", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-paper-2 border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        {/* Big centred wordmark */}
        <div className="flex justify-center mb-16">
          <div className="relative w-[280px] h-[180px] md:w-[360px] md:h-[230px]">
            <Image
              src="/brand/logo-beige.png"
              alt="Aldovia Resort & Convention"
              fill
              sizes="(max-width: 768px) 280px, 360px"
              className="object-contain"
              style={{ filter: "brightness(0.4) sepia(0.3)" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {columns.map((col) => (
            <div key={col.heading}>
              <div
                className="uppercase text-[11px] mb-4 text-ink font-medium"
                style={{ letterSpacing: "0.2em" }}
              >
                {col.heading}
              </div>
              <div className="w-8 h-px bg-ink/30 mb-5" />
              <ul className="space-y-3 text-sm text-ink-mute">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href} className="hover:text-ink transition">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div
              className="uppercase text-[11px] mb-4 text-ink font-medium"
              style={{ letterSpacing: "0.2em" }}
            >
              Contact
            </div>
            <div className="w-8 h-px bg-ink/30 mb-5" />
            <ul className="space-y-4 text-sm text-ink-mute">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-ink flex-shrink-0" />
                <div>
                  <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`} className="block hover:text-ink">
                    {CONTACT_INFO.phone1} ({CONTACT_INFO.phone1Label})
                  </a>
                  <a href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`} className="block hover:text-ink">
                    {CONTACT_INFO.phone2} ({CONTACT_INFO.phone2Label})
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-ink flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="underline underline-offset-4 hover:text-ink">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-ink flex-shrink-0" />
                <span>
                  {CONTACT_INFO.addressShort.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ink/10 pt-8">
          <div
            className="text-center uppercase text-[11px] text-ink-soft mb-6"
            style={{ letterSpacing: "0.32em" }}
          >
            {BRAND.former}
          </div>

          <div className="flex justify-center gap-3 mb-6">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-full bg-ink/10 text-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="text-center text-xs text-ink-soft">
            © 2026 Aldovia. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
