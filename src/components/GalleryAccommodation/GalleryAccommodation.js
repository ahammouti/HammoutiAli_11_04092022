import React from 'react';
import useFetch from '../../useFetch';
import CardAccommodation from '../CardAccommodation/CardAccommodation';

const GalleryAccommodation = () => {
    const url = process.env.REACT_APP_BASE_URL;
    const { data: datas } = useFetch(url);

    return (
        <div className="gallery">
            {datas !== null ?
                datas.map(cardItem => {
                    return (
                        <CardAccommodation key={cardItem.id} accommodation={cardItem} />
                    )
                }) : ""
            }
        </div>
    )
}

export default GalleryAccommodation;