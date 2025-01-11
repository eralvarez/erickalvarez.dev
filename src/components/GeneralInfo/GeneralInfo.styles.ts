import { CSSProperties } from "react";
import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme> & CSSProperties> = {
  text: {
    fontWeight: 500,
    fontSize: "1.25rem",
  },
  project: {
    fontWeight: 500,
    fontSize: "1.1rem",
  },
} as const;

export default styles;
