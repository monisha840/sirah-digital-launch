import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import IndustriesPage from "./pages/Industries";
import WhyUsPage from "./pages/WhyUs";
import ProcessPage from "./pages/Process";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import { Chatbot } from "@/components/Chatbot";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
