import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import LinearProgress from '@mui/material/LinearProgress';
import { DashboardLayout } from '@toolpad/core';
import { NextAppProvider } from '@toolpad/core/nextjs';
import React from 'react';
import theme from './themeConfig';


export const metadata = {
  title: "Scora",
  description: "Scora is a football website that provides the latest news, fixtures, and results.",
};

const NAVIGATION = [
  { 
    segment: 'home',
    title: 'Home',
    icon: <HomeIcon />,
  },
  { 
    segment: 'competitions',
    title: 'Competitions',
    icon: <EmojiEventsIcon />,
  },
  { 
    segment: 'teams',
    title: 'Teams',
    icon: <GroupsIcon />,
  },
  { 
    segment: 'persons',
    title: 'Persons',
    icon: <PersonIcon />,
  },
  { 
    segment: 'matches',
    title: 'Matches',
    icon: <SportsSoccerIcon />,
  },
];

const BRANDING = {
  title: <Typography variant="h6" color="#C3CC5A" fontWeight="700"  fontStyle={{fontStyle: 'italic'}}>Scora</Typography>,
  logo: <SportsSoccerIcon sx={{ color: '#C3CC5A' }}  fontSize="large" />,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider navigation={NAVIGATION} branding={BRANDING}>
            <DashboardLayout> 
                {children}
              </DashboardLayout>
            </NextAppProvider>
          </React.Suspense>
        </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}