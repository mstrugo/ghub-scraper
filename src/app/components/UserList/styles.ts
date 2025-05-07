import { Theme } from '@mui/material';

export const listStyle = ({ palette, spacing, shape }: Theme) => ({
  display: 'flex',
  gap: spacing(3),
  padding: spacing(2),
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',

  '&::-webkit-scrollbar': {
    width: '8px',
    background: palette.grey[800],
  },
  '&::-webkit-scrollbar-thumb': {
    background: palette.grey[600],
    borderRadius: shape.borderRadius,
    '&:hover': {
      background: palette.grey[500],
    },
  },
});
