import { render, screen } from '@testing-library/react';
import { UserCard } from './index';

const mockData = {
  name: 'John Doe',
  login: 'johndoe',
  location: 'New York',
  avatar_url: 'https://example.com/avatar.jpg',
  bio: 'Software Developer',
  followers: 100,
  following: 50,
  created_at: '2020-01-01',
  blog: 'https://johndoe.com',
  html_url: 'https://github.com/johndoe',
};

describe('UserCard', () => {
  it('should render user card with all details', () => {
    render(<UserCard data={mockData} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
  });
});
