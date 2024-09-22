import { useSelector } from "react-redux";
import { Title } from "../../../../components/Title/Title";
import { Box, Grid } from "@mui/material";

import { AppStore } from "../../../../redux/store";
import { Brand } from "../../../../interface/brand";

export const BrandBanner = () => {
  const brandsBanner: Brand[] = useSelector((store: AppStore) => store.brand);

  return (
    <Grid item xs={9} textAlign="left" sx={{ marginTop: "120px" }}>
      <Box sx={{ marginTop: { xs: "60px", md: "0px" } }}>
        <Title contentTitle="Nuestras Marcas" />
      </Box>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={6}
        marginTop={1}
      >
        {brandsBanner &&
          brandsBanner.map((brandBanner, index) => (
            <Grid item key={index}>
              <Box
                bgcolor="#F6F6F8"
                component="img"
                src={brandBanner.urlLogo}
                alt={brandBanner.alt}
                sx={{
                  width: 234,
                  height: 160,
                  textAlign: "center",
                  borderRadius: "20px",
                }}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
