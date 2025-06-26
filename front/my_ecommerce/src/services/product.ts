"use server";

export const getProducts = async () => {
    try {
        const ApiURL = "http://localhost:3002/products";
        const response = await fetch(ApiURL);
        const products = await response.json();
        return products;

    } catch (e: Error | unknown) {
        console.warn("Error fetching products:" + e);
        
    }
}