import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blog";
import heroImg from "@/assets/hero-station.jpg";

// Preload hero image
if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImg;
    document.head.appendChild(link);
}

const categories = ["Todos", "Corporativo", "Tecnología", "Consejos", "Sostenibilidad"];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArticles = blogPosts.filter(article => {
        const matchesCategory = activeCategory === "Todos" || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <PageLayout headerVariant="transparent">
            <PageHero
                title="Noticias y Actualidad"
                subtitle="Mantente informado sobre las últimas tendencias del sector energético, innovación y las novedades de Petroamérica."
                image={heroImg}
            />

            <div className="section-container section-padding relative z-20">
                {/* Search & Categories Bar */}
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 -mt-20">
                    <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto scrollbar-hide">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? "default" : "ghost"}
                                onClick={() => setActiveCategory(cat)}
                                className={`rounded-xl px-6 font-medium transition-all ${activeCategory === cat
                                        ? "bg-corporate-navy hover:bg-corporate-dark text-white shadow-md"
                                        : "text-muted-foreground hover:text-corporate-navy hover:bg-gray-100"
                                    }`}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80 shrink-0">
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                            placeholder="Buscar artículos..."
                            className="pl-10 h-10 bg-gray-50 border-gray-200 focus:bg-white rounded-xl transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredArticles.map((article, index) => (
                        <Link
                            to={`/blog/${article.id}`}
                            key={article.id}
                            className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="bg-white/90 text-corporate-navy font-bold hover:bg-white backdrop-blur-sm shadow-sm">
                                        {article.category}
                                    </Badge>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                                        <User size={14} className="text-secondary" />
                                        {article.author}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                                        <Clock size={14} className="text-secondary" />
                                        {article.readTime}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-corporate-navy mb-3 line-clamp-2 group-hover:text-secondary transition-colors leading-tight">
                                    {article.title}
                                </h2>
                                <p className="text-muted-foreground text-base line-clamp-3 mb-6 flex-grow leading-relaxed">
                                    {article.excerpt}
                                </p>

                                <div className="flex justify-between items-center pt-5 border-t border-gray-100 mt-auto">
                                    <span className="text-xs text-gray-400 font-medium">{article.date}</span>
                                    <span className="text-sm font-bold text-corporate-navy flex items-center gap-1 group-hover:gap-2 transition-all group-hover:text-secondary">
                                        Leer artículo <ChevronRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {filteredArticles.length === 0 && (
                        <div className="col-span-full text-center py-20 text-muted-foreground bg-white rounded-2xl border border-dashed border-gray-200">
                            <p className="text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
                            <Button
                                variant="link"
                                onClick={() => { setSearchQuery(""); setActiveCategory("Todos"); }}
                                className="text-secondary mt-2"
                            >
                                Limpiar filtros
                            </Button>
                        </div>
                    )}
                </div>

                {/* Pagination Placeholder (only if articles exist) */}
                {filteredArticles.length > 0 && (
                    <div className="flex justify-center gap-2">
                        <Button variant="outline" size="icon" disabled className="rounded-full h-10 w-10 border-gray-200">
                            <ChevronRight size={18} className="rotate-180" />
                        </Button>
                        <Button variant="default" className="bg-corporate-navy hover:bg-corporate-dark rounded-full h-10 w-10 p-0">1</Button>
                        <Button variant="outline" className="rounded-full h-10 w-10 p-0 hover:bg-gray-50 border-gray-200">2</Button>
                        <Button variant="outline" className="rounded-full h-10 w-10 p-0 hover:bg-gray-50 border-gray-200">3</Button>
                        <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-gray-200 hover:bg-gray-50 hover:text-secondary">
                            <ChevronRight size={18} />
                        </Button>
                    </div>
                )}
            </div>
        </PageLayout>
    );
}
