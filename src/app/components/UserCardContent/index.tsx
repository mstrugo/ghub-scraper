import { PeopleRounded, PlaceOutlined, RestoreRounded } from '@mui/icons-material';
import { List, ListItem, Typography } from '@mui/material';
import { parseDate } from 'utils/parseDate';
import { VisuallyHiddenText } from '../VisuallyHiddenText';

type UserCardContentProps = {
  /** The user's location. */
  location?: string | null;
  /** The number of followers the user has. */
  followers?: number;
  /** The number of users the user is following. */
  following?: number;
  /** The date the user registered on GitHub. */
  registrationDate?: string;
};

/**
 * A component to display additional user details such as location, followers, and registration date.
 *
 * @param {UserCardContentProps} props - The props for the UserCardContent component.
 * @returns {JSX.Element} The rendered UserCardContent component.
 */
export const UserCardContent = ({ location, followers, following, registrationDate }: UserCardContentProps) => {
  return (
    <List disablePadding>
      {location && (
        <ListItem sx={{ paddingLeft: 0 }}>
          <PlaceOutlined aria-hidden />
          <VisuallyHiddenText>Based in:</VisuallyHiddenText>
          <Typography variant="body2" color="text.secondary" marginLeft={1}>
            {location}
          </Typography>
        </ListItem>
      )}
      {followers && (
        <ListItem sx={{ paddingLeft: 0 }}>
          <PeopleRounded aria-hidden />
          <Typography variant="body2" color="text.secondary" marginLeft={1}>
            {followers} followers{' '}
            {following && (
              <>
                <VisuallyHiddenText>and</VisuallyHiddenText>
                <Typography variant="body2" component="span" marginLeft={0.5} aria-hidden>
                  |
                </Typography>
                <Typography variant="body2" component="span" marginLeft={1}>
                  {following} following
                </Typography>
              </>
            )}
          </Typography>
        </ListItem>
      )}
      {registrationDate && (
        <ListItem sx={{ paddingLeft: 0 }}>
          <RestoreRounded aria-hidden />
          <Typography variant="body2" color="text.secondary" marginLeft={1}>
            Member since {parseDate(registrationDate)}
          </Typography>
        </ListItem>
      )}
    </List>
  );
};
