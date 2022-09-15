import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/style.scss'
import AboutUi from './views/AboutUi/AboutUi';
import AccommodationSheetUi from './views/AccommodationSheetUi/AccommodationSheetUi';
import HomeUi from './views/HomeUi/HomeUi';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';
import NotFoundUi from './views/NotFoundUi/NotFoundUi';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route element={<HomeUi />} path="/" />
          <Route element={<AccommodationSheetUi />} path="/fiche-logement/:id/:id" />
          <Route element={<AboutUi />} path="/a-propos" />
          <Route element={<NotFoundUi />} path="*" />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;