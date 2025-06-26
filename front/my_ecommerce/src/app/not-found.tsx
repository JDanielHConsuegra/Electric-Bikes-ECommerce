import { TitleText } from "@/components/titleText/titleText";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <body>
      
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 text-center px-6">
      {/* Logo */}
      <Image
        src="/logo.avif"
        alt="404 Not Found"
        width={500}
        height={500}
        className="w-1/2 h-1/2 object-cover"
      />

      {/* Mensaje de error */}
      <div className="mt-6">
        <hr className="mb-4" />
        <TitleText title="Página No Encontrada!" text="Error 404" />
        <hr className="mt-4 mb-6" />

        {/* Botón de regreso */}
        <Link
          href="/"
          className="p-3 rounded-md bg-green-500 text-white font-bold font-mono text-2xl hover:bg-green-600 transition-all"
        >
          Ir a la página de inicio
        </Link>
      </div>
    </div>
    </body>
  );
};

export default NotFoundPage;