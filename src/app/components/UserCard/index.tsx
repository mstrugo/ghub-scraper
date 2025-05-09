import { Card, CardActions, CardContent } from '@mui/material';
import type { UserDetails } from 'types/userDetails';
import { generateUserExternalLinks } from 'utils/generateUserExternalLinks';
import { UserCardActions } from '../UserCardActions';
import { UserCardContent } from '../UserCardContent';
import { UserCardHeader } from '../UserCardHeader';
import { UserCardImage } from '../UserCardImage';
import { cardActionsStyle } from './styles';

type CardProps = {
  /** The user details to display in the card. */
  data: UserDetails;
};

/**
 * A card component to display user details.
 *
 * @param {CardProps} props - The props for the UserCard component.
 * @returns {JSX.Element} The rendered UserCard component.
 */
export const UserCard = ({ data }: CardProps) => {
  const { name, login, location, avatar_url, bio, followers, following, created_at, blog, html_url } = data;
  const generatedUserExternalLinks = generateUserExternalLinks({ profile: html_url, personal: blog });

  return (
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
  );
};
