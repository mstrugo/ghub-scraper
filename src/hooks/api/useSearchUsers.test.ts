import { renderHook } from '@testing-library/react';
import useSWRImmutable from 'swr/immutable';
import { useSearchUsers } from './useSearchUsers';

jest.mock('swr/immutable', () => jest.fn());

describe('useSearchUsers', () => {
  it('should return initial search results, loading state, and error', () => {
    const mockData = [{ id: 1, name: 'User 1' }];
    const mockError = null;

    (useSWRImmutable as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: mockError,
    });

    const { result } = renderHook(() => useSearchUsers());

    expect(result.current).toEqual({
      searchResults: undefined,
      isSearching: false,
      searchError: undefined,
      handleSearch: expect.any(Function),
    });
  });
});
