import promglpImg from "@/assets/prom_glp.jpg";
import puntpetImg from "@/assets/puntos_pet.jpg";

export interface Promotion {
    id: number;
    title: string;
    slug: string; // [NEW] For URL routing
    description: string;
    content: string; // [NEW] Full content for detail page
    validUntil: string;
    image: string;
    type: string;
    legal?: string; // [NEW] Legal conditions
}

export const promotions: Promotion[] = [
    {
        id: 1,
        title: "Descuento en GLP Granel",
        slug: "descuento-glp-granel",
        description: "Obtén un 10% de descuento en tu primera carga de GLP granel para tanque estacionario.",
        content: `
            <p>En Petroamérica premiamos tu preferencia. Por eso, si eres un nuevo cliente de GLP a granel para uso residencial o comercial, te ofrecemos un <strong>10% de descuento</strong> en tu primera carga.</p>
            <p>Nuestro GLP cumple con los más altos estándares de calidad y seguridad, garantizando un rendimiento óptimo para tu hogar o negocio.</p>
            <h3>Beneficios de nuestro servicio:</h3>
            <ul>
                <li>Abastecimiento oportuno y programado.</li>
                <li>Atención técnica especializada 24/7.</li>
                <li>Flota moderna de cisternas con contadores digitales exactos.</li>
            </ul>
        `,
        validUntil: "31 de Diciembre",
        image: promglpImg,
        type: "GLP Hogar",
        legal: "Válido solo para nuevos clientes en Lima Metropolitana. No acumulable con otras promociones. Sujeto a evaluación crediticia."
    },
    {
        id: 2,
        title: "Pack Mantenimiento",
        slug: "pack-mantenimiento-aceite",
        description: "Por la compra de 1 galón de aceite sintético, llévate el filtro de aceite gratis.",
        content: `
            <p>Mantén tu motor joven y potente con nuestro Pack Mantenimiento. Por la compra de un galón de cualquiera de nuestros aceites sintéticos premium, te llevas el <strong>filtro de aceite totalmente GRATIS</strong>.</p>
            <p>Nuestros lubricantes están diseñados para proteger tu motor contra el desgaste, mejorar el rendimiento y reducir el consumo de combustible.</p>
        `,
        validUntil: "15 de Diciembre",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=2000",
        type: "Lubricantes",
        legal: "Válido en estaciones de servicio participantes. Aplica para filtros de aceite estándar de autos sedán y camionetas ligeras. Máximo 1 promoción por vehículo."
    },
    {
        id: 3,
        title: "Puntos Petroamérica",
        slug: "doble-puntaje-gasoholes",
        description: "Acumula doble puntaje por tanqueadas superiores a S/ 100 en gasoholes premium.",
        content: `
            <p>¡Tus viajes valen más! Durante todo este mes, cada vez que tanques más de S/ 100 en nuestros gasoholes premium (95 y 98 octanos), acumularás <strong>DOBLE PUNTAJE</strong> en tu tarjeta Petroamérica Bonus.</p>
            <p>Canjea tus puntos por combustible gratis, productos del market o descuentos exclusivos en establecimientos afiliados.</p>
        `,
        validUntil: "Todo el mes",
        image: puntpetImg,
        type: "Fidelización",
        legal: "Válido en toda la red Petroamérica a nivel nacional. Es indispensable presentar DNI o tarjeta de fidelización al momento de la compra."
    }
];
