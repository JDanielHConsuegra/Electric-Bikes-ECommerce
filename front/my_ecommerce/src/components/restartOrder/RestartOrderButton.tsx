"use client"
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';
import { useCartContext } from '@/context/productContext';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const RestartOrderButton = () => {
  const { resetCart } = useCartContext();

  const handleClick = () => {
    toast.info('Carrito reiniciado');
  setTimeout(() =>{

    resetCart();
  }, 2000)
}



    return(
        <div className='cursor-pointer w-5/10 flex flex-col items-center justify-center shadow hover:bg-gray-100 transition-all duration-300' onClick={handleClick}>
          <RestartAltTwoToneIcon fontSize='large'/>
          <p className=' text-center font-bold' >Restart </p>
        </div>
    )
}