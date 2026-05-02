import { redirect } from "next/navigation";

// /process has been retired. We forward to /about so any old links
// (and any cached search results) still land somewhere sensible.
export default function ProcessPage() {
  redirect("/about");
}
