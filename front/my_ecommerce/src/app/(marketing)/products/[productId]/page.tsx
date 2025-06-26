import { TitleText } from "@/components/titleText/titleText";
import Image from "next/image";
import { getProducts } from "@/services/product";
import { CartAddButton } from "@/components/CartAddButton/CartAddButton";
import { IProduct } from "@/types";

export default async function ProductPage(props: { params: { productId: string } | Promise<{ productId: string }> }) {
  const resolvedParams = await props.params;
  const productId = resolvedParams.productId;

  // Server-side fetching
  const products: IProduct[] = await getProducts();

  // Si el producto no existe
  if (!products?.some((product) => product.id === parseInt(productId))) {
    return (
      <main className="h-[90vh] flex flex-col justify-center items-center">
        <div>
          <hr />
          <TitleText title="Producto No Encontrado!" />
          <hr />
        </div>
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full">
      {/* Título */}
      <TitleText
        title="Aquí están los detalles de ese maravilloso producto"
        text="Aquí encontrarás información del producto que elegiste!"
      />
      <hr className="w-full" />

      {/* Detalles del producto */}
      <div className="flex flex-col items-center justify-around w-[350px] shadow-2xl m-auto mt-[30px] mb-[30px] p-1 font-sans">
        {products
          .filter((product) => product.id === parseInt(productId))
          .map((product, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2 p-4">
              {/* Botón de agregar al carrito */}
              {product.stock > 0 && <CartAddButton product={product} />}

              {/* Información del producto */}
              <h2 className="text-2xl font-bold underline">{product.name}</h2>
              <Image src={product.image} alt={product.name} width={300} height={300} />
              <p>{product.description}</p>
              <hr className="w-full" />
              <p>
                <b>Precio:</b> ${product.price}
              </p>
              <p>
                <b>Stock:</b> {product.stock}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}