import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { updateStockBrand } from "@/redux/states/brand";
import { Box, Grid, CardMedia } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Layout } from "@/components/Layout";

import styles from "../../styles/Layout.module.css";
import { Title } from "../../components/Title/Title";
import { BrandBanner } from "./components/BrandBanner/BrandBanner";
import { TradeInBanner } from "./components/TradeInBanner/TradeInBanner";
import { ReleaseCalendar } from "./components/ReleaseCalendar/ReleaseCalendar";
import { setProducts } from "@/redux/states/products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { getUrl } from "@/services/getUrl";

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
      <Grid container className={styles.main_container} justifyContent="center">
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#F4F3F1",
            marginTop: "90px",
            height: "auto",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid
            container
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item sx={{ padding: "10px" }}>
              Ofertas
            </Grid>
            <Grid item sx={{ padding: "10px" }}>
              Celulares
            </Grid>
            <Grid item sx={{ padding: "10px" }}>
              Servicio tecnico
            </Grid>
            <Grid item sx={{ padding: "10px" }}>
              Sigue tu compra
            </Grid>
            <Grid item sx={{ padding: "10px" }}>
              Trade in
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={9} textAlign="left">
          <Box className={styles.carousel}>
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
        </Grid>

        <Grid item xs={10} md={9} textAlign="left" sx={{ marginTop: "60px" }}>
          <Box sx={{ marginTop: { xs: "60px", md: "0px" } }}>
            <Title contentTitle="Ofertas de hoy" />
          </Box>
          <Grid>
            <Box
              className={styles.horizontal_scroll_container}
              marginTop={1}
              sx={{
                justifyContent: { xs: "left", md: "center" },
                alignItems: { xs: "left", md: "center" },
              }}
            >
              {stateProduct != undefined &&
                stateProduct.map((product, key) => (
                  <ProductDetail
                    key={key}
                    type="discountList"
                    product={product}
                  />
                ))}
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={10} md={9} textAlign="left" sx={{ marginTop: "60px" }}>
          <Box sx={{ marginTop: { xs: "60px", md: "0px" } }}>
            <Title contentTitle="Mejores precios" />
          </Box>
          <Grid>
            <Box
              className={styles.horizontal_scroll_container}
              marginTop={1}
              sx={{
                justifyContent: { xs: "left", md: "center" },
                alignItems: { xs: "left", md: "center" },
              }}
            >
              {stateProduct != undefined &&
                stateProduct.map((product, key) => (
                  <ProductDetail
                    key={key}
                    type="discountList"
                    product={product}
                  />
                ))}
            </Box>
          </Grid>
        </Grid>

        <TradeInBanner />
        <BrandBanner />
        <ReleaseCalendar />
      </Grid>
    </Layout>
  );
};

export default Home;
