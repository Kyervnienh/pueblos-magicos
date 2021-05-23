import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./index.scss";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Sidebar = ({ isOpen, toggle, logOut }) => {
  const isAdminString = cookies.get("isAdmin");
  const isAdmin = isAdminString === "true" ? true : false;
  if (isOpen) {
    return (
      <>
        <aside className={isOpen ? "SidebarContainerClosed" : null}>
          <Container>
            <div className="Icon" onClick={toggle}>
              <FaTimes className="CloseIcon"></FaTimes>
            </div>
            <div className="SidebarWrapper">
              <ul className="SidebarMenu">
                <Link className="SidebarLink" to="/pueblosmagicos">
                  Pueblos Mágicos
                </Link>
                {isAdmin ? (
                  <Link className="SidebarLink" to="/dashboard">
                    Dashboard
                  </Link>
                ) : null}
                <Link className="SidebarLink" to="/comunidad">
                  Comunidad
                </Link>
                <Link className="SidebarLink" to="/soporte">
                  Soporte
                </Link>
              </ul>
              <div className="SideBtnWrap">
                <Link className="SidebarRouteLogIn" to="/iniciarsesion">
                  Iniciar Sesión
                </Link>
              </div>
              <div className="SideBtnWrap">
                <Link className="SidebarRouteSignUp" to="registrate">
                  Regístrate
                </Link>
              </div>
              <div className="SideBtnWrap">
                <Button className="LogOutButton" onClick={logOut}>
                  Cerrar Sesión
                </Button>
              </div>
            </div>
          </Container>
        </aside>
      </>
    );
  }
  return null;
};

Sidebar.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
