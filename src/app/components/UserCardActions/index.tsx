import { CollectionsBookmarkRounded, LinkRounded } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import { UserExternalLinks, UserLinksIcon } from 'types/userDetails';
import { VisuallyHiddenText } from '../VisuallyHiddenText';

type UserCardActionsProps = {
  data: UserExternalLinks[];
};

const ICONS: UserLinksIcon = {
  personal: <LinkRounded />,
  profile: <CollectionsBookmarkRounded />,
};

export const UserCardActions = ({ data }: UserCardActionsProps) => (
  <Box padding={1} display="flex" justifyContent="end" gap={1} width="100%">
    {data.map((item) => (
      <IconButton key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" color="default">
        {<VisuallyHiddenText>{item.ariaHiddenText ?? item.title}</VisuallyHiddenText>}
        <Tooltip title={item.title} placement="top" arrow>
          {ICONS[item.icon]}
        </Tooltip>
      </IconButton>
    ))}
  </Box>
);
