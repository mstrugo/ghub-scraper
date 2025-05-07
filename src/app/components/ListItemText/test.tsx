import { render, screen } from '@testing-library/react';
import { ListItemText } from './index';

describe('ListItemText', () => {
  it('should render text with default styles', () => {
    render(<ListItemText text="Test Text" />);

    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('should apply custom font variant and weight', () => {
    render(<ListItemText text="Custom Text" fontVariant="body1" fontWeight={700} />);

    const textElement = screen.getByText('Custom Text');
    expect(textElement).toHaveStyle('font-weight: 700');
  });
});
