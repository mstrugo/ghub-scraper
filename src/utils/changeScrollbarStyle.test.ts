import { changeScrollbarStyle } from './changeScrollbarStyle';

describe('changeScrollbarStyle', () => {
  it('should return default scrollbar styles when no arguments are provided', () => {
    const styles = changeScrollbarStyle();
    expect(styles).toEqual({
      '&::-webkit-scrollbar': {
        width: '8px',
        background: '#424242',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#757575',
        borderRadius: '16px',
        '&:hover': {
          background: '#9e9e9e',
        },
      },
    });
  });

  it('should return custom scrollbar styles when arguments are provided', () => {
    const barColor = '#000000';
    const thumbColor = '#ffffff';
    const thumbHoverColor = '#cccccc';
    const styles = changeScrollbarStyle(barColor, thumbColor, thumbHoverColor);
    expect(styles).toEqual({
      '&::-webkit-scrollbar': {
        width: '8px',
        background: barColor,
      },
      '&::-webkit-scrollbar-thumb': {
        background: thumbColor,
        borderRadius: '16px',
        '&:hover': {
          background: thumbHoverColor,
        },
      },
    });
  });
});
