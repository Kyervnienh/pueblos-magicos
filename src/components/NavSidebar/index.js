import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import NavbarMenu from '../../components/Menu';

const NavSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <NavbarMenu toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </>
    )
}

export default NavSidebar;
