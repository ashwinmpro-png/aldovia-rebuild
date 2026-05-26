import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoomDetail } from "@/components/RoomDetail";
import { ROOMS } from "@/lib/content";

const ROOM_ID = "executive-suite";

export const metadata: Metadata = {
  title: "Executive Suite",
  description:
    "The best room in the house, and it knows it. The Executive Suite at Aldovia. For leaders, for celebrations, for people who understand that the room sets the tone.",
};

export default function Page() {
  const room = ROOMS.find((r) => r.id === ROOM_ID);
  if (!room) notFound();
  return <RoomDetail room={room} />;
}
