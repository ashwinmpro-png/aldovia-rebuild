import type { Metadata } from "next";
import { RoomDetail } from "@/components/RoomDetail";
import { html } from "@/content/rendered/rooms__executive-suite";

export const metadata: Metadata = {
  title: "Presidential Suite",
  description:
    "The best room in the house, and it knows it. The Presidential Suite at Aldovia.",
  alternates: { canonical: "https://aldovia.in/rooms/executive-suite" },
};

export default function Page() {
  return <RoomDetail html={html} />;
}
