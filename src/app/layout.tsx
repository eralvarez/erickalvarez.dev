import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { theme } from "constants/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi I'm Erick Alvarez",
  description: "I'm a software engineer from Ensenada B.C. Mexico",
  keywords: [
    "software engineer",
    "software engineer contract",
    "software developer contract",
    "software engineer in Ensenada Baja California Mexico",
    "bilingual software engineer",
    "bilingual software developer",
    "e-commerce development",
    "freelance software engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Box component="body" className={`${inter.variable}`} sx={{ backgroundColor: "#f4f4f4" }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Box>
    </html>
  );
}
