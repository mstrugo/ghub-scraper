import { ListItemText as MuiListItemText, Typography } from '@mui/material';
import { ElementType } from 'react';
import { textOverflowStyle } from './styles';

type ListItemTextProps = {
  /** The text to display. */
  text: string;
  /** The typography variant to use for the text. */
  fontVariant?: 'h6' | 'body1';
  /** The font weight to apply to the text. */
  fontWeight?: number;
  /** The component type to render the text as. */
  component?: ElementType;
};

/**
 * A styled list item text component.
 *
 * @param {ListItemTextProps} props - The props for the ListItemText component.
 * @returns {JSX.Element} The rendered ListItemText component.
 */
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
