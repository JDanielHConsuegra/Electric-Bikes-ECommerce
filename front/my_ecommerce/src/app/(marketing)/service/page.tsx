import { TitleText } from "@/components/titleText/titleText";
import { ServiceCard } from "@/components/serviceCard/serviceCard";

export default function AboutPage() {
  return (
    <main>
      {/* Título */}
      <TitleText
        title="Estos son nuestros Servicios"
        text="Nuestro Servicio está diseñado para garantizar tanto el funcionamiento de nuestros productos, como tu satisfacción"
      />
      <hr />

      {/* Lista de servicios */}
      <div className="flex flex-wrap items-start justify-center gap-3 w-full mt-5 mb-5">
        <ServiceCard
          imgSrc="https://evobike.com.co/cdn/shop/articles/Banner-Mantenimiento_520x500_8a1ed41c-3499-4f5f-bf2b-fb004bf46f65.jpg?v=1736887439&width=1100"
          title="Mantenimiento"
          description="Nuestro servicio de mantenimiento general para bicicletas eléctricas está diseñado para prolongar su vida útil."
        />

        <ServiceCard
          imgSrc="https://evobike.com.co/cdn/shop/articles/Banner-Servicios_520x500_abfec6d4-65ce-4389-8c14-420f1dc4297b.jpg?v=1736887464&width=1100"
          title="Servicio de Repuestos"
          description="Nuestro servicio de repuestos para bicicletas eléctricas te ofrece una alta gama de repuestos originales."
        />

        <ServiceCard
          imgSrc="https://evobike.com.co/cdn/shop/articles/Banner-Servicios-Post.jpg?v=1736364988&width=1100"
          title="Servicio Post Venta"
          description="Nuestro servicio de post venta está diseñado para garantizar tu satisfacción y acompañarte a cada paso del camino."
        />

        <ServiceCard
          imgSrc="https://evobike.com.co/cdn/shop/articles/Banner-Revision_520x500_9d963f45-e788-48f9-b484-49abd37dd82f.jpg?v=1736887399&width=1100"
          title="Revisión General de la Bicicleta"
          description="Nuestro servicio de revisión general para bicicletas eléctricas está diseñado para garantizar su funcionamiento."
        />
      </div>
    </main>
  );
}