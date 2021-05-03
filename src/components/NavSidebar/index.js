import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import NavbarMenu from '../../components/Menu';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const NavSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const logOut = () => {
        cookies.remove('id', {path:"/"});
        cookies.remove('email', {path:"/"});
        cookies.remove('isLogged', {path:"/"});
        cookies.remove('name', {path:"/"});
        cookies.remove('username', {path:"/"});
        window.location.href = "./";
    };

    return (
        <>
            <NavbarMenu toggle={toggle} logOut={logOut} />
            <Sidebar isOpen={isOpen} toggle={toggle} logOut={logOut} />
        </>
    )
}

export default NavSidebar;
