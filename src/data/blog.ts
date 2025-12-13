export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content?: string; // Full content for detail view
    image: string;
    date: string;
    category: string;
    author: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "El Futuro de la Energía Renovable en el Perú",
        excerpt: "Analizamos las tendencias y el compromiso de Petroamérica con la transición energética sostenible.",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1920",
        date: "12 Oct 2024",
        category: "Sostenibilidad",
        author: "Jorge Gonzáles",
        readTime: "5 min",
        content: `
      <p class="mb-4">Perú se encuentra en un momento crucial de su desarrollo energético. Con la creciente demanda de fuentes de energía más limpias y sostenibles, el sector hidrocarburos también está evolucionando.</p>
      <h2 class="text-2xl font-bold text-corporate-navy mt-8 mb-4">Nuestro Compromiso</h2>
      <p class="mb-4">En Petroamérica, no somos ajenos a este cambio global. Estamos invirtiendo en tecnologías que nos permiten reducir nuestra huella de carbono y optimizar nuestros procesos logísticos.</p>
      <p class="mb-4">La integración de biocombustibles y la mejora en la calidad de nuestros gasoholes son solo el primer paso hacia un futuro más verde.</p>
    `
    },
    {
        id: 2,
        title: "Nueva Flota de Cisternas de Alta Seguridad",
        excerpt: "Incorporamos 20 nuevas unidades con tecnología de monitoreo satelital avanzado.",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920",
        date: "05 Nov 2024",
        category: "Corporativo",
        author: "María Rodríguez",
        readTime: "3 min"
    },
    {
        id: 3,
        title: "Consejos para el Ahorro de Combustible",
        excerpt: "Pequeños cambios en tus hábitos de conducción que pueden significar un gran ahorro.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920",
        date: "28 Nov 2024",
        category: "Consejos",
        author: "Carlos Pérez",
        readTime: "4 min"
    }
];
