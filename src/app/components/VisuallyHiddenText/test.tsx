import { render, screen } from '@testing-library/react';
import { VisuallyHiddenText } from './index';

describe('VisuallyHiddenText', () => {
  it('should render the text with visually hidden styles', () => {
    render(<VisuallyHiddenText>Hidden Text</VisuallyHiddenText>);

    const hiddenText = screen.getByText('Hidden Text');
    expect(hiddenText).toBeInTheDocument();
    expect(hiddenText).toHaveStyle({
      position: 'absolute',
      width: '1px',
      height: '1px',
      overflow: 'hidden',
    });
  });

  it('should not render anything if no text is provided', () => {
    const { container } = render(<VisuallyHiddenText />);
    expect(container).toHaveTextContent('');
  });
});
