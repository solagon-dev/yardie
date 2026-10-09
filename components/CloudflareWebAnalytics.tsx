"use client";

import { useEffect } from "react";

export default function CloudflareWebAnalytics() {
  useEffect(() => {
    if (window.location.hostname.replace(/^www\./, "") !== "yardiedesign.com") return;
    if (/^\/(?:admin|api|portal)(?:\/|$)/.test(window.location.pathname)) return;
    if (document.querySelector("script[data-cf-beacon]")) return;
    const beacon = document.createElement("script");
    beacon.type = "module";
    beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
    beacon.dataset.cfBeacon = JSON.stringify({ token: "70396b44f09b45acaa465f5006d1a973" });
    document.head.appendChild(beacon);
  }, []);
  return null;
}
