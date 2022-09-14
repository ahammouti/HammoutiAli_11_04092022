import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch'
import SlideShow from '../../components/SlideShow/SlideShow';
import Accordion from '../../components/Accordion/Accordion';
import Rates from '../../components/Rates/Rates';
import Loader from '../../components/Loader/Loader';

const AccommodationSheetUi = () => {
    const url = "http://localhost:3000/logements.json"
    const { data: datas, loading } = useFetch(url);
    const { id } = useParams();
    if (datas === null) return;
    const [filteredAccommodation] = datas !== null ? datas.filter(logement => logement.id.toLowerCase().includes(id)) : "";
    console.log(filteredAccommodation)
    return (
        <main className='accommodationUi'>
            <div className='containerSlideShow'>
                <SlideShow dataSlideShow={filteredAccommodation} />
            </div>
            <div className="accommodationUi__container-rightAndLeft">
                <div className="accommodationUi__left">
                    <div className="accommodationUi__title">
                        <h1>{filteredAccommodation.title}</h1>
                    </div>
                    <div className="accommodationUi__location">
                        <p>{filteredAccommodation.location}</p>
                    </div>
                    <div className="accommodationUi__tags">
                        {filteredAccommodation.tags.map((tag, index) =>
                            <ul key={index}>
                                <li className='accommodationUi__tag'>{tag}</li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="accommodationUi__right">
                    <div className="accommodationUi__ratesAndProfilpicture">
                        <Rates rating={filteredAccommodation.rating} />
                        <div className="profile">
                            <p className="profile__name">{filteredAccommodation.host.name}</p>
                            {loading ? <Loader color="#ff6060" /> : <img className='profile__picture' src={filteredAccommodation.host.picture} alt="" />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="accommodationUi__accordion">
                <ul>
                    <li>
                        <Accordion title="Description">{filteredAccommodation.description}</Accordion>
                    </li>
                    <li>
                        <Accordion title="Equipements">
                            {filteredAccommodation.equipments.map((equip, index) => {
                                return (
                                    <ul key={index}>
                                        <li>{equip}</li>
                                    </ul>
                                )
                            })
                            }
                        </Accordion>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default AccommodationSheetUi;