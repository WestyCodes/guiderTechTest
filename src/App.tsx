import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import FavouritesPage from './pages/FavouritesPage';
import './App.css';

function App() {
    const photoData = {
        copyright: 'ARI-ZAH,\nUniv.  Heidelberg',
        date: '2014-01-17',
        explanation:
            "Big, bright, and beautiful, spiral galaxy M83 lies a mere twelve million light-years away, near the southeastern tip of the very long constellation Hydra. This deep view of the gorgeous island universe includes observations from Hubble, along with ground based data from the European Southern Observatory's very large telescope units, National Astronomical Observatory of Japan's Subaru telescope, and Australian Astronomical Observatory photographic data by D. Malin. About 40,000 light-years across, M83 is popularly known as the Southern Pinwheel for its pronounced spiral arms. But the wealth of reddish star forming regions found near the edges of the arms' thick dust lanes, also suggest another popular moniker for M83, the Thousand-Ruby Galaxy. Arcing near the top of the novel cosmic portrait lies M83's northern stellar tidal stream, debris from the gravitational disruption of a smaller, merging satellite galaxy. The faint, elusive star stream was found in the mid 1990s by enhancing photographic plates.",
        hdurl: 'https://apod.nasa.gov/apod/image/1401/M83StarstreamGendlerLLL.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'M83 Star Streams',
        url: 'https://apod.nasa.gov/apod/image/1401/M83StarstreamGendlerS.jpg',
    };

    const [photo, setPhoto] = useState({});

    useEffect(() => {
        fetch(
            'https://api.nasa.gov/planetary/apod?api_key=z6Bbf1PR8zgyIqDzVbxgdAEa6fPLGxf4ezArYdUa&count=1'
        )
            .then((response) => response.json())
            .then((res) => setPhoto(res[0]));
    }, []);

    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage photoData={photo} />} />
                    <Route path="/favourites" element={<FavouritesPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
