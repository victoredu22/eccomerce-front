import { apiUrl } from "../config/env";
import { Product } from "../interface/product";

export const getUrl = async (params: string) => {
  const url = new URL(`${apiUrl}${params}`);

  return fetch(url)
    .then((res) => res.json() as Promise<{ results: Product[] }>)
    .then((res: any) => {
      return res;
    });
};
