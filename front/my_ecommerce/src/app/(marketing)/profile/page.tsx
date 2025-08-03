"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IUserOrder } from "@/types";
import { useAuthContext } from "@/context/authContext";
import { getOrdersByUser } from "@/services/getOrders";
import { NotAuthComponent } from "@/components/notAuthComponent/notAuthComponent";

export default function ProfilePage() {
  const { user, token, isAuth, saveUserData } = useAuthContext();

  // Obtener órdenes del usuario
  useEffect(() => {
    const fetchUserOrders = async () => {
      if (token && user) {
        const res = await getOrdersByUser(token);
        if (res.orders) {
          saveUserData({
            user: { ...user, orders: res.orders },
            token,
            login: true,
          });
        }
      }
    };
    fetchUserOrders();
  }, [user, token, saveUserData]);

  // Si el usuario no está autenticado
  if (!isAuth) {
    return <NotAuthComponent />;
  }

  const orders: IUserOrder[] = user?.orders || [];

  return (
    <section>
      {/* Información del usuario */}
      <div className="flex flex-col items-start justify-center w-6/10 shadow mb-5 max-w-[300px] p-5 hover:bg-gray-200 transition-all duration-300 cursor-pointer">
        <h2 className="text-2xl m-3">
          <b className="text-green-500">{user?.name}</b> Aquí está tu información
        </h2>
        <p>Correo: <span>{user?.email}</span></p>
        <hr className="w-full mb-5" />
        <p>Dirección: <span>{user?.address}</span></p>
        <hr className="w-full mb-5" />
        <p>Teléfono: <span>{user?.phone}</span></p>
        <hr className="w-full mb-5" />
      </div>

      {/* Si no hay órdenes */}
      {orders.length === 0 ? (
        <section className="flex flex-col items-center justify-center w-full h-[60vh]">
          <div className="text-center m-6 shadow flex flex-col items-center justify-center bg-white rounded-md">
            <h2 className="text-[1.2rem] p-6">{user?.name} usted no ha realizado ninguna orden</h2>
            <Link href="/">
              <p className="bg-green-500 mb-4 p-2 rounded-md text-white w-fit m-auto hover:bg-green-600 transition-all duration-300 cursor-pointer">
                Inicio
              </p>
            </Link>
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          {orders.map((order, index) => (
            <div key={index}>
              {/* Resumen de la orden */}
              <div className="w-full flex items-center justify-around mt-10 mb-10 shadow-lg p-4 bg-white rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer **:w-1/3">
                <p className="text-[1rem] text-center h-auto">
                  Orden #{order.id}
                </p>
                <span className="underline">
                  Total: <b>${order.products?.reduce((acc, p) => acc + p.price, 0) ?? 0}</b>
                </span>
                <span className="text-center">
                  {new Date(order.date).toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              {/* Lista de productos en la orden */}
              <div className="flex justify-around items-center flex-wrap w-9/10 m-auto">
                {order.products?.map((product, idx) => (
                  <div key={idx} className="flex flex-col items-center mb-5 border">
                    <span className="font-semibold bg-gray-400 w-full text-center border">{product.name}</span>
                    <Link href={`/products/${product.id}`}>
                      <Image src={product.image} alt={product.name} width={150} height={150} />
                    </Link>
                    <span className="font-semibold bg-gray-400 w-full text-center border">Precio: ${product.price}</span>
                    <span className="font-semibold bg-gray-400 w-full text-center border">Stock: {product.stock}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}