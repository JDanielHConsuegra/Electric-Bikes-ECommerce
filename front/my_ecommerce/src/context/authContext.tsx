"use client";

import { IUser } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

// Tipos de contexto
type AuthContext = {
  user: IUser | null;
  token: string | null;
  isAuth: boolean;
  saveUserData: (data: SaveUserPayload) => void;
  resetUserData: () => void;
};

type SaveUserPayload = {
  user: IUser;
  token: string;
  login: boolean;
};

// Creación del contexto
export const AuthContext = createContext<AuthContext | undefined>(undefined);

// Proveedor de autenticación
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

// Recuperar datos del usuario desde localStorage al cargar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedAuth = localStorage.getItem("isAuth");

    if (storedUser && storedToken && storedAuth) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setIsAuth(JSON.parse(storedAuth));
    }
  }, []);

// Guardar datos del usuario en localStorage
  const saveUserData = (data: SaveUserPayload) => {
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    localStorage.setItem("isAuth", JSON.stringify(data.login));

    setUser(data.user);
    setIsAuth(data.login);
    setToken(data.token);
  };

// Resetear datos del usuario
  const resetUserData = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");

    setUser(null);
    setIsAuth(false);
    setToken(null);
  };

// Debugging: Mostrar estado actualizado en consola
  useEffect(() => {
    console.log("Estado actualizado:", { user, isAuth, token });
  }, [user, isAuth, token]);

  return (
    <AuthContext.Provider value={{ user, token, isAuth, saveUserData, resetUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de autenticación
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};