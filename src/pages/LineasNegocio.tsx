import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessLines } from "@/data/businessLines";
import heroImg from "@/assets/business-refinery.jpg";

// Preload hero image
if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImg;
    document.head.appendChild(link);
}

export default function LineasNegocio() {
    return (
        <PageLayout headerVariant="transparent">
            <PageHero
                title="Líneas de Negocio"
                subtitle="Soluciones energéticas integrales adaptadas a las necesidades de cada sector productivo del país."
                image={heroImg}
            />

            <div className="section-container section-padding">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {businessLines.map((line, index) => (
                        <div
                            key={line.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={line.image}
                                    alt={line.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/90 via-transparent to-transparent opacity-80" />
                                <div className={`absolute bottom-6 left-6 h-16 w-16 rounded-2xl ${line.color ? line.color.replace('bg-', 'bg-white text-') : 'bg-white text-corporate-navy'} flex items-center justify-center shadow-lg`}>
                                    <line.icon size={32} />
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-corporate-navy mb-4 group-hover:text-secondary transition-colors">
                                    {line.title}
                                </h3>
                                <p className="text-muted-foreground text-lg mb-8 flex-grow leading-relaxed">
                                    {line.description}
                                </p>

                                <div className="pt-6 border-t border-gray-100 mt-auto">
                                    <Link to={`/lineas-de-negocio/${line.id}`}>
                                        <Button className="w-full bg-slate-50 hover:bg-corporate-navy text-corporate-navy hover:text-white border-0 transition-all font-semibold justify-between group-hover:pl-6">
                                            Explorar Soluciones
                                            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-corporate-navy" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />

                    <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">¿Buscas abastecimiento industrial?</h3>
                            <p className="text-blue-100 text-lg max-w-xl">
                                Contamos con la capacidad logística para atender proyectos de gran envergadura en minería, pesca y construcción.
                            </p>
                        </div>
                        <Link to="/contacto">
                            <Button size="xl" className="bg-secondary hover:bg-secondary-hover text-white font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-0">
                                Solicitar Cotización
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
