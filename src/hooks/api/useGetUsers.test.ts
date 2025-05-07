import { renderHook } from '@testing-library/react';
import { API } from 'constants/api';
import useSWRImmutable from 'swr/immutable';
import { useGetUsers } from './useGetUsers';

jest.mock('swr/immutable', () => jest.fn());

describe('useGetUsers', () => {
  it('should return users, loading state, and error', () => {
    const mockData = [{ id: 1, name: 'User 1' }];
    const mockError = null;

    (useSWRImmutable as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: mockError,
    });

    const { result } = renderHook(() => useGetUsers());

    expect(result.current).toEqual({
      users: mockData,
      isLoadingUsers: false,
      usersError: mockError,
    });
    expect(useSWRImmutable).toHaveBeenCalledWith(API.USERS, expect.any(Function));
  });
});
