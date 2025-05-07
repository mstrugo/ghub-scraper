import { render, screen } from '@testing-library/react';
import { ListItemText } from '../ListItemText';
import { UserRepositoriesList } from './index';

jest.mock('../ListItemText', () => ({
  ListItemText: jest.fn(() => <span>Mocked List Item Text</span>),
}));

describe('UserRepositoriesList', () => {
  const mockData = [
    { name: 'Repo 1', url: 'https://github.com/user/repo1' },
    { name: 'Repo 2', url: 'https://github.com/user/repo2' },
  ];

  it('should render the title with the correct amount of repositories', () => {
    render(<UserRepositoriesList data={mockData} amount={mockData.length} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(`Repositories (${mockData.length})`);
  });

  it('should render a list of repositories with correct links and names', () => {
    render(<UserRepositoriesList data={mockData} amount={mockData.length} />);

    mockData.forEach(({ url }) => {
      const links = screen.getAllByRole('link', { name: 'Mocked List Item Text' });
      const link = links.find((l) => l.getAttribute('href') === url);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('should render the ListItemText component with the correct props', () => {
    render(<UserRepositoriesList data={mockData} amount={mockData.length} />);

    mockData.forEach(({ name }) => {
      expect(ListItemText).toHaveBeenCalledWith({ text: name, fontWeight: 700, fontVariant: 'body1' }, undefined);
    });
  });

  it('should render the tooltip for each repository link', () => {
    render(<UserRepositoriesList data={mockData} amount={mockData.length} />);

    const tooltips = screen.getAllByLabelText('Open in a new tab');
    expect(tooltips).toHaveLength(mockData.length);
  });
});
