// src/components/Header.tsx
"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        p: 8,
        bgcolor: "background.paper",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "black",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          AuthApp
        </Typography>
      </Link>
    </Box>
  );
}
