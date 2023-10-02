import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import FavouritesPage from './pages/FavouritesPage';
import './App.css';

function App() {
    const [photo, setPhoto] = useState({});
    const [reloadPhoto, setReloadPhoto] = useState(false);

    useEffect(() => {
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
                            />
                        }
                    />
                    <Route path="/favourites" element={<FavouritesPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
