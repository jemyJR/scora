'use client';
import { SportsSoccer } from '@mui/icons-material';
import { AppBar, Box, keyframes, Toolbar, Typography } from '@mui/material';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function CustomAppBar({ title, icon: Icon = SportsSoccer }) {
  return (
    <AppBar position="static" sx={{
      mb: 4,
      backgroundColor: 'rgba(195, 204, 90, 0.40)', 
      backgroundImage: 'linear-gradient(to right, hsla(65, 52.80%, 57.60%, 0.10) 0%, rgba(195, 204, 90, 0.05) 50%, rgba(195, 204, 90, 0.1) 100%)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid rgba(195, 204, 90, 0.15)',
      animation: `${fadeIn} 0.6s ease-out`,
      height: '100px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Toolbar sx={{
        justifyContent: 'space-between',
        px: 3,
        '&:before': {
          background: 'linear-gradient(120deg, rgba(195, 204, 90, 0.05) 0%, transparent 50%, rgba(195, 204, 90, 0.05) 100%)',
        }
      }}>
        {/* Left Section */}
        <Box sx={{ display: 'flex' }}>
          <Icon sx={{
            fontSize: '2rem',
            color: '#c3cc5a',
          }} />
        </Box>

        {/* Center Section */}
        <Typography variant="h5" component="div" sx={{
          fontStyle: 'italic',
          fontWeight: 300,
          letterSpacing: 4,
          color: '#c3cc5a',
          textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -4,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '1px',
            background: 'rgba(195, 204, 90, 0.3)',
            borderRadius: '2px'
          }
        }}>
          {title}
        </Typography>

        {/* Right Section */}
        <Box sx={{ display: 'flex' }}>
          <Icon sx={{
            fontSize: '2rem',
            color: '#c3cc5a',
          }} />
        </Box>
        
      </Toolbar>
    </AppBar>
  )
}
