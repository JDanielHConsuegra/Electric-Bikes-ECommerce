"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { NavbarProps } from "@/types";
import { usePathname } from "next/navigation";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/productContext";
import "react-toastify/dist/ReactToastify.css";
//icons
import CloseIcon from "@mui/icons-material/Close";
import { MdAccountCircle, MdLogin, MdOutlineLogout, MdMenu } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
//toast
import { toast } from "react-toastify";

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const pathname = usePathname();
  const { resetUserData, user, isAuth } = useAuthContext();
  const { total, resetCart } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);

    const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/service" },
    { label: "Categorías", href: "/category" },
    { label: "Landing", href: "/landing" },
  ];

  return (
    <nav className="flex fixed shadow-black shadow md:shadow-none justify-between md:px-20 md:py-1 md:justify-start items-center bg-gradient-to-b from-gray-950 md:from-black md:to-gray-950/5 to-gray-900/10 w-full top-0 right-0 p-1 px-4 font-mono z-50">
      {/* MOBILE */}
      {/* Menu desplegable */}
      <div className="flex items-center gap-3">
      <div  
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer md:hidden">
        <MdMenu size={40} color="white" />
      </div>
      {/* Open */}
        <div
        className={`fixed top-0 right-0 md:hidden h-full w-64 bg-black shadow-lg transform 
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
              <MdAccountCircle size={40} color="white" />
              <p className="text-white text-center">{user?.name}</p>
            </Link>
            <Link href="/cart" className="cursor-pointer flex flex-col items-center justify-center">
              <p className="text-white font-bold bg-green-500 p-2 pb-0 pt-0 text-start rounded-full">{total}</p>
              <FaShoppingCart size={30} color="white" />
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
                      resetCart();
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
      {/* Logo */}
      <Link href={"/landing"} >
      <Image
      src={"/logo.avif"}
      alt="logo"
      width={100}
      height={85}
      className="rounded md:hidden"
      />
      </Link>
      </div>
      <div className="md:hidden flex items-end gap-4">
          <Link href={isAuth ? "/profile" : "/login"} className="cursor-pointer flex flex-col items-center justify-center">
              <MdAccountCircle size={30} color="white" />
          </Link>
          <Link href={isAuth ? "/cart" : "/login"} className="cursor-pointer flex flex-col items-center justify-center">
              <p className="text-white text-xs font-bold bg-green-500 p-1 pb-0 pt-0 text-start rounded-full">{total}</p>
              <FaShoppingCart size={20} color="white" />
          </Link>
          {
            isAuth ? 
            <button
              onClick={() => {
                toast.info("Sesión cerrada", {
                  position: "top-right",
                  autoClose: 2000,
                });
                resetUserData();
                resetCart();
              }}
              className="cursor-pointer"
            >
               <MdOutlineLogout size={30} color="white" />  
            </button>
             : <Link href={"/login"}>
                <MdLogin size={30} color="white"/>
                </Link> 
          }
        </div>
      {/* DESKTOP PC */}
       <div className="hidden md:flex w-full justify-between items-center">
        <div className="flex gap-5 items-center">
        <Image
        src={"/logo.avif"}
        alt="logo"
        width={150}
        height={100}
        className=""
        />
        <div className="hidden md:flex gap-8 items-center">
        {
          navItems.map((i, index)=>(
            <Link key={index} href={i.href} className={`text-gray-100 text-2xl ${pathname === i.href ? "underline font-bold" : "" }`} >{i.label}</Link>
          ))
        }
        </div>
        </div>
        <div className="md:flex hidden items-end gap-8">
          <Link href={isAuth ? "/profile" : "/login"} className="cursor-pointer flex flex-col items-center justify-center">
              <MdAccountCircle size={40} color="white" />
          </Link>
          <Link href={isAuth ? "/cart" : "/login"} className="cursor-pointer flex flex-col items-center justify-center">
              <p className="text-white font-bold bg-green-500 p-2 pb-0 pt-0 text-start rounded-full">{total}</p>
              <FaShoppingCart size={30} color="white" />
          </Link>
          {
            isAuth ? 
            <button
              onClick={() => {
                toast.info("Sesión cerrada", {
                  position: "top-right",
                  autoClose: 2000,
                });
                resetUserData();
                resetCart();
              }}
              className="cursor-pointer"
            >
               <MdOutlineLogout size={40} color="white" />  
            </button>
             : <Link href={"/login"}>
                <MdLogin size={40} color="white"/>
                </Link> 
          }
        </div>
       </div>


      
      
      
      
      
         
    </nav>
  );
};