import { PageLayout } from "@/components/layout/PageLayout";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { blogPosts } from "@/data/blog";

export default function BlogDetalle() {
    const { id } = useParams();
    const article = blogPosts.find(p => p.id === Number(id));

    if (!article) return <Navigate to="/blog" replace />;

    return (
        <PageLayout>
            <div className="bg-muted/30 border-b border-border">
                <div className="section-container py-8">
                    <Link to="/blog" className="text-muted-foreground hover:text-corporate-navy flex items-center gap-2 mb-6 transition-colors text-sm font-medium">
                        <ArrowLeft size={16} />
                        Volver al Blog
                    </Link>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Badge className="bg-secondary hover:bg-secondary text-white border-none">{article.category}</Badge>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar size={14} /> {article.date}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock size={14} /> {article.readTime}
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-corporate-navy mb-6 leading-tight">
                            {article.title}
                        </h1>
                        <div className="flex items-center gap-3 pb-2">
                            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                                <User size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-corporate-navy">{article.author}</p>
                                <p className="text-xs text-muted-foreground">Autor Colaborador</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container section-padding pt-12">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Article Content */}
                    <div className="lg:col-span-8">
                        <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
                            <img src={article.image} alt={article.title} className="w-full h-auto object-cover max-h-[500px]" />
                        </div>

                        <div className="prose prose-lg prose-blue max-w-none text-muted-foreground">
                            {article.content}
                        </div>

                        {/* Share */}
                        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
                            <span className="font-bold text-corporate-navy flex items-center gap-2">
                                <Share2 size={20} /> Compartir artículo:
                            </span>
                            <div className="flex gap-4">
                                <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"><Facebook size={18} /></Button>
                                <Button variant="outline" size="icon" className="rounded-full hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all"><Twitter size={18} /></Button>
                                <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all"><Linkedin size={18} /></Button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-muted/30 rounded-xl p-6 border border-border">
                            <h3 className="font-bold text-corporate-navy mb-4 text-lg">Artículos Relacionados</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <Link key={i} to={`/blog/${i}`} className="flex gap-4 group cursor-pointer">
                                        <div className="h-20 w-20 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                                            <img src={`https://source.unsplash.com/random/200x200?sig=${i}`} alt="Related" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <span className="text-xs text-secondary font-semibold mb-1 block">Tecnología</span>
                                            <h4 className="font-bold text-corporate-navy text-sm line-clamp-2 group-hover:text-secondary transition-colors">
                                                Título del artículo relacionado interesante
                                            </h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="bg-corporate-navy rounded-xl p-6 text-white text-center">
                            <h3 className="font-bold text-xl mb-2">Suscríbete</h3>
                            <p className="text-blue-100 text-sm mb-4">Recibe las mejores noticias en tu correo.</p>
                            <input type="email" placeholder="Tu correo" className="w-full h-10 px-3 rounded-md text-foreground text-sm mb-3" />
                            <Button className="w-full bg-secondary hover:bg-accent text-white font-bold">Suscribirme</Button>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
