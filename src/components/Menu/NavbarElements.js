import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#fff': 'transparent')};
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(Link)`
color: #FFBF69;
justify-self: flex-start;
cursor: pointer;
font-size: 3.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;

export const NavLink = styled(LinkS)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 791px) {
	display: none;
}
`;

export const NavBtns = styled.nav`
display: flex;
flex-direction: row; 
`;

export const NavBtnSignIn = styled.nav`
display: flex;
align-items: center;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLinkSignIn = styled(Link)`
border-radius: 30px;
background: #ffff;
padding: 10px 22px;
text-align: center;
color: #000000;
outline: none;
border: 2px solid #808080;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #808080;
	color: #ffff;
}
`;

export const NavBtnSignUp = styled.nav`
display: flex;
align-items: center;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLinkSignUp = styled(Link)`
border-radius: 30px;
background: #808080;
padding: 12px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
