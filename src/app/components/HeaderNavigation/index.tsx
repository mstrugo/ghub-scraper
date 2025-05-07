'use client';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

type HeaderNavigationProps = {
  text: string;
};

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
