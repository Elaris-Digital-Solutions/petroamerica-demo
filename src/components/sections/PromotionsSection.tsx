import { Button } from "@/components/ui/button";
import { ArrowRight, Tag, Clock } from "lucide-react";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";

const promotions = [
  {
    title: "Programa de Fidelización",
    description: "Acumula puntos en cada compra y canjéalos por descuentos exclusivos en combustible y productos de tienda.",
    image: promo1,
    badge: "Nuevo",
    validUntil: "Vigente todo el año",
  },
  {
    title: "Lavado Gratis",
    description: "Por cada tanqueo completo en nuestras estaciones seleccionadas, recibe un lavado express gratis para tu vehículo.",
    image: promo2,
    badge: "Promoción",
    validUntil: "Hasta el 31 de diciembre",
  },
];

export function PromotionsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Ofertas Exclusivas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Promociones Destacadas
            </h2>
          </div>
          <Button variant="outline" size="lg">
            Ver todas las promociones
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Promotions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <div 
              key={promo.title}
              className="group relative bg-card rounded-lg overflow-hidden shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                      <Tag className="h-3 w-3" />
                      {promo.badge}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {promo.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{promo.validUntil}</span>
                  </div>
                  <Button variant="cyan" className="w-fit">
                    Más información
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
