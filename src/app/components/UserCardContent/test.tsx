import { render, screen } from '@testing-library/react';
import { UserCardContent } from './index';

jest.mock('utils/parseDate', () => ({
  parseDate: jest.fn((date) => `Parsed Date: ${date}`),
}));

describe('UserCardContent', () => {
  it('should render location if provided', () => {
    render(<UserCardContent location="New York" />);

    expect(screen.getByText('Based in:')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
  });

  it('should render followers and following if provided', () => {
    render(<UserCardContent followers={100} following={50} />);

    expect(screen.getByText('100 followers')).toBeInTheDocument();
    expect(screen.getByText('50 following')).toBeInTheDocument();
  });

  it('should render registration date if provided', () => {
    render(<UserCardContent registrationDate="2023-01-01" />);

    expect(screen.getByText('Member since Parsed Date: 2023-01-01')).toBeInTheDocument();
  });

  it('should not render any content if no props are provided', () => {
    const { container } = render(<UserCardContent />);
    expect(container).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
