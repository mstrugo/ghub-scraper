import { API } from 'constants/api';
import useSWRImmutable from 'swr/immutable';
import { fetcherFn } from 'utils';

export const useGetUserDetails = (id: string) => {
  const { data, isLoading, error } = useSWRImmutable([API.DETAILS.KEY, API.DETAILS.ENDPOINT(id)], ([_key, endpoint]) =>
    fetcherFn(endpoint),
  );

  return { data, isLoading, error };
};
