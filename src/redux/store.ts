import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./states/products";

import { cartSlice } from "./states/cart";

import { brandSlice } from "./states/brand";

import { Brand } from "../interface/brand";
import { Product } from "../interface/product";

export interface AppStore {
  product: Product[];
  cart: Product[];
  brand: Brand[];
}

export default configureStore<AppStore>({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    brand: brandSlice.reducer,
  },
});
