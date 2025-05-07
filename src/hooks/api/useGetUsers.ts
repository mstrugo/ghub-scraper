import { API } from 'constants/api';
import useSWRImmutable from 'swr/immutable';
import { fetcherFn } from 'utils/fetcher';

export const useGetUsers = () => {
  const { data, isLoading, error } = useSWRImmutable(API.USERS, fetcherFn);

  return {
    users: data,
    isLoadingUsers: isLoading,
    usersError: error,
  };
};
