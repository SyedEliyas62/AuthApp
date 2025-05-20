// components/AuthForm.tsx
'use client';

import { signInWithGoogle } from '@/utils/auth';
import { Button, TextField, Typography, Divider, Box } from '@mui/material';

import { useState } from 'react';

export default function AuthForm() {
  const [email, setEmail] = useState('');

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth={400}
      margin="auto"
      mt={10}
      px={4}
      py={6}
      boxShadow={3}
      borderRadius={2}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Sign up
      </Typography>
      <Typography variant="body2" textAlign="center" mb={3}>
        Create an account and verify your details. Already have an account?{' '}
        <a href="/login">Log in here</a>
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Email address"
        placeholder="Provide your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{
          mb: 2,
          background:
            'linear-gradient(to right, #7F00FF, #E100FF)',
          color: '#fff',
        }}
      >
        Sign Up
      </Button>

      <Divider sx={{ width: '100%', mb: 2 }}>OR</Divider>

      <Button
        onClick={signInWithGoogle}
        variant="outlined"
        fullWidth
        sx={{ textTransform: 'none' }}
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          width={20}
          style={{ marginRight: 10 }}
        />
        Continue with Google
      </Button>

      <Typography variant="caption" mt={3} textAlign="center">
        By signing up you agree to our{' '}
        <a href="#">Privacy Policy</a> and{' '}
        <a href="#">Terms of Service</a>
      </Typography>
    </Box>
  );
}
