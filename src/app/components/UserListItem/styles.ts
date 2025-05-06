import { Theme } from '@mui/material';

export const listItemStyle = ({ palette, shape }: Theme) => ({
  minWidth: 240,
  flex: 1,
  padding: 0,
  background: palette.grey[800],
  borderRadius: shape.borderRadius,
  overflow: 'hidden',
});

export const actionableStyle = ({ spacing }: Theme) => ({
  paddingY: spacing(1.5),
});

export const textOverflowStyle = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};
