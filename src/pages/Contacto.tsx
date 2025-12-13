import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import heroImg from "@/assets/hero-station.jpg";

export default function Contacto() {
    return (
        <PageLayout headerVariant="transparent">
            <PageHero
                title="Estamos para Atenderte"
                subtitle="Comunícate directamente con nuestro equipo para consultas comerciales, corporativas o atención al cliente."
                image={heroImg}
            />

            <div className="section-container section-padding">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Info Card Block - Floating */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-bold text-corporate-navy mb-8 pb-4 border-b border-gray-100">Información de Contacto</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4 group">
                                    <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-corporate-blue group-hover:bg-corporate-blue group-hover:text-white transition-colors duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-corporate-navy mb-1">Central Telefónica</h3>
                                        <p className="text-muted-foreground">(01) 555-0123</p>
                                        <p className="text-muted-foreground">(01) 555-0124</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="h-12 w-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-corporate-navy mb-1">Correo Electrónico</h3>
                                        <p className="text-muted-foreground text-sm">contacto@petroamerica.com.pe</p>
                                        <p className="text-muted-foreground text-sm">ventas@petroamerica.com.pe</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="h-12 w-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-corporate-navy mb-1">Oficina Principal</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">Av. República de Panamá 345, San Isidro, Lima - Perú.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="h-12 w-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-corporate-navy mb-1">Horario de Atención</h3>
                                        <p className="text-muted-foreground text-sm">Lun - Vie: 8:00 AM - 6:00 PM</p>
                                        <p className="text-muted-foreground text-sm">Sábados: 9:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Preview */}
                        <div className="bg-white p-2 rounded-2xl shadow-md h-64 overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-77.0282, -12.0911,14,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazlqY201b24wM2ppM2VtZTMzZzRzbHJ2In0.PzM9J9X9i9_M9_9_9_9')] bg-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 rounded-xl" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <Button className="bg-white/90 text-corporate-navy hover:bg-white shadow-lg backdrop-blur-sm pointer-events-auto">
                                    <MapPin className="mr-2 h-4 w-4 text-secondary" />
                                    Ver en Google Maps
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 h-full">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-corporate-navy mb-2">Envíanos un Mensaje</h2>
                                <p className="text-muted-foreground text-lg">
                                    Completa el siguiente formulario y un asesor se pondrá en contacto contigo a la brevedad posible.
                                </p>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-corporate-navy">Nombres</label>
                                        <Input placeholder="Juan" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-corporate-navy">Apellidos</label>
                                        <Input placeholder="Pérez" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-corporate-navy">Correo Electrónico</label>
                                        <Input type="email" placeholder="juan@empresa.com" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-corporate-navy">Teléfono / Celular</label>
                                        <Input type="tel" placeholder="+51 999 999 999" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-corporate-navy">Asunto</label>
                                    <Input placeholder="Consulta comercial, reclamo, sugerencia..." className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-corporate-navy">Mensaje</label>
                                    <Textarea placeholder="Escribe aquí los detalles de tu consulta..." className="min-h-[160px] bg-gray-50 border-gray-200 focus:bg-white transition-all resize-none" />
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" size="xl" className="w-full bg-corporate-navy hover:bg-corporate-dark text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all h-14">
                                        Enviar Mensaje
                                        <Send className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
