import { fireEvent, render, screen } from '@testing-library/react';
import { useUserContext } from 'contexts/users';
import { UserList } from '../UserList';
import { UserListContainer } from './index';

jest.mock('contexts/users', () => ({
  useUserContext: jest.fn(),
}));

jest.mock('../UserList', () => ({
  UserList: jest.fn(() => <div>User List</div>),
}));

describe('UserListContainer', () => {
  const mockResetSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render a loading spinner when data is loading', () => {
    (useUserContext as jest.Mock).mockReturnValue({
      isLoadingInitialData: true,
      isSearching: false,
    });

    render(<UserListContainer />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render "No results found" message and a clear button when no search results are found', () => {
    (useUserContext as jest.Mock).mockReturnValue({
      isLoadingInitialData: false,
      isSearching: false,
      isSearchPerformed: true,
      searchResults: [],
      resetSearch: mockResetSearch,
    });

    render(<UserListContainer />);

    expect(screen.getByText('No results found')).toBeInTheDocument();
    const clearButton = screen.getByRole('button', { name: /clear/i });
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);
    expect(mockResetSearch).toHaveBeenCalledTimes(1);
  });

  it('should render the UserList with search results when search is performed', () => {
    const mockSearchResults = [{ id: 1, name: 'User 1' }];
    (useUserContext as jest.Mock).mockReturnValue({
      isLoadingInitialData: false,
      isSearching: false,
      isSearchPerformed: true,
      searchResults: mockSearchResults,
    });

    render(<UserListContainer />);

    expect(screen.getByText('User List')).toBeInTheDocument();
    expect(UserList).toHaveBeenCalledWith({ data: mockSearchResults }, undefined);
  });

  it('should render the UserList with initial data when no search is performed', () => {
    const mockInitialData = [{ id: 1, name: 'User 1' }];
    (useUserContext as jest.Mock).mockReturnValue({
      isLoadingInitialData: false,
      isSearching: false,
      isSearchPerformed: false,
      initialData: mockInitialData,
    });

    render(<UserListContainer />);

    expect(screen.getByText('User List')).toBeInTheDocument();
    expect(UserList).toHaveBeenCalledWith({ data: mockInitialData }, undefined);
  });
});
