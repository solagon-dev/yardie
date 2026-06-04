import { redirect } from "next/navigation";

/* Insights was renamed to Journal. The next.config.js permanent
   redirect catches this route before the page renders, but we keep
   a runtime redirect as belt-and-suspenders. */
export default function InsightsRedirect() {
  redirect("/journal");
}
