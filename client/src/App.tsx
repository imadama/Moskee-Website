import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Education from "@/pages/Education";
import Contact from "@/pages/Contact";
import Membership from "@/pages/lid-worden";
import Events from "@/pages/Events";
import "./i18n/i18n";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/services" component={Services} />
      <Route path="/education" component={Education} />
      <Route path="/contact" component={Contact} />
      <Route path="/lid-worden" component={Membership} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;