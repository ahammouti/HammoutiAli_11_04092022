import React from 'react';
import Accordion from '../../components/Accordion/Accordion.js';
import mountain from '../../assets/images/mountain.png';
import useFetch from '../../useFetch.js';

const AboutUi = () => {
    const url = "http://localhost:3000/logements.json"
    const { data: datas } = useFetch(url);

    if (datas === null) return;

    return (
        <main className='aboutUi'>
            <div className="aboutUi__heroBanner">
                <img className='hero__img' src={mountain} alt="" />
            </div>
            <div className="aboutUi__accordion">
                <ul>
                    <li>
                        <Accordion title='Fiabilité'><p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes</p></Accordion>
                    </li>
                    <li>
                        <Accordion title='Respect'><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></Accordion>
                    </li>
                    <li>
                        <Accordion title='Service'><p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p></Accordion>
                    </li>
                    <li>
                        <Accordion title='Sécurité'><p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p></Accordion>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default AboutUi;