import Image from 'next/image';
import { ServiceCardProps } from '@/types';

export const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className=' flex flex-col items-center justify-start w-[340px] p-2 rounded-sm shadow font-sans m-2 **:m-1'>
      <Image src={imgSrc} alt={title} width={300} height={200}></Image>
      <h3 className=' text-2xl font-bold text-center p-2'>{title}</h3>
      <hr className='w-full'></hr>
      <p className=' leading-6'>{description}</p>
    </div>
  );
};
