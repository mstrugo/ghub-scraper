'use client';

import { List } from '@mui/material';
import type { JSX } from 'react';
import type { GHUserList } from 'types/github';
import { generateProfileDetailsUrl } from 'utils/generateProfileDetailsUrl';
import { UserListItem } from '../UserListItem';
import { listStyle } from './styles';

type UserListProps = {
  /** The list of GitHub users to display. */
  data: GHUserList;
};

/**
 * A component to display a list of GitHub users.
 *
 * @param {UserListProps} props - The props for the UserList component.
 * @param {GHUserList} props.data - The list of GitHub users to display.
 * @returns {JSX.Element} The rendered UserList component.
 */
export const UserList = ({ data }: UserListProps): JSX.Element => (
  <List sx={listStyle}>
    {data.map(({ login, avatar_url }) => (
      <UserListItem key={login} avatarSrc={avatar_url} name={login} profileUrl={generateProfileDetailsUrl(login)} />
    ))}
  </List>
);
