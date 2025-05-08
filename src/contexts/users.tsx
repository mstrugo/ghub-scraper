'use client';

import { useGetUsers } from 'hooks/api/useGetUsers';
import { useSearch } from 'hooks/useSearch';
import { createContext, type FC, useContext } from 'react';
import type { UserContextProviderPropsType, UserContextType } from 'types/userContext';

export const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * Provides the `UserContext` to its children components.
 *
 * This context includes user-related data and search functionality.
 *
 * @param {UserContextProviderPropsType} props - The props for the provider component.
 * @param {React.ReactNode} props.children - The child components that will have access to the context.
 *
 * @returns {JSX.Element} A `UserContext.Provider` component that wraps the children with the provided context value.
 *
 * @context
 * - `initialData`: The initial list of users fetched from the `useGetUsers` hook.
 * - `searchResults`: The list of users resulting from a search operation.
 * - `isLoadingInitialData`: A boolean indicating whether the initial user data is being loaded.
 * - `isSearching`: A boolean indicating whether a search operation is in progress.
 * - `isSearchPerformed`: A boolean indicating whether a search operation has been performed.
 * - `triggerSearch`: A function to initiate a search operation.
 * - `resetSearch`: A function to reset the search state.
 */
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
