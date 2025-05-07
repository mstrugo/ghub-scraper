import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { DEFAULT_LANGUAGE } from 'constants/lang';
import { theme } from 'constants/theme';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | GitHub Scraper Challenge App',
    default: 'Home',
  },
  description: 'Scrape GitHub Users and display them in a user-friendly way.',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang={DEFAULT_LANGUAGE}>
      <body style={{ background: '#121212' }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid
              component="main"
              container
              gap={4}
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              maxWidth="lg"
              margin="0 auto"
              overflow="hidden"
              height="100vh"
              wrap="nowrap"
              padding={{ xs: 3, md: 8 }}>
              {children}
            </Grid>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
