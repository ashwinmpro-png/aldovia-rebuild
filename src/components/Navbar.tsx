"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronRight, ChevronDown, Home } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";
  const isBubbles = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<Record<string, boolean>>({});
  const [hoverGroup, setHoverGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleGroup = (label: string) =>
    setExpandedMobile((prev) => ({ ...prev, [label]: !prev[label] }));

  const condensed = scrolled || !isHome;

  return (
    <>
      {/* Top contact bar - desktop only */}
      <div
        className="hidden md:flex items-center justify-end gap-6 px-8 py-2 text-[11px] uppercase fixed top-0 left-0 right-0 z-40 bg-[#0a0907] text-aldo-beige border-b border-[rgba(216,201,168,0.08)]"
        style={{ letterSpacing: "0.22em" }}
      >
        <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white transition">
          <Phone className="w-3 h-3" /> {CONTACT_INFO.phone1}
        </a>
        <span className="opacity-30">|</span>
        <a href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white transition">
          <Phone className="w-3 h-3" /> {CONTACT_INFO.phone2}
        </a>
        <span className="opacity-30">|</span>
        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-white transition">
          <Mail className="w-3 h-3" /> {CONTACT_INFO.email}
        </a>
      </div>

      <motion.header
        animate={{
          backgroundColor: condensed ? "rgba(14,13,11,0.92)" : "rgba(14,13,11,0)",
          backdropFilter: condensed ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4 }}
        className="fixed left-0 right-0 z-40 md:top-[34px] top-0 border-b"
        style={{ borderColor: condensed ? "rgba(216,201,168,0.08)" : "transparent" }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-3">
          <Link href="/home" aria-label="Aldovia home" className="block relative w-[110px] h-[72px] md:w-[140px] md:h-[90px]">
            <Image
              src="/brand/logo-beige.png"
              alt="Aldovia Resort & Convention"
              fill
              priority
              sizes="140px"
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop nav - HOME + BOOK NOW on bubbles page, dropdown nav elsewhere */}
          {isBubbles ? (
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/home"
                className="inline-flex items-center gap-2 px-5 py-3 border border-aldo-beige/40 text-aldo-cream text-[11px] uppercase hover:bg-aldo-beige hover:text-aldo-bg transition-colors"
                style={{ letterSpacing: "0.22em" }}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 border border-aldo-beige bg-aldo-beige text-aldo-bg text-[11px] uppercase hover:bg-transparent hover:text-aldo-cream transition-colors"
                style={{ letterSpacing: "0.22em" }}
              >
                Book Now
              </Link>
            </div>
          ) : (
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            onMouseLeave={() => setHoverGroup(null)}
          >
            {NAV_LINKS.map((link) => {
              const hasChildren = !!link.children?.length;
              const isOpen = hoverGroup === link.label;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setHoverGroup(hasChildren ? link.label : null)}
                >
                  {hasChildren ? (
                    <button
                      className="px-4 lg:px-5 py-3 text-[11px] uppercase text-aldo-cream hover:text-white inline-flex items-center gap-1 cursor-pointer"
                      style={{ letterSpacing: "0.22em" }}
                    >
                      {link.label}
                      <ChevronDown className="w-3 h-3 opacity-70" />
                    </button>
                  ) : (
                    <Link
                      href={link.path ?? "/home"}
                      className="block px-4 lg:px-5 py-3 text-[11px] uppercase text-aldo-cream hover:text-white"
                      style={{ letterSpacing: "0.22em" }}
                    >
                      {link.label}
                    </Link>
                  )}

                  <AnimatePresence>
                    {hasChildren && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-1 min-w-[220px] bg-[rgba(14,13,11,0.97)] backdrop-blur-md border border-[rgba(216,201,168,0.15)] py-3"
                      >
                        {link.children!.map((c) => (
                          <Link
                            key={c.label}
                            href={c.path}
                            className="block px-6 py-2.5 text-[12px] uppercase text-aldo-muted hover:text-white hover:bg-aldo-beige/5 transition-colors"
                            style={{ letterSpacing: "0.22em" }}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex items-center gap-3 group cursor-pointer"
          >
            <span className="w-11 h-11 rounded-full flex items-center justify-center border border-[rgba(216,201,168,0.5)] group-hover:bg-aldo-beige group-hover:border-aldo-beige transition-colors">
              <Menu className="w-5 h-5 text-aldo-cream group-hover:text-aldo-bg transition-colors" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 z-50 h-full w-full md:w-[460px] bg-[rgba(14,13,11,0.98)] backdrop-blur-lg flex flex-col"
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-[rgba(216,201,168,0.1)]">
                <span className="font-display font-light text-2xl text-aldo-beige" style={{ letterSpacing: "0.2em" }}>
                  ALDOVIA
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-full border border-[rgba(216,201,168,0.4)] flex items-center justify-center hover:bg-aldo-beige hover:text-aldo-bg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-aldo-cream" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-8 py-10">
                {NAV_LINKS.map((link, idx) => (
                  <div key={idx} className="py-1">
                    {link.children ? (
                      <>
                        <button
                          onClick={() => toggleGroup(link.label)}
                          className="w-full flex items-center justify-between py-3 text-left group cursor-pointer"
                        >
                          <span className="font-display font-light text-2xl text-aldo-cream group-hover:text-white transition">
                            {link.label}
                          </span>
                          <motion.span animate={{ rotate: expandedMobile[link.label] ? 90 : 0 }}>
                            <ChevronRight className="w-4 h-4 text-aldo-beige" />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {expandedMobile[link.label] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35 }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-3 pb-2">
                                {link.children.map((c, i) => (
                                  <li key={i}>
                                    <Link
                                      href={c.path}
                                      className="block py-2 text-[13px] uppercase text-aldo-muted hover:text-white transition"
                                      style={{ letterSpacing: "0.22em" }}
                                    >
                                      {c.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.path ?? "/home"}
                        className="block py-3 font-display font-light text-2xl text-aldo-cream hover:text-white transition"
                      >
                        {link.label}
                      </Link>
                    )}
                    <div className="border-b border-[rgba(216,201,168,0.08)]" />
                  </div>
                ))}
              </nav>

              <div className="px-8 py-6 border-t border-[rgba(216,201,168,0.1)] text-xs space-y-3 text-aldo-muted">
                <div className="uppercase text-[10px] text-aldo-beige" style={{ letterSpacing: "0.42em" }}>
                  Get in Touch
                </div>
                <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white">
                  <Phone className="w-3 h-3" /> {CONTACT_INFO.phone1} (Hotel)
                </a>
                <a href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white">
                  <Phone className="w-3 h-3" /> {CONTACT_INFO.phone2} (Sales)
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-white">
                  <Mail className="w-3 h-3" /> {CONTACT_INFO.email}
                </a>
                <div className="pt-2 opacity-70">© 2026 Aldovia</div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
