import { CardMedia, Grid } from "@mui/material";

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
