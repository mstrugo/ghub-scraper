import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Box, List, ListItem, ListItemButton, Tooltip, Typography } from '@mui/material';
import type { ParsedRepositories } from 'types/userDetails';
import { ListItemText } from '../ListItemText';
import { hoverableElementStyle, listStyle } from './styles';

type UserRepositoriesListProps = {
  data: ParsedRepositories[];
  amount: number;
};

export const UserRepositoriesList = ({ data, amount }: UserRepositoriesListProps) => {
  return (
    <Box height="100%" maxHeight={{ xs: 350, sm: '80vh', lg: '76vh' }} paddingBottom={{ xs: 2, md: 0 }}>
      <Typography variant="h4" component="h3" gutterBottom>
        Repositories ({amount})
      </Typography>
      <List disablePadding dense sx={listStyle}>
        {data.map(({ name, url }) => (
          <ListItem key={url} disableGutters sx={hoverableElementStyle}>
            <ListItemButton component="a" href={url} target="_blank" rel="noopener noreferrer">
              <ListItemText text={name} fontWeight={700} fontVariant="body1" />
              <Tooltip title="Open in a new tab" placement="top" arrow>
                <OpenInNewRoundedIcon />
              </Tooltip>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
