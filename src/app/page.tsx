'use client';

import { Grid, Typography } from '@mui/material';
import { UserContextProvider } from 'contexts/users';
import { Search, UserListContainer } from '~components';

const HomePage = () => (
  <UserContextProvider>
    <Grid size={{ xs: 12, md: 10 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Welcome to the GitHub User List App
      </Typography>
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        This app allows you to search and discover GitHub users.
      </Typography>
      <Grid size={{ xs: 10, md: 8, lg: 7 }} justifySelf="center" marginTop={4}>
        <Search />
      </Grid>
    </Grid>

    <Grid size={11}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Top Users
      </Typography>
      <UserListContainer />
    </Grid>
  </UserContextProvider>
);

export default HomePage;
