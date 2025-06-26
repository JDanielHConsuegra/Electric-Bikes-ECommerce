import { TitleText } from "@/components/titleText/titleText";
import Link from "next/link";
import Image from "next/image";

export default async function LandingPage() {
  return (
    <main className="flex flex-col justify-center font-sans px-6">
      <TitleText
        title="Un Modelo para cada estilo"
        text="En Evobike no solo creamos vehículos eléctricos; diseñamos un camino hacia un mañana más limpio y eficiente."
      />

      {/* Iconos */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
        {[
          "https://evobike.com.co/cdn/shop/files/Icono_Suspension_160x160@2x.svg?v=1736970439",
          "https://evobike.com.co/cdn/shop/files/Icono_Casco_160x160@2x.svg?v=1736970564",
          "https://evobike.com.co/cdn/shop/files/Icono_Bateria_160x160@2x.svg?v=1736970805",
          "https://evobike.com.co/cdn/shop/files/Icono_Cargador_160x160@2x.svg?v=1736970753",
        ].map((src, index) => (
          <Image key={index} src={src} alt={`Icono ${index + 1}`} width={200} height={200} className="w-24 sm:w-32 lg:w-40" />
        ))}
      </div>

      {/* Banner con llamada a la acción */}
      <div
        className="w-full h-96 sm:h-[500px] lg:h-[600px] flex flex-col justify-end items-start bg-cover bg-center p-6 mt-20 rounded-lg"
        style={{ backgroundImage: `url("https://evobike.com.co/cdn/shop/files/Banner-Call-to-Actions.jpg?v=1736800107&width=550")`}}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-mono text-white font-bold mb-6">
          ¡Descubre la movilidad del futuro!
        </h2>
        <p className="text-white text-lg mb-4">Elige tu vehículo eléctrico ideal hoy</p>

        {/* Botones */}
        <div className="flex flex-wrap gap-4">
          {[
            { href: "/", label: "Tienda" },
            { href: "/category", label: "Categorías" },
            { href: "/cart", label: "Carrito" },
            { href: "/service", label: "Servicios" },
          ].map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className="bg-green-500 px-6 py-3 text-white font-bold rounded-lg hover:bg-green-600 transition-all"
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}