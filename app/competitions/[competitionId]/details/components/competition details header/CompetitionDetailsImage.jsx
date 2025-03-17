import { Box, Grid } from "@mui/material";

export default function CompetitionDetailsImage({ image,objectFit= 'contain'}) {
    return (
        <Grid item xs={12} md={3} sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box
                component="img"
                src={image}
                sx={{
                    width: 120,
                    height: 120,
                    border: '3px solid #2d3436',
                    boxShadow: 4,
                    borderRadius: 3,
                    objectFit: objectFit,
                    padding: '8px',
                    backgroundColor: 'white'
                }}
            />
        </Grid>
    )
}
