import { PeopleRounded, PlaceOutlined, RestoreRounded } from '@mui/icons-material';
import { List, ListItem, Typography } from '@mui/material';
import { parseDate } from 'utils';
import { VisuallyHiddenText } from '../VisuallyHiddenText';

type UserCardContentProps = {
  location?: string | null;
  followers?: number;
  following?: number;
  registrationDate?: string;
};

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
