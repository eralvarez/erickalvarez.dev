import { Stack, Container } from "@mui/material";

import { Header, Heading, GeneralInfo, SocialLinks, GetInTouch } from "components";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Stack>
        <Header />
        <Heading />

        <GeneralInfo />
        <SocialLinks />
        <GetInTouch />
      </Stack>
    </Container>
  );
}
