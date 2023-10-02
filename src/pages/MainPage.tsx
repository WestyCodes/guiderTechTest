import { Container, Typography, Box, Paper, Button } from '@mui/material';

type MainPageProps = {
    photoData: {
        title: string;
        url: string;
    };
};

export const MainPage = (props: MainPageProps) => {
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
                            {props.photoData.title}
                        </Typography>
                        <Box
                            component="img"
                            sx={{
                                width: 350,
                                maxWidth: { xs: 350, md: 350 },
                            }}
                            alt={props.photoData.title + 'photo from nasa'}
                            src={props.photoData.url}
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
};
