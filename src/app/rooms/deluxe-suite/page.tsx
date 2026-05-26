import type { Metadata } from "next";
import { RoomDetail } from "@/components/RoomDetail";
import { html } from "@/content/rendered/rooms__deluxe-suite";

export const metadata: Metadata = {
  title: "Deluxe Suite",
  description:
    "Generous, with a viewing seat. The Deluxe Suite at Aldovia.",
  alternates: { canonical: "https://aldovia.in/rooms/deluxe-suite" },
};

export default function Page() {
  return <RoomDetail html={html} />;
}
