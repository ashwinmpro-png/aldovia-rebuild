import { redirect } from "next/navigation";

// Placeholder for the / route. Per the Warden's spec the bubbles+feathers
// navigator lives here. Until that lands (Task 17), the index forwards to
// the cinematic /home so the site is never broken.
export default function IndexPage() {
  redirect("/home");
}
