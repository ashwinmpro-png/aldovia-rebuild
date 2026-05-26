import type { Metadata } from "next";
import { RoomDetail } from "@/components/RoomDetail";
import { html } from "@/content/rendered/rooms__luxury-room";

export const metadata: Metadata = {
  title: "Luxury Room",
  description:
    "A step wider, a touch more generous. The Luxury Room at Aldovia takes everything the Deluxe offers and gives it breathing space.",
  alternates: { canonical: "https://aldovia.in/rooms/luxury-room" },
};

export default function Page() {
  return <RoomDetail html={html} />;
}
