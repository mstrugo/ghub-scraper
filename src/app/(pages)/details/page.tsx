import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const DetailsPage = () => {
  return (
    <Grid>
      <Typography variant="h1" component="h1">
        Oops! Missing User ID
      </Typography>
      <Typography variant="body1" gutterBottom>
        It seems like you have tried to access a user details page without a valid user ID. Please go back to the
        homepage and start again.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go back to the homepage
        </Button>
      </Link>
    </Grid>
  );
};

export default DetailsPage;
