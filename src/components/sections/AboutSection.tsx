import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-building.jpg";

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Sede corporativa de Petroamérica" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold">+25</div>
              <div className="text-sm font-medium">Años de experiencia</div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Comprometidos con el desarrollo energético del Perú
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Petroamérica es una empresa peruana líder en el sector de hidrocarburos, 
              dedicada a la comercialización, distribución y venta minorista de 
              combustibles líquidos y GLP.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestra misión es contribuir al desarrollo económico del país, 
              garantizando el abastecimiento de energía de calidad con los más altos 
              estándares de seguridad y responsabilidad ambiental. Contamos con una 
              amplia red de estaciones de servicio y terminales de distribución 
              estratégicamente ubicados.
            </p>
            
            <div className="grid grid-cols-3 gap-2 md:gap-8 mb-8 w-full">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">150+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Estaciones de servicio</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">1M+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Clientes atendidos</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">15</div>
                <div className="text-xs md:text-sm text-muted-foreground">Regiones del Perú</div>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <Button variant="corporate" size="lg" className="w-full sm:w-auto">
                Conoce más sobre nosotros
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
