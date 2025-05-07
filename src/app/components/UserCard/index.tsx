import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import type { GHParsedUserDetails } from 'types/userDetails';
import { generateUserExternalLinks } from 'utils';
import { UserCardActions } from '../UserCardActions';
import { UserCardContent } from '../UserCardContent';
import { UserCardHeader } from '../UserCardHeader';

type CardProps = {
  data: GHParsedUserDetails;
};

export const UserCard = ({ data }: CardProps) => {
  const { name, login, location, avatar_url, bio, followers, following, created_at, blog, html_url } = data;
  const generatedUserExternalLinks = generateUserExternalLinks({ profile: html_url, personal: blog });

  return (
    <Card variant="outlined">
      <CardMedia component="img" alt={name || login} height="240" image={avatar_url} />
      <CardContent>
        <UserCardHeader fullname={name} username={login} biography={bio} />
        <UserCardContent
          location={location}
          followers={followers}
          following={following}
          registrationDate={created_at}
        />
      </CardContent>
      <CardActions>
        <UserCardActions data={generatedUserExternalLinks} />
      </CardActions>
    </Card>
  );
};
