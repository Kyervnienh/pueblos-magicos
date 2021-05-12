import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../components/NotFound/index';
import Footer from '../../components/Footer/index';
import './index.scss';
import NavSidebar from '../../components/NavSidebar';


const NotFoundPage = () => {
    return (
        <>
            <NavSidebar />
            <div className="container text-center">
                <h1 className="notFound__h1">404</h1>
                <NotFound>
                    Ups! No pudimos encontrar la página que buscabas :(
                </NotFound>
                <Link className="notFound__link" to="/">Ir a la página principal</Link>
            </div>
            <Footer />
        </>
    )
}

export default NotFoundPage