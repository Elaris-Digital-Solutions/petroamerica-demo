import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessLinesSection } from "@/components/sections/BusinessLinesSection";
import { PromotionsSection } from "@/components/sections/PromotionsSection";
import { StationsSection } from "@/components/sections/StationsSection";
import { BlogSection } from "@/components/sections/BlogSection";

const Index = () => {
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
