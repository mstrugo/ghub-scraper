import { Box, Button, CircularProgress, Typography } from '@mui/material';
// import { GHUserList } from 'types/github';
import { useUserContext } from 'contexts/users';
import { UserList } from '~components';
import { boxStyle } from './styles';

export const UserListContainer = () => {
  const {
    initialData,
    isLoadingInitialData,
    isSearchPerformed,
    isSearching,
    searchResults,
    resetSearch,
    isFavUser,
    handleFavUser,
  } = useUserContext();

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

    return <UserList data={data} isFavorite={isFavUser} handleFavClick={handleFavUser} />;
  };

  return (
    <Box sx={boxStyle} alignItems="center" justifyContent="center">
      {getContent()}
    </Box>
  );
};
