import { Box } from "@mui/material";

export default function CompetitionCardFlag({ competition }) {
  return (
    <Box sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1,
        bgcolor: 'background.paper',
        borderRadius: '4px',
        p: 0.5,
        boxShadow: 1
      }}>
        <img
          src={competition.area.flag}
          alt={competition.area.name}
          style={{
            height: '24px',
            width: '32px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </Box>
  )
}
