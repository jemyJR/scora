import { EmojiEvents } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function CompetitionCardHeader({ competition }) {
  return (
    <Box sx={{ mb: 2, position: 'relative' }}>
    {/* Competition Name */}
    <Typography variant="h6" sx={{
      fontWeight: 700,
      lineHeight: 1.2,
      pr: competition.currentSeason.winner ? 12 : 4,
      '& span': {
        display: 'block',
        color: 'text.secondary',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        mt: 0.5
      }
    }}>
      <div style={{
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {competition.name}
      </div>
      <span>{competition.type}</span>
    </Typography>

    {/* Champion Badge */}
    {competition.currentSeason.winner && (
      <Box sx={{
        position: 'absolute',
        right: 0,
        top: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        bgcolor: 'background.paper',
        p: 0.5,
        borderRadius: 1,
        boxShadow: 1,
        border: '1px solid',
        borderColor: 'divider'
      }}>
        <EmojiEvents fontSize="small" sx={{ color: 'goldenrod' }} />
        <Typography variant="body2" fontSize="0.75rem" fontWeight={600}>
          {competition.currentSeason.winner.name}
        </Typography>
      </Box>
    )}
  </Box>
  )
}
