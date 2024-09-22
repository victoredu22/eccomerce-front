import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import styles from "./ProductDetail.module.css";
import { Product } from "../../../../interface/product";
import { formatNumberWithCommas } from "../../../../utilities/formatNumberWithCommas";
import ButtonShopping from "../../../../components/ButtonShopping/ButtonShopping";

export interface OfferDayInterface {
  type: string;
  product: Product;
}

const ProductDetail: React.FC<OfferDayInterface> = ({ product }) => {
  return (
    <Box className={styles.detail_shiping}>
      <Box>
        {product.srcImage != undefined && (
          <CardMedia
            component="img"
            className={styles.detail_image}
            image={product.srcImage}
          />
        )}
      </Box>
      <Typography className={styles.detail__shipping_text}>
        {product.title}
        <Typography component="span" color="primary">
          .
        </Typography>
      </Typography>
      <Box className={styles.detail__shipping_text}>
        {" "}
        <Typography component="span" color="primary" fontWeight="bold">
          {formatNumberWithCommas(product.price)}
        </Typography>{" "}
        <Typography>{product.description}</Typography>
      </Box>

      <Box className={styles.detail__shipping_container}>
        <LocalShippingIcon />
        <Typography className={styles.detail__shipping_text}>
          Envio gratis
        </Typography>
      </Box>

      <ButtonShopping product={product} />
    </Box>
  );
};

export default ProductDetail;
