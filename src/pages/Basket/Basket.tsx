import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { AppStore } from "../../redux/store";
import { Layout } from "../../components/Layout";
import DetailsItem from "./components/DetailItem/DetailItem";
import Review from "./components/Review/Review";
export interface BasketInterface {}

const Basket: React.FC<BasketInterface> = () => {
  const stateCart = useSelector((store: AppStore) => store.cart);
  return (
    <Layout>
      {stateCart.length === 0 ? (
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "column", // Para alinear el contenido verticalmente
            alignItems: "center",
            justifyContent: "center",
            height: "100vh", // Asegura que ocupe toda la altura de la pantalla
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center", // Alinea el contenido verticalmente dentro de este Box
              justifyContent: "center", // Centra el contenido horizontalmente
              marginBottom: "20px", // Espacio entre el mensaje y el botón
            }}
          >
            <ShoppingCartIcon sx={{ marginRight: "8px" }} />
            <Typography variant="h5">
              No tienes compras en tu carrito.
            </Typography>
          </Box>
          <Button
            aria-label="home-redirect"
            variant="contained"
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center" }} // Para centrar el icono dentro del botón
          >
            <AddIcon sx={{ marginRight: "8px" }} />
            Agregar nuevos productos
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            width: "100vw",
            height: "auto", // Full screen height
            justifyContent: "center", // Centers the two columns horizontally
            backgroundColor: "#F4F3F1",
            paddingTop: { xs: "20%", md: "7%" },
            flexDirection: { xs: "column", md: "row" },
            paddingBottom: "5%",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end", // Align content to the right
              margin: { xs: "20px", md: "0px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "white",
                alignItems: "right",
                justifyContent: "left", // Center horizontally
                marginBottom: "10px",
                width: { xs: "100%", md: "60%" },
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  margin: "20px 20px 20px 20px",
                }}
              >
                Tu Carro
              </Typography>
            </Box>
            {stateCart != undefined &&
              stateCart.map((item, key) => (
                <DetailsItem product={item} key={key} />
              ))}
          </Box>

          {/* Right Column */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#F4F3F1",
              display: "flex",
              flexDirection: "column", // Ensures content flows from top to bottom
              marginLeft: "20px",
            }}
          >
            <Review cart={stateCart} />
          </Box>
        </Box>
      )}
    </Layout>
  );
};

export default Basket;
