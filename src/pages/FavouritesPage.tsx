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

const astroPhotos = [
    {
        copyright: '\nDigitized Sky Survey,\nPalomar Observatory, \nSTScI\n',
        date: '2000-02-20',
        explanation:
            'Pictured are several galaxies of the Virgo Cluster, the closest cluster of galaxies to our Milky Way Galaxy.  The Virgo Cluster spans more than 5 degrees on the sky - about 10 times the angle made by a full Moon. It contains over 100 galaxies of many types - including spirals, ellipticals, and irregular galaxies.  The Virgo Cluster is so massive that it is noticeably pulling our Galaxy toward it.  The cluster contains not only galaxies filled with stars but also gas so hot it glows in X-rays.  Motions of galaxies in and around clusters indicate that they contain more dark matter than any visible matter we can see.  Notable bright galaxies in the Virgo Cluster include bright Messier objects such as M61, M87, M90, and M100.',
        hdurl: 'https://apod.nasa.gov/apod/image/0002/virgo_dss_big.gif',
        media_type: 'image',
        service_version: 'v1',
        title: 'The Virgo Cluster of Galaxies',
        url: 'https://apod.nasa.gov/apod/image/0002/virgo_dss.gif',
    },
    {
        copyright: 'Adam Block',
        date: '2010-01-30',
        explanation:
            "Charles Messier described the 88th entry in his 18th century catalog of Nebulae and Star Clusters as a spiral nebula without stars. Of course the gorgeous M88 is now understood to be a galaxy full of stars, gas, and dust, not unlike our own Milky Way. In fact, M88 is one of the brightest galaxies in the Virgo Galaxy Cluster some 50 million light-years away. M88's beautiful spiral arms are easy to trace in this colorful cosmic portait. The arms are lined with young blue star clusters, pink star-forming regions, and obscuring dust lanes extending from a yellowish core dominated by an older population of stars. Spiral galaxy M88 spans over 100,000 light-years.",
        hdurl: 'https://apod.nasa.gov/apod/image/1001/m88ms_block_crop.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Messier 88',
        url: 'https://apod.nasa.gov/apod/image/1001/m88ms_block_c900.jpg',
    },
    {
        copyright:
            '\n\nMike Simmons\n(Astronomers\nWithout Borders,\nTWAN)\n\n',
        date: '2008-08-31',
        explanation:
            "Contrary to the famous myth, you can't see the Great Wall of China from the Moon ... even during a total solar eclipse. But on August 1 you could see the Moon eclipsing the Sun from the Great Wall. In fact, from this location near the Great Wall's western end, the Moon completely blocked the Sun's overwhelming disk revealing a shimmering solar corona and bright planets in the briefly darkened sky. A main pass, The Great Wall's Jiayuguan Fort, is also silhouetted in the foreground. The pass is the western-most of the wall's passes and the best preserved, initially built around 1372 during the Ming dynasty. The nearby city of Jiayuguan in Gansu Province was an important stop on the Silk Road.",
        hdurl: 'https://apod.nasa.gov/apod/image/0808/tseJiayuguan_simmons1280.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Eclipse over the Great Wall',
        url: 'https://apod.nasa.gov/apod/image/0808/tseJiayuguan_simmons_small800.jpg',
    },
    {
        date: '1997-02-03',
        explanation:
            "Galaxies are made up of stars, but are all stars found within galaxies? Apparently not. Using the Hubble Space Telescope, researchers exploring the Virgo Cluster of galaxies have now found about 600 red giant stars adrift in intergalactic space. Above is an artist's vision of the sky from a hypothetical planet of such a lonely sun. The night sky on a world orbiting an intergalactic star would be a stark contrast to Earth's - which features a nightly parade of stars, all members of our own Milkyway galaxy. As suggested by the illustration, a setting swollen red sun would leave behind a dark sky speckled only with faint, fuzzy, apparitions of Virgo Cluster galaxies. Possibly ejected from their home galaxies during galaxy-galaxy collisions, these isolated suns may well represent part of a large, previously unseen stellar population, filling the the space between Virgo cluster galaxies.",
        hdurl: 'https://apod.nasa.gov/apod/image/9702/vcstars_illust_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Stars Without Galaxies\r\nCredit:',
        url: 'https://apod.nasa.gov/apod/image/9702/vcstars_illust.jpg',
    },
    {
        copyright: '\nWilliam McLaughlin\n(ARGO Cooperative Observatory)\n\n',
        date: '1999-06-17',
        explanation:
            "Presenting a sleek needle-like profile the magnificent spiral galaxy NGC 4565 is viewed edge-on from planet Earth. Its core of stars bulges from the centre of a thin disk of spiral arms and dust. The core appears to be cut sharply by dust lanes to dramatic effect in this composite image. NGC 4565's obscuring dust lanes and pronounced core are typical of large majestic spiral galaxies, including our own Milky Way. To make this picture, astronomer Bill McLaughlin digitally combined a high quality black and white image with colour information from three separate exposures through red, green, and blue filters. This island universe is about 50 million light-years away in the constellation Coma Berenices.",
        hdurl: 'https://apod.nasa.gov/apod/image/9906/ngc4565_mclaughlin_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'NGC 4565: Needle Galaxy',
        url: 'https://apod.nasa.gov/apod/image/9906/ngc4565_mclaughlin.jpg',
    },
    {
        copyright: 'Aman Chokshi',
        date: '2022-08-26',
        explanation:
            'Lights play around the horizon of this snowy little planet as it drifts through a starry night sky. Of course the little planet is actually planet Earth. Recorded on August 21, the digitally warped, nadir centered panorama covers nearly 360x180 degrees outside the Amundsen-Scott South Pole Station, Antarctica. The southernmost research outpost is near the horizon at the top where the light of dawn is approaching after nearly six months of darkness. Along the bottom is the ceremonial pole marker surrounded by the 12 flags of the original signatories of the Antarctic treaty, with a wild display of the aurora australis above.',
        hdurl: 'https://apod.nasa.gov/apod/image/2208/Chokshi_DSC7584_Panorama.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Little Planet South Pole',
        url: 'https://apod.nasa.gov/apod/image/2208/Chokshi_DSC7584_Panorama_c1024.jpg',
    },
    {
        copyright: '\nDean Rowe\n',
        date: '2006-10-21',
        explanation:
            "Clyde Tombaugh discovered planet Pluto in 1930 while surveying the skies with the 13-inch Lawrence Lowell Telescope. But the skilled and careful astronomer also went on to discover star clusters, comets, asteroids, and clusters of galaxies. For example, pictured is galactic or open star cluster Tombaugh 4 in the northern constellation Cassiopeia. Published in 1941, Tombaugh's description, based on his photographic images from the Lowell 13-inch, indicates the cluster is small and faint, and comprised of about 30 stars. Using the apparent brightness of the cluster stars he estimated the distance to be 20 to 30 thousand light-years, making Tombaugh 4 over 10 light-years in diameter. This deep color image, made with a modern ccd camera and another 13-inch telescope, includes the region's foreground stars and faint nebulosities.",
        hdurl: 'https://apod.nasa.gov/apod/image/0610/tombaugh4_rowe_f.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Tombaugh 4',
        url: 'https://apod.nasa.gov/apod/image/0610/tombaugh4_rowe_c50.jpg',
    },
    {
        date: '2003-04-05',
        explanation:
            "Since Saturn's axis is tilted as it orbits the Sun, Saturn has seasons, like those of planet Earth ... but Saturn's seasons last for over seven years. So what season is it on Saturn now? Orbiting the equator, the tilt of the rings of Saturn provides quite a graphic seasonal display. In fact, this month, Saturn's rings will reach their most \"open\" angle after appearing nearly edge on in the mid-1990s. The ringed planet is also well placed in evening skies providing a grand view as summer comes to Saturn's southern hemisphere and winter to the north. The Hubble Space Telescope took the above sequence of images about a year apart, starting on the left in 1996 and ending on the right in 2000.  Although they look solid, Saturn's Rings are likely less than 50 meters thick and consist of individually orbiting bits of ice and rock ranging in size from grains of sand to barn-sized boulders.",
        hdurl: 'https://apod.nasa.gov/apod/image/0304/saturnseasons_hst_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'The Seasons of Saturn',
        url: 'https://apod.nasa.gov/apod/image/0304/saturnseasons_hst.jpg',
    },
    {
        date: '1999-05-06',
        explanation:
            'Today, the space capsule Liberty Bell 7 rests about 3 miles below the surface of the Atlantic Ocean. But on July 21, 1961, astronaut Virgil I. "Gus" Grissom rode this tiny craft 118 miles above the Earth to become the second American in space. Grissom\'s flight was suborbital - like fellow Mercury astronaut Alan Shepard\'s first flight - however his capsule was different, with a window, a new manual spacecraft control system, and an explosive hatch. Unfortunately, after Grissom brought Liberty Bell 7 to a successful splash down in the planned area, the hatch blew prematurely and rough seas began to flood the capsule. While Grissom was able to get out, the military recovery helicopter could not lift the waterlogged spacecraft. This dramatic picture was taken from the helicopter shortly before Liberty Bell 7 was released and sank.',
        hdurl: 'https://apod.nasa.gov/apod/image/9905/libertybell7_rec_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Liberty Bell 7',
        url: 'https://apod.nasa.gov/apod/image/9905/libertybell7_rec.jpg',
    },
];

function FavouritesPage() {
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
                {astroPhotos.map((photo) => (
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
                ))}
            </ImageList>
        </Container>
    );
}

export default FavouritesPage;
