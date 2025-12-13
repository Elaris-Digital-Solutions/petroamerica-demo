export interface Promotion {
    id: number;
    title: string;
    description: string;
    validUntil: string;
    image: string;
    type: string;
}

export const promotions: Promotion[] = [
    {
        id: 1,
        title: "Descuento en GLP Granel",
        description: "Obtén un 10% de descuento en tu primera carga de GLP granel para tanque estacionario.",
        validUntil: "31 de Diciembre",
        image: "https://images.unsplash.com/photo-1626620573934-2e67a9990e94?auto=format&fit=crop&q=80&w=2000",
        type: "GLP Hogar"
    },
    {
        id: 2,
        title: "Pack Mantenimiento",
        description: "Por la compra de 1 galón de aceite sintético, llévate el filtro de aceite gratis.",
        validUntil: "15 de Diciembre",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=2000",
        type: "Lubricantes"
    },
    {
        id: 3,
        title: "Puntos Petroamérica",
        description: "Acumula doble puntaje por tanqueadas superiores a S/ 100 en gasoholes premium.",
        validUntil: "Todo el mes",
        image: "https://images.unsplash.com/photo-1563286595-23c21a1fc89c?auto=format&fit=crop&q=80&w=2667",
        type: "Fidelización"
    }
];
