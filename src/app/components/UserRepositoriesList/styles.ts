import { changeScrollbarStyle } from 'utils/changeScrollbarStyle';

export const listStyle = {
  height: 'calc(100% - 3.35rem)',
  overflowY: 'auto',
  overflowX: 'hidden',

  ...changeScrollbarStyle(),
};

export const hoverableElementStyle = {
  svg: {
    display: 'none',
  },

  '&:hover svg': {
    display: 'block',
  },
};
