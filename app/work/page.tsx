// /work was the legacy portfolio page that pulled from a Prisma DB.
// Yardie's portfolio now lives at /gallery, so we redirect.
import { redirect } from "next/navigation";

export default function WorkPage() {
  redirect("/gallery");
}
