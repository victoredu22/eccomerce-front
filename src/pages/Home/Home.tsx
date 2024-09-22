import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Grid, CardMedia, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/Layout.module.css";
import { Title } from "../../components/Title/Title";
import { BrandBanner } from "./components/BrandBanner/BrandBanner";
import { TradeInBanner } from "./components/TradeInBanner/TradeInBanner";
import { ReleaseCalendar } from "./components/ReleaseCalendar/ReleaseCalendar";

import ProductDetail from "./components/ProductDetail/ProductDetail";
import { AppStore } from "../../redux/store";
import { getUrl } from "../../services/getUrl";
import { setProducts } from "../../redux/states/products";
import { Layout } from "../../components/Layout";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();
  const stateProduct = useSelector((store: AppStore) => store.product);

  useEffect(() => {
    getUrl("/products/all").then((response) => {
      dispatch(setProducts(response));
    });
  }, []);

  return (
    <Layout>
      <Box className={styles.main_container} justifyContent="center">
        <Box
          sx={{
            backgroundColor: "#F4F3F1",
            marginTop: "90px",
            height: "auto",
            display: "flex",
            justifyContent: "center", // Centra el contenido
            alignItems: "center",
            width: "100%",
            padding: "10px 0", // Espaciado vertical
          }}
        >
          <Box
            sx={{
              display: "flex", // Flexbox para los elementos internos
              justifyContent: "center", // Centra los elementos
              alignItems: "center",
            }}
          >
            <Typography sx={{ padding: "10px" }}>Ofertas</Typography>
            <Typography sx={{ padding: "10px" }}>Celulares</Typography>
            <Typography sx={{ padding: "10px" }}>Servicio técnico</Typography>
            <Typography sx={{ padding: "10px" }}>Sigue tu compra</Typography>
            <Typography sx={{ padding: "10px" }}>Trade in</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box className={styles.carousel_container}>
            <Carousel
              showArrows={false}
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
            >
              <CardMedia
                component="img"
                alt="haweiPortada"
                image="./assets/images/banner-iphone2.jpg"
                sx={{ padding: "1em 1em 0 1em" }}
              />
              <CardMedia
                component="img"
                alt="samsungPortada1"
                image="./assets/images/samsung-banner.jpg"
                sx={{ padding: "1em 1em 0 1em" }}
              />
              <CardMedia
                component="img"
                alt="samsungPortada2"
                image="./assets/images/banner-oneplus.jpg"
                sx={{ padding: "1em 1em 0 1em" }}
              />
            </Carousel>
          </Box>
        </Box>

        <Box className={styles.product_detail}>
          <Box
            sx={{
              marginTop: { xs: "60px", md: "0px" },
              marginLeft: { xs: "5%", md: "10%" },
            }}
          >
            <Title contentTitle="Ofertas de hoy" />
          </Box>

          <Box className={styles.horizontal_scroll_container}>
            {stateProduct !== undefined &&
              stateProduct.map((product, key) => (
                <ProductDetail
                  key={key}
                  type="discountList"
                  product={product}
                />
              ))}
          </Box>
        </Box>

        <Box className={styles.product_detail}>
          <Box
            sx={{
              marginTop: { xs: "60px", md: "0px" },
              marginLeft: { xs: "5%", md: "10%" },
            }}
          >
            <Title contentTitle="Mejores precios" />
          </Box>

          <Box className={styles.horizontal_scroll_container}>
            {stateProduct !== undefined &&
              stateProduct.map((product, key) => (
                <ProductDetail
                  key={key}
                  type="discountList"
                  product={product}
                />
              ))}
          </Box>
        </Box>

        <TradeInBanner />
        <BrandBanner />
        <ReleaseCalendar />
      </Box>
    </Layout>
  );
};

export default Home;
