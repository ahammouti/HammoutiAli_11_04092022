import React, { useState } from 'react';
import chevron from '../../assets/icons/chevron.svg';
import useFetch from '../../useFetch';
import Loader from '../Loader/Loader';

const SlideShow = ({ dataSlideShow }) => {
    const [currentIndex, setcurrentIndex] = useState(0);
    const bgImg = dataSlideShow.pictures[currentIndex];
    const { loading } = useFetch();
    const totalPictures = dataSlideShow.pictures.length;
    if (dataSlideShow === undefined) return;

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? dataSlideShow.pictures.length - 1 : currentIndex - 1;
        setcurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === dataSlideShow.pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setcurrentIndex(newIndex);
    }

    return (
        <div className='slide'>
            <div className={totalPictures === 1 ? 'slide__arrow slide__leftArrow hidden' : 'slide__arrow slide__leftArrow'} onClick={goToPrevious}>
                <img className='slide__chevron slide__chevron-left' src={chevron} alt="" />
            </div>
            <div className={totalPictures === 1 ? 'slide__arrow slide__rightArrow hidden' : 'slide__arrow slide__rightArrow'} onClick={goToNext}>
                <img className='slide__chevron slide__chevron-right' src={chevron} alt="" />
            </div>
            <div className="slide__counter">{currentIndex + 1}/{totalPictures}</div>
            {loading === true ? <Loader /> : <img className='slide__img' src={bgImg} alt={dataSlideShow.title} />}
        </div>
    )
}

export default SlideShow;