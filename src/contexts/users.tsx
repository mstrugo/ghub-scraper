'use client';

import { useGetUsers } from 'hooks/api/useGetUsers';
import { useSearch } from 'hooks/useSearch';
import { createContext, type FC, useContext } from 'react';
import type { UserContextProviderPropsType, UserContextType } from 'types/userContext';

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: FC<UserContextProviderPropsType> = ({ children }) => {
  const { users, isLoadingUsers } = useGetUsers();
  const { isSearchPerformed, isSearching, resetSearch, searchResults, triggerSearch } = useSearch();

  const contextValue: UserContextType = {
    initialData: users ?? [],
    searchResults: searchResults?.items ?? [],
    isLoadingInitialData: isLoadingUsers,
    isSearching,
    isSearchPerformed,
    triggerSearch,
    resetSearch,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }

  return context;
};
