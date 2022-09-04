import React from 'react';
import useFetch from '../../useFetch';
import CardAccommodation from '../CardAccommodation/CardAccommodation';

const GalleryAccommodation = () => {
    const url = "http://localhost:3000/logements.json"
    const { data: datas } = useFetch(url);

    return (
        <div className="cardItem">
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