import { CSSProperties } from "react";
import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme> & CSSProperties> = {
  root: {
    my: 2,
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  labelLogo: (theme: Theme) => ({
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6rem",
    },
  }),
} as const;

export default styles;
