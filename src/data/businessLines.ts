import { Truck, Droplets, Flame, Factory, LucideIcon } from "lucide-react";

export interface BusinessLine {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    icon: LucideIcon;
    image: string;
    features: string[];
    color?: string;
}

export const businessLines: BusinessLine[] = [
    {
        id: "combustibles-liquidos",
        title: "Combustibles Líquidos",
        description: "Gasolinas y Diesel de última generación con aditivos que protegen tu motor.",
        longDescription: "Proveemos gasolina y diésel de la más alta calidad, con un aditivo exclusivo que mejora el rendimiento y protege el motor. Nuestra red de distribución garantiza el abastecimiento continuo para estaciones de servicio y clientes industriales en todo el país.",
        icon: Droplets,
        color: "bg-blue-100 text-blue-600",
        image: "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=1935",
        features: [
            "Mayor rendimiento por galón",
            "Menor emisión de gases contaminantes",
            "Protección y limpieza del motor",
            "Disponible en toda nuestra red"
        ]
    },
    {
        id: "glp-envasado-granel",
        title: "GLP Envasado y Granel",
        description: "Energía limpia y eficiente para hogares e industrias.",
        longDescription: "Llevamos energía segura y eficiente a hogares y empresas. Contamos con plantas de envasado modernas y una logística optimizada para atender pedidos de granel para industrias, hoteles y comercios, así como garrafas para el hogar.",
        icon: Flame,
        color: "bg-orange-100 text-orange-600",
        image: "https://images.unsplash.com/photo-1583232898395-950c05769151?auto=format&fit=crop&q=80&w=2670",
        features: [
            "Balones de 10kg y 45kg de peso exacto",
            "Instalación de tanques estacionarios",
            "Abastecimiento continuo para industrias",
            "Certificación de seguridad Osinergmin"
        ]
    },
    {
        id: "lubricantes",
        title: "Lubricantes",
        description: "Protección superior para todo tipo de vehículos y maquinaria industrial.",
        longDescription: "Distribuimos una gama completa de lubricantes sintéticos y minerales diseñados para maximizar la vida útil de sus equipos. Trabajamos con marcas líderes mundiales y ofrecemos soporte técnico para planes de lubricación industrial.",
        icon: Factory,
        color: "bg-gray-100 text-gray-600",
        image: "https://images.unsplash.com/photo-1508974239382-78d738bbd4e7?auto=format&fit=crop&q=80&w=2670",
        features: [
            "Aceites minerales, sintéticos y semi-sintéticos",
            "Para motores gasolina y diesel",
            "Grasas y fluidos de transmisión",
            "Asesoría técnica especializada"
        ]
    },
    {
        id: "transporte-logistica",
        title: "Transporte y Logística",
        description: "Flota moderna para el transporte seguro de hidrocarburos a nivel nacional.",
        longDescription: "Nuestra división de logística cuenta con una de las flotas más modernas del país, equipada con tecnología de rastreo satelital y conductores altamente capacitados en seguridad vial y manejo de materiales peligrosos.",
        icon: Truck,
        color: "bg-green-100 text-green-600",
        image: "https://images.unsplash.com/photo-1586749033285-b9183cc42095?auto=format&fit=crop&q=80&w=2670",
        features: [
            "Flota monitoreada por GPS 24/7",
            "Conductores certificados y capacitados",
            "Cumplimiento de normativa MATPEL",
            "Cobertura en costa, sierra y selva"
        ]
    }
];
