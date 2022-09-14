import React, { useState } from 'react';
import Chevron from '../../assets/icons/chevron.svg';

const Accordion = (props) => {
    const [toggleAccordion, setToggleAccordion] = useState(false);

    const handleClickAccordion = () => {
        setToggleAccordion(!toggleAccordion)
    }

    return (
        <>
            <div onClick={handleClickAccordion} className="accordion__container-title">
                <div className='accordion__title'>{props.title}</div>
                <img className={toggleAccordion ? 'accordion__title-chevronIcon rotate' : 'accordion__title-chevronIcon'} src={Chevron} alt={"dérouler la section " + props.title.toLowerCase()} />
            </div>
            <div className={toggleAccordion ? "accordion__details display-accordion" : "accordion__details"}>
                {props.children}
            </div>
        </>
    )
}

export default Accordion