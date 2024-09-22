import { Box, Typography } from "@mui/material";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./Footer.module.css";

export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <>
      <Box className={styles.footer}>
        <Box className={styles.footer_section}>
          <Typography variant="h6" fontWeight="bold">
            Productos
          </Typography>
          <Typography>Tarjetas de credito</Typography>
          <Typography>Tarjetas de débito</Typography>
          <Typography>credito hipotecario</Typography>
        </Box>
        <Box className={styles.footer_section}>
          <Typography variant="h6" fontWeight="bold">
            Productos
          </Typography>
          <Typography>Tarjetas de credito</Typography>
          <Typography>Tarjetas de débito</Typography>
          <Typography>credito hipotecario</Typography>
        </Box>
        <Box className={styles.footer_section}>
          <Typography variant="h6" fontWeight="bold">
            Productos
          </Typography>
          <Typography>Tarjetas de credito</Typography>
          <Typography>Tarjetas de débito</Typography>
          <Typography>credito hipotecario</Typography>
        </Box>
        <Box className={styles.footer_section}>
          <Typography variant="h6" fontWeight="bold">
            Carrito Compras
          </Typography>
          <Typography>Avenida Paseo de torres 543</Typography>
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: { xs: "10px", md: "80px" },
          paddingRight: { xs: "10px", md: "80px" },
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography>
            2022. Carrito Compras. Todos los derechos reservados
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography>Termino y condicionesAviso de privacidad</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
