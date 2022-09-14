import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

import logoKasa from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={logoKasa} alt="logo kasa" />
            </Link>
            <Navbar />
        </header>
    )
}

export default Header;