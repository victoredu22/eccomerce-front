import { createSlice, current } from "@reduxjs/toolkit";
import { Product } from "../../interface/product";

import { getLocalStorage } from "../../utilities";
import { LocalstorageTypes } from "../../models/localstorage";

const initialState: Product[] = [];

const initialStateCart = () => {
  const localStorageData = getLocalStorage(LocalstorageTypes.CART)
    ? [...JSON.parse(getLocalStorage(LocalstorageTypes.CART) as string)]
    : initialState;

  return localStorageData;
};

export const cartSlice = createSlice({
  name: "carts",
  initialState: initialStateCart(),
  reducers: {
    addCart: (state, action) => {
      const productStore = current(state).find(
        (product) => product._id === action.payload.product._id
      );

      return productStore === undefined
        ? [...current(state), { ...action.payload.product, inCart: 1 }]
        : current(state).map((product) =>
            product._id === action.payload.product._id
              ? { ...product, inCart: product.inCart + 1 }
              : { ...product, inCart: 1 }
          );
    },
    addToCart: (state, action) => {
      return state.map((product) =>
        product._id === action.payload._id
          ? { ...action.payload, inCart: action.payload.inCart + 1 }
          : product
      );
    },
    removeFromCart: (state, action) => {
      return state.map((product) =>
        product._id === action.payload._id
          ? { ...action.payload, inCart: Math.max(product.inCart - 1, 0) }
          : product
      );
    },
    deleteCart: (state, action) => {
      return current(state).filter((item) => item.id != action.payload);
    },
  },
});
export const { addCart, addToCart, removeFromCart, deleteCart } =
  cartSlice.actions;
export default cartSlice.reducer;
