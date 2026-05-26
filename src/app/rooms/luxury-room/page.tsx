import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoomDetail } from "@/components/RoomDetail";
import { ROOMS } from "@/lib/content";

const ROOM_ID = "luxury-room";

export const metadata: Metadata = {
  title: "Luxury Room",
  description:
    "A step wider, a touch more generous. The Luxury Room at Aldovia takes everything the Deluxe offers and gives it breathing space.",
};

export default function Page() {
  const room = ROOMS.find((r) => r.id === ROOM_ID);
  if (!room) notFound();
  return <RoomDetail room={room} />;
}
