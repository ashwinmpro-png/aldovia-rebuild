import type { Metadata } from "next";
import { RoomDetail } from "@/components/RoomDetail";
import { html } from "@/content/rendered/rooms__deluxe-room";

export const metadata: Metadata = {
  title: "Deluxe Room",
  description:
    "Warm wood tones, muted interiors, and ceiling accents that catch the light just so. The Deluxe Room at Aldovia.",
  alternates: { canonical: "https://aldovia.in/rooms/deluxe-room" },
};

export default function Page() {
  return <RoomDetail html={html} />;
}
