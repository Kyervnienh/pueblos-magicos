import React from 'react';
import { FaTimes } from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import './index.scss';

const Sidebar = ({isOpen, toggle}) => {
    if(isOpen){
        return (
            <>
                <aside className={isOpen ? "SidebarContainerClosed": null}>
                    <div className="Icon" onClick={toggle}>
                        <FaTimes className="CloseIcon"></FaTimes>
                    </div>
                    <div className="SidebarWrapper">
                        <ul className="SidebarMenu">
                            <LinkS className="SidebarLink" to="/pueblosmagicos">
                                Pueblos Mágicos
                            </LinkS>
                            <LinkS className="SidebarLink" to="/pricing">
                                Pricing
                            </LinkS>
                            <LinkS className="SidebarLink" to="/comunidad">
                                Comunidad
                            </LinkS>
                            <LinkS className="SidebarLink" to="/soporte">
                                Soporte
                            </LinkS>
                        </ul>
                        <div className="SideBtnWrap">
                            <LinkR className="SidebarRouteLogIn" to="/iniciarsesion">Iniciar Sesión</LinkR>
                        </div>
                        <div className="SideBtnWrap">
                        <LinkR className="SidebarRouteSignUp" to="registrate">Regístrate</LinkR>
                        </div>
                    </div>
    
                </aside>
            </>
        )
    }
    return null;
}

export default Sidebar
