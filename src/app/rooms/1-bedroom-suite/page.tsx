import type { Metadata } from "next";
import { RoomDetail } from "@/components/RoomDetail";
import { html } from "@/content/rendered/rooms__1-bedroom-suite";

export const metadata: Metadata = {
  title: "1 Bedroom Suite",
  description:
    "A separate living area divided from the bedroom by an elegant pass-through. The 1 Bedroom Suite at Aldovia.",
  alternates: { canonical: "https://aldovia.in/rooms/1-bedroom-suite" },
};

export default function Page() {
  return <RoomDetail html={html} />;
}
