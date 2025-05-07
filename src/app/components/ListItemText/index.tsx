import { ListItemText as MuiListItemText, Typography } from '@mui/material';
import { ElementType } from 'react';
import { textOverflowStyle } from './styles';

type ListItemTextProps = {
  text: string;
  fontVariant?: 'h6' | 'body1';
  fontWeight?: number;
  component?: ElementType;
};

export const ListItemText = ({ text, fontVariant = 'h6', fontWeight = 500, component = 'span' }: ListItemTextProps) => {
  return (
    <MuiListItemText
      sx={textOverflowStyle}
      slotProps={{
        primary: { sx: textOverflowStyle },
      }}
      primary={
        <Typography variant={fontVariant} component={component} fontWeight={fontWeight}>
          {text}
        </Typography>
      }
    />
  );
};
