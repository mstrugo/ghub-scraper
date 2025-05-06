import { useCallback, useState } from 'react';
import { useSearchUsers } from './api/useSearchUsers';

export const useSearch = () => {
  const { isSearching, searchResults, handleSearch } = useSearchUsers();
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const resetSearch = useCallback(() => {
    setIsSearchPerformed(false);
  }, []);

  const triggerSearch = useCallback(
    (term: string) => {
      setIsSearchPerformed(true);
      handleSearch(term);
    },
    [handleSearch],
  );

  return { isSearching, searchResults, isSearchPerformed, triggerSearch, resetSearch };
};
