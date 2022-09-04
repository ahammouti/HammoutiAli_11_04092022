import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='menu'>
            <Link className='menu__link' to="/">Accueil</Link>
            <Link className='menu__link' to="/a-propos">A propos</Link>
        </nav>
    )
}

export default Navbar