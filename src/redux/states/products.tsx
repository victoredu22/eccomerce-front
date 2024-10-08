import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interface/product";

const initialState: Product[] = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (_, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
