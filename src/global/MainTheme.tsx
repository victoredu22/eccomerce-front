import { createTheme, Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: `#005BD2`,
    },
    secondary: {
      main: `#F5F5F5`,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h5: {
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: `none`,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
