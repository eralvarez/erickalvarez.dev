import { CSSProperties } from "react";
import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme> & CSSProperties> = {
  root: (theme: Theme) => ({
    my: 2,
    display: "flex",
    [theme.breakpoints.down("md")]: {
      my: 1,
    },
  }),
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  hiLabel: (theme: Theme) => ({
    fontWeight: "700",
    transition: "all 600ms ease",
    fontSize: "3.4rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  }),
  nameLabel: (theme: Theme) => ({
    fontWeight: "700",
    fontSize: "3.4rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
  }),
  laptopLabel: (theme: Theme) => ({
    fontSize: "2.25rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  }),
} as const;

export default styles;
