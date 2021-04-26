import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import './index.scss';

const Navbar = ({toggle}) => {
return (
	<>
	<nav className="Nav">
			<div className="NavbarContainer">
				<Link className="NavLogo" to='/'>TURI</Link>
				<FaBars className="Bars" onClick={toggle} ></FaBars>
			</div>
			<div className="NavMenu">
				<Link className="NavLink" to='/pueblosmagicos'>Pueblos Mágicos</Link>
				<Link className="NavLink" to='/precios'>Precios</Link>
				<Link className="NavLink" to='/comunidad'>Comunidad</Link>
				<Link className="NavLink" to='/soport'>Soporte</Link>
			</div>
		<nav className="NavBtns">
			<nav className="NavBtnLogIn">
				<Link className="NavBtnLinkLogIn" to='/iniciarsesion'>Iniciar Sesion</Link>
			</nav>
			<nav className="NavBtnSignUp">
				<Link className="NavBtnLinkSignUp" to='/registrate'>Regístrate</Link>
			</nav>
		</nav>
	</nav>
	</>
);
};

export default Navbar;
