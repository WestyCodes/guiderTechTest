import { Container, Typography, Box, Paper, Button } from '@mui/material';

const testData = [
    {
        copyright: 'ARI-ZAH,\nUniv.  Heidelberg',
        date: '2014-01-17',
        explanation:
            "Big, bright, and beautiful, spiral galaxy M83 lies a mere twelve million light-years away, near the southeastern tip of the very long constellation Hydra. This deep view of the gorgeous island universe includes observations from Hubble, along with ground based data from the European Southern Observatory's very large telescope units, National Astronomical Observatory of Japan's Subaru telescope, and Australian Astronomical Observatory photographic data by D. Malin. About 40,000 light-years across, M83 is popularly known as the Southern Pinwheel for its pronounced spiral arms. But the wealth of reddish star forming regions found near the edges of the arms' thick dust lanes, also suggest another popular moniker for M83, the Thousand-Ruby Galaxy. Arcing near the top of the novel cosmic portrait lies M83's northern stellar tidal stream, debris from the gravitational disruption of a smaller, merging satellite galaxy. The faint, elusive star stream was found in the mid 1990s by enhancing photographic plates.",
        hdurl: 'https://apod.nasa.gov/apod/image/1401/M83StarstreamGendlerLLL.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'M83 Star Streams',
        url: 'https://apod.nasa.gov/apod/image/1401/M83StarstreamGendlerS.jpg',
    },
];

function MainPage() {
    return (
        <Container>
            <Typography
                variant="h1"
                sx={{
                    my: 4,
                    textAlign: 'center',
                    color: 'primary.main',
                }}
            >
                Random Astronomy Pictures
            </Typography>
            <Typography variant="h2">from NASA's APOTD Archive</Typography>
            <Box
                sx={{
                    pt: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    gap: 4,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{ m: 'auto', width: { xs: 1, md: 300, lg: 400 } }}
                >
                    <Box sx={{ m: 3 }}>
                        <Typography variant="h3">
                            {testData[0].title}
                        </Typography>
                        <Box
                            component="img"
                            sx={{
                                width: 350,
                                maxWidth: { xs: 350, md: 350 },
                            }}
                            alt={testData[0].title + 'photo from nasa'}
                            src={testData[0].url}
                        />
                        <Button variant="contained" sx={{ mt: 2, mx: 2 }}>
                            Next
                        </Button>
                        <Button variant="contained" sx={{ mt: 2, mx: 2 }}>
                            Save
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default MainPage;
