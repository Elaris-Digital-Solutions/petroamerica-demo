import { Button } from "@/components/ui/button";
import { ArrowRight, Fuel, Truck, Factory, Store } from "lucide-react";
import transportImg from "@/assets/business-transport.jpg";
import refineryImg from "@/assets/business-refinery.jpg";
import retailImg from "@/assets/business-retail.jpg";

const businessLines = [
  {
    icon: Fuel,
    title: "Venta Minorista",
    description: "Red de estaciones de servicio con combustibles de alta calidad, tiendas de conveniencia y servicios complementarios.",
    image: retailImg,
    href: "/lineas-de-negocio/minorista",
  },
  {
    icon: Truck,
    title: "Distribución Mayorista",
    description: "Abastecimiento de combustibles a empresas industriales, mineras, pesqueras y de transporte en todo el país.",
    image: transportImg,
    href: "/lineas-de-negocio/mayorista",
  },
  {
    icon: Factory,
    title: "Operaciones & Logística",
    description: "Infraestructura de almacenamiento y logística para garantizar el suministro continuo de productos.",
    image: refineryImg,
    href: "/lineas-de-negocio/operaciones",
  },
];

export function BusinessLinesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Líneas de Negocio
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos soluciones integrales en el sector energético, desde la venta 
            minorista hasta la distribución mayorista a nivel nacional.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessLines.map((line, index) => (
            <div 
              key={line.title}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={line.image} 
                  alt={line.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <line.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {line.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {line.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-accent">
                  Ver más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="corporate" size="lg">
            Ver todas las líneas de negocio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
