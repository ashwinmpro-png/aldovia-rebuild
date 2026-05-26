import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/content";
import SwanLogo from "./SwanLogo";

// LightFooter pattern from the Emergent push. Cream paper, brown text, big
// centered swan wordmark, four columns of links, footer marker line.

export default function Footer() {
  return (
    <footer className="bg-cream-bg text-brown-text">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Centered swan wordmark */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center">
            <SwanLogo height={180} variant="wetearth-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          <div>
            <div
              className="uppercase mb-5 text-[11px] font-semibold text-brown-text"
              style={{ letterSpacing: "0.32em" }}
            >
              Stay
            </div>
            <ul className="space-y-3 text-[14px] text-brown-text">
              <li><Link href="/rooms" className="hover:opacity-70 transition">Rooms &amp; Suites</Link></li>
              <li><Link href="/experience" className="hover:opacity-70 transition">Experience &amp; Packages</Link></li>
              <li><Link href="/dining" className="hover:opacity-70 transition">Dining</Link></li>
              <li><Link href="/activities" className="hover:opacity-70 transition">Activities</Link></li>
            </ul>
          </div>

          <div>
            <div
              className="uppercase mb-5 text-[11px] font-semibold text-brown-text"
              style={{ letterSpacing: "0.32em" }}
            >
              Events
            </div>
            <ul className="space-y-3 text-[14px] text-brown-text">
              <li><Link href="/venues" className="hover:opacity-70 transition">Venues</Link></li>
              <li><Link href="/wedding" className="hover:opacity-70 transition">Weddings</Link></li>
              <li><Link href="/corporate" className="hover:opacity-70 transition">Corporate</Link></li>
              <li><Link href="/venues" className="hover:opacity-70 transition">Convention Center</Link></li>
            </ul>
          </div>

          <div>
            <div
              className="uppercase mb-5 text-[11px] font-semibold text-brown-text"
              style={{ letterSpacing: "0.32em" }}
            >
              Discover
            </div>
            <ul className="space-y-3 text-[14px] text-brown-text">
              <li><Link href="/about-us" className="hover:opacity-70 transition">About Us</Link></li>
              <li><Link href="/about-us#testimonials" className="hover:opacity-70 transition">Testimonials</Link></li>
              <li><Link href="/contact-us" className="hover:opacity-70 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <div
              className="uppercase mb-5 text-[11px] font-semibold text-brown-text"
              style={{ letterSpacing: "0.32em" }}
            >
              Contact
            </div>
            <ul className="space-y-3 text-[14px] text-brown-text">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <div>
                  {CONTACT_INFO.phone1} <span className="text-brown-soft">(Hotel)</span>
                  <br />
                  {CONTACT_INFO.phone2} <span className="text-brown-soft">(Sales)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:opacity-70">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <span>
                  {CONTACT_INFO.addressShort.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="text-center mt-16 text-[11px] uppercase text-brown-soft"
          style={{ letterSpacing: "0.32em" }}
        >
          © 2026 Aldovia · Formerly Clarks Exotica Convention Resort &amp; Spa
        </div>
      </div>
    </footer>
  );
}
