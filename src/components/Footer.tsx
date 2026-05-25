import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO, BRAND } from "@/lib/content";
import { InstagramGlyph, FacebookGlyph, LinkedinGlyph } from "./SocialIcons";

export default function Footer() {
  const socials = [
    { Icon: InstagramGlyph, href: CONTACT_INFO.instagram, label: "Instagram" },
    { Icon: FacebookGlyph, href: CONTACT_INFO.facebook, label: "Facebook" },
    { Icon: LinkedinGlyph, href: CONTACT_INFO.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#0a0907] border-t border-[rgba(216,201,168,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="font-display font-light text-3xl mb-3 text-aldo-beige" style={{ letterSpacing: "0.2em" }}>
            ALDOVIA
          </div>
          <div className="text-xs uppercase mb-6 text-aldo-muted" style={{ letterSpacing: "0.32em" }}>
            Resort & Convention
          </div>
          <p className="text-sm leading-relaxed text-aldo-muted">
            Set across seventy acres near Bangalore, Aldovia is where celebrations find their setting and grace finds every guest.
          </p>
          <div className="text-[10px] uppercase text-aldo-muted/70 mt-4" style={{ letterSpacing: "0.32em" }}>
            {BRAND.former}
          </div>
          <div className="flex items-center gap-3 mt-6">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-full border border-[rgba(216,201,168,0.4)] text-aldo-beige flex items-center justify-center hover:bg-aldo-beige hover:text-aldo-bg transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="uppercase text-[10px] text-aldo-beige mb-5" style={{ letterSpacing: "0.42em" }}>
            Stay
          </div>
          <ul className="space-y-3 text-sm text-aldo-muted">
            <li><Link href="/rooms" className="hover:text-white transition">Rooms & Suites</Link></li>
            <li><Link href="/experience" className="hover:text-white transition">Experiences</Link></li>
            <li><Link href="/dining" className="hover:text-white transition">Dining</Link></li>
            <li><Link href="/activities" className="hover:text-white transition">Activities</Link></li>
          </ul>
        </div>

        <div>
          <div className="uppercase text-[10px] text-aldo-beige mb-5" style={{ letterSpacing: "0.42em" }}>
            Events
          </div>
          <ul className="space-y-3 text-sm text-aldo-muted">
            <li><Link href="/wedding" className="hover:text-white transition">Weddings</Link></li>
            <li><Link href="/corporate" className="hover:text-white transition">Corporate Events</Link></li>
            <li><Link href="/venues" className="hover:text-white transition">Venues</Link></li>
            <li><Link href="/about-us" className="hover:text-white transition">About Us</Link></li>
          </ul>
        </div>

        <div>
          <div className="uppercase text-[10px] text-aldo-beige mb-5" style={{ letterSpacing: "0.42em" }}>
            Contact
          </div>
          <ul className="space-y-3 text-sm text-aldo-muted">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-aldo-beige flex-shrink-0" />
              <span>
                {CONTACT_INFO.addressShort.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-aldo-beige flex-shrink-0" />
              <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`} className="hover:text-white">
                {CONTACT_INFO.phone1}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-aldo-beige flex-shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">
                {CONTACT_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(216,201,168,0.08)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs uppercase text-aldo-muted" style={{ letterSpacing: "0.22em" }}>
            © 2026 Aldovia Resort & Convention
          </div>
          <div className="text-xs uppercase text-aldo-muted" style={{ letterSpacing: "0.22em" }}>
            {BRAND.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
