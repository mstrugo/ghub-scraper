import { Theme } from '@mui/material';

export const boxStyle = ({ palette, spacing }: Theme) => ({
  background: palette.grey[900],
  borderRadius: spacing(0.5),
  display: 'flex',
  gap: spacing(3),
  justifyContent: 'center',
  height: 350,
  overflowY: 'hidden',
});
