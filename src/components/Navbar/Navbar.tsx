import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

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
            paddingTop: "15px",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {" "}
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  marginTop: "2%",
                  marginRight: "5px",
                  color: "black",
                }}
              >
                <MenuOutlinedIcon />
              </Box>
              <Link
                to={"/"}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Box>
                  <Typography fontWeight="bold" color="black">
                    Carrito de compras
                    <Typography
                      component="span"
                      color="primary"
                      sx={{ fontSize: "1.25rem", fontWeight: "700" }}
                    >
                      .
                    </Typography>
                  </Typography>
                </Box>
              </Link>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex", md: "flex" },
                  justifyContent: "column",
                }}
              >
                <Typography sx={{ padding: "5px", color: "black" }}>
                  Ofertas
                </Typography>
                <Typography sx={{ padding: "5px", color: "black" }}>
                  Celulares
                </Typography>
                <Typography sx={{ padding: "5px", color: "black" }}>
                  Servicio técnico
                </Typography>
                <Typography sx={{ padding: "5px", color: "black" }}>
                  Sigue tu compra
                </Typography>
                <Typography sx={{ padding: "5px", color: "black" }}>
                  Trade in
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "column" }}>
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
                  display: { xs: "none", sm: "flex" },
                  flexWrap: "wrap",
                  marginLeft: "10px",
                  color: "black",
                }}
              >
                <LocalShippingOutlinedIcon sx={{ fontSize: "30px" }} />
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexWrap: "wrap",
                  marginLeft: "10px",
                  color: "black",
                }}
              >
                <AccountCircleOutlinedIcon sx={{ fontSize: "30px" }} />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
