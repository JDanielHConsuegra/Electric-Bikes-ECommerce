import { Button } from "../Button/Button";

interface IEmptyProps {
    username: string;
}

export const EmptyCartComponent:React.FC<IEmptyProps> = ({username}) => {

    return (
        <section className='flex flex-col items-center justify-center w-full h-[60vh]'>
          <div className='text-center m-6 shadow **:m-2 flex flex-col items-center justify-center bg-white rounded-md'>
            <h2 className='text-[1.2rem] '>{username} Tu Carrito esta vacio </h2>
            <Button content="Inicio" href="/"/>
          </div>
        </section>
    )
}