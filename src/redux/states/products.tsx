import { Product } from "@/interface/product";
import { ProductList } from "../../models/productList";
import { createSlice, current } from "@reduxjs/toolkit";
import React from "react";

const initialState: Product[] = [];

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
