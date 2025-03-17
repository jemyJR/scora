import { EmojiEvents, SportsSoccer } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

export default function CountryAndTypeRow({data}) {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Typography variant="h6" sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
        }}>
            <SportsSoccer sx={{
                fontSize: 32,
                color: '#2d3436'
            }} />
            <span>{data.area.name}</span>
            <Box component="span" sx={{
                width: 4,
                height: 4,
                bgcolor: '#2d3436',
                borderRadius: '50%'
            }} />
            <EmojiEvents
                sx={{
                    fontSize: 32,
                    color: '#2d3436'
                }} />
            <span>{data.type}</span>
        </Typography>
    </Box>
  )
}