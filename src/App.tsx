import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import FloatingContactButton from "./components/FloatingContactButton";
import Index from "./pages/Index";
import Soluciones from "./pages/Soluciones";
import Mercados from "./pages/Mercados";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Auth from "./pages/Auth";
import OAuthConsent from "./pages/OAuthConsent";
import LegalDocument from "./pages/LegalDocument";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/mercados" element={<Mercados />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/.lovable/oauth/consent" element={<OAuthConsent />} />
          <Route path="/terminos" element={<LegalDocument document="terms" />} />
          <Route path="/aviso-de-privacidad" element={<LegalDocument document="privacy" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingContactButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
