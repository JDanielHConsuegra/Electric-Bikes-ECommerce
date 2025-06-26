
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import { postOrder } from '@/services/order';
import { ICreateOrder } from '@/types';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '@/context/authContext';
import { useCartContext } from '@/context/productContext';

export const AddOrderButton = () => {
const { user, token } = useAuthContext();
const { cart, resetCart  } = useCartContext();

const handleAddOrder = async () => {
    const order: ICreateOrder = {
        userId: user?.id || 0,
        products: cart.map((item)=> item.id as number),
    }
    
    try {
        const res  = await postOrder(order, token ?? '');
    if (res.message === "Orden creada exitosamente") {
        toast.success("Orden creada exitosamente");
        resetCart();
        return
    }

    if (res.message === "Ocurrio algo inesperado al crear la orden") {
        toast.error("Ocurrio algo inesperado al crear la orden");

        
        return
    }

    if (res.message === "Error al crear la orden, datos incorrectos") {
        console.log("Error: ", res.error);
        toast.error("Error al crear la orden, datos incorrectos");
        return
    }

    if (res.message === "Error del  servidor al crear la orden") {
        toast.error("Error del servidor al crear la orden");
        return
    }
    } catch (error) {
        toast.error("Error al procesar la solicitud, por favor intente más tarde" + error);
    }


    
}

return (
    <div
      className='cursor-pointer w-5/10 flex flex-col items-center justify-center shadow hover:bg-gray-100 transition-all duration-300'
      onClick={handleAddOrder}
    >
      <AddShoppingCartTwoToneIcon fontSize='large' />
      <p className=' text-center font-bold' >Comprar </p>
    </div>
)
}