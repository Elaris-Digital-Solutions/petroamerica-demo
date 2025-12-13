import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, TrendingUp, Users, Heart, Upload } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImg from "@/assets/about-building.jpg";

export default function Trabaja() {
    return (
        <PageLayout headerVariant="transparent">
            <PageHero
                title="Únete a Nuestro Equipo"
                subtitle="Buscamos personas talentosas y apasionadas que quieran impulsar el desarrollo energético del Perú."
                image={heroImg}
            />

            <div className="section-container section-padding">
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block">Cultura Petroamérica</span>
                        <h2 className="text-3xl font-bold text-corporate-navy mb-6">¿Por qué trabajar con nosotros?</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            En Petroamérica, creemos que nuestro mayor activo es nuestra gente. Fomentamos un ambiente de trabajo colaborativo, inclusivo y orientado al crecimiento profesional, donde cada miembro del equipo puede desarrollar su máximo potencial.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-muted/30 p-6 rounded-xl border border-border">
                                <TrendingUp className="text-secondary mb-4" size={32} />
                                <h3 className="font-bold text-corporate-navy mb-2">Crecimiento Profesional</h3>
                                <p className="text-sm text-muted-foreground">Línea de carrera y programas de capacitación continua.</p>
                            </div>
                            <div className="bg-muted/30 p-6 rounded-xl border border-border">
                                <Heart className="text-secondary mb-4" size={32} />
                                <h3 className="font-bold text-corporate-navy mb-2">Bienestar Integral</h3>
                                <p className="text-sm text-muted-foreground">Seguro de salud privado y beneficios para ti y tu familia.</p>
                            </div>
                            <div className="bg-muted/30 p-6 rounded-xl border border-border">
                                <Users className="text-secondary mb-4" size={32} />
                                <h3 className="font-bold text-corporate-navy mb-2">Excelente Clima</h3>
                                <p className="text-sm text-muted-foreground">Ambiente laboral reconocido y certificaciones Great Place to Work.</p>
                            </div>
                            <div className="bg-muted/30 p-6 rounded-xl border border-border">
                                <Briefcase className="text-secondary mb-4" size={32} />
                                <h3 className="font-bold text-corporate-navy mb-2">Estabilidad</h3>
                                <p className="text-sm text-muted-foreground">Forma parte de una empresa sólida y líder en el sector.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-fit">
                        <h3 className="text-2xl font-bold text-corporate-navy mb-6">Envíanos tu CV</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Nombre</label>
                                    <Input placeholder="Tu nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Apellido</label>
                                    <Input placeholder="Tu apellido" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Correo Electrónico</label>
                                <Input type="email" placeholder="ejemplo@correo.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Área de Interés</label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona un área" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="operaciones">Operaciones y Logística</SelectItem>
                                        <SelectItem value="comercial">Comercial y Ventas</SelectItem>
                                        <SelectItem value="administrativo">Administración y Finanzas</SelectItem>
                                        <SelectItem value="tecnologia">Tecnología y Sistemas</SelectItem>
                                        <SelectItem value="estaciones">Atención en Estaciones</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Mensaje / Presentación</label>
                                <Textarea placeholder="Cuéntanos brevemente sobre ti..." className="min-h-[100px]" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Adjuntar CV (PDF)</label>
                                <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
                                    <Upload className="text-muted-foreground mb-2" size={24} />
                                    <span className="text-sm text-muted-foreground">Arrastra tu archivo aquí o haz clic para buscar</span>
                                    <span className="text-xs text-muted-foreground mt-1">(Máx. 5MB)</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <input type="checkbox" id="terms" className="mt-1 rounded border-gray-300 text-corporate-navy focus:ring-corporate-navy" />
                                <label htmlFor="terms" className="text-xs text-muted-foreground">
                                    Autorizo el tratamiento de mis datos personales para procesos de selección de acuerdo a la ley de protección de datos.
                                </label>
                            </div>

                            <Button type="submit" className="w-full bg-corporate-navy hover:bg-corporate-dark text-white font-bold h-12 mt-2">
                                Enviar Postulación
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Process Steps (Optional) */}
                <div className="border-t border-border pt-16 text-center">
                    <h2 className="text-2xl font-bold text-corporate-navy mb-12">Nuestro Proceso de Selección</h2>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connector Line (Hidden on mobile) */}
                        <div className="hidden md:block absolute top-[22px] left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                        {[
                            { title: "Postulación", desc: "Envíanos tus datos a través del formulario." },
                            { title: "Evaluación", desc: "Revisamos tu perfil y realizamos las primeras entrevistas." },
                            { title: "Entrevista Final", desc: "Conoces al líder del equipo y profundizamos en el rol." },
                            { title: "Incorporación", desc: "¡Bienvenido! Iniciamos tu proceso de onboarding." }
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-background">
                                <div className="h-12 w-12 rounded-full bg-corporate-navy text-white flex items-center justify-center font-bold text-lg border-4 border-background mb-4 shadow-sm">
                                    {idx + 1}
                                </div>
                                <h3 className="font-bold text-corporate-navy mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground px-4">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
