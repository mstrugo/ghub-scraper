import { render, screen } from '@testing-library/react';
import { FavoriteButton } from '../FavoriteButton';
import { UserCardImage } from './index';

jest.mock('../FavoriteButton', () => ({
  FavoriteButton: jest.fn(() => <button>Favorite Button</button>),
}));

describe('UserCardImage', () => {
  const mockProps = {
    src: 'https://example.com/avatar.jpg',
    alt: 'User Avatar',
    username: 'testuser',
    height: 300,
  };

  it('should render the image with the correct src, alt, and height', () => {
    render(<UserCardImage {...mockProps} />);

    const image = screen.getByRole('img', { name: mockProps.alt });
    expect(image).toHaveAttribute('src', mockProps.src);
    expect(image).toHaveAttribute('alt', mockProps.alt);
    expect(image).toHaveAttribute('height', `${mockProps.height}`);
  });

  it('should render the FavoriteButton with the correct username', () => {
    render(<UserCardImage {...mockProps} />);

    expect(FavoriteButton).toHaveBeenCalledWith({ username: mockProps.username }, undefined);
    expect(screen.getByText('Favorite Button')).toBeInTheDocument();
  });

  it('should use the default height if none is provided', () => {
    render(<UserCardImage src={mockProps.src} alt={mockProps.alt} username={mockProps.username} />);

    const image = screen.getByRole('img', { name: mockProps.alt });
    expect(image).toHaveAttribute('height', '240'); // Default height
  });
});
