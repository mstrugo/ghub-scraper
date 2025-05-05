'use client';

import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <Grid>
      <Typography variant="h1" component="h1" gutterBottom>
        Something went wrong.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please try again later.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go back to the homepage
        </Button>
      </Link>
    </Grid>
  );
};

export default ErrorPage;
