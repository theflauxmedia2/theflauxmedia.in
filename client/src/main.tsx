import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

// Prerendered pages ship real HTML in #root; hydrate it instead of re-rendering
if (root.firstElementChild) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
