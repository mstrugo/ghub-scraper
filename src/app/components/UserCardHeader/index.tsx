import { Typography } from '@mui/material';
import type { JSX } from 'react';
import { VisuallyHiddenText } from '../VisuallyHiddenText';

type UserCardHeaderProps = {
  /** The username of the user. */
  username: string;
  /** The full name of the user. */
  fullname: string | null;
  /** The biography of the user. */
  biography: string | null;
};

/**
 * A component to display the user's name, username, and biography.
 *
 * @param {UserCardHeaderProps} props - The props for the UserCardHeader component.
 * @returns {JSX.Element} The rendered UserCardHeader component.
 */
export const UserCardHeader = ({ fullname, username, biography }: UserCardHeaderProps): JSX.Element => {
  return (
    <>
      {fullname && (
        <Typography gutterBottom variant="h4" component="h2">
          <VisuallyHiddenText>Fullname:</VisuallyHiddenText>
          {fullname}
        </Typography>
      )}
      <Typography variant="h5" component="h3" fontStyle="italic" gutterBottom>
        <VisuallyHiddenText>Username:</VisuallyHiddenText>
        {username}
      </Typography>
      {biography && (
        <Typography variant="body2" gutterBottom>
          <VisuallyHiddenText>Biography:</VisuallyHiddenText>
          {biography}
        </Typography>
      )}
    </>
  );
};
