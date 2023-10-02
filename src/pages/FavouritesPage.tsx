import {
    Avatar,
    Card,
    CardActionArea,
    Container,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Tooltip,
    Typography,
} from '@mui/material';

type FavouritesPageProps = {
    favouritePhotos: [object];
};
export const FavouritesPage = (props: FavouritesPageProps) => {
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
                Favourite Astronomy Pictures
            </Typography>
            <ImageList
                gap={12}
                sx={{
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(280px, 1fr))',
                }}
            >
                {props.favouritePhotos.map((photo) => {
                    return (
                        <Card>
                            <CardActionArea
                                sx={{
                                    height: '100%',
                                    backgroundColor: 'black',
                                }}
                                href={photo.hdurl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ImageListItem sx={{ height: '100%' }}>
                                    <img
                                        src={photo.url}
                                        alt={photo.title}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <ImageListItemBar
                                        title={photo.title}
                                        actionIcon={
                                            <Tooltip
                                                title={photo.title}
                                                sx={{ mr: '5px' }}
                                            >
                                                <Avatar src="https://npr.brightspotcdn.com/dims4/default/b71ca8f/2147483647/strip/true/crop/712x497+0+0/resize/880x614!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F97%2F78%2F10cab09e43f3a23ed3e1a1a7ce6a%2Fscreenshot-306.png" />
                                            </Tooltip>
                                        }
                                        position="top"
                                    />
                                </ImageListItem>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </ImageList>
        </Container>
    );
};
