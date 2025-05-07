import { Theme } from '@mui/material';

export const boxStyle = ({ palette, spacing, breakpoints }: Theme) => ({
  background: palette.grey[900],
  borderRadius: spacing(0.5),
  display: 'flex',
  gap: spacing(3),
  justifyContent: 'center',
  overflowY: 'hidden',
  height: '40vh',

  [breakpoints.up('sm')]: {
    height: '46vh',
  },

  [breakpoints.up('md')]: {
    height: '36vh',
  },
});
