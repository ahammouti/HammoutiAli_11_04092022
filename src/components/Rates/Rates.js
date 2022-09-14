import React from 'react'
import Star from '../../assets/icons/stars.svg.js'

const Rates = ({ rating }) => {
    return (
        <ul className='rates'>
            <li>
                {rating >= 1 ? <Star fill="#FF6060" /> : <Star fill="#e3e3e3" />}
            </li>
            <li>
                {rating >= 2 ? <Star fill="#FF6060" /> : <Star fill="#e3e3e3" />}

            </li>
            <li>
                {rating >= 3 ? <Star fill="#FF6060" /> : <Star fill="#e3e3e3" />}

            </li>
            <li>
                {rating >= 4 ? <Star fill="#FF6060" /> : <Star fill="#e3e3e3" />}

            </li>
            <li>
                {rating >= 5 ? <Star fill="#FF6060" /> : <Star fill="#e3e3e3" />}

            </li>
        </ul>
    )
}

export default Rates