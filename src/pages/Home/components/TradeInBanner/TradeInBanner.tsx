import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const TradeInBanner = () => {
  return (
    <Grid
      item
      xs={12}
      md={7}
      textAlign="left"
      sx={{ marginTop: "50px", width: "200px" }}
    >
      <Box
        sx={{
          backgroundColor: "#F6F6F8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "60px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Imagen encima del texto */}
        <Box
          bgcolor="#F6F6F8"
          component="img"
          src="./assets/images/iphone-trade3.png"
          alt="My Icon"
          sx={{
            marginTop: "30px",
            width: { xs: "200px", md: "300px" },
            height: { xs: "140px", md: "300px" },
            textAlign: "center",
            borderRadius: "20px",
            marginBottom: "20px", // Añadido espacio entre imagen y texto
            order: { xs: "none", md: 2 },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            margin: "2% 5% 2% 5%",
            width: { xs: "90%", md: "50%" },
          }}
        >
          <Typography sx={{ fontSize: "25px", textAlign: "center" }}>
            <Typography
              component="span"
              sx={{ color: "#9D9D9F", fontSize: "25px" }}
            >
              Obten
            </Typography>{" "}
            $35.000 - $400.000{" "}
            <Typography
              component="span"
              sx={{ color: "#9D9D9F", fontSize: "25px" }}
            >
              al hacer Trade In con un
            </Typography>{" "}
            iPhone
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center" // Centramos el texto en columna
            marginTop={4}
          >
            {/* Encabezado */}
            <Box display="flex" bgcolor="#f2f2f2" width="100%">
              <Box flex={1} textAlign="left">
                <Typography sx={{ color: "#9D9D9F", fontSize: "15px" }}>
                  Tu Dispositivo
                </Typography>
              </Box>
              <Box flex={1} textAlign="right">
                <Typography sx={{ color: "#9D9D9F", fontSize: "15px" }}>
                  Valor aproximado
                </Typography>
              </Box>
            </Box>

            {/* Fila 1 */}
            <Box
              display="flex"
              borderBottom="1px solid #9D9D9F"
              sx={{ padding: "10px 0px 5px 0px" }}
              width="100%"
            >
              <Box flex={1} textAlign="left">
                Iphone 15
              </Box>
              <Box flex={1} textAlign="right">
                hasta $500.000
              </Box>
            </Box>

            {/* Fila 2 */}
            <Box
              display="flex"
              borderBottom="1px solid #9D9D9F"
              sx={{ padding: "10px 0px 5px 0px" }}
              width="100%"
            >
              <Box flex={1} textAlign="left">
                iphone 14
              </Box>
              <Box flex={1} textAlign="right">
                hasta $400.000
              </Box>
            </Box>

            {/* Fila 3 */}
            <Box
              display="flex"
              sx={{ padding: "10px 0px 10px 0px" }}
              width="100%"
            >
              <Box flex={1} textAlign="left">
                iphone 13
              </Box>
              <Box flex={1} textAlign="right">
                hasta $300.000
              </Box>
            </Box>
          </Box>

          <Link
            component={RouterLink}
            to="/about"
            underline="hover"
            color="primary"
            sx={{ textAlign: "center", display: "block" }}
          >
            Ver todos los valores iphone
          </Link>

          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "50%",
              borderRadius: "12px",
              marginTop: "30px",
              alignSelf: "center", // Centrar el botón
            }}
          >
            Calcular valor Trade In
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};
