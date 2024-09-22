import React from "react";

import styles from "../../styles/Layout.module.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../global/MainTheme";
import { Box } from "@mui/material";

export interface LayoutInterface {
  children: React.ReactNode | null;
  route?: string;
  title?: string;
}

const Layout: React.FC<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className={styles.app_wrapper}>{children}</Box>
      </ThemeProvider>
    </>
  );
};

export default Layout;
