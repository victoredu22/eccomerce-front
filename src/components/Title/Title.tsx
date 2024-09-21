import { Typography } from "@mui/material";
import styles from "./Title.module.css";

interface TitleProps {
  contentTitle: string;
}

export const Title: React.FC<TitleProps> = ({ contentTitle }) => {
  return (
    <Typography className={styles.title}>
      {contentTitle}
      <Typography component="span" className={styles.point}>
        .
      </Typography>
    </Typography>
  );
};
