export interface Station {
    id: number;
    name: string;
    address: string;
    region: string;
    status: "open" | "maintenance";
    services: string[];
}

export const stations: Station[] = [
    {
        id: 1,
        name: "Estación Central Lima",
        address: "Av. Javier Prado Este 1234, La Victoria",
        region: "lima",
        status: "open",
        services: ["GLP", "GNV", "Market", "Cajero"]
    },
    {
        id: 2,
        name: "Estación Norte Panam",
        address: "Panamericana Norte Km 25, Puente Piedra",
        region: "lima",
        status: "open",
        services: ["Combustibles", "Restaurante", "Duchas"]
    },
    {
        id: 3,
        name: "Estación Arequipa Sur",
        address: "Av. Ejército 555, Yanahuara",
        region: "arequipa",
        status: "open",
        services: ["GLP", "Market"]
    },
    {
        id: 4,
        name: "Estación Trujillo Centro",
        address: "Av. Larco 890, Trujillo",
        region: "lalibertad",
        status: "maintenance",
        services: ["Combustibles", "Lavado"]
    },
    {
        id: 5,
        name: "Estación Huancayo",
        address: "Calle Real 450, Huancayo",
        region: "junin",
        status: "open",
        services: ["GLP", "Combustibles"]
    },
];
