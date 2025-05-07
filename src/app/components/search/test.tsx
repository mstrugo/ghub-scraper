import { fireEvent, render, screen } from '@testing-library/react';
import { useUserContext } from 'contexts/users';
import { Search } from './index';

jest.mock('contexts/users', () => ({
  useUserContext: jest.fn(),
}));

describe('Search', () => {
  const mockTriggerSearch = jest.fn();
  const mockResetSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useUserContext as jest.Mock).mockReturnValue({
      triggerSearch: mockTriggerSearch,
      isSearchPerformed: false,
      resetSearch: mockResetSearch,
    });
  });

  it('should render the search input and buttons', () => {
    render(<Search />);

    expect(screen.getByPlaceholderText(/type \+3 letters/i)).toBeInTheDocument();
    expect(screen.getByRole('searchbox', { name: /search users/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /clear search results/i })).toBeInTheDocument();
  });

  it('should trigger search on form submit', () => {
    render(<Search />);

    const input = screen.getByPlaceholderText(/type \+3 letters/i);
    fireEvent.change(input, { target: { value: 'test' } });

    const searchButton = screen.getByRole('button', { name: 'search' });
    fireEvent.click(searchButton);

    expect(mockTriggerSearch).toHaveBeenCalledWith('test');
  });

  it('should reset search on reset button click', () => {
    (useUserContext as jest.Mock).mockReturnValueOnce({
      triggerSearch: mockTriggerSearch,
      isSearchPerformed: true,
      resetSearch: mockResetSearch,
    });

    render(<Search />);

    const resetButton = screen.getByRole('button', { name: /clear search results/i });
    fireEvent.click(resetButton);

    expect(mockResetSearch).toHaveBeenCalled();
  });
});
