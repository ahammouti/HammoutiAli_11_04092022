import React from 'react'
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/notfound.png'

const NotFoundUi = () => {
    return (
        <main className='notFoundUi'>
            <img src={notFound} className='notFoundUi__title' alt='' />
            <h3 className='notFoundUi__description'>Oups! La page que vous demandez n'existe pas.</h3>
            <Link to='/' className='notFoundUi__link'>Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default NotFoundUi;