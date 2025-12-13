import { Button } from "@/components/ui/button";
import { MapPin, Search, Navigation } from "lucide-react";

export function StationsSection() {
  return (
    <section className="section-padding corporate-gradient text-primary-foreground">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Nuestra Red
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">
              Estaciones de Servicio
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
              Contamos con más de 150 estaciones de servicio estratégicamente ubicadas 
              en las principales ciudades y carreteras del país, ofreciendo combustibles 
              de la más alta calidad.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Cobertura Nacional</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Presencia en 15 regiones del Perú
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Search className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Servicios Complementarios</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Tiendas de conveniencia, lavado y lubricación
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Navigation className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Atención 24/7</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Estaciones con servicio continuo en ubicaciones estratégicas
                  </p>
                </div>
              </li>
            </ul>

            <Button variant="hero" size="lg">
              Encuentra tu estación más cercana
            </Button>
          </div>

          {/* Map Placeholder */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-primary-foreground/10 rounded-lg overflow-hidden aspect-square md:aspect-[4/3] backdrop-blur-sm border border-primary-foreground/20">
              {/* Map placeholder with decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Mapa Interactivo</h3>
                  <p className="text-primary-foreground/70 text-sm max-w-xs">
                    Próximamente podrás explorar todas nuestras estaciones en un mapa interactivo
                  </p>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-secondary animate-pulse" />
              <div className="absolute top-1/4 right-12 w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute bottom-12 right-1/4 w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "1.5s" }} />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.75s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
