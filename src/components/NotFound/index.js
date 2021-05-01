import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

function NotFound() {
    return (
        <div className="container notFound">
            <Link className="IconSignIn" to="/">TURI</Link>
            <div className="text-center">
                <h1 className="notFound__h1">404</h1>
                <p className="notFound__txt">Ups! no pudimos encontrar la página que buscabas :(</p>
                <Link className="notFound__link" to="/">Ir a la página principal</Link>
            </div>
        </div>
    );
}

export default NotFound;