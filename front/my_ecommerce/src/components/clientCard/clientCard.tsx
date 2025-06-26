import React from 'react';
import Image from 'next/image';
import { IClientCardProps } from '@/types';

export const ClientCard: React.FC<IClientCardProps> = ({
  img,
  place,
  name ,  
  description,
}) => {
  return (
    <div className="flex-col justify-between items-start p-5 w-3/10 h-auto min-w-[300px] font-sans shadow-sm rounded-sm ">
      <div className="flex justify-start gap-[10px] m-[10px] ">
        <Image src={img} alt={name} width={150} height={150}></Image>
        <div className="flex-col justify-start items-center p-[10px] ">
          <h3 className="text-green-600 font-bold">{place}</h3>
          <b>{name}</b>
        </div>
      </div>
      <hr></hr>
      <p>{description}</p>
    </div>
  );
};
