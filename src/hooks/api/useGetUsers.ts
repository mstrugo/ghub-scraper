import { API } from 'constants/api';
import useSWRImmutable from 'swr/immutable';
import type { GHUserList } from 'types/github';
import { fetcherFn } from 'utils/fetcher';

type UseGetUsers = {
  /** The list of GitHub users. */
  users?: GHUserList | null;
  /** Indicates if the users are being loaded. */
  isLoadingUsers: boolean;
  /** The error encountered during the fetch operation, if any. */
  usersError: Error | null;
};

/**
 * Custom hook to fetch the list of GitHub users.
 *
 * @returns {UseGetUsers} The state of the user fetching operation.
 * @property {Array} users - The list of GitHub users.
 * @property {boolean} isLoadingUsers - Indicates if the users are being loaded.
 * @property {Error|null} usersError - The error encountered during the fetch operation, if any.
 */
export const useGetUsers = (): UseGetUsers => {
  const { data, isLoading, error } = useSWRImmutable(API.USERS, fetcherFn<GHUserList>);

  return {
    users: data,
    isLoadingUsers: isLoading,
    usersError: error,
  };
};
