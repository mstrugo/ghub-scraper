import { ReactNode } from 'react';
import { GHUserList } from 'types/github';

export type UserContextType = {
  initialData: GHUserList;
  searchResults: GHUserList;
  isLoadingInitialData: boolean;
  isSearching: boolean;
  isSearchPerformed: boolean;
  triggerSearch: (term: string) => void;
  resetSearch: () => void;
};

export type UserContextProviderPropsType = {
  children: ReactNode;
  value?: UserContextType;
};
