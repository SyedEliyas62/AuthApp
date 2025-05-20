'use client';

import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '@/firebase/config';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const signInWithGoogle = async (router: AppRouterInstance) => {
  try {
    await signInWithPopup(auth, provider);
    router.push("/dashboard");
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

export const handleEmailLogin = async (
  email: string,
  password: string,
  router: AppRouterInstance
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/dashboard");
  } catch (error) {
    console.error("Email login error:", error);
  }
};
