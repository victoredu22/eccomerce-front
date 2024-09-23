import React from "react";

import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { AppStore } from "../../redux/store";
import { Layout } from "../../components/Layout";
import DetailsItem from "./components/DetailItem/DetailItem";
import Review from "./components/Review/Review";
export interface BasketInterface {}

const Basket: React.FC<BasketInterface> = () => {
  const stateCart = useSelector((store: AppStore) => store.cart);
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          width: "99vw",
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
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Align content to the right
            margin: { xs: "20px", md: "0px" },
            paddingLeft: { xs: "0px", md: "20px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "80%" },
            }}
          >
            <Review cart={stateCart} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Basket;
