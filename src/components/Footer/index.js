import React from 'react';
import './index.scss';

function Footer() {
    return(
        <div className='footer'>
            <div className='container-fluid social-icons my-3'>
            <i className="fa fa-facebook icon" aria-hidden="true"></i>
            <i className="fa fa-twitter icon"></i>
            <i className="fa fa-instagram icon" aria-hidden="true"></i>

            </div>
            <p className='copy'>© Turi, 2021. Hecho con  <span> ❤ </span>  para el Mundo</p>
        </div>
    )
}

export default(Footer);