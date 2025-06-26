import { getProducts } from "@/services/product";
import { IProduct } from "@/types";
import React from "react";



export const firstName: React.FC =  async () => {
    const data: IProduct[] = await getProducts()
    const first: IProduct[] = data?.filter((product)=> product.id === 1)

    return (
        <div>
        {first.map((p, index)=>(
            <div key={index}> {p.name} </div>

        ) )}
        
        </div>
    )
}

export default firstName