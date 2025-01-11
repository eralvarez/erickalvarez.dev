import { Stack, Typography } from "@mui/material";

import styles from "./GeneralInfo.styles";

const projects = [
  "E-commerce websites",
  "Internal administrative dashboards",
  "Migrations from legacy to newer tech stacks",
  "Component library",
];

export default function GeneralInfo() {
  return (
    <Stack id="generalInfo" component="section">
      <Typography component="p" sx={styles.text}>
        I&apos;m a software engineer from Ensenada B.C. Mexico 🌴 🏖️
      </Typography>
      <Typography component="p" sx={styles.text}>
        A quick learner, advocate for best practices, problem solver, team player and proud father of a beautiful girl.
      </Typography>
      <Typography component="p" sx={styles.text}>
        My main focus is web development with React, NextJs, NodeJS and Prisma.
      </Typography>
      <Typography component="p" sx={styles.text} mt={2}>
        Here is a list of projects I&apos;ve been involved over the last 8 years:
      </Typography>
      <ul>
        {projects.map((project) => (
          <li key={project}>
            <Typography component="span" sx={styles.project}>
              {project}
            </Typography>
          </li>
        ))}
      </ul>
    </Stack>
  );
}
