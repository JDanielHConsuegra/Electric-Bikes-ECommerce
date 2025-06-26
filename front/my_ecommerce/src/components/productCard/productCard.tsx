
import { IProductCardProps } from '@/types';
import Image from 'next/image';
import { Button } from '../Button/Button';

export const ProductCard: React.FC<IProductCardProps> = ({ cards }) => {
  return (
    <section className='flex-col justify-around gap-[10px] w-[275px] shadow-md rounded-sm p-4 font-sans [&>hr]:mt-4 [&>hr]:w-full [&>hr]:m-auto h-auto **:mt-1 **:mb-3'>
      <h2 className=' underline text-2xl text-center'>{cards.name} </h2>
      <Image
        className='w-full h-auto rounded-sm'
        src={cards.image}
        alt={cards.name}
        width={200}
        height={200}
      />
      <p>
        <b>Precio: $</b> {cards.price}
      </p>
      {cards.stock > 0 ? (
        <p>Stock: {cards.stock}</p>
      ) : (
        <p className=' m-auto w-27 font-bold text-white p-2 bg-red-600 text-center'>Agotado</p>
      )}
      <Button content='More Details' href={`/products/${cards.id}`} />
    </section>
  );
};
