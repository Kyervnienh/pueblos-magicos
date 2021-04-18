import React, {useState, useEffect} from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtnSignIn,
NavBtnLinkSignIn,
NavBtnSignUp,
NavBtnLinkSignUp,
NavBtns,
NavbarContainer,
NavLogo
} from './NavbarElements';

const Navbar = ({toggle}) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if(window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);
return (
	<>
	<Nav scrollNav={scrollNav}>
        <NavbarContainer >
            <NavLogo to='/'>TURI</NavLogo>
            <Bars onClick={toggle} />
        </NavbarContainer>
		<NavMenu>
		<NavLink to='/pueblosmagicos' activeStyle>
			Pueblos Mágicos
		</NavLink>
		<NavLink to='/precios' activeStyle>
			Precios
		</NavLink>
		<NavLink to='/comunidad' activeStyle>
			Comunidad
		</NavLink>
		<NavLink to='/soporte' activeStyle>
			Soporte
		</NavLink>
		</NavMenu>
        <NavBtns>
		<NavBtnSignIn>
		<NavBtnLinkSignIn to='/iniciarsesion'>Iniciar sesión</NavBtnLinkSignIn>
		</NavBtnSignIn>
        <NavBtnSignUp>
		<NavBtnLinkSignUp to='/registrate'>Regístrate</NavBtnLinkSignUp>
		</NavBtnSignUp>
        </NavBtns>
	</Nav>
	</>
);
};

export default Navbar;
