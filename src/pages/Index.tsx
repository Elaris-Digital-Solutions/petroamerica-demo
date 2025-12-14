import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessLinesSection } from "@/components/sections/BusinessLinesSection";
import { PromotionsSection } from "@/components/sections/PromotionsSection";
import { StationsSection } from "@/components/sections/StationsSection";
import { BlogSection } from "@/components/sections/BlogSection";


const Index = () => {
  useEffect(() => {
    // Si el usuario ya tiene una preferencia de zoom, no la sobrescribas
    const savedZoom = localStorage.getItem('userZoom');
    if (!savedZoom) {
      document.body.style.zoom = "100%";
      localStorage.setItem('userZoom', '100%');
    } else {
      document.body.style.zoom = savedZoom;
    }
    // Permitir que el usuario cambie el zoom manualmente y guardar la preferencia
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        setTimeout(() => {
          localStorage.setItem('userZoom', document.body.style.zoom);
        }, 100);
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  return (
    <PageLayout headerVariant="transparent">
      <SEO
        title="Inicio"
        description="Petroamérica es líder en la comercialización y distribución de combustibles líquidos y GLP en el Perú. Energía que mueve al país."
      />
      <HeroSection />
      <AboutSection />
      <BusinessLinesSection />
      <PromotionsSection />
      <StationsSection />
      <BlogSection />
    </PageLayout>
  );
};

export default Index;
