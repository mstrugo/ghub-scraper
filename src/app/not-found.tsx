'use client';

import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Grid>
      <Typography variant="h1" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go back to the homepage
        </Button>
      </Link>
    </Grid>
  );
};

export default NotFoundPage;
