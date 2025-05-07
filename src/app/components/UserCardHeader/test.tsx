import { render, screen } from '@testing-library/react';
import { UserCardHeader } from './index';

describe('UserCardHeader', () => {
  it('should render fullname, username, and biography', () => {
    render(<UserCardHeader fullname="John Doe" username="johndoe" biography="Software Developer" />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
  });

  it('should not render fullname or biography if not provided', () => {
    render(<UserCardHeader fullname={null} username="johndoe" biography={null} />);

    expect(screen.queryByText('Fullname:')).not.toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
  });
});
