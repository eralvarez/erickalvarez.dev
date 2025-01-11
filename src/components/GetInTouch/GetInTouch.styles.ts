import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

const styles: Record<string, SxProps<Theme> & CSSProperties> = {
  root: {
    my: 2,
  },
  title: {
    fontWeight: "700",
    fontSize: "2.125rem",
  },
  paragraph: {
    fontWeight: 500,
    fontSize: "1.25rem",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  emailLabel: {
    fontWeight: 500,
    fontSize: "1.1rem",
    textDecoration: "none",
    color: "inherit",
  },
} as const;

export default styles;
