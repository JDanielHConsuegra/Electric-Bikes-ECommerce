"use client";

import React from "react";
import { FormComponent } from "../../../components/Form/Form";
import * as Yup from "yup";
import Link from "next/link";
import { postRegister } from "@/services/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUserLogin, IUserRegister } from "@/types";
import UsePublic from "@/hooks/UsePublic";

const RegisterPage: React.FC = () => {
  const router = useRouter();
  UsePublic();

  // Manejo del registro
  const handleRegister = async (values: IUserRegister | IUserLogin) => {
    try {
      const res = await postRegister(values as IUserRegister);

      if (res.message === "Usuario Registrado exitosamente") {
        toast.success("Usuario Registrado exitosamente");
        setTimeout(() => router.push("/login"), 3000);
        return;
      }

      if (res.message === "Algo inesperado ha ocurrido al registrar el usuario") {
        toast.error("Algo inesperado ha ocurrido al registrar el usuario");
        return;
      }

      if (res.message === "Ese Usuario Ya existe, intenta con otro correo") {
        toast.error("Ese Usuario Ya existe, intenta con otro correo");
        return;
      }

      if (res.message === "Error al conectar con el servidor") {
        toast.error("Error al conectar con el servidor");
        return;
      }

      toast.error("Error desconocido, por favor intente más tarde");
    } catch (error) {
      toast.error("Error al procesar la solicitud, por favor intente más tarde" + error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-xs sm:max-w-md">
        {/* Título */}
        <h2 className="text-2xl sm:text-lg md:text-xl font-bold mb-5 text-center underline">
          Registro de Usuario
        </h2>

        {/* Formulario */}
        <FormComponent
          fields={[
            {
              name: "name",
              type: "text",
              placeholder: "Nombre completo",
              validation: Yup.string().required("Campo obligatorio"),
            },
            {
              name: "email",
              type: "email",
              placeholder: "Correo electrónico",
              validation: Yup.string().email("Formato inválido").required("Campo obligatorio"),
            },
            {
              name: "password",
              type: "password",
              placeholder: "Contraseña",
              validation: Yup.string()
                .min(6, "Mínimo 6 caracteres")
                .required("Campo obligatorio")
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                  "Debe contener al menos una letra mayúscula, una minúscula y un número"
                ),
            },
            {
              name: "address",
              type: "text",
              placeholder: "Dirección",
              validation: Yup.string().required("Campo obligatorio"),
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Teléfono",
              validation: Yup.string()
                .matches(/^\d{10}$/, "Debe ser un número de 10 dígitos")
                .required("Campo obligatorio"),
            },
          ]}
          onSubmit={handleRegister}
          buttonText="Registrarse"
        />

        {/* Login */}
        <p className="mt-4 text-sm text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-green-500 hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;