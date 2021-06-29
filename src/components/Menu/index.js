import React, { useState, useEffect } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./index.scss";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const baseURL = "http://localhost:8080/uploads";

const NavbarMenu = ({ toggle, logOut, hero }) => {
  const name = cookies.get("name");
  const isAdminString = cookies.get("isAdmin");
  const imgPath = cookies.get("image");
  const isAdmin = isAdminString === "true" ? true : false;
  const [isLogged, setisLogged] = useState(false);

  useEffect(() => {
    if (cookies.get("username")) {
      setisLogged(true);
    } else {
      setisLogged(false);
    }
  }, []);
  return isLogged ? (
    <>
      <header
        className="header"
        style={{
          backgroundImage: `url(${hero?.img})`,
        }}
      >
        <div className="background-overlay">
          <Navbar>
            <Link className="NavLogoSignUp" to="/">
              TURI
            </Link>
            <FaBars className="Bars" onClick={toggle}></FaBars>
            <div className="NavMenu">
              <Nav.Link className="NavLink" href="/pueblosmagicos">
                Pueblos Mágicos
              </Nav.Link>
              {isAdmin ? (
                <Nav.Link className="NavLink" href="/dashboard">
                  Dashboard
                </Nav.Link>
              ) : null}
              {/* <Nav.Link className="NavLink" href="/mapa">Mapa</Nav.Link> */}
              <Nav.Link className="NavLink" href="/comunidad">
                Comunidad
              </Nav.Link>
              <Nav.Link className="NavLink" href="/sobreNosotros">
                Sobre Nosotros
              </Nav.Link>
            </div>
            <nav className="NavBtns">
              <div className="UserCircle">
                <img
                  src={`${baseURL}/${imgPath.substring(15, imgPath.length)}`}
                  width="50%"
                />
              </div>
              <div className="LogOutBtn">
                <DropdownButton
                  className="WelcomeButton"
                  variant="outline-secondary"
                  title={name}
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="/perfil">
                      Mi perfil
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>Cerrar Sesión</Dropdown.Item>
                </DropdownButton>
              </div>
            </nav>
          </Navbar>
          <div className="container h-100">
            <div className="text-center justify-content-center align-items-center d-flex h-75">
              <div>
                <h1 className="font-hero-title">
                  {hero?.titleP1 || hero?.name}{" "}
                  <span className="font-hero-title-y">{  hero?.titleP2.substring(0,15) === "public\\uploads\\" ?  <img src={`${baseURL}/${hero?.titleP2.substring(15,hero?.titleP2.length)}`} /> : hero?.titleP2  }</span>
                </h1>
                <h3 className="font-hero-h3">
                  {hero?.subtitle || hero?.infoState}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  ) : (
    <>
      <header
        className="header"
        style={{
          backgroundImage: `url(${hero?.img})`,
        }}
      >
        <div className="background-overlay">
          <Navbar bg="dark">
            <Link className="NavLogoSignUp" to="/">
              TURI
            </Link>
            <FaBars className="Bars" onClick={toggle}></FaBars>
            <div className="NavMenu">
              <Nav.Link className="NavLink" href="/pueblosmagicos">
                Pueblos Mágicos
              </Nav.Link>
              {/* <Nav.Link className="NavLink" href="/mapa">Mapa</Nav.Link> */}
              <Nav.Link className="NavLink" href="/comunidad">
                Comunidad
              </Nav.Link>
              <Nav.Link className="NavLink" href="/sobreNosotros">
                Sobre Nosotros
              </Nav.Link>
            </div>
            <nav className="NavBtns">
              <nav className="NavBtnLogIn">
                <Link className="NavBtnLinkLogIn" to="/iniciarsesion">
                  Iniciar Sesion
                </Link>
              </nav>
              <nav className="NavBtnSignUp">
                <Link className="NavBtnLinkSignUp" to="/registrate">
                  Regístrate
                </Link>
              </nav>
            </nav>
          </Navbar>
          <div className="container h-100">
            <div className="text-center justify-content-center align-items-center d-flex h-75">
              <div>
                <h1 className="font-hero-title">
                  {hero?.titleP1 || hero?.name}{" "}
                  <span className="font-hero-title-y">{hero?.titleP2}</span>
                </h1>
                <h3 className="font-hero-h3">
                  {hero?.subtitle || hero?.infoState}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarMenu;
