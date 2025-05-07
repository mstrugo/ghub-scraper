import { render, screen } from '@testing-library/react';
import { FavoriteButton } from '../FavoriteButton';
import { ListItemText } from '../ListItemText';
import { UserListItem } from './index';

jest.mock('../FavoriteButton', () => ({
  FavoriteButton: jest.fn(() => <button>Favorite Button</button>),
}));

jest.mock('../ListItemText', () => ({
  ListItemText: jest.fn(() => <span>Mocked List Item Text</span>),
}));

jest.mock('next/link', () => {
  const MockedLink = ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>;
  MockedLink.displayName = 'MockedLink';
  return MockedLink;
});

jest.mock('next/image', () => {
  const MockedImage = ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
    <img src={src} alt={alt} height={height} width={width} />
  );
  MockedImage.displayName = 'MockedImage';
  return MockedImage;
});

describe('UserListItem', () => {
  const mockProps = {
    avatarSrc: 'https://example.com/avatar.jpg',
    name: 'Test User',
    profileUrl: '/profile/testuser',
  };

  it('should render the avatar with the correct src and alt', () => {
    render(<UserListItem {...mockProps} />);

    const avatarImage = screen.getByRole('img', { name: mockProps.name });
    expect(avatarImage).toHaveAttribute('src', mockProps.avatarSrc);
    expect(avatarImage).toHaveAttribute('alt', mockProps.name);
  });

  it('should render the ListItemText with the correct text', () => {
    render(<UserListItem {...mockProps} />);

    expect(ListItemText).toHaveBeenCalledWith({ text: mockProps.name }, undefined);
    expect(screen.getByText('Mocked List Item Text')).toBeInTheDocument();
  });

  it('should render the FavoriteButton with the correct username', () => {
    render(<UserListItem {...mockProps} />);

    expect(FavoriteButton).toHaveBeenCalledWith({ username: mockProps.name }, undefined);
    expect(screen.getByText('Favorite Button')).toBeInTheDocument();
  });

  it('should render a link with the correct href', () => {
    render(<UserListItem {...mockProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockProps.profileUrl);
  });
});
