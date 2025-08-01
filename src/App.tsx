
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth/AuthProvider";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import JobApplication from "./pages/JobApplication";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import InnovationTech from "./pages/InnovationTech";
import ClientRequirement from "./pages/ClientRequirement";
import CustomerFeedback from "./pages/CustomerFeedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <div className="font-inter antialiased">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/apply/:jobId" element={<JobApplication />} />
              <Route path="/innovation" element={<InnovationTech />} />
              <Route path="/client-requirement" element={<ClientRequirement />} />
              <Route path="/feedback" element={<CustomerFeedback />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<Admin />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
