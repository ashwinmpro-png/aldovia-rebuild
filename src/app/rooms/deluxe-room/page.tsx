import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoomDetail } from "@/components/RoomDetail";
import { ROOMS } from "@/lib/content";

const ROOM_ID = "deluxe-room";

export const metadata: Metadata = {
  title: "Deluxe Room",
  description:
    "Warm wood tones, muted interiors, and ceiling accents that catch the light just so. The Deluxe Room at Aldovia.",
};

export default function Page() {
  const room = ROOMS.find((r) => r.id === ROOM_ID);
  if (!room) notFound();
  return <RoomDetail room={room} />;
}
