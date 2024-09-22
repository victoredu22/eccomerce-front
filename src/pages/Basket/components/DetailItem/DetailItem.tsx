import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button, CardMedia, Typography } from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";
import { Product } from "../../../../interface/product";
import { AppStore } from "../../../../redux/store";
import { deleteCart, updateStock } from "../../../../redux/states/cart";

import { getLocalStorage, setLocalStorage } from "../../../../utilities";
import { formatNumberWithCommas } from "../../../../utilities/formatNumberWithCommas";
import { LocalstorageTypes } from "../../../../models/localstorage";

export interface DetailsItemInterface {
  product: Product;
}

const DetailsItem: React.FC<DetailsItemInterface> = ({ product }) => {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState<number>(product.inCart);
  const stateCart = useSelector((store: AppStore) => store.cart);

  const handleStock = (type: string, product: Product) => {
    const stockIncart =
      type === "subtract" ? product.inCart - 1 : product.inCart + 1;
    setInCart(stockIncart);

    dispatch(updateStock({ type, id: product.id }));

    if (stockIncart > 0) {
      const dataLocal = stateCart.map((item: Product) =>
        item.id === product.id ? { ...item, inCart: stockIncart } : { ...item }
      );

      setLocalStorage(LocalstorageTypes.CART, dataLocal);
      return;
    }

    const itemsLocal = getLocalStorage(LocalstorageTypes.CART)
      ? JSON.parse(getLocalStorage(LocalstorageTypes.CART) as "String")
      : [];

    const dataLocal = itemsLocal.filter(
      (item: Product) => item.id != product.id
    );

    setLocalStorage(LocalstorageTypes.CART, dataLocal);
    dispatch(deleteCart(product.id));
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
            justifyContent: "right", // Center horizontally
            width: { xs: "100%", md: "60%" },
          }}
        >
          <Box
            sx={{
              flex: "0 1 auto",
              padding: "17px",
            }}
          >
            <CardMedia
              component="img"
              alt={product.srcImage}
              image={product.srcImage}
              sx={{ padding: { xs: "0px", md: "1em 1em 0 1em" } }}
            />
          </Box>

          <Box sx={{ display: { xs: "block", md: "flex" }, padding: "20px" }}>
            <Box
              sx={{
                flex: 2,
              }}
            >
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
                flex: 2,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                marginLeft: { xs: "0px", md: "40px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Button
                  aria-label="button-handle-subtract"
                  variant="text"
                  onClick={() => {
                    handleStock("subtract", product);
                  }}
                >
                  {" "}
                  <MinimizeIcon
                    sx={{
                      fontSize: "25px",
                      marginBottom: "15px",
                      cursor: "pointer",
                    }}
                  />
                </Button>
                <Typography sx={{ marginLeft: "10px", marginRight: "10px" }}>
                  {product.inCart}
                </Typography>
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
          </Box>
        </Box>
      )}
    </>
  );
};

export default DetailsItem;
