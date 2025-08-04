"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/productContext";
import { TitleText } from "@/components/titleText/titleText";
import RemoveShoppingCartTwoToneIcon from "@mui/icons-material/RemoveShoppingCartTwoTone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AddOrderButton } from "@/components/addOrder/addOrderButton";
import { RestartOrderButton } from "@/components/restartOrder/RestartOrderButton";
import { NotAuthComponent } from "@/components/notAuthComponent/notAuthComponent";
import { EmptyCartComponent } from "@/components/emptyCartComponent/emptyCartComponent";

export default function ProfilePage() {
  const { user, isAuth } = useAuthContext();
  const { cart, total, removeItem } = useCartContext();

  // Manejo de eliminación de producto
  const handleRemove = (productId: string) => {
    toast.success("Producto eliminado del carrito");
    removeItem(productId);
  };

  // Si el usuario no está autenticado, mostrar el componente de no autenticación
  if (!isAuth) {
    return <NotAuthComponent />;
  }

  return (
    <section>
      {/* Si el carrito está vacío */}
      {cart.length === 0 && <EmptyCartComponent username={user?.name ?? "Usuario"} />}

      {/* Si hay productos en el carrito */}
      {cart.length > 0 && (
        <>
          {/* Título */}
          <TitleText
            title="Carrito de Compras"
            text="Aquí encontrarás los productos que tienes esperando por ser COMPRADOS"
          />

          {/* Resumen del pedido */}
          <div className="w-full flex items-center justify-around mt-10 mb-10 shadow-lg p-4 bg-white rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer m-auto">
            <div className="flex items-center justify-center gap-4 w-3/10 max-w-[200px]">
              <RestartOrderButton />
              <AddOrderButton />
            </div>
            <div className="w-6/10 flex flex-col items-center justify-center gap-2">
            <span>
              Total: <b>{total}</b>
            </span>
            <span>
              Precio:{" "}
              <b>{cart.reduce((acc, product) => acc + (product.price ?? 0), 0).toFixed(2)}</b>
            </span>
            </div>
          </div>

          {/* Lista de productos en el carrito */}
          <div className="flex justify-around items-center flex-wrap w-9/10 m-auto">
            {cart.map((product, index) => (
              <div key={index} className="flex flex-col items-center mb-5 border rounded-lg p-4">
                {/* Botón para eliminar producto */}
                <span
                  className="font-semibold bg-gray-500 w-full text-center border cursor-pointer hover:bg-gray-400"
                  onClick={() => product.id !== undefined && handleRemove(String(product.id))}
                >
                  <RemoveShoppingCartTwoToneIcon fontSize="small" />
                </span>

                {/* Nombre del producto */}
                <span className="font-semibold bg-gray-400 w-full text-center border">
                  {product.name}
                </span>

                {/* Imagen del producto */}
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.image ?? "/images/no-image.png"}
                    alt={product.name ?? "Product Image"}
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                </Link>

                {/* Precio y stock */}
                <span className="font-semibold bg-gray-400 w-full text-center border">
                  Precio: ${product.price}
                </span>
                <span className="font-semibold bg-gray-400 w-full text-center border">
                  Stock: {product.stock}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}