import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';

export const NotFound = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}>
      <Typography variant="h1" component="h1">
        404!
      </Typography>
      <Typography variant="h3" component="h2" gutterBottom>
        User not found
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="warning">
          Go to the homepage
        </Button>
      </Link>
    </Grid>
  );
};
