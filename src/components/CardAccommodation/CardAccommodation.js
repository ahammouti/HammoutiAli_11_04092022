import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../../useFetch';
import Loader from '../Loader/Loader';

const CardAccommodation = (props) => {
    const { loading } = useFetch();
    const pathAccommodation = props.accommodation.title.toLowerCase().replace("-", " ").replace(/\s+/g, '-');

    return (
        <div className="cardItem">
            <ul>
                <li>
                    <Link to={`/fiche-logement/${pathAccommodation}/${props.accommodation.id}`}>
                        <article className="cardItem__card">
                            {
                                loading === true ? <Loader /> :
                                    <>
                                        <h3 className="cardItem__titleCard">{props.accommodation.title}</h3>
                                        <img src={props.accommodation.cover} className="cardItem__imgCard" alt="" />
                                    </>
                            }
                        </article>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default CardAccommodation