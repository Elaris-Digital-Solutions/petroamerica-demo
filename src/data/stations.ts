export interface Station {
  id: number;
  department: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  services?: string[];
  status?: 'open' | 'maintenance';
}

export const stations: Station[] = [
  // --- ANCASH ---
  {
    id: 1,
    department: "Ancash",
    name: "Estación Casma",
    address: "Carretera Panamericana Norte Km 380.5, Sector Tabón Bajo, Predio San Antonio, Lote 09, Comandante Noel, Ancash, Perú",
    lat: -9.4667,
    lng: -78.3000
  },

  // --- AREQUIPA ---
  {
    id: 2,
    department: "Arequipa",
    name: "Estación La Joya Km 967",
    address: "Panamericana Sur Km 967, Progreso Km 48, La Joya, Arequipa, Perú",
    lat: -16.6028,
    lng: -71.8344
  },
  {
    id: 3,
    department: "Arequipa",
    name: "Estación La Joya Km 956",
    address: "Panamericana Sur Km 956, Mz. I, Lote 02, PP.JJ El Triunfo, La Joya, Arequipa, Perú",
    lat: -16.5833,
    lng: -71.8167
  },
  {
    id: 4,
    department: "Arequipa",
    name: "Estación Mariano Melgar",
    address: "Av. Argentina Nº 1542, Urb. Mariano Melgar, Yagual, Arequipa, Perú",
    lat: -16.3989,
    lng: -71.5064
  },
  {
    id: 5,
    department: "Arequipa",
    name: "Estación Mariano Melgar - San Martín",
    address: "Av. Argentina S/N, Lote 7, Mz 18, Zona B, PP.JJ Generalísimo José de San Martín, Arequipa, Perú",
    lat: -16.4092,
    lng: -71.5375
  },
  {
    id: 6,
    department: "Arequipa",
    name: "Estación Paucarpata - Jesús",
    address: "Av. Jesús N° 900, esquina con Industrial, Paucarpata, Arequipa, Perú",
    lat: -16.4251,
    lng: -71.5186
  },
  {
    id: 7,
    department: "Arequipa",
    name: "Estación Paucarpata - Jorge Chávez",
    address: "Urb. Jorge Chávez, Mz. 50, Lote 06, Zona A, Av. Prolongación Mariscal Castilla, Paucarpata, Arequipa, Perú",
    lat: -16.4167,
    lng: -71.5000
  },
  {
    id: 8,
    department: "Arequipa",
    name: "Estación Sachaca",
    address: "Carretera Variante de Uchumayo Km 1.5, Sachaca, Arequipa, Perú",
    lat: -16.4239,
    lng: -71.5647
  },

  // --- CUSCO ---
  {
    id: 9,
    department: "Cusco",
    name: "Estación Cusco",
    address: "Esquina Av. Apurímac con Calle Ayahuaico Nº 603, Cusco, Cusco, Perú",
    lat: -13.5226,
    lng: -71.9750
  },

  // --- ICA ---
  {
    id: 10,
    department: "Ica",
    name: "Estación Chincha Alta - Sotelo",
    address: "Av. Gerardo Sotelo N° 490, Chincha Alta, Ica, Perú",
    lat: -13.4167,
    lng: -76.1333
  },
  {
    id: 11,
    department: "Ica",
    name: "Estación Chincha Alta - Panamericana",
    address: "Av. Panamericana Nº 1020, Chincha Alta, Ica, Perú",
    lat: -13.4100,
    lng: -76.1300
  },
  {
    id: 12,
    department: "Ica",
    name: "Estación Chincha Baja",
    address: "Carretera Panamericana Sur Km 201.3, Chincha Baja, Ica, Perú",
    lat: -13.4500,
    lng: -76.1500
  },
  {
    id: 13,
    department: "Ica",
    name: "Estación Pisco",
    address: "Carretera Panamericana Sur Km 229.3, Sector P.J. San Miguel, Pisco, Ica, Perú",
    lat: -13.7167,
    lng: -76.2000
  },
  {
    id: 14,
    department: "Ica",
    name: "Estación San Andrés",
    address: "Av. Las Américas, esquina con Calle Pedemonte, San Andrés, Pisco, Ica, Perú",
    lat: -13.7333,
    lng: -76.2167
  },
  {
    id: 15,
    department: "Ica",
    name: "Estación Sunampe",
    address: "Sub Lote 2-A, Av. Principal, Carretera a Sunampe, Ica, Perú",
    lat: -13.4000,
    lng: -76.1667
  },

  // --- LA LIBERTAD ---
  {
    id: 16,
    department: "La Libertad",
    name: "Estación El Porvenir",
    address: "Jr. Manuel Ubalde N° 1103, El Porvenir, Trujillo, La Libertad, Perú",
    lat: -8.0833,
    lng: -79.0000
  },
  {
    id: 17,
    department: "La Libertad",
    name: "Estación Huanchaco",
    address: "Lote VD 461 III-B, Sector El Milagro Valle, Cuenca Moche, Huanchaco, La Libertad, Perú",
    lat: -8.0772,
    lng: -79.0839
  },
  {
    id: 18,
    department: "La Libertad",
    name: "Estación La Esperanza",
    address: "Av. José Gabriel Condorcanqui Nº 1241, La Esperanza, Trujillo, La Libertad, Perú",
    lat: -8.0667,
    lng: -79.0500
  },
  {
    id: 19,
    department: "La Libertad",
    name: "Estación San Pedro de Lloc",
    address: "Vía de Evitamiento 122, Panamericana Norte Km 658, San Pedro de Lloc, Pacasmayo, La Libertad, Perú",
    lat: -7.4286,
    lng: -79.5056
  },
  {
    id: 20,
    department: "La Libertad",
    name: "Estación Trujillo - Merced",
    address: "Av. Víctor Larco Herrera N° 885, Urb. La Merced, Trujillo, La Libertad, Perú",
    lat: -8.1250,
    lng: -79.0333
  },
  {
    id: 21,
    department: "La Libertad",
    name: "Estación Trujillo - Aranjuez",
    address: "Av. César Vallejo N° 1180–1186, Urb. Aranjuez, Trujillo, La Libertad, Perú",
    lat: -8.1050,
    lng: -79.0180
  },
  {
    id: 22,
    department: "La Libertad",
    name: "Estación Trujillo - Rinconada",
    address: "Esquina Av. César Vallejo con Jr. Los Diamantes, Urb. La Rinconada, Trujillo, La Libertad, Perú",
    lat: -8.1060,
    lng: -79.0190
  },
  {
    id: 23,
    department: "La Libertad",
    name: "Estación Virú",
    address: "Carretera Panamericana Norte Km 518, A.H. California, Virú, La Libertad, Perú",
    lat: -8.4167,
    lng: -78.7500
  },

  // --- LAMBAYEQUE ---
  {
    id: 24,
    department: "Lambayeque",
    name: "Estación Chiclayo - Bolognesi",
    address: "Av. Francisco Bolognesi N° 390, Chiclayo, Lambayeque, Perú",
    lat: -6.7725,
    lng: -79.8400
  },
  {
    id: 25,
    department: "Lambayeque",
    name: "Estación Chiclayo - Chosica del Norte",
    address: "Panamericana Norte Km 762, Chosica del Norte, Chiclayo, Lambayeque, Perú",
    lat: -6.7500,
    lng: -79.8667
  },
  {
    id: 26,
    department: "Lambayeque",
    name: "Estación Lambayeque",
    address: "Carretera Panamericana Norte Km 782.5, Lambayeque, Perú",
    lat: -6.7011,
    lng: -79.9064
  },

  // --- LIMA ---
  {
    id: 27,
    department: "Lima",
    name: "Estación Barranca - Atahualpa",
    address: "Carretera Panamericana Norte Km 193, Barrio de Atahualpa, Barranca, Lima, Perú",
    lat: -10.7500,
    lng: -77.7667
  },
  {
    id: 28,
    department: "Lima",
    name: "Estación Barranca - Las Gardenias",
    address: "Manzana A, Lote 01, Centro Poblado Las Gardenias, Barranca, Lima, Perú",
    lat: -10.7400,
    lng: -77.7600
  },
  {
    id: 29,
    department: "Lima",
    name: "Estación Callao - Argentina",
    address: "Av. Argentina Nº 333 y Jr. Huáscar Nº 102, Urb. Chacaritas, Callao, Perú",
    lat: -12.0508,
    lng: -77.1350
  },
  {
    id: 30,
    department: "Lima",
    name: "Estación Callao - Tomás Valle",
    address: "Av. Tomás Valle, intersección con Av. Pacasmayo, Mz. C, Lt. 1 y 24, Urb. Jorge Chávez, Callao, Perú",
    lat: -12.0232,
    lng: -77.0932
  },
  {
    id: 31,
    department: "Lima",
    name: "Estación Callao - Venezuela",
    address: "Esquina Av. Argentina con Jr. Venezuela, Callao, Perú",
    lat: -12.0536,
    lng: -77.0856
  },
  {
    id: 32,
    department: "Lima",
    name: "Estación Cercado de Lima",
    address: "Av. Colonial 1657, Cercado de Lima, Lima, Perú",
    lat: -12.0464,
    lng: -77.0583
  },
  {
    id: 33,
    department: "Lima",
    name: "Estación Chilca",
    address: "Panamericana Sur Km 57.4, Chilca, Cañete, Lima, Perú",
    lat: -12.5208,
    lng: -76.7369
  },
  {
    id: 34,
    department: "Lima",
    name: "Estación Jesús María - Brasil",
    address: "Av. Brasil N° 699, Jesús María, Lima, Perú",
    lat: -12.0722,
    lng: -77.0469
  },
  {
    id: 35,
    department: "Lima",
    name: "Estación Jesús María - Garzón",
    address: "Av. General Garzón N° 688, Jesús María, Lima, Perú",
    lat: -12.0718,
    lng: -77.0483
  },
  {
    id: 36,
    department: "Lima",
    name: "Estación La Victoria",
    address: "Jr. Humboldt con Prolongación Huamanga N° 619, La Victoria, Lima, Perú",
    lat: -12.0628,
    lng: -77.0194
  },
  {
    id: 37,
    department: "Lima",
    name: "Estación Lurigancho",
    address: "Av. Principal con Calle Los Robles, Urb. Popular Nuevo Horizonte, Lurigancho, Lima, Perú",
    lat: -11.9708,
    lng: -76.9994
  },
  {
    id: 38,
    department: "Lima",
    name: "Estación Pucusana",
    address: "Carretera Panamericana Sur Km 56.80, Pucusana, Lima, Perú",
    lat: -12.4833,
    lng: -76.8000
  },
  {
    id: 39,
    department: "Lima",
    name: "Estación Puente Piedra",
    address: "Carretera Panamericana Norte Km 36.5, Puente Piedra, Lima, Perú",
    lat: -11.8703,
    lng: -77.0769
  },
  {
    id: 40,
    department: "Lima",
    name: "Estación San Bartolo",
    address: "Panamericana Sur Km 51.8, San Bartolo, Lima, Perú",
    lat: -12.3833,
    lng: -76.7833
  },
  {
    id: 41,
    department: "Lima",
    name: "Estación San Isidro",
    address: "Av. Petit Thouars Nº 3305–3307, San Isidro, Lima, Perú",
    lat: -12.0978,
    lng: -77.0325
  },
  {
    id: 42,
    department: "Lima",
    name: "Estación San Miguel",
    address: "Av. Venezuela, esquina con Av. Riva Agüero, San Miguel, Lima, Perú",
    lat: -12.0736,
    lng: -77.0911
  },
  {
    id: 43,
    department: "Lima",
    name: "Estación Surquillo",
    address: "Av. Aviación Nº 4269–4285, esquina Calle Clara Barton Nº 121, Surquillo, Lima, Perú",
    lat: -12.1156,
    lng: -77.0006
  },
  {
    id: 44,
    department: "Lima",
    name: "Estación Villa María",
    address: "Av. El Sol 278, Mz. K1, Lote 8, Primer Hogar Policial, Villa María del Triunfo, Lima, Perú",
    lat: -12.1614,
    lng: -76.9367
  },

  // --- LORETO ---
  {
    id: 45,
    department: "Loreto",
    name: "Estación Iquitos - Cáceres",
    address: "Av. Mariscal Cáceres N° 2186, Maynas, Iquitos, Loreto, Perú",
    lat: -3.7481,
    lng: -73.2561
  },
  {
    id: 46,
    department: "Loreto",
    name: "Estación Iquitos - Bellavista",
    address: "Puerto Bellavista, margen derecha del Río Nanay, Maynas, Punchana, Loreto, Perú",
    lat: -3.7167,
    lng: -73.2333
  },
  {
    id: 47,
    department: "Loreto",
    name: "Estación San Juan Bautista",
    address: "Carretera Iquitos–Nauta Km 5.5, San Juan Bautista, Maynas, Loreto, Perú",
    lat: -3.7833,
    lng: -73.2833
  },

  // --- MOQUEGUA ---
  {
    id: 48,
    department: "Moquegua",
    name: "Estación Ilo",
    address: "Av. 28 de Julio N° 605, Ilo, Moquegua, Perú",
    lat: -17.6394,
    lng: -71.3375
  },

  // --- PIURA ---
  {
    id: 49,
    department: "Piura",
    name: "Estación Catacaos",
    address: "Carretera Panamericana Norte, Piura–Chiclayo, Catacaos, Piura, Perú",
    lat: -5.2667,
    lng: -80.6833
  },
  {
    id: 50,
    department: "Piura",
    name: "Estación Pariñas",
    address: "Parque 31–39, Distrito de Pariñas, Piura, Perú",
    lat: -4.5833,
    lng: -81.2667
  },
  {
    id: 51,
    department: "Piura",
    name: "Estación Piura Industrial",
    address: "Zona Industrial, Mz. 216, Lote 3, Piura, Perú",
    lat: -5.1945,
    lng: -80.6328
  },
  {
    id: 52,
    department: "Piura",
    name: "Estación Sullana",
    address: "Av. Panamericana Norte Km 1018, Sullana, Piura, Perú",
    lat: -4.9039,
    lng: -80.6853
  },
  {
    id: 53,
    department: "Piura",
    name: "Estación Talara",
    address: "Panamericana Norte Km 1087, Mz. A, Lote 6, Zona Semi-Industrial Talara II, ENACE, Piura, Perú",
    lat: -4.5667,
    lng: -81.2500
  },

  // --- TACNA ---
  {
    id: 54,
    department: "Tacna",
    name: "Estación Tacna",
    address: "Esquina Av. Educadores con Av. Collpa, Tacna, Tacna, Perú",
    lat: -18.0147,
    lng: -70.2522
  }
];
