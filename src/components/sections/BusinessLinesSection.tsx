
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { businessLines } from "@/data/businessLines";

export function BusinessLinesSection() {
  // Select specific lines to show on home or just first 3
  const featuredLines = businessLines.slice(0, 3);

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
          {featuredLines.map((line, index) => (
            <div
              key={line.id}
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
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${line.color ? 'bg-secondary text-secondary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                    {/* Note: In a real app we might handle colors dynamically better */}
                    <line.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {line.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {line.description}
                </p>
                <Link to={`/lineas-de-negocio/${line.id}`}>
                  <Button variant="link" className="p-0 h-auto text-secondary hover:text-accent">
                    Ver más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/lineas-de-negocio">
            <Button variant="corporate" size="lg">
              Ver todas las líneas de negocio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
