"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { AuthProvider } from "@/context/authContext";
import { useAuthContext } from "@/context/authContext";
import { CartProvider } from "@/context/productContext";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ToastContainer } from "react-toastify";

// Configuración de fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Layout principal
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider>
      <CartProvider>
        <MarketingLayoutContent>{children}</MarketingLayoutContent>
      </CartProvider>
    </AuthProvider>
  );
}

// Contenido del layout
function MarketingLayoutContent({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAuthContext();

  // Elementos de la barra de navegación
  const authItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/service" },
    { label: "Categorías", href: "/category" },
    ...(isAuth
      ? [{ label: "Cerrar Sesión", href: "/" }]
      : [
          { label: "Iniciar Sesión", href: "/login" },
          { label: "Registrarse", href: "/register" },
        ]),
  ];

  return (
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Navbar */}
      <Navbar items={authItems} />

      {/* Carrusel */}
      <div className="w-full">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          transitionTime={400}
          swipeable
          emulateTouch
        >
          {[
            "https://cdn.shopify.com/s/files/1/0909/8480/8763/files/Banner-Bicicletas-e.jpg?v=1736870198",
            "https://cdn.shopify.com/s/files/1/0909/8480/8763/files/Banner-Scooters-evo.jpg?v=1736888381",
            "https://cdn.shopify.com/s/files/1/0909/8480/8763/files/Banner-Triciclos-evo.jpg?v=1736871080",
          ].map((src, index) => (
            <div key={index} className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image src={src} alt={`Banner ${index + 1}`} width={1920} height={800} className="w-full h-full object-cover" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Contenido dinámico */}
      <div className="w-full max-w-screen-xl mx-auto px-4">{children}</div>

      {/* Notificaciones */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Footer */}
      <Footer />
    </body>
  );
}