'use client';

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '@/firebase/config';
 // your initialized Firebase app

interface User {
  uid: string;
  email: string;
  displayName: string;
}

export default function UserCrud() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const db = getFirestore(app);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const userList: User[] = querySnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      })) as User[];
      setUsers(userList);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box mt={4} px={3}>
      <Typography variant="h4" mb={3}>
        User List
      </Typography>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} md={6} lg={4} key={user.uid}>
            <Card elevation={3}>
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
