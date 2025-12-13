import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Nosotros from "./pages/Nosotros";
import LineasNegocio from "./pages/LineasNegocio";
import LineaDetalle from "./pages/LineaDetalle";
import Estaciones from "./pages/Estaciones";
import Promociones from "./pages/Promociones";
import Blog from "./pages/Blog";
import BlogDetalle from "./pages/BlogDetalle";
import Trabaja from "./pages/Trabaja";
import Contacto from "./pages/Contacto";
import Gracias from "./pages/Gracias";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/lineas-de-negocio" element={<LineasNegocio />} />
            <Route path="/lineas-de-negocio/:id" element={<LineaDetalle />} />
            <Route path="/estaciones" element={<Estaciones />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetalle />} />
            <Route path="/trabaja-con-nosotros" element={<Trabaja />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/gracias" element={<Gracias />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
