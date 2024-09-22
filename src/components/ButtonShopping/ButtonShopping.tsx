import React, { useEffect } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../interface/product";
import { AppStore } from "../../redux/store";
import { LocalstorageTypes } from "../../models/localstorage";
import { setLocalStorage } from "../../utilities";
import { addCart } from "../../redux/states/cart";

export interface ButtonShoppingInterface {
  product: Product;
}

const ButtonShopping: React.FC<ButtonShoppingInterface> = (product) => {
  const dispatch = useDispatch();
  const stateCart = useSelector((store: AppStore) => store.cart);

  useEffect(() => {
    setLocalStorage(LocalstorageTypes.CART, stateCart);
  }, [stateCart]);

  const handleAddCart = () => {
    dispatch(addCart(product));
  };

  return (
    <Button
      aria-label="button-handle-buy"
      onClick={handleAddCart}
      variant="outlined"
      sx={{ color: "#6c757d" }}
    >
      <ShoppingCartIcon color="primary" />
      Comprar
    </Button>
  );
};

export default ButtonShopping;
