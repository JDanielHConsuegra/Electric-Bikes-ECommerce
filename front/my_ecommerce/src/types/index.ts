import { JSX } from 'react';
import * as Yup from 'yup';

// ---------- TIPOS DEL PERFIL DE USUARIO ----------
export interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  orders: IUserOrder[];
}

export interface IUserOrder {
  id: string;
  status: string;
  date: string;
  products?: IProduct[];
}

export interface ICreateOrder {
  userId: number;
  products: number[];
}

// ---------- MODELOS DE PRODUCTO Y CATEGORÍA ----------
export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

export interface ICategory {
  id: number;
  name: string;
  products?: IProduct[];
}

// ---------- FORMULARIOS DE AUTENTICACIÓN ----------
export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface FormProps {
  fields: {
    name: string;
    type: string;
    placeholder: string;
    validation: Yup.AnySchema;
  }[];
  onSubmit: (values: IUserLogin | IUserRegister) => Promise<void>;
  buttonText: string;
}

// ---------- COMPONENTES UI ----------
export interface IClientCardProps {
  img: string;
  place: string;
  name: string;
  description: string;
}

export interface IIconTextProps {
  icon: JSX.Element | string;
  text?: string;
}

export interface NavItem {
  label: string;
  href: string;
  className?: string;
}

export interface NavbarProps {
  items: NavItem[];
}

export interface IProductCardProps {
  cards: IProduct;
}

export interface ServiceCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export interface ITitleTextProps {
  title: string;
  text?: string;
}