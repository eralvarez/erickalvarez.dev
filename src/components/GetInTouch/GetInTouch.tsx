import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";

import styles from "./GetInTouch.styles";

export default function GetInTouch() {
  return (
    <Stack id="getInTouch" component="section" sx={styles.root} gap={1}>
      <Typography variant="h2" sx={styles.title}>
        Want to get in touch?
      </Typography>
      <Typography sx={styles.paragraph}>I&apos;m always available for exciting projects!</Typography>
      <Link href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} style={styles.link}>
        <Stack direction="row" gap={1} alignItems="center">
          <EmailIcon />
          <Typography component="span" sx={styles.emailLabel}>
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
          </Typography>
        </Stack>
      </Link>
    </Stack>
  );
}
