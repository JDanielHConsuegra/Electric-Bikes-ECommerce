import { createContext, useContext, useState } from "react";


type TMyCountContext = {
    count: number,
    increment: ()=> void
}



export const MyCountContext = createContext<TMyCountContext | undefined>(undefined)

export const MyCountContextProvider = ({children}: {children: React.ReactNode }) =>{

    const [count, setCount] = useState<number>(0)
    const increment = () =>{
        setCount((prev) => prev +1)
    }

    return (
        <MyCountContext value={{count, increment}}>
            {children}
        </MyCountContext>
    )
}

export const useMyCount = () =>{
    const context = useContext(MyCountContext)
    if(!context){
        console.warn("El contexto solo se puede usar en las paginas que esten envueltas")
    }
    return context
}