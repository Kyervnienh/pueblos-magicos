import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './index.scss';
import Cookies from 'universal-cookie';
import Image from 'react-bootstrap/Image';

const cookies = new Cookies();
const baseURL = `${process.env.REACT_APP_BACKEND_URL}/uploads`;

const BannerDashboard = () => {
    const logOut = () => {
        cookies.remove('id', {path:"/"});
        cookies.remove('email', {path:"/"});
        cookies.remove('isLogged', {path:"/"});
        cookies.remove('name', {path:"/"});
        cookies.remove('username', {path:"/"});
        cookies.remove('isAdmin', {path:"/"});
        cookies.remove('image', {path:"/"});
        cookies.remove("token", { path: "/" });
        
        window.location.href = "./";
    };
    const name = cookies.get('name');
    const imgPath = cookies.get('image');

    return (
        <div className="bannerDash">
            <div>
                <Link className="title" to='/'>TURI</Link>
            </div>
            <div className='titleDash'>
                <Link className="dashboard" to='/dashboard'>Dashboard</Link>
            </div>
            <div className="account" >
            <Image src={`${baseURL}/${imgPath.substring(15, imgPath.length)}`} roundedCircle  className="d-inline-block align-top iconAccount"  width="60"
                  height="50" />
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