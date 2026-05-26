import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoomDetail } from "@/components/RoomDetail";
import { ROOMS } from "@/lib/content";

const ROOM_ID = "deluxe-suite";

export const metadata: Metadata = {
  title: "Deluxe Suite",
  description:
    "Where the suite category begins to feel like a private residence. The Deluxe Suite at Aldovia.",
};

export default function Page() {
  const room = ROOMS.find((r) => r.id === ROOM_ID);
  if (!room) notFound();
  return <RoomDetail room={room} />;
}
