import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './index.scss';

const BannerDashboard = () => {
    return (
        <div className="bannerDash">
            <div>
                <Link className="title" to='/'>TURI</Link>
            </div>
            <div className='titleDash'>
                <Link className="dashboard" to='/dashboard'>Dashboard</Link>
            </div>
            <div className="account" >
                <i class="fa fa-user-circle icon" aria-hidden="true"></i>
                <div>
                    <p className="name">John Doe</p>
                    <Link className="" to='/'>Cerrar sesión</Link>
                </div>
            </div>
        </div>
    )
}

//BannerComponent.propTypes = {
    //label: PropTypes.string.isRequired,
//}
 
export default BannerDashboard;