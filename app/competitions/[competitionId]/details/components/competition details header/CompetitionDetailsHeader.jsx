import { Grid, Typography } from '@mui/material'
import CompetitionDetailsImage from './CompetitionDetailsImage'
import CountryAndTypeRow from './CountryAndTypeRow'

export default function CompetitionDetailsHeader({data}) {
  return (
    <Grid container sx={{
        p: 4,
        my: 4,
        borderRadius: 3,
        background: 'linear-gradient(145deg, #9CA84A 0%, #C3CC5A 100%)',
        color: '#2d3436',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        alignItems: 'center',
        justifyContent: 'space-between',      
    }}>

        <CompetitionDetailsImage image={data.emblem} />

        <Grid item xs={12} md={6} sx={{
            textAlign: 'center',
            p: 2
        }}>
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    fontWeight: 800,
                    letterSpacing: '0.5px',
                    mb: 1.5,
                    textTransform: 'uppercase',
                    textShadow: '0 2px 8px rgba(255,255,255,0.2)',
                }}
            >
                {data.name}
            </Typography>

            <CountryAndTypeRow data={data} />
        </Grid>

        <CompetitionDetailsImage image={data.area.flag} objectFit='cover' />
    </Grid>
  )
}
