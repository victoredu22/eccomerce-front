import { apiUrl } from "../config/env";
import { Product } from "../interface/product";

export const getUrl = async (params: string): Promise<Product[]> => {
  const url = new URL(`${apiUrl}${params}`);

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data; // Asegúrate de que `results` sea un arreglo de Product
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // O maneja el error como necesites
  }
};
