import { Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import type { JSX, PropsWithChildren } from 'react';

/**
 * A component to render visually hidden text for accessibility purposes.
 *
 * @param {object} props - The props for the VisuallyHiddenText component.
 * @param {string} props.children - The text to render.
 * @returns {JSX.Element} The rendered VisuallyHiddenText component.
 */
export const VisuallyHiddenText = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <Typography component="span" sx={visuallyHidden}>
      {children}
    </Typography>
  );
};
