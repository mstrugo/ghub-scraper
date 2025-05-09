'use client';

import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Something went wrong.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please try again later.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="warning">
          Go to the homepage
        </Button>
      </Link>
    </Grid>
  );
};

export default ErrorPage;
