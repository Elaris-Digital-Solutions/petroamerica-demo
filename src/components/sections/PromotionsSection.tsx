import { Button } from "@/components/ui/button";
import { ArrowRight, Tag, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { promotions } from "@/data/promotions";

export function PromotionsSection() {
  // Take only the first 2 promotions for the home page
  const featuredPromotions = promotions.slice(0, 2);

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
          <Link to="/promociones">
            <Button variant="outline" size="lg">
              Ver todas las promociones
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Promotions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPromotions.map((promo, index) => (
            <div
              key={promo.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 h-full">
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
                      {promo.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center h-full">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {promo.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 mt-auto">
                    <Clock className="h-4 w-4" />
                    <span>{promo.validUntil}</span>
                  </div>
                  <Link to={`/promociones/${promo.slug}`}>
                    <Button variant="cyan" className="w-fit">
                      Más información
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
