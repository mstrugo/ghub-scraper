import { Typography } from '@mui/material';
import { VisuallyHiddenText } from '../VisuallyHiddenText';

type UserCardHeaderProps = {
  username: string;
  fullname: string | null;
  biography: string | null;
};

export const UserCardHeader = ({ fullname, username, biography }: UserCardHeaderProps) => {
  return (
    <>
      {fullname && (
        <Typography gutterBottom variant="h3" component="h1">
          <VisuallyHiddenText>Fullname:</VisuallyHiddenText>
          {fullname}
        </Typography>
      )}
      <Typography variant="h4" component="h2" fontStyle="italic" gutterBottom>
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
