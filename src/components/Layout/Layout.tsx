import React from "react";

import { Grid } from "@mui/material";

import styles from "../../styles/Layout.module.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../global/MainTheme";

export interface LayoutInterface {
  children: React.ReactNode | null;
  route?: string;
  title?: string;
}

const Layout: React.FC<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid className={styles.app_wrapper}>{children}</Grid>
      </ThemeProvider>
    </>
  );
};

export default Layout;
