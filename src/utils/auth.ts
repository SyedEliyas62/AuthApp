// utils/auth.ts
'use client';

import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '@/firebase/config';
import { useRouter } from 'next/router';

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Google Sign-in Error:', error);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout Error:', error);
  }
};

 export const handleEmailLogin = async () => {
    const router = useRouter();
  try {
    const result = await signInWithEmailAndPassword(auth, email, "userPassword");
    router.push("/dashboard");
  } catch (error) {
    console.error("Email login error:", error);
  }
};