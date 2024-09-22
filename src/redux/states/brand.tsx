import { createSlice, current } from "@reduxjs/toolkit";
import { Brand } from "../../interface/brand";
import { Product } from "../../interface/product";

const initialState: Brand[] = [
  {
    id: 0,
    title: "Apple",
    stock: 0,
    urlLogo: ".../../../assets/images/Apple-Logo.svg",
    alt: "iphone",
  },
  {
    id: 1,
    title: "Samsung",
    stock: 0,
    urlLogo: ".../../../assets/images/Samsung-Logo.svg",
    alt: "Samsung",
  },
  {
    id: 2,
    title: "huawei",
    stock: 0,
    urlLogo: ".../../../assets/images/Huawei-Logo.svg",
    alt: "hawei",
  },
  {
    id: 3,
    title: "oneplus",
    stock: 0,
    urlLogo: ".../../../assets/images/OnePlus-Logo.svg",
    alt: "oneplus",
  },
  {
    id: 4,
    title: "xiaomi",
    stock: 0,
    urlLogo: ".../../../assets/images/Xiaomi-Logo.svg",
    alt: "xiaomi",
  },
];

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    updateStockBrand: (state, action) => {
      return current(state).map((brand) => ({
        ...brand,
        stock: action.payload.filter((item: Product) => item.brand === brand.id)
          .length,
      }));
    },
  },
});

export const { updateStockBrand } = brandSlice.actions;
export default brandSlice.reducer;
