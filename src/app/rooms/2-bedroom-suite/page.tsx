import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoomDetail } from "@/components/RoomDetail";
import { ROOMS } from "@/lib/content";

const ROOM_ID = "2-bedroom-suite";

export const metadata: Metadata = {
  title: "2 Bedroom Suite",
  description:
    "Built for families that want to be together without being on top of each other. The 2 Bedroom Suite at Aldovia.",
};

export default function Page() {
  const room = ROOMS.find((r) => r.id === ROOM_ID);
  if (!room) notFound();
  return <RoomDetail room={room} />;
}
