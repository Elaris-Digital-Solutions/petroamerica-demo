import { useEffect, useState } from 'react';
// Preload Leaflet map tiles for faster initial render
if (typeof window !== 'undefined') {
    const preloadTile = (url: string) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
    };
    // Preload OpenStreetMap tile example (zoom 5, Peru area)
    preloadTile('https://{s}.tile.openstreetmap.org/5/19/13.png');
}
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { stations } from '../data/stations';

// Fix for default Leaflet icons in Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Type for GeoJSON data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GeoJSONData = any;

// Define custom icon to ensure it loads correctly
const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Define small custom icon for low zoom levels
const smallIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [15, 25], // Smaller size approx 60%
    iconAnchor: [7, 25],
    popupAnchor: [1, -20],
    shadowSize: [25, 25]
});

// Component to handle markers and their sizing based on zoom
function MarkersLayer() {
    const map = useMap();
    const [currentZoom, setCurrentZoom] = useState(map.getZoom());

    useMapEvents({
        zoomend: () => {
            setCurrentZoom(map.getZoom());
        }
    });

    // Threshold for switching icon sizes
    const ZOOM_THRESHOLD = 7;
    const activeIcon = currentZoom < ZOOM_THRESHOLD ? smallIcon : customIcon;

    return (
        <>
            {stations.map((station) => (
                <Marker
                    key={station.id}
                    position={[station.lat, station.lng]}
                    icon={activeIcon}
                >
                    <Popup className="station-popup">
                        <div className="p-2 min-w-[200px]">
                            <h3 className="font-bold text-lg mb-1">{station.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{station.address}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600 uppercase">{station.department}</span>
                            </div>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station.address + ', Peru')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-blue-600 hover:bg-blue-700 !text-white text-sm font-medium py-2 rounded transition-colors"
                            >
                                Ver en Google Maps
                            </a>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    );
}

// Component to handle map bounds and animations
function MapController() {
    const map = useMap();

    useEffect(() => {
        // Restrict to Peru bounds
        const peruBounds = L.latLngBounds(
            L.latLng(-0.038, -81.33), // North West
            L.latLng(-18.35, -68.65)  // South East
        );

        // Add some padding
        const paddedBounds = peruBounds.pad(0.1);

        map.setMaxBounds(paddedBounds);
        map.fitBounds(peruBounds);
        map.setMinZoom(5);
    }, [map]);

    return null;
}

// Component to handle map focus on selected station
function FlyToStation({ selectedStationId }: { selectedStationId: number | null }) {
    const map = useMap();

    useEffect(() => {
        if (!selectedStationId) return;

        const station = stations.find(s => s.id === selectedStationId);
        if (station) {
            map.flyTo([station.lat, station.lng], 15, {
                duration: 1.5
            });

            // Optional: You could also open the popup here if you had a ref to the markers
        }
    }, [selectedStationId, map]);

    return null;
}

interface PeruStationsMapProps {
    selectedStationId?: number | null;
}

export function PeruStationsMap({ selectedStationId = null }: PeruStationsMapProps) {
    const [geoData, setGeoData] = useState<GeoJSONData | null>(null);

    useEffect(() => {
        // Fetch GeoJSON from public folder
        fetch('/peru-departamentos.json')
            .then(res => res.json())
            .then(data => setGeoData(data))
            .catch(err => console.error('Error loading GeoJSON:', err));
    }, []);

    // Handle department click
    const onEachDepartment = (feature: GeoJSONData, layer: L.Layer) => {
        // Show department name on hover could be added here with tooltips

        layer.on({
            click: (e) => {
                const map = e.target._map;
                map.flyToBounds(e.target.getBounds(), {
                    padding: [50, 50],
                    duration: 1.5,
                    easeLinearity: 0.25
                });
            },
            mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    color: '#FCD34D' // Secondary color (yellowish) for highlight
                });
            },
            mouseout: (e) => {
                const layer = e.target;
                // Reset style
                // We need access to the GeoJSON layer to reset style efficiently or just hardcode default
                layer.setStyle({
                    fillColor: '#3B82F6', // Primary Blue-ish
                    weight: 1,
                    opacity: 1,
                    color: 'white',
                    fillOpacity: 0.4
                });
            }
        });
    };

    // Base style for departments
    const departmentStyle = {
        fillColor: '#3B82F6', // Corporate Blue
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.4
    };

    return (
        <div className="w-full h-full min-h-[500px] rounded-lg overflow-hidden border border-border shadow-xl relative z-0">
            <MapContainer
                center={[-9.19, -75.015]} // Center of Peru approx
                zoom={6}
                scrollWheelZoom={true} // Enable scroll zoom for better UX
                className="w-full h-full z-0"
                style={{ background: '#f8fafc' }}
            >
                <MapController />
                <FlyToStation selectedStationId={selectedStationId} />

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Categories / Departments Layer */}
                {geoData && (
                    <GeoJSON
                        data={geoData}
                        style={departmentStyle}
                        onEachFeature={onEachDepartment}
                    />
                )}

                {/* Stations Markers */}
                <MarkersLayer />
            </MapContainer>
        </div>
    );
}
