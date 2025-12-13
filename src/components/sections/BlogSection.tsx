import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const articles = [
  {
    title: "Petroamérica refuerza su compromiso con la seguridad industrial",
    excerpt: "Implementamos nuevos protocolos de seguridad en todas nuestras operaciones, garantizando el bienestar de nuestros colaboradores y clientes.",
    image: blog1,
    date: "12 Dic, 2024",
    category: "Corporativo",
  },
  {
    title: "Expansión de nuestra flota de transporte de combustibles",
    excerpt: "Incorporamos 20 nuevas unidades de transporte con tecnología de última generación para mejorar nuestra capacidad logística.",
    image: blog2,
    date: "8 Dic, 2024",
    category: "Operaciones",
  },
  {
    title: "Avances en energía sostenible: El futuro de los combustibles",
    excerpt: "Exploramos las tendencias en energías limpias y cómo Petroamérica se prepara para la transición energética.",
    image: blog3,
    date: "5 Dic, 2024",
    category: "Innovación",
  },
];

export function BlogSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Noticias & Actualizaciones
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Artículos Recientes
            </h2>
          </div>
          <Button variant="outline" size="lg">
            Ver todo el blog
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.title}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-accent">
                  Leer más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
