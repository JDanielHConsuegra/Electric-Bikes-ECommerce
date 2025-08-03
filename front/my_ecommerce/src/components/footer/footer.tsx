import Img from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-white font-mono pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8 text-center sm:text-left">
        {/* Marca */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h1 className="text-2xl font-bold mb-4">Electric Bikes</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Soluciones sostenibles y tecnología para todos. ¡Gracias por confiar en nosotros para resolver tus necesidades de movilidad amigable con el medio ambiente!
          </p>
        </div>

        {/* Recursos */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h2 className="text-lg font-semibold mb-4">Recursos</h2>
          <div className="space-y-2 flex flex-col">
            <div>
              <button className="text-left hover:underline">Preguntas Frecuentes</button>
            </div>
            <div>
              <button className="text-left hover:underline">Blog</button>
            </div>
            <div>
              <button className="text-left hover:underline">Soporte</button>
            </div>
            <div>
              <button className="text-left hover:underline">Contacto</button>
            </div>
          </div>
        </div>

        {/* Contacto y redes */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h2 className="text-lg font-semibold mb-4">Contáctanos</h2>
          <p className="text-gray-300 text-sm mb-4">
            Dirección: Calle Futura #123 <br />
            Teléfono: +57 300 000 0000 <br />
            Email: contacto@electricbikes.com
          </p>
          <div className="flex justify-center sm:justify-start gap-6 mt-4">
            <Img src="/face.png" alt="Facebook" width={40} height={40} className="cursor-pointer hover:brightness-75" />
            <Img src="/insta.jpeg" alt="Instagram" width={40} height={40} className="cursor-pointer hover:brightness-75" />
            <Img src="/youtube.jpeg" alt="YouTube" width={40} height={40} className="cursor-pointer hover:brightness-75" />
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-14 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Electric Bikes. Todos los derechos reservados.
      </div>
    </footer>
  );
};