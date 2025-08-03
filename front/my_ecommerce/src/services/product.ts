"use server";



export const getProducts = async () => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const products = await response.json();
        return products;

    } catch (e: Error | unknown) {
        console.warn("Error fetching products:" + e);
        
    }
}