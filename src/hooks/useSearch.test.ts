import { act, renderHook } from '@testing-library/react';
import { useSearchUsers } from './api/useSearchUsers';
import { useSearch } from './useSearch';

jest.mock('./api/useSearchUsers');

describe('useSearch', () => {
  const mockUseSearchUsers = useSearchUsers as jest.MockedFunction<typeof useSearchUsers>;

  beforeEach(() => {
    mockUseSearchUsers.mockReturnValue({
      isSearching: false,
      searchResults: [],
      handleSearch: jest.fn(),
      searchError: null,
    });
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useSearch());

    expect(result.current.isSearching).toBe(false);
    expect(result.current.searchResults).toEqual([]);
    expect(result.current.isSearchPerformed).toBe(false);
  });

  it('should set isSearchPerformed to true and call handleSearch when triggerSearch is called', () => {
    const handleSearchMock = jest.fn();
    mockUseSearchUsers.mockReturnValue({
      isSearching: false,
      searchResults: [],
      handleSearch: handleSearchMock,
      searchError: null,
    });

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.triggerSearch('test');
    });

    expect(result.current.isSearchPerformed).toBe(true);
    expect(handleSearchMock).toHaveBeenCalledWith('test');
  });

  it('should reset isSearchPerformed to false when resetSearch is called', () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.triggerSearch('test');
    });

    expect(result.current.isSearchPerformed).toBe(true);

    act(() => {
      result.current.resetSearch();
    });

    expect(result.current.isSearchPerformed).toBe(false);
  });
});
