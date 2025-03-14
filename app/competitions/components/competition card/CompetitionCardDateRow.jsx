import { CalendarMonth, EventAvailable, EventBusy } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function CompetitionCardDateRow({ competition}) {
    const startDate = new Date(competition.currentSeason.startDate).toLocaleDateString();
    const endDate = new Date(competition.currentSeason.endDate).toLocaleDateString();
    const matchday = competition.currentSeason.currentMatchday;
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
        '& > div': {
          flex: 1,
          textAlign: 'center',
        }
      }}>
        
        {/* Start Date */}
        <Box> 
          <EventAvailable fontSize="large" sx={{ color: 'text.secondary'}} />
          <Typography variant="caption" display="block" fontWeight={500}>
            Start
          </Typography>
          <Typography variant="body2" fontSize="0.75rem">
            {startDate}
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ color: 'divider' }}>|</Typography>

        {/* End Date */}    
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <EventBusy fontSize="large" sx={{ color: 'text.secondary'}} />
          <Typography variant="caption" display="block" fontWeight={500}>
            End
          </Typography>
          <Typography variant="body2" fontSize="0.75rem">
            {endDate}
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ color: 'divider' }}>|</Typography>

        {/* Matchday */}
        <Box>
          <CalendarMonth fontSize="large" sx={{ color: 'text.secondary'}} />
          <Typography variant="caption" display="block" fontWeight={500}>
            Matchday
          </Typography>
          <Typography variant="body2" fontSize="0.75rem">
            {matchday}
          </Typography>
        </Box>

      </Box>
  )
}
