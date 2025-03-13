'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C3CC5A',
      contrastText: '#ffffff', 
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#C3CC5A !important',
        },
      },
    },
  },
});

export default theme;