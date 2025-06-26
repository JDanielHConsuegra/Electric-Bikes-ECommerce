"use client";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/productContext";
import { IProduct } from "@/types";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartAddButton = ({ product }: { product: IProduct }) => {

    const {isAuth}  = useAuthContext();
    const { addToCart, isProductInCart } = useCartContext();
    const handleAddToCart = () => {
        if (!isAuth) {
            toast.error('Por favor, inicia sesión para agregar productos al carrito.');
            return;
        }
        else if (isProductInCart(String(product.id))) {
            toast.warning('El producto ya está en el carrito.');
        }
        else {
            addToCart(product);
            toast.success('Producto agregado al carrito.');
        }
    }



        return (
            <button className="self-start border cursor-pointer bg-gray-200 hover:bg-gray-300 p-3" onClick={handleAddToCart}>
                <ShoppingCartSharpIcon fontSize= "medium" />
            </button>
        );
    

}