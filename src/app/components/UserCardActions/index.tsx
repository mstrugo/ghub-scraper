import { CollectionsBookmarkRounded, LinkRounded } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import type { JSX } from 'react';
import type { UserExternalLinks, UserLinksIcon } from 'types/userDetails';
import { VisuallyHiddenText } from '../VisuallyHiddenText';

type UserCardActionsProps = {
  /** The list of external links to display as actions. */
  data: UserExternalLinks[];
};

const ICONS: UserLinksIcon = {
  personal: <LinkRounded />,
  profile: <CollectionsBookmarkRounded />,
};

/**
 * A component to display action buttons for user external links.
 *
 * @param {UserCardActionsProps} props - The props for the UserCardActions component.
 * @param {UserExternalLinks[]} props.data - The list of external links to display.
 * @returns {JSX.Element} The rendered UserCardActions component.
 */
export const UserCardActions = ({ data }: UserCardActionsProps): JSX.Element => (
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
