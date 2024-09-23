import { Box, Typography } from "@mui/material";
import { Title } from "../../../../components/Title/Title";
import styles from "../../../../styles/Layout.module.css";
import { useEffect, useState } from "react";
import { getUrl } from "../../../../services/getUrl";
import { formatDayMonthYear } from "../../../../utilities/formatDate";

export const ReleaseCalendar = () => {
  const [launchs, setLaunchs] = useState<any>();

  useEffect(() => {
    getUrl("/launch/all").then((response) => {
      setLaunchs(response);
    });
  }, []);

  return (
    <Box textAlign="left" sx={{ marginTop: "60px" }}>
      <Box
        sx={{
          marginTop: { xs: "60px", md: "0px" },
          marginLeft: { xs: "5%", md: "10%" },
        }}
      >
        <Title contentTitle="Próximos Lanzamientos" />
      </Box>

      <Box className={styles.horizontal_scroll_container}>
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
                <Typography>{formatDayMonthYear(launch.dateLaunch)}</Typography>
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
    </Box>
  );
};
