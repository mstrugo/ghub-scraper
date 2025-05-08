import { ReactNode } from 'react';
import { GHUserList } from 'types/github';

/**
 * Represents the structure of the User Context.
 */
export type UserContextType = {
  /** The initial list of GitHub users fetched on load. */
  initialData: GHUserList;
  /** The list of GitHub users returned from a search query. */
  searchResults: GHUserList;
  /** Indicates whether the initial data is being loaded. */
  isLoadingInitialData: boolean;
  /** Indicates whether a search operation is currently in progress. */
  isSearching: boolean;
  /** Indicates whether a search has been performed. */
  isSearchPerformed: boolean;
  /**
   * Triggers a search for GitHub users based on the provided term.
   * @param term - The search term to query GitHub users.
   */
  triggerSearch: (term: string) => void;
  /** Resets the search results and state to the initial data. */
  resetSearch: () => void;
};

/**
 * Represents the props for the User Context Provider component.
 */
export type UserContextProviderPropsType = {
  /** The child components that will consume the User Context. */
  children: ReactNode;
  /** The optional initial value for the User Context. */
  value?: UserContextType;
};
