'use client';

import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

/**
 * The custom Material-UI theme for the application.
 *
 * @type {object}
 * @property {object} colorSchemes - The color schemes for the theme.
 * @property {boolean} colorSchemes.dark - Indicates if the dark mode is enabled.
 * @property {object} typography - Typography settings for the theme.
 * @property {string} typography.fontFamily - The font family used in the theme.
 */
export const theme: object = createTheme({
  colorSchemes: { dark: true },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
