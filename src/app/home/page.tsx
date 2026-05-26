import parse from "html-react-parser";
import type { Metadata } from "next";
import { html } from "@/content/rendered/home";
import HomeExtras from "@/components/HomeExtras";

// Renders the canonical home HTML straight from the cream-theme-hotel
// preview (aldovia-build commit e9f5e57) for the hero, Escape / Celebrate /
// Gather cards, and Explore the Resort. Asset paths in the HTML are served
// from our /public/assets/ and /public/cloudinary-archive/ trees.
//
// HomeExtras adds the rest of the page in real TSX so the home does not
// die at the bottom of the parsed blob: story plus stats, rooms preview,
// dining preview, testimonials, FAQ, and Perfectly Located.

export const metadata: Metadata = {
  title: "Aldovia Resort & Convention | Luxury Stay, Dining and Events in Bangalore",
  description:
    "A destination resort 10 minutes from Kempegowda International Airport, Bangalore. 70 acres of world-class venues, refined dining, and hospitality that arrives before you ask for it.",
  alternates: { canonical: "https://aldovia.in/home" },
};

export default function Page() {
  return (
    <>
      {parse(html)}
      <HomeExtras />
    </>
  );
}
