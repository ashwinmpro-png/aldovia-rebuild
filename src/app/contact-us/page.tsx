import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import Container from "@/components/Container";
import { CONTACT_INFO } from "@/lib/content";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Aldovia Resort & Convention. Hotel, sales, and concierge enquiries. Devanahalli, Bengaluru.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 md:px-10">
        <Container className="text-center">
          <div
            className="uppercase text-[10px] mb-6 text-aldo-beige"
            style={{ letterSpacing: "0.42em" }}
          >
            Contact Us
          </div>
          <h1 className="font-display font-light text-4xl md:text-6xl mb-6 text-aldo-cream">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-aldo-muted">
            We would love to hear from you. Whether you have a question about our rooms, dining, events, or anything else, our team is ready to answer.
          </p>
          <div className="w-16 h-px bg-aldo-beige opacity-60 mx-auto mt-8" />
        </Container>
      </section>

      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <div
                className="uppercase text-[10px] mb-4 text-aldo-beige"
                style={{ letterSpacing: "0.42em" }}
              >
                {CONTACT_INFO.address.split(",").slice(0, 2).join(",").trim()}
              </div>
              <h2 className="font-display font-light text-3xl md:text-4xl text-aldo-cream">
                Reach Us
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-aldo-beige/40 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-aldo-beige" />
                </div>
                <div>
                  <div
                    className="uppercase text-[10px] mb-2 text-aldo-beige"
                    style={{ letterSpacing: "0.42em" }}
                  >
                    Address
                  </div>
                  <p className="text-sm leading-relaxed text-aldo-cream">
                    {CONTACT_INFO.addressShort.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-aldo-beige/40 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-aldo-beige" />
                </div>
                <div>
                  <div
                    className="uppercase text-[10px] mb-2 text-aldo-beige"
                    style={{ letterSpacing: "0.42em" }}
                  >
                    Phone
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                    className="block text-sm text-aldo-cream hover:text-white"
                  >
                    {CONTACT_INFO.phone1} — {CONTACT_INFO.phone1Label}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`}
                    className="block text-sm text-aldo-cream hover:text-white"
                  >
                    {CONTACT_INFO.phone2} — {CONTACT_INFO.phone2Label}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-aldo-beige/40 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-aldo-beige" />
                </div>
                <div>
                  <div
                    className="uppercase text-[10px] mb-2 text-aldo-beige"
                    style={{ letterSpacing: "0.42em" }}
                  >
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-aldo-cream hover:text-white"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 h-[280px] overflow-hidden border border-aldo-beige/20">
              <iframe
                title="Aldovia Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.6800%2C13.2200%2C77.7500%2C13.2700&layer=mapnik"
                className="w-full h-full"
                style={{ filter: "invert(0.92) hue-rotate(180deg) brightness(0.8) contrast(0.9)" }}
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
