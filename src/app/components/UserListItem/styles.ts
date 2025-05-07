import { Theme } from '@mui/material';

export const listItemStyle = ({ palette, shape }: Theme) => ({
  minWidth: 240,
  maxWidth: 300,
  height: 64,
  flex: 1,
  padding: 0,
  background: palette.grey[800],
  borderRadius: shape.borderRadius,
  overflow: 'hidden',
});

export const actionableStyle = ({ spacing }: Theme) => ({
  paddingY: spacing(1.5),
});
