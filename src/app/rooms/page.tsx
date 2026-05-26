import parse from "html-react-parser";
import type { Metadata } from "next";
import { html } from "@/content/rendered/rooms";

// /rooms index — rendered straight from aldovia-build's canonical HTML.

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Six distinct room categories at Aldovia, each designed for a different kind of comfort.",
  alternates: { canonical: "https://aldovia.in/rooms" },
};

export default function Page() {
  return <>{parse(html)}</>;
}
