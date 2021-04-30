import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.scss';

const NavbarMenu = ({toggle}) => {
return (
	<>
	<Navbar>
		<Link className="NavLogoSignUp" to='/'>TURI</Link>
		<FaBars className="Bars" onClick={toggle} ></FaBars>
		<div className="NavMenu">
			<Nav.Link className="NavLink" href="/pueblosmagicos">Pueblos Mágicos</Nav.Link>
			<Nav.Link className="NavLink" href="/precios">Precios</Nav.Link>
			<Nav.Link className="NavLink" href="/comunidad">Comunidad</Nav.Link>
			<Nav.Link className="NavLink" href="/soporte">Soporte</Nav.Link>
		</div>
		<nav className="NavBtns">
			<nav className="NavBtnLogIn">
				<Link className="NavBtnLinkLogIn" to='/iniciarsesion'>Iniciar Sesion</Link>
			</nav>
			<nav className="NavBtnSignUp">
				<Link className="NavBtnLinkSignUp" to='/registrate'>Regístrate</Link>
			</nav>
		</nav>
		</Navbar>
	</>
);
};

export default NavbarMenu;