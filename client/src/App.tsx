import { Switch, Route, Redirect, useLocation } from "wouter";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingNav from "@/components/floating-nav";
import HeadSync from "@/seo/head-sync";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Packages from "@/pages/packages";
import OurWork from "@/pages/our-work";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      {/* No real team page yet — send visitors to About */}
      <Route path="/team">
        <Redirect to="/about" replace />
      </Route>
      <Route path="/contact" component={Contact} />
      <Route path="/packages" component={Packages} />
      <Route path="/our-work" component={OurWork} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  // Scroll to the top on route (path) change, or to the hash target if there is one
  useEffect(() => {
    // Defer until after route renders
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);
  }, [location]);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionConfig reducedMotion="user">
          <Toaster />
          <ScrollToTop />
          <HeadSync />
          <Router />
          <FloatingNav />
        </MotionConfig>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
