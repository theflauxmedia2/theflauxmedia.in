import PageShell from "@/components/page-shell";
import Hero from "@/components/hero";
import SelectedWork from "@/components/selected-work";
import BrandMarquee from "@/components/brand-marquee";
import Services from "@/components/services";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <SelectedWork />
      <BrandMarquee />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </PageShell>
  );
}
