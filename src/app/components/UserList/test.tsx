import { render, screen } from '@testing-library/react';
import { generateProfileDetailsUrl } from 'utils/generateProfileDetailsUrl';
import { UserListItem } from '../UserListItem';
import { UserList } from './index';

jest.mock('../UserListItem', () => ({
  UserListItem: jest.fn(() => <div>User List Item</div>),
}));

jest.mock('utils/generateProfileDetailsUrl', () => ({
  generateProfileDetailsUrl: jest.fn((login) => `/profile/${login}`),
}));

describe('UserList', () => {
  const mockData = [
    { login: 'user1', avatar_url: 'https://example.com/avatar1.jpg' },
    { login: 'user2', avatar_url: 'https://example.com/avatar2.jpg' },
  ];

  it('should render a list of users', () => {
    render(<UserList data={mockData} />);

    expect(screen.getAllByText('User List Item')).toHaveLength(mockData.length);
    mockData.forEach(({ login }) => {
      expect(generateProfileDetailsUrl).toHaveBeenCalledWith(login);
    });
  });

  it('should call UserListItem with correct props for each user', () => {
    render(<UserList data={mockData} />);

    mockData.forEach(({ login, avatar_url }) => {
      expect(UserListItem).toHaveBeenCalledWith(
        {
          avatarSrc: avatar_url,
          name: login,
          profileUrl: `/profile/${login}`,
        },
        undefined,
      );
    });
  });
});
