import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Box, Typography } from "@mui/material";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={` ${geistMono.variable}`}>
      <body>
        <Box
          sx={{
            p: 4,
            boxShadow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
           
          }}
        >
          <Link href="/">
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "black",
                cursor: "pointer",
               
              }}
            >
              AuthApp😉
            </Typography>
          </Link>
          <Typography sx={{cursor:"pointer"}}>Welcome to AuthApp</Typography>
        </Box>
        <main>{children}</main>
      </body>
    </html>
  );
}
