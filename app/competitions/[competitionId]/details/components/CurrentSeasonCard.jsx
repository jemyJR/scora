import { EmojiEvents } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import CurrentSeasonField from "./CurrentSeasonField";

export default function CurrentSeasonCard({ data }) {
    return (
        <Card sx={{
            mb: 4,
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
            <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                    <EmojiEvents sx={{ fontSize: 36, mr: 2, color: '#C3CC5A' }} />
                    Current Season
                </Typography>
                <Grid container spacing={3}>
                    {[
                        { label: 'Start Date', value: data.currentSeason.startDate },
                        { label: 'End Date', value: data.currentSeason.endDate },
                        { label: 'Matchday', value: data.currentSeason.currentMatchday }
                    ].map((item, index) => (
                        <Grid key={index} item xs={12} md={4}>
                            <CurrentSeasonField item={item} />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}
