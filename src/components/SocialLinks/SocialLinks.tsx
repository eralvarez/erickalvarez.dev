import { Stack, IconButton } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialLinks() {
  return (
    <Stack id="socialLinks" component="section" direction="row">
      <Link href="https://www.linkedin.com/in/erick-alvarez-80a068122/" target="_blank">
        <IconButton aria-label="link button for linkedin" size="large" color="primary">
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Link>
      <Link href="https://github.com/eralvarez" target="_blank">
        <IconButton aria-label="link button for github" size="large" sx={{ color: "#4e4e4e" }}>
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Link>
      <Link href="https://x.com/ErickPrimeHere" target="_blank">
        <IconButton aria-label="link button for X/Twitter" size="large" sx={{ color: "black" }}>
          <XIcon fontSize="large" />
        </IconButton>
      </Link>
    </Stack>
  );
}
