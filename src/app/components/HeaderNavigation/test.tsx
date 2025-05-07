import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { HeaderNavigation } from './index';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('HeaderNavigation', () => {
  it('should render the text passed as a prop', () => {
    render(<HeaderNavigation text="Test Header" />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Header');
  });

  it('should navigate back when the back button is clicked', async () => {
    const mockBack = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ back: mockBack });

    render(<HeaderNavigation text="Test Header" />);

    const backButton = screen.getByRole('button', { name: 'Go Back' });
    await userEvent.click(backButton);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });
});
