import { Switch, Route, useLocation } from "wouter";
import React, { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SimpleShowcaseNavbar from "@/components/SimpleShowcaseNavbar";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Team from "@/pages/team";
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
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/packages" component={Packages} />
      <Route path="/our-work" component={OurWork} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  // Scroll to the top on route (path) change; ignore hash-only changes
  // Using 'auto' to jump immediately without smooth animation
  useEffect(() => {
    // Defer until after route renders
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);
  }, [location]);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
        <SimpleShowcaseNavbar />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
