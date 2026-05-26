import parse from "html-react-parser";

// Renders the canonical room-detail HTML straight from the
// cream-theme-hotel source (aldovia-build commit e9f5e57). Each room
// has its own HTML blob in @/content/rendered/rooms__<slug>.

export function RoomDetail({ html }: { html: string }) {
  return <>{parse(html)}</>;
}
