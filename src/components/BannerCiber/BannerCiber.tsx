import { CardMedia, Grid } from "@mui/material";
import styles from "./BannerCiber.module.css";

export const BannerCiber = () => {
  return (
    <Grid container justifyContent="center">
      <Grid>
        <CardMedia
          component="img"
          alt="haweiPortada"
          image="./assets/images/banner-ciber3.jpg"
        />
      </Grid>
    </Grid>
  );
};
