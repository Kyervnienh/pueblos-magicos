import React from "react";
import "./index.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => (
  <Container fluid className="footer">
    <Row>
      <Col>
        <a href="https://www.facebook.com/profile.php?id=100069481071211" target="_blank">
          <i className="fa fa-facebook icon" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/MagicosTuri" target="_blank">
          <i className="fa fa-twitter icon"></i>
        </a>
        <a href="https://www.instagram.com/turipueblosmagicos/?hl=es-la" target="_blank">
          <i className="fa fa-instagram icon" aria-hidden="true"></i>
        </a>
      </Col>
    </Row>

    <Row>
      <Col>
        <p className="copy">
          © Turi, 2021. Hecho con <span> ❤ </span> para el Mundo
        </p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
