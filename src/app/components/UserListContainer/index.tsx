import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useUserContext } from 'contexts/users';
import type { JSX } from 'react';
import { UserList } from '../UserList';
import { boxStyle } from './styles';

/**
 * A container component to manage and display the user list.
 *
 * @returns {JSX.Element} The rendered UserListContainer component.
 */
export const UserListContainer = (): JSX.Element => {
  const { initialData, isLoadingInitialData, isSearchPerformed, isSearching, searchResults, resetSearch } =
    useUserContext();

  const getContent = () => {
    if (isLoadingInitialData || isSearching) {
      return <CircularProgress size={100} color="warning" />;
    }

    if (isSearchPerformed && searchResults?.length === 0) {
      return (
        <>
          <Typography variant="h5" component="h3">
            No results found
          </Typography>
          <Button variant="contained" color="warning" onClick={resetSearch}>
            Clear
          </Button>
        </>
      );
    }

    const data = isSearchPerformed ? searchResults : initialData;

    return <UserList data={data} />;
  };

  return (
    <Box sx={boxStyle} alignItems="center" justifyContent="center">
      {getContent()}
    </Box>
  );
};
