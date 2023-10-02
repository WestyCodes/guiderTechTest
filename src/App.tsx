// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FavouritesPage from './pages/FavouritesPage';
import './App.css';

function App() {
    // const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/favourites" element={<FavouritesPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
