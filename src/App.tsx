import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Soluciones from "./pages/Soluciones";
import Industrias from "./pages/Industrias";
import Cobertura from "./pages/Cobertura";
import Desarrolladores from "./pages/Desarrolladores";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/industrias" element={<Industrias />} />
          <Route path="/cobertura" element={<Cobertura />} />
          <Route path="/desarrolladores" element={<Desarrolladores />} />
          <Route path="/nosotros" element={<Nosotros />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
