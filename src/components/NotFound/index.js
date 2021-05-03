import React from 'react';
import { Link } from 'react-router-dom';
import noDataImg from '../../assets/icons/nodata.jpg';
import './index.scss'

function NotFound() {
    return (
        <div className="container notFound">
            <Link className="IconSignIn" to="/">TURI</Link>
            <div className="text-center noData">
                <h1 className="notFound__h1">404</h1>
                <img src={noDataImg} alt="https://www.freepik.com/vectors/data" className='imgNoData' />
                <p className="notFound__txt">Ups! no pudimos encontrar la página que buscabas :(</p>
                <Link className="notFound__link" to="/">Ir a la página principal</Link>
            </div>
        </div>
    );
}

export default NotFound;