import { Card, CardActions, CardContent } from '@mui/material';
import type { UserDetails } from 'types/userDetails';
import { generateUserExternalLinks } from 'utils/generateUserExternalLinks';
import { UserCardActions } from '../UserCardActions';
import { UserCardContent } from '../UserCardContent';
import { UserCardHeader } from '../UserCardHeader';
import { UserCardImage } from '../UserCardImage';
import { cardActionsStyle } from './styles';

type CardProps = {
  data: UserDetails;
};

export const UserCard = ({ data }: CardProps) => {
  const { name, login, location, avatar_url, bio, followers, following, created_at, blog, html_url } = data;
  const generatedUserExternalLinks = generateUserExternalLinks({ profile: html_url, personal: blog });

  return (
    <>
      <Card variant="outlined">
        <UserCardImage src={avatar_url} alt={name || login} username={login} />
        <CardContent>
          <UserCardHeader fullname={name} username={login} biography={bio} />
          <UserCardContent
            location={location}
            followers={followers}
            following={following}
            registrationDate={created_at}
          />
        </CardContent>
        <CardActions sx={cardActionsStyle}>
          <UserCardActions data={generatedUserExternalLinks} />
        </CardActions>
      </Card>
    </>
  );
};
