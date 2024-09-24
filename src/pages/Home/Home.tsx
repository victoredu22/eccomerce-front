import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, CardMedia } from "@mui/material";
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
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: { xs: "10vh", sm: "15vh", md: "1%" },
          }}
        >
          <Box>
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
                image="./assets/images/iphonebanner233.jpg"
                sx={{ padding: "0 0 1em 0" }}
              />
              <CardMedia
                component="img"
                alt="samsungPortada1"
                image="./assets/images/smasungs24banner2.jpg"
                sx={{ padding: "0 0 1em 0" }}
              />
              <CardMedia
                component="img"
                alt="samsungPortada1"
                image="./assets/images/oneplusbanner2.jpg"
                sx={{ padding: "0 0 1em 0" }}
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
