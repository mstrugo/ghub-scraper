import { API } from 'constants/api';
import useSWRMutation from 'swr/mutation';
import { searchFn } from 'utils';

export const useSearchUsers = () => {
  const { data, error, isMutating, trigger } = useSWRMutation(API.SEARCH, searchFn);

  const handleSearch = async (term: string) => await trigger(term);

  return {
    searchResults: data,
    isSearching: isMutating,
    searchError: error,
    handleSearch,
  };
};
