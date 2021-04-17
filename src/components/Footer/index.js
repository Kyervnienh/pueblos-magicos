import React from 'react';
import './index.scss';

function Footer() {
    return(
        <div className='footer'>
            <div className='container-fluid social-icons my-3'>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>

            </div>
            <p className='copy'>© Turi, 2021. Hecho con  <span> ❤ </span>  para el Mundo</p>
        </div>
    )
}

export default(Footer);