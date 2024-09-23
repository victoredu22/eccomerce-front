import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "../../redux/store";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [cartLength, setCartLength] = useState<number>(0);

  const stateCart = useSelector((store: AppStore) => store.cart);

  useEffect(() => {
    setCartLength(stateCart.filter((cart) => cart.inCart > 0 && cart).length);
  }, [stateCart]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          style={{
            boxShadow: "unset",
            background: "white",
            padding: "15px",
          }}
        >
          <Toolbar>
            <Link
              to={"/"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex", // Flexbox para los elementos internos
                  justifyContent: "center", // Centra los elementos
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" fontWeight="bold" color="black">
                  Carrito de compras
                  <Typography
                    component="span"
                    color="primary"
                    sx={{ fontSize: "1.25rem", fontWeight: "700" }}
                  >
                    .
                  </Typography>
                </Typography>
                <Box sx={{ display: "none" }}>
                  <Typography sx={{ padding: "10px", color: "black" }}>
                    Ofertas
                  </Typography>
                  <Typography sx={{ padding: "10px", color: "black" }}>
                    Celulares
                  </Typography>
                  <Typography sx={{ padding: "10px", color: "black" }}>
                    Servicio técnico
                  </Typography>
                  <Typography sx={{ padding: "10px", color: "black" }}>
                    Sigue tu compra
                  </Typography>
                  <Typography sx={{ padding: "10px", color: "black" }}>
                    Trade in
                  </Typography>
                </Box>
              </Box>
            </Link>
            <Box sx={{ flexGrow: 1 }} />

            <Box
              sx={{
                display: "flex",

                flexWrap: "wrap",
                marginLeft: "10px",
                color: "black",
              }}
            >
              <SearchOutlinedIcon sx={{ fontSize: "30px" }} />
            </Box>

            <Link
              to={"/compras"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Box
                data-testid={`navbar-cart`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginLeft: "10px",
                  color: "black",
                }}
              >
                <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />(
                <Typography component="span">{cartLength}</Typography>)
              </Box>
            </Link>

            <Box
              sx={{
                display: "flex",

                flexWrap: "wrap",
                marginLeft: "10px",
                color: "black",
              }}
            >
              <LocalShippingOutlinedIcon sx={{ fontSize: "30px" }} />
            </Box>

            <Box
              sx={{
                display: "flex",

                flexWrap: "wrap",
                marginLeft: "10px",
                color: "black",
              }}
            >
              <AccountCircleOutlinedIcon sx={{ fontSize: "30px" }} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
