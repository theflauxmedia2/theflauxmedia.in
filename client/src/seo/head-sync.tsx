import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { buildHeadHtml } from "@/seo/head";
import { getRoute } from "@/seo/routes";

/** Keeps <head> in sync with the current route during client-side navigation. */
export default function HeadSync() {
  const [location] = useLocation();
  const first = useRef(true);

  useEffect(() => {
    // The prerendered page already ships the right head for the first load
    const prerendered = first.current && document.head.querySelector("[data-seo]");
    first.current = false;
    if (prerendered) return;

    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    document.head.insertAdjacentHTML("beforeend", buildHeadHtml(getRoute(location)));
  }, [location]);

  return null;
}
