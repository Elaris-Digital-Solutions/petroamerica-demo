import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { useParams, Navigate, Link } from "react-router-dom";
import { promotions } from "@/data/promotions";
import { Calendar, Tag, ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PromocionDetalle() {
    const { slug } = useParams();
    const promo = promotions.find((p) => p.slug === slug);

    if (!promo) {
        return <Navigate to="/promociones" replace />;
    }

    return (
        <PageLayout headerVariant="transparent">
            {/* Custom Hero for Detail */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${promo.image})` }}
                >
                    <div className="absolute inset-0 bg-corporate-navy/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-transparent to-transparent opacity-90" />
                </div>

                <div className="container relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-secondary text-white hover:bg-secondary mb-6 text-lg py-1 px-4 shadow-lg border-none">
                            {promo.type}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {promo.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 text-lg">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <Calendar className="w-5 h-5 text-secondary" />
                                <span>Válido hasta: {promo.validUntil}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container section-padding -mt-20 relative z-20">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">

                    {/* Content */}
                    <div
                        className="prose prose-lg max-w-none text-muted-foreground mb-12"
                        dangerouslySetInnerHTML={{ __html: promo.content }}
                    />

                    {/* Legal / Terms */}
                    {promo.legal && (
                        <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-100">
                            <h4 className="text-sm font-bold text-corporate-navy mb-2 uppercase tracking-wider">Términos y Condiciones</h4>
                            <p className="text-sm text-gray-500 italic">
                                {promo.legal}
                            </p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
                        <Link to="/promociones">
                            <Button variant="ghost" className="text-muted-foreground hover:text-corporate-navy">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Volver a promociones
                            </Button>
                        </Link>

                        <div className="flex gap-4">
                            <Link to="/estaciones">
                                <Button variant="outline" className="border-corporate-navy text-corporate-navy hover:bg-corporate-navy/5">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    Ver estaciones
                                </Button>
                            </Link>
                            <Link to="/contacto">
                                <Button className="bg-secondary hover:bg-secondary-hover text-white shadow-lg shadow-secondary/20">
                                    Contáctanos
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
