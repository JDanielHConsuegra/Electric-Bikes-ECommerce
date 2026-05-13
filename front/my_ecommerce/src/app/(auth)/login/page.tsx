"use client";

import { FormComponent } from "../../../components/Form/Form";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import Link from "next/link";
import { postLogin } from "@/services/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUserLogin, IUserRegister } from "@/types";
import { useAuthContext } from "@/context/authContext";

const Login: React.FC = () => {
  const router = useRouter();
  const { saveUserData } = useAuthContext();

  // Manejo del login
  const handleLogin = async (values: IUserLogin | IUserRegister) => {
    try {
      const res = await postLogin(values as IUserLogin);

      if (res.message === "Usuario logeado exitosamente") {
        toast.success("Usuario logeado exitosamente");
        setTimeout(() => router.push("/"), 3000);

        saveUserData({
          user: res.data.user,
          token: res.data.token,
          login: res.data.login,
        });

        return;
      }

      if (res.message === "Algo inesperado ha ocurrido al logear el usuario") {
        toast.info("Te has logeado, pero algo inesperado ha ocurrido 🤷‍♂️");
        setTimeout(() => router.push("/"), 3000);

        saveUserData({
          user: res.data.user,
          token: res.data.token,
          login: res.data.login,
        });

        return;
      }

      if (res.message === "Verifica tanto el correo como la contraseña") {
        toast.error("Verifica tanto el correo como la contraseña");
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
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-md w-full sm:max-w-lg">
        {/* Título */}
        <h2 className="text-2xl sm:text-lg md:text-xl font-bold mb-5 text-center underline">
          Iniciar Sesión
        </h2>

        {/* Formulario */}
        <div className="flex justify-center items-center">
          <FormComponent
            fields={[
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
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                    "Debe contener al menos una letra mayúscula, una minúscula y un número"
                  ),
              },
            ]}
            onSubmit={handleLogin}
            buttonText="Entrar"
          />
        </div>

        {/* Registro */}
        <p className="mt-4 text-sm text-center">
          ¿No tienes una cuenta?{" "}
          <Link href="/register" className="text-green-500 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;