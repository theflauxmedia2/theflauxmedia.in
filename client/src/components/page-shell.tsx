import { useEffect, type ReactNode } from "react";
import SiteNav from "@/components/site-nav";
import Footer from "@/components/footer";

/** Page panel that slides up off a fixed footer layer, revealing it at the end of the scroll. */
export default function PageShell({ children }: { children: ReactNode }) {
  // Mobile reveal distance = the footer's real height (it's shorter than the viewport there)
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const sync = () => document.documentElement.style.setProperty("--footer-h", `${footer.offsetHeight}px`);
    const observer = new ResizeObserver(sync);
    observer.observe(footer);
    sync();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Footer />
      <div
        id="page-content"
        className="relative z-10 mb-[var(--footer-h,100svh)] min-h-screen overflow-clip md:mb-[100vh] rounded-b-[40px] bg-ink shadow-[0_40px_80px_rgba(0,0,0,0.6)] md:rounded-b-[96px]"
      >
        <SiteNav />
        <main>{children}</main>
      </div>
    </div>
  );
}
