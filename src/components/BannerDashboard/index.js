import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './index.scss';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const BannerDashboard = () => {
    const logOut = () => {
        cookies.remove('id', {path:"/"});
        cookies.remove('email', {path:"/"});
        cookies.remove('isLogged', {path:"/"});
        cookies.remove('name', {path:"/"});
        cookies.remove('username', {path:"/"});
        cookies.remove('isAdmin', {path:"/"});
        window.location.href = "./";
    };
    const name = cookies.get('name');
    return (
        <div className="bannerDash">
            <div>
                <Link className="title" to='/'>TURI</Link>
            </div>
            <div className='titleDash'>
                <Link className="dashboard" to='/dashboard'>Dashboard</Link>
            </div>
            <div className="account" >
                <i className="fa fa-user-circle iconAccount" aria-hidden="true"></i>
                <div>
                    <p className="name">{name}</p>
                    <Link className="" to='/' onClick={logOut}>Cerrar sesión</Link>
                </div>
            </div>
        </div>
    )
}

//BannerComponent.propTypes = {
    //label: PropTypes.string.isRequired,
//}
 
export default BannerDashboard;