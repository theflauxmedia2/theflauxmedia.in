import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Headline } from "@/components/motion";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 sm:px-8 lg:px-12">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] bg-[radial-gradient(closest-side,rgba(247,99,0,0.20),transparent)]" />
      <div className="relative mx-auto w-full max-w-[1400px]">
        <p className="eyebrow mb-8">Error 404</p>
        <Headline
          as="h1"
          onMount
          className="text-[18vw] text-bone sm:text-9xl"
          lines={["This page", <>got <span className="accent">cut.</span></>]}
        />
        <p className="mt-8 max-w-md text-lg text-mute">
          It didn't make the final edit. Let's get you back to something worth watching.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary group">
            Back home
            <ArrowUpRight size={16} className="btn-arrow" />
          </Link>
          <Link href="/our-work" className="btn btn-ghost">
            See our work
          </Link>
        </div>
      </div>
    </main>
  );
}
