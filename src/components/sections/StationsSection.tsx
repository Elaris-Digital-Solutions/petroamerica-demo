import { Button } from "@/components/ui/button";
import { MapPin, Search, Navigation } from "lucide-react";
import { PeruStationsMap } from "../PeruStationsMap";
import { useState } from "react";
import { stations } from "@/data/stations";
import { useToast } from "@/hooks/use-toast";

export function StationsSection() {
  const [selectedStationId, setSelectedStationId] = useState<number | null>(null);
  const { toast } = useToast();
  const [isLocating, setIsLocating] = useState(false);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const handleFindNearest = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Error",
        description: "Tu navegador no soporta geolocalización",
        variant: "destructive",
      });
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        let nearestStation = null;
        let minDistance = Infinity;

        stations.forEach(station => {
          const distance = calculateDistance(userLat, userLng, station.lat, station.lng);
          if (distance < minDistance) {
            minDistance = distance;
            nearestStation = station;
          }
        });

        if (nearestStation) {
          // @ts-ignore
          setSelectedStationId(nearestStation.id);
          toast({
            title: "Estación encontrada",
            // @ts-ignore
            description: `La estación más cercana es ${nearestStation.name} a ${minDistance.toFixed(1)} km.`,
          });
        }
        setIsLocating(false);
      },
      (error) => {
        console.error("Error obtaining location", error);
        toast({
          title: "Error de ubicación",
          description: "No pudimos obtener tu ubicación. Por favor permite el acceso.",
          variant: "destructive",
        });
        setIsLocating(false);
      }
    );
  };

  return (
    <section id="estaciones-home" className="section-padding corporate-gradient text-primary-foreground">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Nuestra Red
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">
              Estaciones de Servicio
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
              Contamos con más de 150 estaciones de servicio estratégicamente ubicadas
              en las principales ciudades y carreteras del país, ofreciendo combustibles
              de la más alta calidad.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Cobertura Nacional</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Presencia en 15 regiones del Perú
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Search className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Servicios Complementarios</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Tiendas de conveniencia, lavado y lubricación
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Navigation className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Atención 24/7</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Estaciones con servicio continuo en ubicaciones estratégicas
                  </p>
                </div>
              </li>
            </ul>

            <Button
              variant="hero"
              size="lg"
              onClick={handleFindNearest}
              disabled={isLocating}
            >
              {isLocating ? "Localizando..." : "Encuentra tu estación más cercana"}
            </Button>
          </div>

          {/* Map Component */}
          <div className="animate-slide-up h-full min-h-[500px]" style={{ animationDelay: "0.2s" }}>
            <PeruStationsMap selectedStationId={selectedStationId} />
          </div>
        </div>
      </div>
    </section>
  );
}
