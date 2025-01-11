"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

import styles from "./Header.styles";

export default function Header() {
  return (
    <Box sx={styles.root}>
      <Link href="/" style={styles.link}>
        <Typography variant="body1" sx={styles.labelLogo}>
          erick alvarez
        </Typography>
      </Link>
    </Box>
  );
}
