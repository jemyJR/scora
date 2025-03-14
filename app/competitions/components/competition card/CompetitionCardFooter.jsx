import { Military } from '@mui/icons-material';
import { Box, Chip, Typography } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import { getPlanColor } from '../helpers';

export default function CompetitionCardFooter({ competition }) {
  return (
    <Box sx={{
        pt: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {competition.tier && (
            <Chip
              icon={<Military fontSize="small" />}
              label={`Tier ${competition.tier}`}
              size="small"
              sx={{
                fontWeight: 600,
                bgcolor: 'action.selected',
                '& .MuiChip-icon': {
                  fontSize: '16px',
                  ml: 0.5
                }
              }}
            />
          )}
          <Chip
            label={competition.plan.replace('_', ' ')}
            size="small"
            color={getPlanColor(competition.plan)}
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase'
            }}
          />
        </Box>

        <Typography variant="caption" sx={{
          color: 'text.secondary',
          fontSize: '0.7rem',
          whiteSpace: 'nowrap'
        }}>
          Updated {formatDistanceToNow(new Date(competition.lastUpdated))} ago
        </Typography>
      </Box>
  )
}
