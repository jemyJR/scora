import { Container, Grid } from "@mui/material";
import CompetitionCard from "./CompetitionCard";

export default function CompetitionsGrid({ data }) {
  return (
    <Container sx={{ paddingBottom: 4 }}>
    <Grid container spacing={3}>
      {data.competitions.map((competition) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={competition.id}>
          <CompetitionCard competition={competition} />
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}
