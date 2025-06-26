import { TitleText } from "@/components/titleText/titleText";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <TitleText title="Te invitamos a que le eches un Ojo a nuestras Categorias" />
      <hr />

      <div className="flex justify-center flex-wrap items-center gap-4 m-20 **:text-white **:font-sans **:rounded-2xl **:hover:scale-105 **:transition-all **:duration-300 **:cursor-pointer **:w-75 **:h-50">
        <Link
          className="text-2xl font-bold text-center flex flex-col justify-center items-center bg-[url('/Banner-Scooters-evo.webp')] bg-cover bg-center"
          href={"/category/2"}
        >
          Scooters
        </Link>

        <Link
          className="text-2xl font-bold text-center flex flex-col justify-center items-center bg-[url('/Banner-Bicicletas-e.webp')] bg-cover bg-center"
          href={"/category/1"}
        >
          Bicicletas
        </Link>

        <Link
          className="text-2xl font-bold text-center flex flex-col justify-center items-center bg-[url('/Banner-Triciclos-evo.webp')] bg-cover bg-center"
          href={"/category/3"}
        >
          Triciclos
        </Link>
      </div>
    </div>
  );
}