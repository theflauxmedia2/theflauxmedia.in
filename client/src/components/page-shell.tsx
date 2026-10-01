import type { ReactNode } from "react";
import SiteNav from "@/components/site-nav";
import Footer from "@/components/footer";

/** Page panel that slides up off a fixed footer layer, revealing it at the end of the scroll. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col md:block">
      <Footer />
      <div
        id="page-content"
        className="relative z-10 min-h-screen md:mb-[100vh] overflow-clip rounded-b-[40px] bg-ink shadow-[0_40px_80px_rgba(0,0,0,0.6)] md:rounded-b-[96px]"
      >
        <SiteNav />
        <main>{children}</main>
      </div>
    </div>
  );
}
