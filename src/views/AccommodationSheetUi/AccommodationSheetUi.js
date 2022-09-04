import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch'
import SlideShow from '../../components/SlideShow/SlideShow';

const AccommodationSheetUi = () => {
    const url = "http://localhost:3000/logements.json"
    const { data: datas } = useFetch(url);
    const { id } = useParams();
    if (datas === null) return;
    const [filterAccommodation] = datas !== null ? datas.filter(logement => logement.id.toLowerCase().includes(id)) : "";
    console.log("url id : ", id);

    return (
        <div>
            {datas ? console.log(filterAccommodation.pictures[0]) : ""}
            <SlideShow dataSlideShow={filterAccommodation} />
        </div>
    )
}

export default AccommodationSheetUi;