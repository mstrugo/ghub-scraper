'use client';

import { CircularProgress, Grid } from '@mui/material';

const LoadingPage = () => {
  return (
    <Grid justifyContent="center" alignItems="center" height="100%" display="flex">
      <CircularProgress size={100} />
    </Grid>
  );
};

export default LoadingPage;
