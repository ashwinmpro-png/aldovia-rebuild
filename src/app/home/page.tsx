import parse from "html-react-parser";
import type { Metadata } from "next";
import { html } from "@/content/rendered/home";

// Renders the canonical home HTML straight from the cream-theme-hotel
// preview (aldovia-build commit e9f5e57). The blob is treated as the
// source of truth for hero, Escape / Celebrate / Gather cards, and
// Explore the Resort. Asset paths in the HTML are served from our
// /public/assets/ and /public/cloudinary-archive/ trees, both ported
// from the same repo.

export const metadata: Metadata = {
  title: "Aldovia Resort & Convention | Luxury Stay, Dining and Events in Bangalore",
  description:
    "A destination resort 10 minutes from Kempegowda International Airport, Bangalore. 70 acres of world-class venues, refined dining, and hospitality that arrives before you ask for it.",
  alternates: { canonical: "https://aldovia.in/home" },
};

export default function Page() {
  return <>{parse(html)}</>;
}
