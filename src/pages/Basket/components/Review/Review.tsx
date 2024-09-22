import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeIcon from "@mui/icons-material/Home";
import DiscountIcon from "@mui/icons-material/Discount";
import { Product } from "../../../../interface/product";
import { formatNumberWithCommas } from "../../../../utilities/formatNumberWithCommas";

export interface ReviewInterface {
  cart: Product[];
}

const Review: React.FC<ReviewInterface> = ({ cart }) => {
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    setPrice(
      cart
        .map((item) => Number(item.price) * item.inCart)
        .reduce((a, b) => a + b, 0)
    );
  }, [cart]);

  return (
    <>
      <Box
        sx={{
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "15px",
          width: "70%",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Datos Envio
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "20px 0px 0px 5px" }}
        >
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <LocalShippingIcon
              sx={{ color: "#464646", marginRight: "8px", marginTop: "0" }}
            />
            Envío Estándar
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "20px 0px 10px 5px" }}
        >
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <HomeIcon
              sx={{ color: "#464646", marginRight: "8px", marginTop: "0" }}
            />
            Simon bolivar 3127
          </Typography>
          <Typography>Editar</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "10px 0px 20px 5px" }}
        >
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <DiscountIcon
              sx={{ color: "#464646", marginRight: "8px", marginTop: "0" }}
            />
            Codigo Descuento
          </Typography>
          <Typography>Aplicar</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "2%",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "15px",
          width: "70%",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Resumen Total
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          padding={1}
          sx={{ borderBottom: "1px dotted #92979f", marginTop: "40px" }}
        >
          <Box>Subtotal: </Box>
          <Box display="flex">
            <Typography>{formatNumberWithCommas(price)}</Typography>{" "}
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          padding={1}
          sx={{
            borderBottom: "1px dotted #92979f",
          }}
        >
          <Box>Envio: </Box>
          <Box display="flex">
            <Typography component="span">$</Typography>
            <Typography>0</Typography>{" "}
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" padding={1}>
          <Typography>Total</Typography>
          <Typography>{formatNumberWithCommas(price)}</Typography>
        </Box>
        Incluye tarifa de verificación. Precio final calculado al finalizar la
        compra
      </Box>
    </>
  );
};

export default Review;
