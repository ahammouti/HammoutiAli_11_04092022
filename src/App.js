import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/style.scss'
import AboutUi from './views/AboutUi/AboutUi';
import AccommodationSheetUi from './views/AccommodationSheetUi/AccommodationSheetUi';
import HomeUi from './views/HomeUi/HomeUi';
import Header from './components/Header/Header.js';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route element={<HomeUi />} path="/" />
        <Route element={<AccommodationSheetUi />} path="/fiche-logement/:id/:id" />
        <Route element={<AboutUi />} path="/a-propos" />
      </Routes>
    </div>
  )
}

export default App;