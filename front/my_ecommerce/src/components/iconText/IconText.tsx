import Image from 'next/image';
import { IIconTextProps } from '@/types';

export const IconText: React.FC<IIconTextProps> = ({ icon, text }) => {
  return (
    <div className='w-[210px] flex flex-col items-center m-2 text-center'>
      <Image src={icon} alt="img" width={200} height={200}></Image>
      <p className='text-[1.3rem] m-2'>{text}</p>
    </div>
  );
};
