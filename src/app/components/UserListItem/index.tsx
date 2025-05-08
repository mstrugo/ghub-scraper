'use client';

import { Avatar, ListItem, ListItemAvatar, ListItemButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';
import { FavoriteButton } from '../FavoriteButton';
import { ListItemText } from '../ListItemText';
import { actionableStyle, listItemStyle } from './styles';

interface UserListItemProps {
  /** The URL of the user's avatar image. */
  avatarSrc: string;
  /** The name of the user. */
  name: string;
  /** The URL to the user's profile. */
  profileUrl: string;
}

/**
 * A component to display an individual user in the list.
 *
 * @param {object} props - The props for the UserListItem component.
 * @param {string} props.name - The name of the user.
 * @param {string} props.avatarSrc - The URL of the user's avatar image.
 * @param {string} props.profileUrl - The URL to the user's profile.
 * @returns {JSX.Element} The rendered UserListItem component.
 */
export const UserListItem = ({ avatarSrc, name, profileUrl }: UserListItemProps): JSX.Element => {
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
