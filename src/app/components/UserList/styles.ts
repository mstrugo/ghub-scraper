import { Theme } from '@mui/material';
import { changeScrollbarStyle } from 'utils/changeScrollbarStyle';

export const listStyle = ({ palette, spacing }: Theme) => ({
  display: 'flex',
  gap: spacing(3),
  padding: spacing(2),
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',

  ...changeScrollbarStyle(palette.grey[800], palette.grey[600], palette.grey[500]),
});
