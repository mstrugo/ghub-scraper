'use client';

import { List } from '@mui/material';
import type { GHUserList } from 'types/github';
import { generateProfileDetailsUrl } from 'utils';
import { UserListItem } from '../UserListItem';
import { listStyle } from './styles';

interface UserListProps {
  data: GHUserList;
  isFavorite: (userId: string) => boolean;
  handleFavClick: (userId: string) => void;
}

export const UserList = ({ data, isFavorite, handleFavClick }: UserListProps) => (
  <List sx={listStyle}>
    {data.map(({ login, avatar_url }) => (
      <UserListItem
        key={login}
        avatarSrc={avatar_url}
        name={login}
        isFav={isFavorite(login)}
        onFavClickAction={handleFavClick}
        profileUrl={generateProfileDetailsUrl(login)}
      />
    ))}
  </List>
);
