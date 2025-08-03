"use server";

import axios, { AxiosError } from "axios";

export const getOrdersByUser = async (token: string) => {
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await axios.get(`${API_BASE_URL}/users/orders`, {
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