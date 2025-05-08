import { useCallback, useState } from 'react';
import { useSearchUsers } from './api/useSearchUsers';

/**
 * Custom hook to manage user search functionality.
 *
 * @returns {object} The search state and functions.
 * @property {boolean} isSearching - Indicates if a search is currently in progress.
 * @property {Array} searchResults - The list of search results.
 * @property {boolean} isSearchPerformed - Indicates if a search has been performed.
 * @property {function} triggerSearch - Triggers a search with the given term.
 * @property {function} resetSearch - Resets the search state.
 */
export const useSearch = () => {
  const { isSearching, searchResults, handleSearch } = useSearchUsers();
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  /**
   * Resets the search state to its initial values.
   */
  const resetSearch = useCallback(() => {
    setIsSearchPerformed(false);
  }, []);

  /**
   * Triggers a search operation with the given term.
   *
   * @param {string} term - The search term to query.
   */
  const triggerSearch = useCallback(
    (term: string) => {
      setIsSearchPerformed(true);
      handleSearch(term);
    },
    [handleSearch],
  );

  return { isSearching, searchResults, isSearchPerformed, triggerSearch, resetSearch };
};
