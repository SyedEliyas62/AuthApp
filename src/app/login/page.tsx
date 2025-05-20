"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "@/firebase/config";

export default function LoginPage() {
  const [isMounted, setIsMounted] = useState(false); // prevents hydration error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      console.error("Email login error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" fontWeight={600} color="black" mb={1}>
          Login
        </Typography>

        <Typography variant="body1" color="black" mb={3}>
          Welcome back! Don&apos;t have an account?{" "}
          <Link href="/" underline="hover">
            Sign up here
          </Link>
        </Typography>

        <TextField
          fullWidth
          label="Email address"
          placeholder="Enter your email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
          type="email"
        />

        <TextField
          fullWidth
          label="Password"
          placeholder="Enter your password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
          type="password"
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #6f41ff 0%, #a967ff 100%)",
            color: "#fff",
            fontWeight: 600,
            mb: 2,
            textTransform: "none",
          }}
          onClick={handleEmailLogin}
        >
          Login with Email
        </Button>

        <Divider color="black" sx={{ my: 2 }}>
          OR
        </Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<FcGoogle />}
          onClick={handleGoogleSignIn}
          sx={{ textTransform: "none" }}
        >
          Continue with Google
        </Button>

        <Typography
          variant="caption"
          display="block"
          mt={4}
          textAlign="center"
          color="text.secondary"
        >
          By logging in you agree to Realize&apos;s{" "}
          <Link href="#" underline="hover">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" underline="hover">
            Terms of Service
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
