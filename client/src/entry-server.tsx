import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export { ROUTES, NOT_FOUND, getRoute } from "@/seo/routes";
export { buildHeadHtml } from "@/seo/head";
export { SITE_URL } from "@/lib/site";

/** Render the app for one path at build time (used by scripts/prerender.mjs). */
export function render(path: string): string {
  return renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>,
  );
}
