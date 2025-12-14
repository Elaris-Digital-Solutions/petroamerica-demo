import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { MapPin, Search, Navigation, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { stations } from "@/data/stations";
import heroImg from "@/assets/hero-station.jpg";
import { PeruStationsMap } from "@/components/PeruStationsMap";

export default function Estaciones() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("all");
    const [selectedStationId, setSelectedStationId] = useState<number | null>(null);

    const filteredStations = stations.filter(station => {
        const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            station.address.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = selectedRegion === "all" || station.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });

    return (
        <PageLayout headerVariant="transparent">
            <PageHero
                title="Red de Estaciones"
                subtitle="Encuentra tu estación Petroamérica más cercana y disfruta de combustibles de calidad y servicios complementarios."
                image={heroImg}
            />

            <div className="section-container section-padding">
                {/* Search & Filters Card */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-grow w-full md:w-auto">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        <Input
                            placeholder="Buscar por nombre o dirección..."
                            className="pl-12 h-12 bg-gray-50 border-gray-200 focus:bg-white text-base rounded-xl"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-[240px] shrink-0">
                        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                            <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:bg-white rounded-xl">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Filter size={18} />
                                    <SelectValue placeholder="Región" />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todas las regiones</SelectItem>
                                <SelectItem value="Lima">Lima</SelectItem>
                                <SelectItem value="Arequipa">Arequipa</SelectItem>
                                <SelectItem value="La Libertad">La Libertad</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:h-[700px]">
                    {/* Station List */}
                    <div className="lg:col-span-1 overflow-y-auto pr-2 space-y-4 h-full custom-scrollbar bg-white/50 rounded-2xl p-2 border border-blue-50/50">
                        {filteredStations.map((station) => (
                            <div
                                key={station.id}
                                className="bg-white p-5 rounded-xl border border-gray-100 hover:border-secondary hover:shadow-md transition-all cursor-pointer group"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-corporate-navy group-hover:text-secondary text-lg transition-colors">{station.name}</h3>
                                    {station.status === 'open' ? (
                                        <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 px-2 py-0.5">Abierto</Badge>
                                    ) : (
                                        <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50 px-2 py-0.5">Mantenimiento</Badge>
                                    )}
                                </div>
                                <div className="flex items-start gap-2.5 text-sm text-muted-foreground mb-4">
                                    <MapPin size={16} className="mt-0.5 shrink-0 text-gray-400 group-hover:text-secondary transition-colors" />
                                    <span className="leading-snug">{station.address}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {station.services?.map(service => (
                                        <Badge key={service} variant="secondary" className="text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 border-0">
                                            {service}
                                        </Badge>
                                    ))}
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full text-xs h-9 font-semibold border-corporate-blue/20 text-corporate-blue hover:bg-corporate-blue hover:text-white transition-all"
                                    onClick={() => setSelectedStationId(station.id)}
                                >
                                    <Navigation size={14} className="mr-2" />
                                    Cómo llegar
                                </Button>
                            </div>
                        ))}
                        {filteredStations.length === 0 && (
                            <div className="text-center py-12 text-muted-foreground bg-white rounded-xl border border-dashed border-gray-200">
                                <MapPin size={48} className="mx-auto text-gray-200 mb-3" />
                                <p>No se encontraron estaciones</p>
                            </div>
                        )}
                    </div>

                    {/* Map Component */}
                    <div className="lg:col-span-2 h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                        <PeruStationsMap selectedStationId={selectedStationId} />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
