import { IIconTextProps } from '@/types';

export const IconText: React.FC<IIconTextProps> = ({ icon, text }) => {
  return (
    <div className='w-[210px] flex flex-col items-center m-2 text-center'>
      {icon}
      <p className='text-[1.3rem] m-2'>{text}</p>
    </div>
  );
};
