import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

export const productsToPreLoad: IProduct[] = [
  {
    name: "Bicicleta VMP S5",
    price: 2100000,
    description:
      "El modelo VMP S5 es el más económico de la familia Evobike, diseñado especialmente para quienes buscan una opción práctica y accesible. Cuenta con 2 velocidades: la primera alcanza hasta 30 km/h y la segunda hasta 40 km/h. Además, su faro de luz ajustable permite moverlo de arriba hacia abajo, y el caballete trasero facilita un mejor estacionamiento",
    image:
      "https://evobike.com.co/cdn/shop/files/Group48098737.jpg?v=1737150101&width=750",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Bicicleta Aguila Pro",
    price: 4200000,
    description:
      "Aguila es nuestro modelo mas parecido a una motocicleta pero es un bicicleta electrica, cuenta con tieras de luz LED alrededor, dando una conduccion mas brillante, moderna y segura para las noches. cuenta con sistema de parking, posa pies y un asiento amplio para el conductor y un acompañante",
    image:
      "https://evobike.com.co/cdn/shop/files/Frame363.jpg?v=1745519901&width=360",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Bicicleta Zeus",
    price: 4200000,
    description:
      "El modelo Zeus destaca por su apariencia futurista y diseño único, fusionando potencia, resistencia y estilo en una bicicleta eléctrica incomparable. Diseñada para ofrecer una experiencia de conducción segura, cómoda y confiable, esta bicicleta es perfecta para recorrer la ciudad a una gran velocidad, sin dejar huella en el medio ambiente.",
    image:
      "https://evobike.com.co/cdn/shop/files/Group48098725.jpg?v=1737149738&width=360",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Bicicleta Nube",
    price: 3100000,
    description:
      "Ligera como su nombre lo indica, esta bicicleta eléctrica es ideal para quienes buscan mantenerse activos mientras disfrutan de paseos cómodos y prácticos. Gracias a su batería de litio, puedes recorrer hasta 50 km con una sola carga, eligiendo entre tres velocidades diferentes para adaptarte a tus necesidades.",
    image:
      "https://evobike.com.co/cdn/shop/files/BicicletaNubeNegro.png?v=1743803155&width=360",
    categoryId: 1,
    stock: 10,
  },

  {
    name: "Bicicleta Moped",
    price: 3800000,
    description:
      "Este scooter eléctrico combina un diseño vintage encantador con características modernas para una experiencia de conducción superior. Los espejos laterales mejoran la visibilidad, mientras que el soporte para pies y los asientos cómodos aseguran un viaje relajado, incluso con un acompañante.",
    image:
      "https://evobike.com.co/cdn/shop/files/Frame_290_a24236bf-9d95-41ce-ac2a-f41223826c1a.png?v=1741193168&width=360",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Bicicleta Águila",
    price: 4000000,
    description:
      "El modelo Águila es nuestra bicicleta eléctrica más parecida a una motocicleta, fusionando potencia, diseño moderno y funcionalidad. Su estructura robusta y sus tiras de luces LED alrededor no solo le otorgan un estilo único, sino que también garantizan una conducción más segura y luminosa durante la noche. Además, cuenta con un sistema de parking, posa pies y un asiento amplio, diseñado para ofrecer la máxima comodidad tanto al conductor como al acompañante.",
    image:
      "https://evobike.com.co/cdn/shop/files/Group48098752.jpg?v=1737149587&width=750",
    categoryId: 1,
    stock: 0,
  },

  {
    name: "Bicicleta Cielo",
    price: 3600000,
    description:
      "Para quienes prefieren una bicicleta más tradicional sin sacrificar funcionalidad, el modelo Cielo es la elección ideal. Con 3 velocidades y un diseño plegable, es perfecta para llevarla a cualquier lugar. Su combinación de rendimiento, resistencia y eficiencia garantiza que llegues a tu destino cómodamente y con estilo.",
    image:
      "https://evobike.com.co/cdn/shop/files/Frame117.jpg?v=1739198788&width=750",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Bicicleta Family",
    price: 4300000,
    description:
      "El modelo Family está diseñado para ser accesible y funcional para todas las edades, siendo una excelente opción para adultos mayores, personas con movilidad reducida o familias que desean disfrutar de un paseo cómodo y seguro. Su diseño inclusivo ofrece un asiento corredizo ajustable para mayor comodidad, así como canastas de almacenamiento que permiten transportar objetos con facilidad. Además, su sistema de luces LED y direccionales delanteras y traseras garantizan una conducción segura tanto de día como de noche.",
    image:
      "https://evobike.com.co/cdn/shop/files/Frame240.jpg?v=1747490930&width=750",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Bicicleta Family Plus",
    price: 4300000,
    description:
      "El modelo Family es la opción perfecta para quienes buscan una bicicleta eléctrica accesible, segura y funcional para todas las edades. Está diseñada especialmente para adultos mayores, personas con movilidad reducida o para disfrutar de paseos familiares cómodos y seguros. Gracias a su asiento corredizo y su canasta amplia de almacenamiento, ofrece la máxima comodidad y practicidad para cualquier tipo de usuario.",
    image:
      "https://evobike.com.co/cdn/shop/files/Group48098769.jpg?v=1737150373&width=750",
    categoryId: 3,
    stock: 10,
  },

  {
    name: "Bicicleta Leo",
    price: 4200000,
    description:
      "El modelo Leo está diseñado para quienes buscan una bicicleta eléctrica robusta y eficiente para transportar objetos de mayores dimensiones tanto en la parte delantera como trasera. Su canasta ampliada proporciona mayor capacidad de carga, mientras que su faro de luz LED horizontal garantiza una excelente visibilidad durante la noche. Además, su diseño está optimizado para ofrecer estabilidad y seguridad, convirtiéndolo en la opción ideal para deliveries y comerciantes que requieren mover un alto volumen de mercancía",
    image:
      "https://evobike.com.co/cdn/shop/files/Leo_Blanco.jpg?v=1737034780&width=750",
    categoryId: 1,
    stock: 0,
  },
  {
    name: "Family Q",
    price: 4500000,
    description:
      "Su diseño incluye un asiento ajustable y corredizo que brinda mayor confort, así como múltiples espacios de almacenamiento para llevar objetos personales de forma práctica y segura. Además, cuenta con un sistema de luces LED y direccionales delanteras y traseras, lo que garantiza una conducción segura tanto de día como de noche. El modelo Family Q es ideal para quienes buscan una bicicleta eléctrica accesible, funcional y cómoda para toda la familia.",
    image:
      "https://evobike.com.co/cdn/shop/files/Familyq-Rojo-2.png?v=1749223570&width=750",
    categoryId: 3,
    stock: 4,
  },
  {
    name: "Triciclo Tank 180",
    price: 12000000,
    description:
      "El modelo EVOTANK está diseñado específicamente para satisfacer las demandas del trabajo pesado, ofreciendo un espacio amplio y resistente para transportar todo tipo de carga. Es la herramienta ideal para negocios que requieren mover mercancías de manera eficiente, ya sea en entornos urbanos o todo terreno.",
    image:
      "https://evobike.com.co/cdn/shop/files/Group48098762.jpg?v=1737150498&width=750",
    categoryId: 3,
    stock: 8,
  },
  {
    name: "Scooter M4",
    price: 2100000,
    description:
      "Si te gusta lo sencillo y funcional, este scooter es ideal para ti. Su diseño discreto, apariencia ligera y estilo minimalista lo convierten en una opción elegante que se adapta a cualquier personalidad y estilo de vida.",
    image:
      "https://evobike.com.co/cdn/shop/files/Group48098690_914f8f86-26e7-4453-9b69-a40bcbfb4bdf.jpg?v=1737402734&width=750",
    categoryId: 2,
    stock: 12,
  },
  {
    name: "Scooter S6",
    price: 3500000,
    description:
      "Este modelo es ideal para quienes buscan un scooter práctico, dinámico y con un toque de potencia. Diseñado para ofrecer comodidad y funcionalidad, cuenta con un pequeño cajón de almacenamiento para tus objetos esenciales y dos faros LED que garantizan visibilidad y estilo en todo momento.",
    image:
      "https://evobike.com.co/cdn/shop/files/Group48098868.png?v=1741189709&width=360",
    categoryId: 2,
    stock: 0,
  },
  {
    name: "Scooter M2",
    price: 3600000,
    description:
      "El Modelo M2 destaca por su diseño innovador, doble tracción y velocidad de hasta 60 km/h. ¡Ilumina tus viajes con su potente faro LED y disfruta de la libertad! Experimenta la emoción de la velocidad y el diseño con el Scooter Eléctrico Modelo M2. Su presencia imponente y sus características de alto rendimiento lo convierten en el compañero perfecto para tus desplazamientos urbanos y aventuras al aire libre.",
    image:
      "https://evobike.com.co/cdn/shop/files/Group_48098863_1.png?v=1741184811&width=360",
    categoryId: 2,
    stock: 2,
  },
  {
    name: "Scooter S9",
    price: 4000000,
    description:
      "Este modelo deportivo está diseñado para los amantes de la aventura y la movilidad práctica. Equipado con frenos de disco delanteros y traseros, garantiza una mayor seguridad en el frenado. Su sistema de suspensión lo hace ideal para recorrer cualquier tipo de terreno, brindando confianza y estabilidad en cada trayecto.",
    image:
      "https://evobike.com.co/cdn/shop/files/Group48098699.jpg?v=1736793632&width=360",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Scooter S20",
    price: 4200000,
    description:
      "El modelo S20 combina rendimiento, diseño y comodidad, ofreciéndote la autonomía necesaria para llegar a tu destino sin preocupaciones. Perfecto para quienes buscan un scooter confiable, con excelente relación calidad-precio.",
    image:
      "https://evobike.com.co/cdn/shop/files/Group48098716.jpg?v=1737404382&width=360",
    categoryId: 2,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
