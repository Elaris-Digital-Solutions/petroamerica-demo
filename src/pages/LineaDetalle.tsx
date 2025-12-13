import { PageLayout } from "@/components/layout/PageLayout";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { businessLines } from "@/data/businessLines";

export default function LineaDetalle() {
    const { id } = useParams();
    const data = businessLines.find(line => line.id === id);

    if (!data) {
        return <Navigate to="/lineas-de-negocio" replace />;
    }

    return (
        <PageLayout>
            {/* Hero */}
            <div className="relative h-[50vh] min-h-[400px] w-full bg-corporate-navy">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 mix-blend-overlay"
                    style={{ backgroundImage: `url(${data.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="relative section-container h-full flex flex-col justify-end pb-16 z-10">
                    <Link to="/lineas-de-negocio" className="text-white/80 hover:text-secondary flex items-center gap-2 mb-6 transition-colors">
                        <ArrowLeft size={20} />
                        Volver a Líneas de Negocio
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{data.title}</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">{data.description}</p>
                </div>
            </div>

            <div className="section-container section-padding">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-corporate-navy mb-6">Descripción del Servicio</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {data.longDescription}
                        </p>

                        <h3 className="text-2xl font-bold text-corporate-navy mb-6">Características Principales</h3>
                        <div className="grid sm:grid-cols-2 gap-4 mb-12">
                            {data.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                                    <CheckCircle className="text-secondary shrink-0 mt-1" size={20} />
                                    <span className="font-medium text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Gallery Placeholder */}
                        <h3 className="text-2xl font-bold text-corporate-navy mb-6">Galería de Imágenes</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((img) => (
                                <div key={img} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-card sticky top-24 rounded-2xl p-8 border border-border shadow-lg">
                            <h3 className="text-xl font-bold text-corporate-navy mb-2">Solicitar Cotización</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Complete el formulario y un asesor especializado en <span className="text-secondary font-semibold">{data.title}</span> se pondrá en contacto con usted.
                            </p>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Nombre Completo</label>
                                    <Input placeholder="Ej. Juan Pérez" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Empresa</label>
                                    <Input placeholder="Ej. Transportes SAC" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Correo Electrónico</label>
                                    <Input type="email" placeholder="juan@empresa.com" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Teléfono</label>
                                    <Input type="tel" placeholder="+51 999 999 999" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Mensaje</label>
                                    <Textarea placeholder={`Estoy interesado en ${data.title}...`} className="min-h-[100px]" />
                                </div>
                                <Button type="submit" className="w-full bg-corporate-navy hover:bg-corporate-dark text-white font-bold h-12">
                                    Enviar Solicitud
                                </Button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-border">
                                <h4 className="font-semibold text-sm mb-4">Contacto Directo</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <Phone className="text-secondary" size={18} />
                                        <span>(01) 555-0123</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <Mail className="text-secondary" size={18} />
                                        <span>ventas@petroamerica.com.pe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
}
