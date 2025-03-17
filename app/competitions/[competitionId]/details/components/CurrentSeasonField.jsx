import { Box, Typography } from "@mui/material";

export default function CurrentSeasonField({item}){
  return (
    <Box sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 2,
        p: 2,
    }}>
        <Typography variant="subtitle2" color="textSecondary">
            {item.label}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {item.value}
        </Typography>
    </Box>
  )
}
