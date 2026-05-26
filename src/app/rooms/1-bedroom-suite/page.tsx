import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoomDetail } from "@/components/RoomDetail";
import { ROOMS } from "@/lib/content";

const ROOM_ID = "1-bedroom-suite";

export const metadata: Metadata = {
  title: "1 Bedroom Suite",
  description:
    "A separate living area changes everything. The 1 Bedroom Suite at Aldovia. Bedroom, living room, and the sense of space that turns a hotel stay into something better.",
};

export default function Page() {
  const room = ROOMS.find((r) => r.id === ROOM_ID);
  if (!room) notFound();
  return <RoomDetail room={room} />;
}
