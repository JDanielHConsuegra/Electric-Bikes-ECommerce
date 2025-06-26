import Link from "next/link"


export const NotAuthComponent = () => {
    return (
        <section className='flex flex-col items-center justify-center w-full h-[80vh]'>
         <h1 className='text-2xl font-bold mb-5'>Bienvenido a esta pagina</h1>
         <p className='text-lg mb-5'>Para acceder, por favor inicia sesion.</p>                
       <div className='text-center m-6 shadow **:m-2 flex flex-col items-center justify-center bg-white rounded-md'>
          <h2 className='text-[1.2rem] '>Usted No Esta Autenticado</h2>
          <Link href={"/login"}>
            <p className='bg-green-500 p-2 rounded-md text-white w-fit m-auto hover:bg-green-600 transition-all duration-300 cursor-pointer'>
              Iniciar Sesion
            </p>
          </Link>
        </div>
      </section>
    )
}