import { CalendarToday } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import CompetitionDetailsHeader from './competition details header/CompetitionDetailsHeader';
import CurrentSeasonCard from './CurrentSeasonCard';
import HistoricalSeason from './HistoricalSeason';

const CompetitionDetails = ({ data }) => {
    return (
        <Container>
            <CompetitionDetailsHeader data={data} />

            <CurrentSeasonCard data={data} />

            <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                <CalendarToday sx={{ fontSize: 36, mr: 2, color: '#C3CC5A' }} />
                Historical Seasons
            </Typography>
            <HistoricalSeason data={data} />
        </Container>
    );
};

export default CompetitionDetails;