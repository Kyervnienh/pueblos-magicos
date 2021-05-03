import React, { useState, useEffect } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './index.scss';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const NavbarMenu = ({toggle, logOut}) => {

	const name = cookies.get('name');

	const [isLogged, setisLogged] = useState(false);

	useEffect(() => {
		if(cookies.get('username')) {
			setisLogged(true);
		}
		else {
			setisLogged(false)
		}
	  }, []);
return ( isLogged ?
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
			<div className="UserCircle">
				<FaUserCircle size={50}></FaUserCircle>
			</div>
			<div className="LogOutBtn">
				<DropdownButton className="WelcomeButton"
				variant="outline-secondary"
				title={name}
				id="input-group-dropdown-1"
				>
					<Dropdown.Item onClick={logOut}>Cerrar Sesión</Dropdown.Item>
				</DropdownButton>
			</div>
		</nav>
		</Navbar>
	</>
	:
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