import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { FavouritesPage } from './pages/FavouritesPage';
import './App.css';

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
];

function App() {
    const [photo, setPhoto] = useState({});
    const [favouritePhotos, setFavouritePhotos] = useState([{}]);
    const [reloadPhoto, setReloadPhoto] = useState(false);

    useEffect(() => {
        setFavouritePhotos(astroPhotos);
        fetch(
            'https://api.nasa.gov/planetary/apod?api_key=z6Bbf1PR8zgyIqDzVbxgdAEa6fPLGxf4ezArYdUa&count=1'
        )
            .then((response) => response.json())
            .then((res) => setPhoto(res[0]));
    }, [reloadPhoto]);

    return (
        <>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainPage
                                photoData={photo}
                                reloadPhoto={reloadPhoto}
                                setReloadPhoto={setReloadPhoto}
                                favouritePhotos={favouritePhotos}
                                setFavouritePhotos={setFavouritePhotos}
                            />
                        }
                    />
                    <Route
                        path="/favourites"
                        element={
                            <FavouritesPage favouritePhotos={favouritePhotos} />
                        }
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
