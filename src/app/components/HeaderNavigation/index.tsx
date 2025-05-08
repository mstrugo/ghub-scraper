'use client';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

type HeaderNavigationProps = {
  /** The text to display in the header. */
  text: string;
};

/**
 * A header component with a back button and a title.
 *
 * @param {HeaderNavigationProps} props - The props for the HeaderNavigation component.
 * @returns {JSX.Element} The rendered HeaderNavigation component.
 */
export const HeaderNavigation = ({ text }: HeaderNavigationProps) => {
  const router = useRouter();

  return (
    <>
      <IconButton onClick={() => router.back()} aria-label="Go Back">
        <Tooltip title="Go Back" arrow placement="top">
          <ArrowBackRoundedIcon aria-hidden />
        </Tooltip>
      </IconButton>
      <Typography variant="h4" component="h1">
        {text}
      </Typography>
    </>
  );
};
