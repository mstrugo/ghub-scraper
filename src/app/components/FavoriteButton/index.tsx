'use client';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton, Tooltip } from '@mui/material';
import { handleFavUser, isFavUser } from 'actions/favorite';
import { useEffect, useState, useTransition } from 'react';

type FavoriteButtonProps = {
  username: string;
};

export const FavoriteButton = ({ username }: FavoriteButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const check = async () => {
      const isFavorite = await isFavUser(username);
      setIsFav(isFavorite);
    };

    check();
  }, []);

  const handleFavClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const isFavNow = await handleFavUser(username);
      setIsFav(isFavNow);
    });
  };

  return (
    <IconButton color="primary" size="small" onClick={handleFavClick} disabled={isPending}>
      <Tooltip title={isFav ? 'Remove from favorites' : 'Add to favorites'} placement="right" arrow>
        {isFav ? <StarIcon color="warning" /> : <StarBorderIcon color="warning" />}
      </Tooltip>
    </IconButton>
  );
};
