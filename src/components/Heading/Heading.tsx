"use client";

import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import styles from "./Heading.styles";

const colors = ["#0a8df5", "#ff5733", "#5b33ff", "#33ffc1", "#ffe033"];

export default function Heading() {
  const [currentColor, setCurrentColor] = useState(colors[0]);

  function handleColorChange() {
    const restOfColors = colors.filter((color) => color !== currentColor);
    const randomColorIndex = Math.floor(Math.random() * restOfColors.length);

    setCurrentColor(restOfColors[randomColorIndex]);
  }

  return (
    <Stack sx={styles.root} direction="row" gap={2} alignItems="center">
      <Box component="div" onMouseEnter={handleColorChange}>
        <Typography variant="h1" color={currentColor} sx={styles.hiLabel}>
          Hi,
        </Typography>
      </Box>
      <Typography variant="h1" sx={styles.nameLabel}>
        I&apos;m Erick
      </Typography>
      <Typography component="span" sx={styles.laptopLabel}>
        💻
      </Typography>
    </Stack>
  );
}
