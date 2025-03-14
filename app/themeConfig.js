'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    brand: {
      main: '#C3CC5A',
      transparent: '#C3CC5A4D'
    }
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