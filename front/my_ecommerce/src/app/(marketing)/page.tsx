// Componentes
import { ProductCard } from "@/components/productCard/productCard";
import { IconText } from "@/components/iconText/IconText";
import { TitleText } from "@/components/titleText/titleText";
import { ClientCard } from "@/components/clientCard/clientCard";
import { MissingProducts } from "@/components/MissingProducts/MissingProducts";

// Servicios y tipos
import { getProducts } from "@/services/product";
import { IProduct } from "@/types";



// Página principal
const Home: React.FC = async () => {

  const products: IProduct[] = await getProducts();
  return (
    <section>
      {/* Sección de introducción */}
      <TitleText
        title="Revoluciona tu camino"
        text="En Electric Bikes no solo creamos vehículos eléctricos; diseñamos un camino hacia un mañana más limpio y eficiente."
      />

      {/* Iconos de características */}
      <div className="flex flex-wrap justify-center gap-4 m-10">
        {[
          { icon: "https://evobike.com.co/cdn/shop/files/Group_48098574_160x160@2x.svg?v=1736344441", text: "100% Electrico" },
          { icon: "https://evobike.com.co/cdn/shop/files/Group_48098549_160x160@2x.svg?v=1736344559", text: "Baterías Extraíbles" },
          { icon: "https://evobike.com.co/cdn/shop/files/Group_48098550_160x160@2x.svg?v=1736344579", text: "Carga En Cualquier Lugar" },
          { icon: "https://evobike.com.co/cdn/shop/files/Group_48098551_160x160@2x.svg?v=1736344615", text: "Recorre Largas Distancias" },
          { icon: "https://evobike.com.co/cdn/shop/files/Group_48098552_160x160@2x.svg?v=1736344640", text: "Mejores Precios" },
        ].map((item, index) => (
          <IconText key={index} icon={item.icon} text={item.text} />
        ))}
      </div>

      {/* Sección de productos */}
      <TitleText title="Un Modelo para cada estilo" text="Descubre nuestra variedad de vehículos eléctricos." />
      <TitleText title="Productos Populares" />
      <hr className="m-10" />

      <div className="flex flex-wrap justify-center gap-4 m-10">
        {products ? products.map((product, index) => <ProductCard cards={product} key={index} />) : <MissingProducts />}
      </div>

      {/* Sección de testimonios */}
      <TitleText title="Lo que dicen nuestros clientes" text="Experiencias reales con nuestros productos." />
      <hr className="m-10" />

      <div className="flex flex-wrap justify-center gap-2 m-10">
        {[
          {
            img: "/cliente-satisfecho.jpg",
            name: "Sara E.",
            place: "BOGOTÁ",
            description: "Mi bicicleta eléctrica ha mejorado mi rutina diaria y es más ecológica. ¡100% recomendado!",
          },
          {
            img: "https://evobike.com.co/cdn/shop/files/istockphoto-1171169099-612x612.jpg?v=1736259647&width=375",
            name: "Sebastián M.",
            place: "CARTAGENA",
            description: "Con repuestos gratis y duraderos, mi bicicleta se mantiene como nueva por mucho tiempo.",
          },
          {
            img: "https://evobike.com.co/cdn/shop/files/Mujer-Perfil.jpg?v=1736260236&width=375",
            name: "Jessica O.",
            place: "BOGOTÁ",
            description: "Mi scooter eléctrico es rápido y práctico, perfecto para la ciudad. El servicio post-venta es excelente.",
          },
          {
            img: "https://evobike.com.co/cdn/shop/files/istockphoto-1090878494-612x612.jpg?v=1736259598&width=375",
            name: "Emmanuel F.",
            place: "MEDELLÍN",
            description: "Mi triciclo eléctrico es funcional y me ha ayudado en mi negocio y calidad de vida.",
          },
        ].map((client, index) => (
          <ClientCard key={index} img={client.img} name={client.name} place={client.place} description={client.description} />
        ))}
      </div>
    </section>
  );
};

export default Home;