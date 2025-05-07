'use client';

import { List } from '@mui/material';
import type { GHUserList } from 'types/github';
import { generateProfileDetailsUrl } from 'utils/generateProfileDetailsUrl';
import { UserListItem } from '../UserListItem';
import { listStyle } from './styles';

interface UserListProps {
  data: GHUserList;
}

export const UserList = ({ data }: UserListProps) => (
  <List sx={listStyle}>
    {data.map(({ login, avatar_url }) => (
      <UserListItem key={login} avatarSrc={avatar_url} name={login} profileUrl={generateProfileDetailsUrl(login)} />
    ))}
  </List>
);
