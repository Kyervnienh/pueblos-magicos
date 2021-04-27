import React from 'react';
import './index.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () =>
        <Container fluid className='footer'>
            <Row>
                <Col>
                    <i className="fa fa-facebook icon" aria-hidden="true"></i>
                    <i className="fa fa-twitter icon"></i>
                    <i className="fa fa-instagram icon" aria-hidden="true"></i>
                </Col>
            </Row>
            
            <Row>
                <Col>
                <p className='copy'>© Turi, 2021. Hecho con  <span> ❤ </span>  para el Mundo</p>
                </Col>
            </Row>
        </Container>

export default Footer;