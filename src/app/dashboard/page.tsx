"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/config";
import {
  Container,
  Typography,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // 🔒 Prevent server-side render

  const router = useRouter();

  useEffect(() => {
    // ✅ Mark that we're on client
    setIsClient(true);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.replace("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // ❌ Do NOT render until we know we're on the client
  if (!isClient || loading) {
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 10 }}>
      <Box
        sx={{
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" mb={2}>
          Welcome to Your details
        </Typography>
        <Typography variant="body1" mb={1}>
          Name: <strong>{user?.displayName || "No Name Set"}</strong>
        </Typography>
        <Typography variant="body1" mb={4}>
          Email: <strong>{user?.email}</strong>
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
          sx={{ textTransform: "none" }}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
}
