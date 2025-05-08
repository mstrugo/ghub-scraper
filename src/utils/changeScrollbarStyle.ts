const DEFAULT = {
  BAR_COLOR: '#424242',
  THUMB_COLOR: '#757575',
  THUMB_HOVER_COLOR: '#9e9e9e',
};

/**
 * Generates custom scrollbar styles.
 *
 * @param {string} [barColor='#424242'] - The background color of the scrollbar track.
 * @param {string} [thumbColor='#757575'] - The color of the scrollbar thumb.
 * @param {string} [thumbHoverColor='#9e9e9e'] - The color of the scrollbar thumb when hovered.
 * @returns {object} The styles for the custom scrollbar.
 */
export const changeScrollbarStyle = (
  barColor: string = DEFAULT.BAR_COLOR,
  thumbColor: string = DEFAULT.THUMB_COLOR,
  thumbHoverColor: string = DEFAULT.THUMB_HOVER_COLOR,
): object => ({
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
