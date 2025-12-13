import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-station.jpg";

export function HeroSection() {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('nosotros');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-slow-zoom"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Improved Overlay: Darker at bottom/left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy/90 via-corporate-navy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full h-full flex flex-col justify-center">
        <div className="max-w-4xl space-y-8">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/20 to-corporate-blue/10 backdrop-blur-sm border border-corporate-blue/20 text-corporate-blue text-sm font-bold tracking-wider rounded-full uppercase">
              <span className="w-2 h-2 rounded-full bg-corporate-blue animate-pulse" />
              Líderes en Energía
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Impulsando el desarrollo <br />
            <span className="text-corporate-blue">
              productivo del Perú
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Más de 25 años garantizando el abastecimiento de combustibles, GLP y lubricantes con los más altos estándares de calidad y seguridad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <Button size="xl" className="bg-corporate-blue hover:bg-corporate-blue/90 text-white font-bold text-lg px-8 shadow-lg shadow-corporate-blue/20 transition-all hover:-translate-y-1">
              Conoce nuestras estaciones
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm text-lg px-8">
              Soluciones Empresariales
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={scrollToContent}>
        <div className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest font-medium">Descubre Más</span>
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  );
}
