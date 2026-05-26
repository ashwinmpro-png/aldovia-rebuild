import type { Metadata } from "next";
import { RoomDetail } from "@/components/RoomDetail";
import { html } from "@/content/rendered/rooms__2-bedroom-suite";

export const metadata: Metadata = {
  title: "2 Bedroom Suite",
  description:
    "Two full bedrooms, one shared living. The 2 Bedroom Suite at Aldovia.",
  alternates: { canonical: "https://aldovia.in/rooms/2-bedroom-suite" },
};

export default function Page() {
  return <RoomDetail html={html} />;
}
