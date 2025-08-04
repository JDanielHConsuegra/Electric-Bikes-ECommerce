import { TitleText } from "@/components/titleText/titleText";
import { TbError404 } from 'react-icons/tb';
import Link from "next/link";
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <body>
      
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 text-center px-6">
      {/* Logo */}
      <TbError404 className="w-24 h-24 text-red-500 mb-4" />

      {/* Mensaje de error */}
      <div className="mt-6">
        <hr className="mb-4" />
        <TitleText title="Página No Encontrada!"/>
        <hr className="mt-4 mb-6" />

        {/* Botón de regreso */}
        <Link
          href="/"
          className="p-3 rounded-md bg-green-500 text-white font-bold font-mono text-2xl hover:bg-green-600 transition-all"
        >
          inicio
        </Link>
      </div>
    </div>
    </body>
  );
};

export default NotFoundPage;