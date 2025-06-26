"use client";

import Link from "next/link";
import Img from "next/image";
import React, { useState } from "react";
import { NavbarProps } from "@/types";
import { usePathname } from "next/navigation";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/productContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const pathname = usePathname();
  const { resetUserData, user, isAuth } = useAuthContext();
  const { total, resetcart } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-black w-full sticky top-0 right-0 p-5 font-mono z-50">
      {/* Logo */}
      <Link href="/landing">
        <Img src="/logo.avif" alt="Logo" width={180} height={180} className="m-0 sm:w-[150px] ml-5" />
      </Link>

      {/* Botón de menú (siempre visible) */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black border border-white px-4 py-2 rounded hover:bg-gray-900 transition cursor-pointer focus:outline-none mr-5"
      >
        <MenuTwoToneIcon fontSize="large" sx={{ color: "white" }} />
      </button>

      {/* Sidebar (siempre disponible) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform 
          ${isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <p className="text-white text-lg font-bold">Menú</p>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <CloseIcon fontSize="large" />
          </button>
        </div>

        {/* Account & Cart */}
        {isAuth && (
          <div className="flex flex-col items-center gap-4 p-5 border-b border-gray-700">
            <Link href="/profile" className="cursor-pointer flex flex-col items-center justify-center">
              <AccountCircleTwoToneIcon fontSize="large" sx={{ color: "white" }} />
              <p className="text-white text-center">{user?.name}</p>
            </Link>
            <Link href="/cart" className="cursor-pointer flex flex-col items-center justify-center">
              <p className="text-white font-bold bg-green-500 p-2 pb-0 pt-0 text-start rounded-full">{total}</p>
              <ShoppingCartTwoToneIcon fontSize="large" sx={{ color: "white" }} />
              <p className="text-white text-center">Carrito</p>
            </Link>
          </div>
        )}

        {/* Menú */}
        <ul className="p-5">
          {items.map((item, index) => {
            const isActive =
              (pathname === item.href && item.label !== "Cerrar Sesión") ||
              (pathname.startsWith(item.href) && item.href !== "/");

            return (
              <li key={index} className="py-3 border-b border-gray-700">
                <Link
                  href={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    if (item.label === "Cerrar Sesión") {
                      toast.info("Sesión cerrada", {
                        position: "top-right",
                        autoClose: 2000,
                      });
                      resetUserData();
                      resetcart();
                    }
                  }}
                  className={`text-white text-lg ${isActive ? "font-bold underline" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};