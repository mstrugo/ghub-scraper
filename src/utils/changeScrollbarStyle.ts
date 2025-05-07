const DEFAULT = {
  BAR_COLOR: '#424242',
  THUMB_COLOR: '#757575',
  THUMB_HOVER_COLOR: '#9e9e9e',
};

export const changeScrollbarStyle = (
  barColor = DEFAULT.BAR_COLOR,
  thumbColor = DEFAULT.THUMB_COLOR,
  thumbHoverColor = DEFAULT.THUMB_HOVER_COLOR,
) => ({
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
