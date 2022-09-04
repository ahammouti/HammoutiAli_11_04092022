import React from 'react';
import heroImg from '../../assets/images/background_img.png'
import GalleryAccommodation from '../../components/GalleryAccommodation/GalleryAccommodation.js';

const HomeUi = () => {
    return (
        <main className='container'>
            <div className="hero__banner">
                <h1 className='hero__title'>Chez vous, <br /> partout et ailleurs</h1>
                <img className='hero__img' src={heroImg} alt="" />
            </div>
            <GalleryAccommodation />
        </main>
    )
}

export default HomeUi;