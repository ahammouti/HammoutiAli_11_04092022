import React from 'react'
import logo from '../../assets/images/logo_footer.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={logo} alt="logo kasa" />
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer