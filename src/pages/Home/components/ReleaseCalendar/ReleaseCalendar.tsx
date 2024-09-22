import { Box, Grid, Typography } from "@mui/material";
import { Title } from "../../../../components/Title/Title";
import styles from "../../../../styles/Layout.module.css";
import { useEffect, useState } from "react";
import { getUrl } from "../../../../services/getUrl";

export const ReleaseCalendar = () => {
  const [launchs, setLaunchs] = useState<any>();

  useEffect(() => {
    getUrl("/launch/all").then((response) => {
      setLaunchs(response);
    });
  }, []);

  return (
    <Grid item xs={9} md={9} textAlign="left" sx={{ marginTop: "60px" }}>
      <Box sx={{ marginTop: { xs: "60px", md: "0px" } }}>
        <Title contentTitle="Próximos Lanzamientos" />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          justifyContent: { xs: "left", md: "center" },
          alignItems: { xs: "left", md: "center" },
          marginBottom: "5%",
        }}
        className={styles.horizontal_scroll_container}
      >
        {launchs &&
          launchs.map((launch: any, key: any) => (
            <Box
              key={key}
              sx={{
                width: "auto",
                textAlign: "center",
                borderRadius: "20px",
                border: "1px solid #cbd5e0",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: "20px",
                  padding: "20px 30px 20px 30px",
                }}
              >
                <Typography>{launch.dateLaunch}</Typography>
              </Box>

              <Box
                component="img"
                src={launch.srcImage}
                sx={{
                  textAlign: "center",
                  borderRadius: "20px",
                  padding: "40px 30px 40px 30px",
                }}
              />
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: "20px",
                  padding: "20px 30px 20px 30px",
                }}
              >
                <Typography>{launch.name}</Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Grid>
  );
};
