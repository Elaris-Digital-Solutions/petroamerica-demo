
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function BlogSection() {
  const recentArticles = blogPosts.slice(0, 3);

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
          <Link to="/blog">
            <Button variant="outline" size="lg">
              Ver todo el blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article, index) => (
            <article
              key={article.id}
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
                  <span className="mx-1">•</span>
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link to={`/blog/${article.id}`}>
                  <Button variant="link" className="p-0 h-auto text-secondary hover:text-accent">
                    Leer más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
