import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';

/**
 * A component to display a 404 "User not found" message.
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
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
      <Button variant="contained" color="warning" aria-label="Go to the homepage" LinkComponent={Link} href="/">
        Go to the homepage
      </Button>
    </Grid>
  );
};
