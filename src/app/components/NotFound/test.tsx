import { render, screen } from '@testing-library/react';
import { NotFound } from './index';

jest.mock('next/link', () => {
  const MockLink = ({ children }: { children: React.ReactNode }) => <a role="button">{children}</a>;
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('NotFound Component', () => {
  it('should render the 404 message', () => {
    render(<NotFound />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404!');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('User not found');
  });

  it('should render a button linking to the homepage', () => {
    render(<NotFound />);

    const button = screen.getByRole('button', { name: /go to the homepage/i });
    expect(button).toBeInTheDocument();
  });
});
