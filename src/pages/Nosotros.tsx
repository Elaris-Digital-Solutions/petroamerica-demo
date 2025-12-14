import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Users, Award, Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/about-building.jpg";

export default function Nosotros() {
    return (
        <PageLayout headerVariant="transparent">
            <PageHero
                title="Sobre Nosotros"
                subtitle="Más de 40 años impulsando el desarrollo energético del Perú con compromiso, seguridad y eficiencia."
                image={heroImage}
            />

            {/* Historia */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block">Nuestra Trayectoria</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-8 leading-tight">
                                Transformando el mercado de hidrocarburos desde 1998
                            </h2>
                            <div className="prose text-muted-foreground prose-lg space-y-6">
                                <p>
                                    Fundada hace más de dos décadas, <span className="font-semibold text-corporate-navy">Petroamérica</span> nació con la visión de elevar los estándares del mercado de combustibles en el país. Lo que comenzó como un proyecto enfocado en la distribución eficiente, hoy es un ecosistema energético integral.
                                </p>
                                <p>
                                    Nuestra evolución de distribuidora local a una red nacional con presencia en más de 15 regiones es testimonio de nuestra resiliencia. Operamos terminales propios y una flota de última generación que garantiza el abastecimiento oportuno, incluso en las condiciones más desafiantes.
                                </p>
                                <p>
                                    Más que proveedores, somos socios estratégicos para las principales industrias del Perú, impulsando desde la minería hasta el transporte con la energía fiable que sus operaciones demandan.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl skew-y-1">
                                {/* Placeholder for timeline/history image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-corporate-navy via-slate-800 to-slate-900 flex items-center justify-center group cursor-pointer">
                                    <div className="text-center p-8 group-hover:scale-105 transition-transform duration-500">
                                        <Award className="w-16 h-16 text-secondary mx-auto mb-4 opacity-80" />
                                        <h3 className="text-2xl font-bold text-white mb-2">Línea de Tiempo</h3>
                                        <p className="text-gray-400">Descubre nuestros hitos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-6 -right-6 w-40 h-40 bg-corporate-cyan/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión, Visión, Valores */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                <div className="section-container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-corporate-navy mb-4">Nuestro Norte Corporativo</h2>
                        <p className="text-muted-foreground text-lg">
                            Principios que guían cada decisión y fortalecen nuestro compromiso con el país.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Misión */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
                                <Target size={32} className="text-corporate-blue" />
                            </div>
                            <h3 className="text-2xl font-bold text-corporate-navy mb-4">Misión</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Proveer soluciones energéticas integrales de alta calidad, garantizando un abastecimiento oportuno, seguro y eficiente que potencie el desarrollo sostenible de nuestros clientes.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="bg-corporate-navy p-10 rounded-2xl shadow-xl transform md:-translate-y-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
                            <div className="relative z-10">
                                <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white backdrop-blur-sm">
                                    <Eye size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Visión</h3>
                                <p className="text-blue-100 leading-relaxed">
                                    Ser reconocidos al 2030 como la empresa líder y referente en el sector energético peruano, destacando por nuestra innovación, seguridad operativa y responsabilidad socioambiental.
                                </p>
                            </div>
                        </div>

                        {/* Valores */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="h-16 w-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-100 transition-colors">
                                <Heart size={32} className="text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-corporate-navy mb-4">Valores</h3>
                            <ul className="space-y-4">
                                {[
                                    "Seguridad ante todo",
                                    "Integridad innegociable",
                                    "Excelencia en el servicio",
                                    "Sostenibilidad activa",
                                    "Innovación constante"
                                ].map((val, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                        <div className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                                        <span>{val}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipo Directivo */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block">Liderazgo</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy">Equipo Directivo</h2>
                        </div>
                        <p className="text-muted-foreground max-w-lg text-left md:text-right">
                            Expertos con amplia trayectoria guiando el crecimiento sostenible de la organización.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group cursor-pointer">
                                <div className="aspect-[3/4] bg-gray-100 rounded-xl mb-6 overflow-hidden relative shadow-sm hover:shadow-lg transition-all">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                        <Users size={64} strokeWidth={1} />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-corporate-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-corporate-navy group-hover:text-secondary transition-colors">Nombre Directivo</h3>
                                <p className="text-muted-foreground font-medium">Cargo Ejecutivo</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificaciones */}
            <section className="py-20 border-t border-border bg-slate-50">
                <div className="section-container">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-2xl font-bold text-corporate-navy mb-4">Certificaciones Internacionales</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Operamos bajo estrictos estándares que garantizan la calidad de nuestros procesos (ISO 9001), la seguridad de nuestro personal (ISO 45001) y el cuidado del medio ambiente (ISO 14001).
                            </p>
                        </div>
                        <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Mock Certificates */}
                            <div className="h-24 w-32 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center font-bold text-gray-400">ISO 9001</div>
                            <div className="h-24 w-32 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center font-bold text-gray-400">ISO 14001</div>
                            <div className="h-24 w-32 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center font-bold text-gray-400">ISO 45001</div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
