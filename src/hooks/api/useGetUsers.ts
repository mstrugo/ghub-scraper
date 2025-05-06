import { API } from 'constants/api';
import useSWRImmutable from 'swr/immutable';
import { fetcherFn } from 'utils';

export const useGetUsers = () => {
  const { data, isLoading, error } = useSWRImmutable([API.USERS.KEY, API.USERS.ENDPOINT], ([_key, endpoint]) =>
    fetcherFn(endpoint),
  );

  return {
    users: data,
    isLoadingUsers: isLoading,
    usersError: error,
  };
};
