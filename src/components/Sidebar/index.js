import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRouteSignIn, SidebarRouteSignUp } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="pueblosmagicos" onClick={toggle}>
                        Pueblos Magicos
                    </SidebarLink>
                    <SidebarLink to="pricing" onClick={toggle}>
                        Pricing
                    </SidebarLink>
                    <SidebarLink to="comunidad" onClick={toggle}>
                        Comunidad
                    </SidebarLink>
                    <SidebarLink to="soporte" onClick={toggle}>
                        Soporte
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouteSignIn to="iniciarsesion">Iniciar sesión</SidebarRouteSignIn>
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRouteSignUp to="registrate">Regístrate</SidebarRouteSignUp>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
