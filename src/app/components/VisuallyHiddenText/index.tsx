import { Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import type { PropsWithChildren } from 'react';

export const VisuallyHiddenText = ({ children }: PropsWithChildren) => {
  return (
    <Typography component="span" sx={visuallyHidden}>
      {children}
    </Typography>
  );
};
