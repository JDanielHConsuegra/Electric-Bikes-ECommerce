"use server";

import axios, { AxiosError } from "axios";

export const getOrdersByUser = async (token: string) => {
  const ApiOrder = "http://localhost:3002/users/orders";

  try {
    const res = await axios.get(ApiOrder, {
      headers: {
        Authorization: token,
      },
    });

    return {
      message: "Órdenes obtenidas correctamente",
      orders: res.data,
    };
  } catch (error) {
    const err = error as AxiosError;
    console.error("Error al obtener las órdenes:", err);

    return {
      message: "Error al obtener las órdenes",
      error: err.message,
    };
  }
};