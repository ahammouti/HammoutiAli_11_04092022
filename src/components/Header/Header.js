import React from 'react';
import Navbar from '../Navbar/Navbar';

import logoKasa from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src={logoKasa} alt="logo kasa" />
            <Navbar />
        </div>
    )
}

export default Header;