'use client';

import { Avatar, ListItem, ListItemAvatar, ListItemButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FavoriteButton } from '../FavoriteButton';
import { ListItemText } from '../ListItemText';
import { actionableStyle, listItemStyle } from './styles';

interface UserListItemProps {
  avatarSrc: string;
  name: string;
  profileUrl: string;
}

export const UserListItem = ({ avatarSrc, name, profileUrl }: UserListItemProps) => {
  return (
    <ListItem disableGutters sx={listItemStyle}>
      <ListItemButton component={Link} href={profileUrl} passHref sx={actionableStyle}>
        <ListItemAvatar>
          <Avatar>
            <Image src={avatarSrc} alt={name} width={50} height={50} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText text={name} />
        <FavoriteButton username={name} />
      </ListItemButton>
    </ListItem>
  );
};
