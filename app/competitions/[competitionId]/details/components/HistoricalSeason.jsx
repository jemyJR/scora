import { formatSeasonYear } from '@/app/helpers';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
export default function HistoricalSeason({data}) {
    return (
        <TableContainer
            component={Paper}
            sx={{
                mb:4,
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                overflow: 'hidden',
            }}
        >
            <Table sx={{
                '& th': {
                    fontWeight: 700,
                    background: 'rgba(255, 255, 255, 0.05)',
                    fontSize: '1.1rem',
                    py: 3
                },
                '& td': {
                    py: 2.5,
                    transition: 'background 0.2s'
                },
                '& tr:hover td': {
                    background: 'rgba(52, 152, 219, 0.05)'
                }
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ pl: 4 }}>Season</TableCell>
                        <TableCell>Champion</TableCell>
                        <TableCell>Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.seasons.map((season) => (
                        season.winner ?
                            <TableRow key={season.id} hover>
                                <TableCell sx={{ pl: 4, fontWeight: 500 }}>
                                    {formatSeasonYear(season.startDate)}/{formatSeasonYear(season.startDate) + 1}
                                </TableCell>
                                <TableCell>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box
                                            component="img"
                                            src={season.winner.crest}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                mr: 2,
                                            }}
                                        />
                                        <Box>
                                            <Typography sx={{ fontWeight: 500 }}>{season.winner.shortName}</Typography>
                                            <Typography variant="caption" color="textSecondary">
                                                {season.winner.name}
                                            </Typography>
                                        </Box>
                                    </Box>

                                </TableCell>
                                <TableCell>
                                    {new Date(season.startDate).toLocaleDateString()} –{' '}
                                    {new Date(season.endDate).toLocaleDateString()}
                                </TableCell>

                            </TableRow>
                            : null
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
