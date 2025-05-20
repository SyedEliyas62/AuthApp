'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface User {
  uid: string;
  email: string;
  displayName: string;
}

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        flex: '1 1 300px',
        maxWidth: 350,
        minWidth: 250,
        boxSizing: 'border-box',
      }}
    >
      <CardContent>
        <Typography variant="h6">{user.displayName || 'No Name'}</Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          UID: {user.uid}
        </Typography>
      </CardContent>
    </Card>
  );
}
