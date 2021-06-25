import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import NavbarMenu from '../../components/Menu';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const NavSidebar = ({bgImage, titleP1, titleP2 , subtitle}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    cookies.remove('id', { path: '/' });
    cookies.remove('email', { path: '/' });
    cookies.remove('isLogged', { path: '/' });
    cookies.remove('name', { path: '/' });
    cookies.remove('username', { path: '/' });
    cookies.remove('isAdmin', { path: '/' });
    cookies.remove('image', { path: '/' });
    window.location.href = './';
  };

  return (
    <>
      <NavbarMenu toggle={toggle} logOut={logOut} bgImage={bgImage} titleP1={titleP1} titleP2={titleP2} subtitle={subtitle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} logOut={logOut} />
    </>
  );
};

export default NavSidebar;
