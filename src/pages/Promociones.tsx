import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Calendar, Tag, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { promotions } from "@/data/promotions";
import heroImg from "@/assets/promo-1.jpg";

// Preload hero image
if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImg;
    document.head.appendChild(link);
}

export default function Promociones() {
    return (
        <PageLayout headerVariant="transparent">
            <PageHero
                title="Promociones Vigentes"
                subtitle="Descubre las ofertas exclusivas y sorteos que tenemos preparados para premiar tu preferencia."
                image={heroImg}
            />

            <div className="section-container section-padding relative z-20">
                {/* Featured Promo (if any, or just header) - Skipping for grid focus */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-20">
                    {promotions.map((promo, index) => (
                        <div
                            key={promo.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative w-full h-56 overflow-hidden">
                                <img
                                    src={promo.image}
                                    alt={promo.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/80 to-transparent opacity-60" />
                                <Badge className="absolute top-4 left-4 bg-secondary text-white hover:bg-secondary font-bold px-3 py-1 shadow-md">
                                    {promo.type}
                                </Badge>
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90 text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                                    <Calendar size={14} />
                                    <span>Válido hasta: {promo.validUntil}</span>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col w-full relative">
                                <div className="absolute -top-6 right-6 h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg text-corporate-navy group-hover:text-secondary transition-colors duration-300">
                                    <Gift size={24} />
                                </div>

                                <h3 className="text-xl font-bold text-corporate-navy mb-3 group-hover:text-secondary transition-colors mt-2 leading-tight">
                                    {promo.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                                    {promo.description}
                                </p>

                                <div className="pt-4 mt-auto border-t border-gray-100 w-full flex items-center justify-between">
                                    <a href="#" className="text-xs text-muted-foreground hover:text-corporate-navy underline decoration-muted-foreground/50 underline-offset-4 transition-colors">
                                        Términos y condiciones
                                    </a>
                                    <Button variant="ghost" size="sm" className="text-corporate-navy font-bold hover:text-secondary p-0 hover:bg-transparent group/btn">
                                        Ver detalles
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-20 relative bg-corporate-navy rounded-3xl overflow-hidden text-center md:text-left">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626262967980-82cc4a9b6c43?auto=format&fit=crop&q=80')] bg-cover opacity-20" />
                    <div className="absolute -left-20 -bottom-40 w-80 h-80 bg-secondary rounded-full blur-[100px] opacity-30" />

                    <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold text-white mb-4">¿Quieres enterarte primero de nuestras ofertas?</h2>
                            <p className="text-blue-100 text-lg">
                                Suscríbete a nuestro boletín y recibe las últimas promociones, sorteos y novedades de Petroamérica directamente en tu correo.
                            </p>
                        </div>
                        <div className="w-full lg:w-auto min-w-[350px]">
                            <form className="flex flex-col sm:flex-row gap-3 bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/10" onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="bg-transparent border-0 text-white placeholder:text-blue-200 focus-visible:ring-0 h-10 min-w-0"
                                />
                                <Button className="bg-secondary hover:bg-secondary-hover text-white font-bold px-6 shadow-lg h-10 whitespace-nowrap">
                                    Suscribirme
                                </Button>
                            </form>
                            <p className="text-white/40 text-xs mt-3 text-center lg:text-left pl-2">
                                Respetamos tu privacidad. Date de baja cuando quieras.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
