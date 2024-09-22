import { useSelector } from "react-redux";
import { Title } from "../../../../components/Title/Title";
import { Box } from "@mui/material";

import { AppStore } from "../../../../redux/store";
import { Brand } from "../../../../interface/brand";

export const BrandBanner = () => {
  const brandsBanner: Brand[] = useSelector((store: AppStore) => store.brand);

  return (
    <Box
      sx={{
        marginTop: "120px",
        textAlign: "left",
      }}
    >
      <Box
        sx={{
          marginTop: { xs: "60px", md: "0px" },
          marginLeft: { xs: "5%", md: "10%" },
        }}
      >
        <Title contentTitle="Nuestras Marcas" />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap" // Permite que los elementos se envuelvan en pantallas más pequeñas
      >
        {brandsBanner &&
          brandsBanner.map((brandBanner, index) => (
            <Box
              key={index}
              bgcolor="#F6F6F8"
              component="img"
              src={brandBanner.urlLogo}
              alt={brandBanner.alt}
              sx={{
                width: "234px", // Mantén el tamaño deseado
                height: "160px",
                textAlign: "center",
                borderRadius: "20px",
                margin: "10px", // Añade margen entre las imágenes
              }}
            />
          ))}
      </Box>
    </Box>
  );
};
