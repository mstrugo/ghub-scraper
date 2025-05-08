import { API } from 'constants/api';
import useSWRMutation from 'swr/mutation';
import type { GHUserSearchResultsList } from 'types/github';
import { searchFn } from 'utils/fetcher';

type UseSearchUsers = {
  /** The list of search results */
  searchResults?: GHUserSearchResultsList | null;
  /** Indicates if a search is currently in progress. */
  isSearching: boolean;
  /** The error encountered during the search, if any. */
  searchError: Error | null;
  /** Triggers a search with the given term. */
  handleSearch: (term: string) => Promise<GHUserSearchResultsList | null>;
};

/**
 * Custom hook to search for GitHub users.
 *
 * @returns {UseSearchUsers} The state of the search operation.
 * @property {Array} searchResults - The list of search results.
 * @property {boolean} isSearching - Indicates if a search is currently in progress.
 * @property {Error|null} searchError - The error encountered during the search, if any.
 * @property {function} handleSearch - Triggers a search with the given term.
 */
export const useSearchUsers = (): UseSearchUsers => {
  const { data, error, isMutating, trigger } = useSWRMutation(API.SEARCH, searchFn<GHUserSearchResultsList>);

  /**
   * Triggers a search operation with the given term.
   *
   * @param {string} term - The search term to query.
   * @returns {Promise<GHUserSearchResultsList | null>} A promise that resolves when the search is complete.
   */
  const handleSearch = async (term: string): Promise<GHUserSearchResultsList | null> => await trigger(term);

  return {
    searchResults: data,
    isSearching: isMutating,
    searchError: error,
    handleSearch,
  };
};
