import { act, fireEvent, render, screen } from '@testing-library/react';
import { handleFavUser, isFavUser } from 'actions/favorite';
import { FavoriteButton } from './index';

jest.mock('actions/favorite', () => ({
  handleFavUser: jest.fn(),
  isFavUser: jest.fn(),
}));

describe('FavoriteButton', () => {
  const username = 'testuser';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the button with the correct tooltip', async () => {
    (isFavUser as jest.Mock).mockResolvedValueOnce(false);

    render(<FavoriteButton username={username} />);

    const button = await screen.findByRole('button', { name: /add to favorites/i });
    expect(button).toBeInTheDocument();
  });

  it('should toggle favorite state on click', async () => {
    (isFavUser as jest.Mock).mockResolvedValueOnce(false);
    (handleFavUser as jest.Mock).mockResolvedValueOnce(true);

    render(<FavoriteButton username={username} />);

    const button = await screen.findByRole('button', { name: /add to favorites/i });
    await act(async () => await fireEvent.click(button));

    expect(handleFavUser).toHaveBeenCalledWith(username);
  });
});
