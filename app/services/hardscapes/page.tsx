// Legacy slug — the old generic "Hardscapes" service has been split into
// Patios & Pavers, Walkways & Driveways, Retaining Walls, and Pool Decks.
// Anyone landing here is redirected to the new patios-pavers page.
import { redirect } from "next/navigation";

export default function LegacyHardscapesPage() {
  redirect("/services/patios-pavers");
}
