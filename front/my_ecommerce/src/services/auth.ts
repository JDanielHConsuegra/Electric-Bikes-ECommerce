"use server";

import { IUserLogin, IUserRegister } from "@/types";
import axios, { AxiosError } from "axios";

// URL de la API
const API_BASE_URL = "http://localhost:3002/users";

// Registro de usuario
export const postRegister = async (data: IUserRegister) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/register`, data);

    if (res.status === 201) {
      return {
        message: "Usuario registrado exitosamente",
        data: res.data,
      };
    } else {
      return {
        message: "Algo inesperado ha ocurrido al registrar el usuario",
        error: res.data,
      };
    }
  } catch (error) {
    const err = error as AxiosError;

    if (err.response?.status === 400) {
      return {
        message: "Ese usuario ya existe, intenta con otro correo",
        error: err.response.data,
      };
    }

    return {
      message: "Error al conectar con el servidor",
    };
  }
};

// Inicio de sesión
export const postLogin = async (data: IUserLogin) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/login`, data);

    if (res.status === 200) {
      return {
        message: "Usuario logeado exitosamente",
        data: res.data,
      };
    } else {
      return {
        message: "Algo inesperado ha ocurrido al logear el usuario",
        error: res.data,
      };
    }
  } catch (error) {
    const err = error as AxiosError;

    if (err.response?.status === 400) {
      return {
        message: "Verifica tanto el correo como la contraseña",
        error: err.response.data,
      };
    }

    return {
      message: "Error al conectar con el servidor",
    };
  }
};