"use server";

import { ICreateOrder } from "@/types";
import axios, { AxiosError } from "axios";

export const postOrder = async (order: ICreateOrder, token: string) => {
  const ApiOrder = "http://localhost:3002/orders";
  console.log("order: ", order);

  try {
    const res = await axios.post(ApiOrder, order, {
      headers: {
        Authorization: token,
      },
    });

    if (res.status === 200) {
      return {
        message: "Orden creada exitosamente",
        order: res.data,
      };
    } else {
      return {
        message: "Ocurrió algo inesperado al crear la orden",
        order: res.data,
      };
    }
  } catch (error) {
    const err = error as AxiosError;
    console.log("Error al crear la orden: ", err);

    if (err.response?.status === 400) {
      return {
        message: "Error al crear la orden, datos incorrectos",
        error: err.message,
      };
    } else {
      console.log("Error del servidor al crear la orden: ", err);
      return {
        message: "Error del servidor al crear la orden",
        error: err,
      };
    }
  }
};