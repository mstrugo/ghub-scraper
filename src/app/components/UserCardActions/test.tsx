import { render, screen } from '@testing-library/react';
import { UserCardActions } from './index';

describe('UserCardActions', () => {
  const mockData = [
    {
      url: 'https://example.com/personal',
      title: 'Personal Website',
      icon: 'personal',
    },
    {
      url: 'https://example.com/profile',
      title: 'GitHub Profile',
      icon: 'profile',
    },
  ];

  it('should render all action buttons with correct links and tooltips', () => {
    render(<UserCardActions data={mockData} />);

    mockData.forEach((item) => {
      const link = screen.getByRole('link', { name: item.title });
      expect(link).toHaveAttribute('href', item.url);
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('should render the correct icons for each action', () => {
    render(<UserCardActions data={mockData} />);

    expect(screen.getByTestId('LinkRoundedIcon')).toBeInTheDocument();
    expect(screen.getByTestId('CollectionsBookmarkRoundedIcon')).toBeInTheDocument();
  });
});
