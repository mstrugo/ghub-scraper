'use client';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useCallback } from 'react';
import { actionableStyle, listItemStyle, textOverflowStyle } from './styles';

interface UserListItemProps {
  avatarSrc: string;
  name: string;
  profileUrl: string;
  onFavClickAction: (userId: string) => void;
  isFav?: boolean;
}

export const UserListItem = ({ avatarSrc, name, profileUrl, onFavClickAction, isFav = false }: UserListItemProps) => {
  const handleFavClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      onFavClickAction(name);
    },
    [name, onFavClickAction],
  );

  return (
    <ListItem disableGutters sx={listItemStyle}>
      <ListItemButton component={Link} href={profileUrl} passHref sx={actionableStyle}>
        <ListItemAvatar>
          <Avatar>
            <Image src={avatarSrc} alt={name} width={50} height={50} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={textOverflowStyle}
          primary={
            <Typography variant="h6" component="span">
              {name}
            </Typography>
          }
        />
        <Tooltip title={isFav ? 'Remove from favorites' : 'Add to favorites'} placement="right" arrow>
          <IconButton color="primary" size="small" onClick={handleFavClick}>
            {isFav ? <StarIcon color="warning" /> : <StarBorderIcon color="warning" />}
          </IconButton>
        </Tooltip>
      </ListItemButton>
    </ListItem>
  );
};
