import { Card, CardContent, CardMedia } from '@mui/material';
import CompetitionCardDateRow from './competition card/CompetitionCardDateRow';
import CompetitionCardFlag from './competition card/CompetitionCardFlag';
import CompetitionCardFooter from './competition card/CompetitionCardFooter';
import CompetitionCardHeader from './competition card/CompetitionCardHeader';

export default function CompetitionCard({ competition }) {


  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 3
      }
    }}>
      {/* Flag Container */}
      {competition.area.flag && (
        <CompetitionCardFlag competition={competition} />
      )}

      <CardMedia
        component="img"
        height="140"
        image={competition.emblem}
        alt={competition.name}
        sx={{
          objectFit: 'contain',
          p: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }}
      />

      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pt: 1
      }}>
        <CompetitionCardHeader competition={competition} />

        <CompetitionCardDateRow competition={competition} />

        <CompetitionCardFooter competition={competition} />

      </CardContent>
    </Card>
  )
}