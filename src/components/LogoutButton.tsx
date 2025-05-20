'use client';
import { Button } from '@mui/material';
import { logOut } from '@/utils/auth';

export default function LogoutButton() {
  return (
    <Button onClick={logOut} variant="outlined">
      Logout
    </Button>
  );
}
