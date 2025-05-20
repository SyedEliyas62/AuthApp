"use client";

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
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "@/firebase/config";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent hydration errors

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

const handleEmailSignUp = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }

    router.push("/dashboard");
  } catch (error) {
    console.error("Email Sign-Up Error:", error);
    alert("Sign up failed. Please try again.");
  }
};


  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        <Typography variant="h5" fontWeight={600} mb={1}>
          Create an Account
        </Typography>

        <Typography variant="body2" mb={3}>
          Already have an account?{" "}
          <Link href="/login" underline="hover">
            Log in here
          </Link>
        </Typography>

        <TextField
          fullWidth
          label="Full Name"
          placeholder="Enter your full name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />

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
          type="password"
          placeholder="Create a password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
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
          onClick={handleEmailSignUp}
        >
          Sign Up
        </Button>

        <Divider sx={{ my: 2 }}>OR</Divider>

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
          By signing up, you agree to our{" "}
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
