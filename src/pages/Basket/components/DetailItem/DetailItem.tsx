import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button, CardMedia, Typography } from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";
import { Product } from "../../../../interface/product";
import { AppStore } from "../../../../redux/store";
import { addToCart, removeFromCart } from "../../../../redux/states/cart";

import { setLocalStorage } from "../../../../utilities";
import { formatNumberWithCommas } from "../../../../utilities/formatNumberWithCommas";
import { LocalstorageTypes } from "../../../../models/localstorage";

export interface DetailsItemInterface {
  product: Product;
}

const DetailsItem: React.FC<DetailsItemInterface> = ({ product }) => {
  const dispatch = useDispatch();
  const stateCart = useSelector((store: AppStore) => store.cart);

  useEffect(() => {
    setLocalStorage(LocalstorageTypes.CART, stateCart);
  }, [stateCart]);

  const handleStock = (type: string, product: Product) => {
    if (type === "remove") dispatch(removeFromCart(product));
    if (type === "add") dispatch(addToCart(product));
  };

  return (
    <>
      {product.inCart > 0 && (
        <Box
          sx={{
            display: "flex",
            paddingBottom: "10px",
            backgroundColor: "white",
            alignItems: "right",
            justifyContent: "flex-start", // Center horizontally
            width: { xs: "100%", md: "60%" },
          }}
        >
          <Box
            sx={{
              padding: "17px",
            }}
          >
            <CardMedia
              component="img"
              alt={product.srcImage}
              image={product.srcImage}
              sx={{ paddingTop: { xs: "0px", md: "20px" } }}
            />
          </Box>

          <Box sx={{ padding: "20px", width: "50%" }}>
            <Typography sx={{ padding: "5px", fontSize: "1.25rem" }}>
              {product.title}
            </Typography>
            <Typography sx={{ padding: "5px", fontSize: "1rem" }}>
              {product.description}
            </Typography>
            <Typography sx={{ padding: "5px", fontSize: "1rem" }}>
              <Typography component="span">
                {formatNumberWithCommas(product.price)}
              </Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "5px",
              }}
            >
              <LocalShippingIcon sx={{ marginRight: "5px" }} />
              <Typography
                sx={{
                  fontSize: "1rem",
                  textAlign: "2px",
                }}
              >
                Envio gratis.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button
              aria-label="button-handle-subtract"
              variant="text"
              onClick={() => {
                handleStock("remove", product);
              }}
            >
              <MinimizeIcon
                sx={{
                  fontSize: "25px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
              />
            </Button>
            <Typography>{product.inCart}</Typography>
            <Button
              aria-label="button-handle-add"
              variant="text"
              onClick={() => {
                handleStock("add", product);
              }}
            >
              <AddIcon
                sx={{
                  fontSize: "25px",
                  marginBottom: "0px",
                  cursor: "pointer",
                }}
              />
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DetailsItem;
